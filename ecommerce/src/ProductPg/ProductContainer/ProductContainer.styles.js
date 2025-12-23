import styled from 'styled-components';

export const ProductContainerGlobal = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: row;
    background-color: #000
`

export const LeftContainer = styled.div`
    width: 50%;
    min-height: 530px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: black;
`;

export const RightContainer = styled.aside`
    width: 50%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: blue;
`;

export const LeftContainerInner = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(3, 1fr);  
    width: 100%;
    height: 100%;
    gap: 1rem;

    & > :first-child,
    & > :nth-child(2),
    & > :nth-child(3) {
        grid-column: 1 / 2;  /* pequenas à esquerda */
        background-color: lightblue; /* debug */
    }

    & > :nth-child(1) { grid-row: 1 / 2; }
    & > :nth-child(2) { grid-row: 2 / 3; }
    & > :nth-child(3) { grid-row: 3 / 4; }

    & > :nth-child(4) {
        grid-column: 2 / 3;  
        grid-row: 1 / 4;      
        background-color: yellow; 
}
`

export const ImgContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: green;
`

export const RightContainerInner = styled.div`
    width: 100%;
    height: 100%;
`

export const ProductDetails = styled.p`
    font-size: 16px;
    background-color: white;
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    background-color: #fff;
`