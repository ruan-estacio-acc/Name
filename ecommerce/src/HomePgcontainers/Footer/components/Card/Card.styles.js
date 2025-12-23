import styled from 'styled-components';

export const CardsGrid = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    align-items: stretch;
    gap: clamp(10px, 10%, 113.5px);
    flex-wrap: nowrap;
    background-color: #000;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr; /* exemplo */
    & > *:nth-child(1) { grid-column: 1 / -1; }
    & > *:nth-child(2) { grid-column: 1 / 2; }
    & > *:nth-child(3) { grid-column: 2 / 3; }
    & > *:nth-child(4) { grid-column: 1 / 2; }
    & > *:nth-child(5) { grid-column: 2 / 3; }
  }
`;

export const CardContainer = styled.div`
    background-color: #ff0000ff;
    border-radius: 16px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0;
    min-height: 160px;
    height: auto;
    flex: 1 1 0;
    height: auto;
`;

export const WideCardContainer = styled(CardContainer)`
    margin-right: 48px;
    flex: 0 0 25%;
    max-width: 100%;
    background-color: green;

    @media (max-width: 768px) {
        margin: 0;
    }
`;

export const CardTitle = styled.h2`
    margin: 0;
    flex-shrink: 0;
    ${props => props.$wide ? `
        color: #000;
        leading-trim: both;
        text-edge: cap;
        font-family: "Integral CF";
        font-size: 33.455px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    ` : `
        color: #000;
        font-family: "Satoshi";
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 3px;
        text-transform: uppercase;
    `}
`;

export const CardText = styled.p`
    margin: 0;
    ${props => props.$wide ? `
        color: rgba(0, 0, 0, 0.60);
        font-family: "Satoshi";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        white-space: no-wrap;
    ` : `
        color: rgba(0, 0, 0, 0.60);
        font-family: "Satoshi";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        white-space: no-wrap;
    `}
`;

export const SocialRow = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 0;
`;

export const SocialIcon = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #141718;
    color: #ffffff;
    display: grid;
    place-items: center;
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
`;
