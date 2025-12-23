import { useMemo, useState } from 'react';
import { ReviewBackground, ReviewContainer, ReviewFullBleedRow, ReviewHeaderWrapper, ReviewOuterCard, ReviewWrapper, ReviewHeader, ReviewTitle, ReviewGrid, ReviewViewport, ReviewNav, ReviewNavButton } from './ReviewSection.styles';
import { ReviewCard } from './components/ReviewCard/ReviewCard';
import arrowLeft from './components/ReviewCard/assets/arrow-left.svg';
import arrowRight from './components/ReviewCard/assets/arrow-right.svg';

export const ReviewSection = () => {
    const reviews = useMemo(() => ([
        {
            title: "Sarah M.",
            text: "I'm blown away by the quality and style of the clothes I received. Everything fits perfectly and looks amazing.",
            rating: 5,
        },
        {
            title: "Alex K.",
            text: "Fast delivery and great customer service. The pieces feel premium and match the photos.",
            rating: 5,
        },
        {
            title: "James L.",
            text: "Excellent selection and the sizing guide helped a lot. Will definitely buy again.",
            rating: 5,
        },
        {
            title: "Emily R.",
            text: "Loved the design and fabric. The package arrived earlier than expected.",
            rating: 5,
        },
        {
            title: "Daniel P.",
            text: "Great experience overall. Clean UI, easy checkout, and the product quality is on point.",
            rating: 5,
        },
        {
            title: "Olivia S.",
            text: "Amazing fit and fabric — I get compliments every time I wear it.",
            rating: 5,
        },
        {
            title: "Mark T.",
            text: "Superb customer service and fast shipping. The clothing quality exceeded expectations.",
            rating: 5,
        },
        {
            title: "Sofia G.",
            text: "The styling is modern and practical. Great value for the price.",
            rating: 5,
        },
    ]), []);

    const total = reviews.length;

    const [centerIndex, setCenterIndex] = useState(0); // começa no primeiro card

    const mod = (n, m) => ((n % m) + m) % m;
    // Render 5 cards inline to dar impressão de loop: antepenúltimo, penúltimo, atual, próximo, próximo do próximo
    const visibleIndices = [
        mod(centerIndex - 2, total), // antepenúltimo
        mod(centerIndex - 1, total), // penúltimo (vira “antes do primeiro” visualmente)
        mod(centerIndex, total),     // atual (primeiro visual)
        mod(centerIndex + 1, total), // segundo
        mod(centerIndex + 2, total), // terceiro
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
                        title={reviews[visibleIndices[0]].title}
                        text={reviews[visibleIndices[0]].text}
                        rating={reviews[visibleIndices[0]].rating}
                    />
                </ReviewOuterCard>

                <ReviewOuterCard data-side="right" aria-hidden="true">
                    <ReviewCard
                        title={reviews[visibleIndices[4]].title}
                        text={reviews[visibleIndices[4]].text}
                        rating={reviews[visibleIndices[4]].rating}
                    />
                </ReviewOuterCard>

                {/* Inner wrapper: ONLY the 3 central cards live inside ReviewWrapper */}
                <ReviewWrapper>
                    <ReviewViewport>
                        <ReviewGrid>
                            {[visibleIndices[1], visibleIndices[2], visibleIndices[3]].map((idx) => {
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