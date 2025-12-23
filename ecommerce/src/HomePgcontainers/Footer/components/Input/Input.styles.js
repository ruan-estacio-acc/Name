import styled from 'styled-components';

export const InputWrapper = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 420px;
    background: #FFF;
    border-radius: 62px;
    padding: 10px 16px;
    box-sizing: border-box;
`

export const InputIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 12px;
    flex: 0 0 auto;
`

export const InputField = styled.input`
    border: none;
    outline: none;
    flex: 1 1 auto;
    font-family: Satoshi;
    font-size: 14px;
    background: transparent;
    &::placeholder { color: rgba(0,0,0,0.4); }
`;