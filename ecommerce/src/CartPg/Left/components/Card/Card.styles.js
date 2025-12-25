import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    border: 3px solid #000000ff;
    justify-content: space-between;
`

export const CardImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 124px;
    height: 124px;
    background-color: #F0EEED;
    border-radius: 8.658px;
`

export const CardDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    justify-content: space-between;
`
