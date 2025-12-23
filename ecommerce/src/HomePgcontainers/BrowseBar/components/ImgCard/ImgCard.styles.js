import styled from "styled-components";


export const CardContainer = styled.div`
    background-image: url(${({$background}) => $background});
    background-size: cover;
    background-position: center;

    width: ${({$width}) => $width || '100%'};
    height: 100%;
    position: relative;
    background-color: #f5f5f5;
    overflow: hidden;
    display: flex;
    border-radius: 20px;

    @media (max-width: 768px) {
        width: 100% !important;
    }
`

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
`

export const CardTitle = styled.h2`
    position: absolute;
    top: clamp(8px, 1.2vw, 16px);
    left: clamp(8px, 1.2vw, 16px);
    transform: none;
    margin: 0;
    padding: clamp(4px, 0.6vw, 8px) clamp(6px, 1vw, 12px);
    color: #000;
    font-family: Satoshi;
    font-size: clamp(18px, 2.6vw, 36px);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: rgba(255,255,255,0.75);
    border-radius: 8px;
`   