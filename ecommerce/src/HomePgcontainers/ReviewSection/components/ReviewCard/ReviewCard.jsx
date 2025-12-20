import star from "../../../NewArrivals/components/ProductCard/components/assets/star.svg";
import {
    ReviewCardContainer,
    ReviewCardContent,
    ReviewCardText,
    ReviewCardTitle,
    ReviewStars,
    ReviewStarIcon,
    ReviewCardHeader,
    ReviewCardTextWrapper,
} from "./ReviewCard.styles";

export const ReviewCard = ({ title = "Customer", text = "", rating = 5 }) => {
    const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));

    return (
        <ReviewCardContainer>
            <ReviewCardContent>
                <ReviewCardHeader>
                    <ReviewStars>
                        {Array.from({ length: safeRating }).map((_, index) => (
                            <ReviewStarIcon key={index} src={star} alt="star" />
                        ))}
                    </ReviewStars>
                    <ReviewCardTitle>{title}</ReviewCardTitle>
                </ReviewCardHeader>
                <ReviewCardTextWrapper>
                    <ReviewCardText>{text}</ReviewCardText>
                </ReviewCardTextWrapper>
            </ReviewCardContent>
        </ReviewCardContainer>
    );
};