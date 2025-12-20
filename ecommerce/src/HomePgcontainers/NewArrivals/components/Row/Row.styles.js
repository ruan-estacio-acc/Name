import styled from "styled-components";

export const RowContainer = styled.div`
    width: 100%;
    height: 0;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
    margin: 0;
    margin-top: ${({ paddingTop }) => paddingTop || '0px'};
    margin-bottom: ${({ paddingBottom }) => paddingBottom || '0px'};
    position: relative;
    z-index: 0;
`;