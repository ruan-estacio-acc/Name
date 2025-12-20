import styled from "styled-components";

export const DivContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 38px;
    justify-content: center;
    align-items: center;
    background-color: #000;
    position: sticky;
    top: 0;
    left: 0;
    padding: 0 16px;
    box-sizing: border-box;
`;

export const PromoBarInner = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #000;
`;

export const InnerMeasures = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    text-align: center;
`;

export const XIconContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);

`;

export const DiscountText = styled.p`
    color: #FFF;
    font-family: Satoshi;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: ${({ variant }) => (variant === 'underline' ? 'underline' : 'none')};
    margin: 0;
`;
