import styled from "styled-components";

export const BarContainer = styled.div`
    display: flex;
    width: 100%;
    height: 74px;
    background-color: transparent;
    
`

export const BarDiv = styled.div`
    width: 100%;
    height: auto;
    background-color: #F2F0F1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
`

export const ValueMessage = styled.h2`
    margin: 0;
    padding: 0;
    color: #000;
    font-family: Satoshi;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    white-space: nowrap;
    display: block;
    
    @media (max-width: 768px) {
        font-size: clamp(12px, 6vw, 32px);
        line-height: 1.1;
        white-space: normal;
    }
`
export const ValueSubMessage = styled.p`
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.60);
    font-family: Satoshi;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; 
    white-space: nowrap;
    display: block;

    @media (max-width: 768px) {
        font-size: clamp(12px, 6vw, 12px);
        line-height: 1.1;
        white-space: normal;
        text-align: center;
    }
`

export const Divider = styled.div`
    width: 1px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.10);
    z-index: 1;
    border-radius: 64px;
`