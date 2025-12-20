import styled from "styled-components";

export const IconDivContainer = styled.div`
    display: ${props => props.display || 'inline-flex'};
    gap: 14px;
    align-items: center;
    justify-content: flex-end;
    
    @media (max-width: 768px) {
        margin-left: auto;
    }

`

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    
`


export const SearchIconDisplay = styled.div`
    display: flex;

`
