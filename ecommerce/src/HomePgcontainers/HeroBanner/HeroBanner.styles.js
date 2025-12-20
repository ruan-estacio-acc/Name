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
    width: 100%;
    min-height: 663px;
    height: auto;
    display: flex;
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
    display: flex;
    width: 100%;
    z-index: 1;
    background-color: #F2F0F1;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        width: auto;
        max-width: none;
        margin: 0;
    }
` 

export const RightContainer = styled.div`
    display: flex;
    flex: 1;
    background-color: #F2F0F1;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
        display: none;
    }
`

export const RightContainerContent = styled.div`
    background-image: url(${models});
    background-size: auto 150%;
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
    
    @media (max-width: 768px) {
        flex: none;
        width: 100%;
        justify-content: center;
        margin: 0 auto;
    }
    
`

export const LeftContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;    
    background-color: #F2F0F1;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    

    @media (max-width: 768px) {
        
        justify-content: center;
        align-items: center;
        
        width: auto;
        
    }
    
`

// LEFT CONTAINER CONTENT
export const HeroMessage = styled.h1`
    width: 577px;
    text-align: center;
    color: #000;
    leading-trim: both;
    text-edge: cap;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    margin: 0 auto;
    padding: 0;

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
`

