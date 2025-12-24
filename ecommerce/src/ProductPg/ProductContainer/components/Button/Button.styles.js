import styled from 'styled-components';

export const ButtonContainer = styled.button`
    width: ${props => props.width || 'auto'};
    display: flex;
    padding: 12px 24px;
    background-color: #F0F0F0;
    border-radius: 62px;
    align-items: center;
    justify-content: center;
    
`

export const ButtonContainer2 = styled.button`
    width: 30%;
    display: flex;
    padding: 16px 20px;
    background-color: #F0F0F0;
    border-radius: 62px;
    align-items: center;
    justify-content: center;
`

export const ButtonText = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`