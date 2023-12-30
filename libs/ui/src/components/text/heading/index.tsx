import { cn } from '../../../utils';
import React, { FC } from 'react';
import { Text, TextProps } from 'react-native';

type Props = React.PropsWithChildren & TextProps;

export const Heading: FC<Props> = ({ children, className, ...rest }) => (
  <Text
    {...rest}
    className={cn(
      'text-center font-inter-semibold text-2xl capitalize',
      className
    )}
  >
    {children}
  </Text>
);
