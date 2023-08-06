import type { ElementType, ReactNode } from 'react';
import { Box } from './Box';
import * as typographyStyles from './typography.css';

type TextSize = keyof typeof typographyStyles.text;

interface TextProps {
  component?: ElementType;
  children: ReactNode;
  size?: TextSize;
}

export const Text = ({
  component: rawComponent,
  children,
  size = 'standard',
}: TextProps) => {
  const component = rawComponent || 'span';

  return (
    <Box
      component={component}
      className={[typographyStyles.font, typographyStyles.text[size]]}
    >
      {children}
    </Box>
  );
};
