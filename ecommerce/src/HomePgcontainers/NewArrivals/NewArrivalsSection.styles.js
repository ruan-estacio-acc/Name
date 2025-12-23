import styled from "styled-components";

export const NewArrivalsBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: -1;
    
`

export const NewArrivalsContainer = styled.div`
    position: relative;
    width: 100%;
    background-color: #fff;
    padding-bottom: ${({$paddingBottomGlobal}) => $paddingBottomGlobal || "0px"};
`

export const NewArrivalsWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    background-color: #fff;
    padding-top: ${({$paddingTop}) => $paddingTop || '72px'};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline: clamp(24px, 4vw, 96px);
    box-sizing: border-box;


`

export const NewArrivalsTitle = styled.h1`
    color: #000;
    text-align: center;
    font-family: "Integral CF";
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 1;
    margin: 0;
    padding: 0;
`

export const NewArrivalsProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 colunas iguais */
    gap: 20px;
    width: 100%;
    margin-top: 55px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        wrap: nowrap;
    }
`

export const NewArrivalsButtonContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 36px;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`




