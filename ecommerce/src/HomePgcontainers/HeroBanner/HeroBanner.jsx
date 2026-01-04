import { LeftContainer, RightContainer, HeroBannerWrapper, LeftContainerContent, RightContainerContent, HeroBannerBackground, CTAButton, HeroBannerContent, HeroMessage, SubMessage, HeroGrid } from './HeroBanner.styles';
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
                            <HeroGrid>
                                <CTAButton>Shop Now</CTAButton>
                            </HeroGrid>
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