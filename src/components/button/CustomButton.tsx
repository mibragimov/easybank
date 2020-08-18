import React from 'react';
import { StyledButton } from './CustomButton.style';

interface Props {
  children: React.ReactNode;
}

function CustomButton({ children }: Props) {
  return <StyledButton>{children}</StyledButton>;
}

export { CustomButton };
