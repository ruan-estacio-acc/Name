import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100%;
    background-color: #fff;
    height: auto;
    position: relative;
    overflow: hidden;
    display: flex;
    z-index: 10000;
    flex-direction: column;
`

export const FooterCtaBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
    height: auto;

    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    
    z-index: 10002;
    
    padding: 36px clamp(24px, 4vw, 96px);
    background-color: rgba(2, 2, 2, 1);
    border-radius: 20px;
    box-sizing: border-box;


    @media (max-width: 768px) {
        flex-direction: column;
        gap: 24px;
    }
` 

export const FooterTitle = styled.h1`
    margin: 0;
    padding: 0;
    color: #ffffffff;
    font-family: "Integral CF";
    font-size: clamp(10px, 3vw, 45px);
    font-style: normal;
    font-weight: 700;
    line-height: 45px;
    width: 50%;
    max-width: 90%;

`;

export const FooterWrapper = styled.div`
    width: 100%;
    background-color: #f2f0f1;
    height: auto;
    position: relative;
    z-index: 8;
    padding-bottom: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`

export const FooterForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
    width: 50%;
    
    box-sizing: border-box;
    background-color: #000;
`;


export const FooterContentContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    background-color: #b62e2eff;
    z-index: 1;
`

export const CtaSpacer = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: block;

`;

export const GlobalSpacer = styled.div`
    width: 100%;
    height: var(--cta-half, 0px);
    box-sizing: border-box;
    z-index: 0;
    background: transparent;
    display: block;
    pointer-events: none;
`;