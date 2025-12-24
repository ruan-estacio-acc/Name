import { WriteReviewContainer, Button } from "./WriteReviewContainer.styles";
import layoutIcon from "./assets/layout.svg";
import checkIcon from "./assets/check.svg";

export const WriteReview = () => {
    return (
        <WriteReviewContainer>
            <Button>
                <img src={layoutIcon} alt="layout" />
            </Button>

            <Button>
                Latest
                <img src={checkIcon} alt="check" />
            </Button>

            <Button>
                Write a Review
            </Button>
        </WriteReviewContainer>
    )
}