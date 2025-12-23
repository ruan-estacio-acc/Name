import styled from 'styled-components';
import models from './assets/models.jpg';


export const HeroBannerBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #F2F0F1;
    `

export const HeroBannerWrapper = styled.div`
    position: relative;
    min-height: 663px;
    height: auto;
    display: flex;
    justify-content: center;
    z-index: 1;
    background-color: #F2F0F1;
    flex-wrap: wrap;
    

    @media (max-width: 768px) {
        display: inline-flex;
        width: auto;
        
    }

`

export const HeroBannerContent = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    z-index: 1;
    flex-wrap: wrap;
    
    box-sizing: border-box;

    @media (max-width: 1365px) {
        display:flex;
        width: 70%;
        max-width: none;
        margin: 0 auto;
        justify-content: center;
    }

    @media (max-width: 768px) {
        display:flex;
        width: 100%;
        max-width: none;
        margin: 0 auto;
        padding-inline: clamp(24px, 4vw, 96px);
        justify-content: center;
    }
` 

export const RightContainer = styled.div`
    display: flex;
    flex: 1;
    background-color: #F2F0F1;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    @media (max-width: 1365px) {
        display: none;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

export const RightContainerContent = styled.div`
    background-image: url(${models});
    background-size: auto clamp(120%, 150%, 150%);
    background-repeat: no-repeat;
    background-position:  30%  -10%;
    
    
    aspect-ratio: 16/9;
    width: 100%;
    margin: 0;
    padding: 0;
    
`

export const LeftContainer = styled.div`
    display: flex;
    flex: 1;
    background-color: #000000ff;
    z-index: 2;
    margin: 0;
    padding: 0;
    
    
    @media (max-width: 1365px) {
        display: flex;
        justify-self: center;
        align-self: center;
        width: 100%;
        justify-content: center;
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        display: flex;
        justify-self: center;
        align-self: center;
        width: 100%;
        justify-content: center;
        margin: 0 auto;
    }
    
`

export const LeftContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;    
    background-color: #c02b75ff;
    width: 100%;
    padding-inline: clamp(24px, 4vw, 96px);
    box-sizing: border-box;
   
    @media (max-width: 1365px) {
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 768px) {    
        justify-content: center;
        align-items: center;  
    }
    
`

// LEFT CONTAINER CONTENT
export const HeroMessage = styled.h1`
    max-width: 577px;
    text-align: flex-start;
    color: #000;
    leading-trim: both;
    text-edge: cap;
    font-size: clamp(38px, 3vw, 64px);
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    margin: 0;
    padding: 0;

    @media (max-width: 1365px) {
        text-align: center;
        line-height: 48px;
        
    }

    @media (max-width: 768px) {
        text-align: center;
    }
`

export const SubMessage = styled.p`
    color: rgba(0, 0, 0, 0.60);
    leading-trim: both;
    text-edge: cap;
    font-family: Satoshi;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; 
    background-color: #F2F0F1;

`

export const CTAButton = styled.button`
    color: #FFF;
    display: flex;
    width: 210px;
    height: 52px;
    padding: 16px 54px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 62px;
    background: #000;
    border: none;
    margin-bottom: 10px;

    @media (max-width: 1365px) {
        width: 50%;    
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

