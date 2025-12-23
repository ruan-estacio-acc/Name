import styled from 'styled-components';

export const BodyContainer = styled.div`
    
    background-color: purple;
    
    margin-left: var(--sidebar-width);
    padding-top: var(--topbar-height);

    min-height: calc(100vh - var(--topbar-height));   
`

export const BodyContentContainer = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0px 24px;
    background-color: white;
    box-sizing: border-box;
    overflow-x: hidden;

    & > * {
        max-width: 100%;
        box-sizing: border-box;
    }

    img, svg {
        max-width: 100%;
        height: auto;
    }
`