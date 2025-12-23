import { BrowseBarBackground, BrowseBarContainer, BrowseBarInner, BrowseBarWrapper, BrowseBarTitle, CardWrapper } from './BrowseBar.styles';
import { ImgCard } from './components/ImgCard/ImgCard';

export const BrowseBar = () => {
    return (
        <BrowseBarContainer>
            <BrowseBarInner>
                <BrowseBarWrapper>

                <BrowseBarBackground />

                <BrowseBarTitle>BROWSE BY DRESS STYLE</BrowseBarTitle>
                <CardWrapper>
                    <ImgCard width="40%" src="casual" title="Casual" />
                    <ImgCard width="60%" src="formal" title="Formal" />
                </CardWrapper>

                <CardWrapper>
                    <ImgCard width="60%" src="gym" title="Gym" />
                    <ImgCard width="40%" src="party" title="Party" />
                </CardWrapper>

                </BrowseBarWrapper>
            </BrowseBarInner>
        </BrowseBarContainer>
    )
}