import { FooterBarContainer, FooterButtons } from "./FooterBar.styles";
import leftIcon from "./assets/left.svg";
import rightIcon from "./assets/right.svg";

export const Footer = () => {
    return (
        <FooterBarContainer>
            <FooterButtons>
                <img src={leftIcon} alt="left" />
                Previous
            </FooterButtons>

            <div>
                <FooterButtons>1</FooterButtons>
                <FooterButtons>2</FooterButtons>
                <FooterButtons>3</FooterButtons>
                <FooterButtons>...</FooterButtons>
                <FooterButtons>8</FooterButtons>
                <FooterButtons>9</FooterButtons>
                <FooterButtons>10</FooterButtons>
            </div>
            <FooterButtons>
                Next
                <img src={rightIcon} alt="right" />
            </FooterButtons>
            
        </FooterBarContainer>
        
    )
}