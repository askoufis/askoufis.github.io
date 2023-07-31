import { createElement, type ReactNode, type ElementType } from 'react';

interface BoxProps {
  component?: ElementType;
  children?: ReactNode;
  id?: string;
}

export const Box = ({ component = 'div', children, id }: BoxProps) =>
  createElement(component, { id }, children);
