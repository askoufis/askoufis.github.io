import { createElement, type ElementType, type AllHTMLAttributes } from 'react';
import clsx from 'clsx';
import * as resetStyles from '../reset/reset.css';
import { sprinkles, type Sprinkles } from '../css/sprinkles.css';

interface BoxProps
  extends Omit<AllHTMLAttributes<HTMLElement>, 'className'>,
    Sprinkles {
  component?: ElementType;
  className?: Parameters<typeof clsx>[0];
}

export const Box = ({
  component = 'div',
  className,
  children,
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  ...restProps
}: BoxProps) => {
  const atomClasses = clsx(
    resetStyles.base,
    resetStyles.element[component as keyof typeof resetStyles.element],
    sprinkles({
      padding,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
    }),
    className,
  );

  return createElement(
    component,
    { className: atomClasses, ...restProps },
    children,
  );
};
