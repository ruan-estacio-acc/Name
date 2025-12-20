import { LeftContainer, RightContainer, HeroBannerWrapper, LeftContainerContent, RightContainerContent, HeroBannerBackground, CTAButton, HeroBannerContent, HeroMessage, SubMessage} from './HeroBanner.styles';
import { ValueBar } from './components/ValueBar/ValueBar.jsx';

export const HeroBanner = () => {
    return (
        <>  
            
                
                <HeroBannerWrapper>
                    <HeroBannerBackground />
                    <HeroBannerContent>

                    <LeftContainer>
                        <LeftContainerContent>
                            <HeroMessage>FIND CLOTHES THAT MATCHES YOUR STYLE</HeroMessage>
                            <SubMessage>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</SubMessage>
                            <CTAButton>Shop Now</CTAButton>
                            <ValueBar />
                        </LeftContainerContent >
                    </LeftContainer>
                    <RightContainer>
                        <RightContainerContent>
                            




                        </RightContainerContent>
                    </RightContainer>
                    
                    </HeroBannerContent>
                    
                </HeroBannerWrapper>
                
        </> 
    )
}