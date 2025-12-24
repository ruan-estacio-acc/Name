import { ReviewSectionContainer, CardsContainer } from "./ReviewSection.styles";
import { ReviewSectionHeader } from "./components/ReviewSectionHeader/ReviewSectionHeader.jsx";
import { TitleBar } from "./components/TitleBar/TitleBar.jsx";
import { ReviewCard } from "../../HomePgcontainers/ReviewSection/components/ReviewCard/ReviewCard.jsx";
import { reviews } from "../../data/reviews";
import { Button } from "../ProductContainer/components/Button/Button.jsx";

export const ReviewSection = () => {
    return (
        <ReviewSectionContainer>
            <ReviewSectionHeader />
            <TitleBar />
            
            <CardsContainer>
                {reviews.slice(0, 6).map((r, i) => (
                    <ReviewCard key={`${r.title}-${i}`} width="100%" title={r.title} text={r.text} rating={r.rating} />
                ))}
            </CardsContainer>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button title={"Load More Reviews"}></Button>
            </div>
        </ReviewSectionContainer>
    )

}