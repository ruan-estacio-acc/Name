import styled from 'styled-components';

export const GlobalMarginWrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-inline: clamp(24px, 4vw, 96px);
`