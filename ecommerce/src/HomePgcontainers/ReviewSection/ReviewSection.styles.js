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
    overflow-x: hidden;
`

export const ReviewHeaderWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    padding: 0 clamp(24px, 4vw, 96px);
    box-sizing: border-box;
`

export const ReviewFullBleedRow = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    padding-bottom: 60px;

    --review-gap: 20px;
    --pad-inline: clamp(24px, 4vw, 96px);
    --wrapper-max: min(1440px, 100vw);
    --inner-width: calc(var(--wrapper-max) - (var(--pad-inline) * 2));
    --review-card-width: calc((var(--inner-width) - (var(--review-gap) * 2)) / 3);
`

export const ReviewWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    padding-inline: var(--pad-inline, clamp(24px, 4vw, 96px));
    box-sizing: border-box;
    background-color: #fff;
    z-index: 2;
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

    color: #a71212ff;
    font-family: "Integral CF";
    font-size: clamp(28px, 5vw, 48px);
    font-style: normal;
    font-weight: 700;
    line-height: 1.1;
`
export const ReviewGrid = styled.div`
    display: flex;
    gap: var(--review-gap, 20px);
    align-items: stretch;
    flex-wrap: nowrap;
    justify-content: center;
    width: 100%;
`

export const ReviewViewport = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    overflow: visible;
`

export const ReviewOuterCard = styled.div`
    position: absolute;
    top: 0;
    /* keep outer cards above ReviewWrapper so their inner border isn't covered */
    z-index: 3;
    pointer-events: none;

    &[data-side='left'] {
        left: calc(50% - (var(--inner-width) / 2) - var(--review-gap) - var(--review-card-width));
    }

    &[data-side='right'] {
        left: calc(50% + (var(--inner-width) / 2) + var(--review-gap));
    }
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