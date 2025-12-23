import { InputWrapper, InputIcon, InputField } from './Input.styles.js';
import MailIcon from './assets/mail.svg';

export const Input = () => {
    return (
        <InputWrapper>
            <InputIcon src={MailIcon} alt="mail" />
            <InputField placeholder="Enter your email address" />
        </InputWrapper>
    )
}