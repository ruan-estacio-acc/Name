import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    height: auto;
    background-color: #fff;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    padding-inline: clamp(24px, 4vw, 96px);
    box-sizing: border-box;
    gap: 24px;

    @media (max-width: 768px) {
        gap: 30px;
        justify-content: flex-start;
    }
`

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    background-color: #fff;   
    height: 96px;
    justify-content: center;
    box-sizing: border-box;
`