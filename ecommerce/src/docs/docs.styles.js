import styled from 'styled-components';

export const SquareOne = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    background-color: red;
`

export const SquareTwo = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 150px;
  height: 150px;
  background-color: blue;
  transform: translate(-50%, -50%);
`