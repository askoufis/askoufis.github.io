import type { ElementType, ReactNode } from 'react';
import { Box } from './Box';
import * as typographyStyles from './typography.css';

type HeadingLevel = 1 | 2 | 3 | 4;

interface HeadingProps {
  component?: ElementType;
  level: HeadingLevel;
  children: ReactNode;
  id?: string;
}

const componentFromLevel: { [Level in HeadingLevel]: `h${Level}` } = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
};

export const Heading = ({
  component: rawComponent,
  level,
  children,
  id,
}: HeadingProps) => {
  const component = rawComponent || componentFromLevel[level];

  return (
    <Box
      component={component}
      id={id}
      className={[typographyStyles.font, typographyStyles.heading[level]]}
    >
      {children}
    </Box>
  );
};
