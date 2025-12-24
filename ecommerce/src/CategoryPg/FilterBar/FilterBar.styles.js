import styled from "styled-components";

export const FilterBarContainer = styled.aside`
    display: flex;
    width: 250px;
    height: auto;
    background-color: #fff;
    padding: 20px 24px;
    border: 3px solid #000;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
`
export const ButtonContainer = styled.button`
    width: ${props => props.width || 'auto'};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border-radius: 62px;
    font-size: 10px;
    border: none;
    color: ${props => props.color ? '#fff' : '#000'};
    background-color: ${props => props.backgroundColor ? '#000' : '#F5F5F5'};
`