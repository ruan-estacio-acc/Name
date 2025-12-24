import { FiltersContainer, FiltersTitle } from "./Filters.styles";
import { Row } from "../../../../HomePgcontainers/NewArrivals/components/Row/Row";
import layoutIcon from "../../../../ProductPg/ReviewSection/components/TitleBar/components/WriteReviewContainer/assets/layout.svg";
import chevronIcon from "./assets/chevron-right.svg";

export const Filters = ({ title, fontSize, iconType }) => {
    const src = iconType === 'chevron' ? chevronIcon : layoutIcon;

    return (
        <FiltersContainer> 
            <FiltersTitle fontSize={fontSize}>{title}</FiltersTitle>           
                <img src={src} alt={iconType} style={{ width: 20, height: 20 }} />           
        </FiltersContainer>
    )
}