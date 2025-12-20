import styled from "styled-components";

export const ReviewBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 0;
`

export const ReviewContainer = styled.div`
    position: relative;
    width: 100%;
    background-color: #fff;
`

export const ReviewWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    padding: 0 0 60px 0;
    box-sizing: border-box;
    background-color: #fff;


    display: grid;
    grid-template-rows: auto auto;
    row-gap: 40px;
`

export const ReviewHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    margin-top: 80px;
`

export const ReviewTitle = styled.h1`
    display: block;
    text-align: left;
    justify-self: start;
    margin: 0;
    padding: 0;

    color: #000;
    font-family: "Integral CF";
    font-size: clamp(28px, 5vw, 48px);
    font-style: normal;
    font-weight: 700;
    line-height: 1.1;
`
export const ReviewGrid = styled.div`
    display: flex;
    gap: 20px;
    align-items: stretch;
    flex-wrap: nowrap;
    justify-content: space-between;
`

export const ReviewViewport = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;

    --review-gap: 20px;
    --wrapper-max: min(1440px, calc(100vw - 32px));
    --review-card-width: calc((var(--wrapper-max) - (var(--review-gap) * 2)) / 3);
    max-width: min(1440px, calc(100vw - 32px));

    display: flex;
    justify-content: center;
    overflow: visible;

    padding: 0 0;
`

export const ReviewNav = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
    pointer-events: auto;
`

export const ReviewNavButton = styled.button`
    border: none;
    background: transparent;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    pointer-events: all;

    img {
        display: block;
        width: 19px;
        height: 16px;
    }
`