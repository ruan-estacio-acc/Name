import styled from 'styled-components';

export const IconWrapper = styled.div`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    min-width: 24px;
    display: none;
    align-items: center;
    justify-content: center;
   
    margin: 0;
    padding: 0;

    img {
        display: block;
        width: 100%;
        height: auto;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`

