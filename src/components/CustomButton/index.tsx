import { ReactNode, useEffect, useState } from 'react';

import { Container, Button } from './styles';

interface CustomButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: ReactNode;
  rest?: any;
}

export default function CustomButton({ children, ...rest }: CustomButton) {
  return (
    <Button type="button" {...rest}>
      {children}
    </Button>
  );
}
