import { useState, useEffect } from 'react';
import { ReviewBackground, ReviewContainer, ReviewFullBleedRow, ReviewHeaderWrapper, ReviewOuterCard, ReviewWrapper, ReviewHeader, ReviewTitle, ReviewGrid, ReviewViewport, ReviewNav, ReviewNavButton } from './ReviewSection.styles';
import { ReviewCard } from './components/ReviewCard/ReviewCard';
import arrowLeft from './components/ReviewCard/assets/arrow-left.svg';
import arrowRight from './components/ReviewCard/assets/arrow-right.svg';
import { reviews } from '../../data/reviews';

export const ReviewSection = () => {
    // reviews imported from src/data/reviews.js

    const total = reviews.length;

    const [centerIndex, setCenterIndex] = useState(0); // começa no primeiro card
    const [isNarrow, setIsNarrow] = useState(typeof window !== 'undefined' ? window.innerWidth <= 765 : false);

    useEffect(() => {
        const onResize = () => setIsNarrow(window.innerWidth <= 765);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const mod = (n, m) => ((n % m) + m) % m;
    // Render 5 indices to represent a sliding window around the center
    const visibleIndices = [
        mod(centerIndex - 2, total), // antepenúltimo
        mod(centerIndex - 1, total), // penúltimo
        mod(centerIndex, total),     // atual (central)
        mod(centerIndex + 1, total), // próximo
        mod(centerIndex + 2, total), // próximo do próximo
    ];

    const handlePrev = () => {
        setCenterIndex((c) => mod(c - 1, total));
    };

    const handleNext = () => {
        setCenterIndex((c) => mod(c + 1, total));
    };

    

    return (
        <ReviewContainer >
             <ReviewBackground />

            <ReviewHeaderWrapper>
                <ReviewHeader>
                    <ReviewTitle>OUR HAPPY CUSTOMERS</ReviewTitle>
                    <ReviewNav>
                        <ReviewNavButton type="button" onClick={handlePrev} aria-label="Previous reviews">
                            <img src={arrowLeft} alt="Previous" />
                        </ReviewNavButton>
                        <ReviewNavButton type="button" onClick={handleNext} aria-label="Next reviews">
                            <img src={arrowRight} alt="Next" />
                        </ReviewNavButton>
                    </ReviewNav>
                </ReviewHeader>
            </ReviewHeaderWrapper>

            <ReviewFullBleedRow>
                {/* Outer cards (full-bleed area) */}
                <ReviewOuterCard data-side="left" aria-hidden="true">
                    <ReviewCard
                        title={reviews[isNarrow ? visibleIndices[1] : visibleIndices[0]].title}
                        text={reviews[isNarrow ? visibleIndices[1] : visibleIndices[0]].text}
                        rating={reviews[isNarrow ? visibleIndices[1] : visibleIndices[0]].rating}
                    />
                </ReviewOuterCard>

                <ReviewOuterCard data-side="right" aria-hidden="true">
                    <ReviewCard
                        title={reviews[isNarrow ? visibleIndices[3] : visibleIndices[4]].title}
                        text={reviews[isNarrow ? visibleIndices[3] : visibleIndices[4]].text}
                        rating={reviews[isNarrow ? visibleIndices[3] : visibleIndices[4]].rating}
                    />
                </ReviewOuterCard>

                {/* Inner wrapper: ONLY the 3 central cards live inside ReviewWrapper */}
                <ReviewWrapper>
                    <ReviewViewport>
                        <ReviewGrid>
                            {(isNarrow ? [visibleIndices[2]] : [visibleIndices[1], visibleIndices[2], visibleIndices[3]]).map((idx) => {
                                const review = reviews[idx];
                                return (
                                    <ReviewCard
                                        key={`${review.title}-${idx}`}
                                        title={review.title}
                                        text={review.text}
                                        rating={review.rating}
                                    />
                                );
                            })}
                        </ReviewGrid>
                    </ReviewViewport>
                </ReviewWrapper>
            </ReviewFullBleedRow>
        </ReviewContainer>
    )
}