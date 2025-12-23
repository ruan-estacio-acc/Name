import styled from 'styled-components';

export const MenuWrapper = styled.div`
    display: inline-flex;
    gap: 24px;
    background-color: #fff;

    @media (max-width: 768px) {
        display: none;
    }
`

export const MenuItemContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    cursor: pointer;

    
`

export const MenuIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;


`

export const MenuText = styled.h2`
    margin: 0;
    padding: 0;
    color: #000;
    font-family: Satoshi;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;


`