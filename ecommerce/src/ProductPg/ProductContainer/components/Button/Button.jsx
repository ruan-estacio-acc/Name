import { ButtonContainer, ButtonContainer2, ButtonText } from "./Button.styles";
import minusIcon from "./assets/minus.svg";
import plusIcon from "./assets/plus.svg";

export const Button = ({title, width}) => {
    return <ButtonContainer width={width}>{title}</ButtonContainer>;
}

export const ButtonAdd = ({quantity}) => {
    return (
        <ButtonContainer2>
            <ButtonText>
                <img src={minusIcon} alt="minus" />
                <div>{quantity}</div>
                <img src={plusIcon} alt="plus" />
            </ButtonText>
        </ButtonContainer2>
    )

}