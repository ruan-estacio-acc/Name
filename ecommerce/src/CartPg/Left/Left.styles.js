import styled from "styled-components";

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.width || 'auto'};
    height: auto;
    background-color: yellow;
    padding: 20px 24px;
`