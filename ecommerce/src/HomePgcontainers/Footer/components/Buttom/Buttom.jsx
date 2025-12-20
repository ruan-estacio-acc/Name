import React from 'react';
import { ButtomWrapper } from './Buttom.styles';

export const Buttom = ({ children, onClick, type = 'button', ...props }) => {
  return (
    <ButtomWrapper type={type} onClick={onClick} {...props}>
      {children}
    </ButtomWrapper>
  );
};
