import styled from "styled-components";

export const BrowseBarBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    z-index: -1;
`

export const BrowseBarContainer = styled.div`
    display: flex;
    
    position: relative;
    width: 100%;
    background-color: #fff;
`

export const BrowseBarWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 1440px;
    min-height: 866px;
    width: 100%;
    background-color: #f0f0f0;

    display: grid;
    grid-template-rows: auto 290px 290px;
    grid-template-columns: 1fr;
    border-radius: 40px;
    padding: 65px;
    gap: 20px;

    @media (max-width: 768px) {
        grid-template-rows: auto 500px 500px;
    }
`

export const BrowseBarTitle = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0;
    padding: 0;
    color: #000;
    text-align: center;
    font-family: "Integral CF";
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 1;

    @media (max-width: 768px) {
        font-size: 32px;
    }
`

export const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #F2F0F1;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        
    }
`