import type { ReactNode } from 'react';
import { Box } from './Box';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
  component?: `h${HeadingLevel}`;
  level: HeadingLevel;
  children: ReactNode;
  id?: string;
}

const componentFromLevel: { [Level in HeadingLevel]: `h${Level}` } = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
};

export const Heading = ({
  component: rawComponent,
  level,
  children,
  id,
}: HeadingProps) => {
  const component = rawComponent || componentFromLevel[level];

  return (
    <Box component={component} id={id}>
      {children}
    </Box>
  );
};
