import styled from 'styled-components';

export const RightContainer = styled.div`
    display: flex;
    width: ${props => props.width || 'auto'};
    height: auto;
    background-color: lightblue;
    flex-direction: column;
    padding: 20px 24px;
`