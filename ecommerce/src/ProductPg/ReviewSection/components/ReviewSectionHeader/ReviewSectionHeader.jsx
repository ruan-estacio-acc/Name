import { ReviewSectionNavWrapper, ReviewSectionButton } from "./ReviewSectionHeader.styles";

export const ReviewSectionHeader = () => {
    return (
        <ReviewSectionNavWrapper>
            <ReviewSectionButton>All Reviews</ReviewSectionButton>
            <ReviewSectionButton>Positive</ReviewSectionButton>
            <ReviewSectionButton>Negative</ReviewSectionButton>
        </ReviewSectionNavWrapper>

    )
}