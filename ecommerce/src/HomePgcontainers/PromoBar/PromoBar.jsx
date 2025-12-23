import { DivContainer, DiscountText, InnerMeasures, XIconContainer, PromoBarInner } from "./PromoBar.styles";
import icon from './assets/icon.svg';

export const PromoBar = ({ onClose }) => {
    return (
        <DivContainer>
            <PromoBarInner>
                    <InnerMeasures>
                        <DiscountText>Sign up and get 20% off to your first order.</DiscountText>
                        <DiscountText $variant="underline">Sign up now</DiscountText>
                    </InnerMeasures>
                    <XIconContainer type="button" aria-label="Close promotion bar" onClick={onClose}>
                        <img className="icon" src={icon} width={13.1} height={13.1} alt="close" />
                    </XIconContainer>
            </PromoBarInner>    
        </DivContainer>
    )
}