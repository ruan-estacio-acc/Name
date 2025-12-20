import styled from 'styled-components';


export const BrandBarWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 122px;
    height: auto;
`

export const BrandBarBackground = styled.div`
    width: 100%;
    position: absolute;
    inset: 0;
    background-color: #000;
    z-index: 0;
`

export const BrandBarContent = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 106px;
    align-items: center;
    position: relative;
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    min-height: 122px;
    background-color: black;
    z-index: 1;

    @media (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center; 
        gap: 24px;
        align-items: center;
    
    }
`

