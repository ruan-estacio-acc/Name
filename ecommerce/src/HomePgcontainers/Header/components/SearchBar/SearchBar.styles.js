import styled from "styled-components";

export const SearchBarContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 545px;
    height: 40px;

    @media (max-width: 768px) {
        display: none;
    }

`

export const SearchIconContainer = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
   
`

export const SearchInput = styled.input`
    width: 100%;
    padding: 12px 40px 12px 44px;
    flex: 1 0 0;
    background-color: #f0f0f0;
    border-radius: 62px;
    border: none;

    &::placeholder {
    color: rgba(0, 0, 0, 0.40);
    font-family: Satoshi;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.08);
    }
`

export const SearchIcon = styled.img`
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%) translateX(1px);
    width: 15px;
    height: 16px;
    margin-right: 12px;
    pointer-events: none;

`

export const QueryIconShow = styled.div`
    position: absolute;
    
    `




