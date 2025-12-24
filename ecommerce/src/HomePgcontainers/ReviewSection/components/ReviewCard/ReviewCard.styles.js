
import styled from 'styled-components';

const FALLBACK_CARD_WIDTH = 'calc(1400px / 3)';
const CARD_HEIGHT = '250px';

export const ReviewCardContainer = styled.div`
    width: ${props => props.width || ('var(--review-card-width, ' + FALLBACK_CARD_WIDTH + ')')};
    max-width: ${props => props.width || ('var(--review-card-width, ' + FALLBACK_CARD_WIDTH + ')')};
    min-width: ${props => props.width || ('var(--review-card-width, ' + FALLBACK_CARD_WIDTH + ')')};
    min-height: ${CARD_HEIGHT};
    height: ${CARD_HEIGHT};
    flex: 0 0 ${props => props.width || ('var(--review-card-width, ' + FALLBACK_CARD_WIDTH + ')')};
    flex-shrink: 0;
    display: flex;
    box-sizing: border-box;
    background-color: #f5f5f5;
    border-radius: 20px;
    padding: 32px 32px 32px 32px;
    justify-content: center;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.10);
`

export const ReviewCardContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
    box-sizing: border-box;
    background-color: #fff;
`

export const ReviewStars = styled.div`
    display: flex;
    gap: 6px;
    font-size: clamp(18px, 1.5vw, 38px);
    align-items: center;
`

export const ReviewStarIcon = styled.img`
    width: 1em;
    height: auto;
    display: block;
`

export const ReviewCardTitle = styled.h3`
    margin: 0;
    padding: 0;
    color: #000;
    font-family: Satoshi;
    font-size: clamp(18px, 1.5vw, 38px);
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media (max-width: 765px) {
        font-size: clamp(24px, 3vw, 32px);
    }
`

export const ReviewCardText = styled.p`
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.60);
    font-family: Satoshi;
    font-size: clamp(18px, 1vw, 24px);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background-color: #fff;

    @media (max-width: 1024px) {
        font-size: clamp(8px, 2vw, 18px);
    }
    
    @media (max-width: 765px) {
        font-size: clamp(18px, 3vw, 20px);
    }
`

export const ReviewCardHeader = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
`

export const ReviewCardTextWrapper = styled.div`
    display: flex;
    background-color: #fff;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    margin-top: 12px;
`