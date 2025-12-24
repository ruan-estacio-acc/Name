import { TitleBarContainer } from "./TitleBar.styles";
import { WriteReview } from "./components/WriteReviewContainer/WriteReviewContainer.jsx";

export const TitleBar = () => {
    return (
        <TitleBarContainer>
            <h1>Title Bar</h1>
            <WriteReview />
        </TitleBarContainer>
    )
}