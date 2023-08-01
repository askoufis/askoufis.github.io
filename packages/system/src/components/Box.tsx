import { createElement, type ElementType, type AllHTMLAttributes } from 'react';
import clsx from 'clsx';
import * as resetStyles from '../css/reset.css';

interface BoxProps extends Omit<AllHTMLAttributes<HTMLElement>, 'className'> {
  component?: ElementType;
  className?: Parameters<typeof clsx>[0];
}

export const Box = ({
  component = 'div',
  className,
  children,
  ...restProps
}: BoxProps) => {
  const atomClasses = clsx(
    resetStyles.base,
    resetStyles.element[component as keyof typeof resetStyles.element],
    className,
  );

  return createElement(
    component,
    { className: atomClasses, ...restProps },
    children,
  );
};
