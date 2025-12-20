import { IconWrapper } from './HamburguerIcon.styles';
import HamburgerSvg from './assets/hamburger.svg';

export const HamburguerIcon = () => {
    return (
        <IconWrapper>
            <img src={HamburgerSvg} alt="menu" />
        </IconWrapper>
    );
};

export default HamburguerIcon;
