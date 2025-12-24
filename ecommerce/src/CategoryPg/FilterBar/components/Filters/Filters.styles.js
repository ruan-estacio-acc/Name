import styled from "styled-components";

export const FiltersContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border: 3px solid #204e92ff;
    box-sizing: border-box;
`

export const FiltersTitle = styled.h3`
    margin: 0;
    padding: 0;
    font-size: ${props => props.fontSize || 'clamp(8px, 1.5vw, 12px)'};
`