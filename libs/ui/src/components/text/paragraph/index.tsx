import { Text, TextProps } from 'react-native';
import React, { FC } from 'react';
import { cn } from '../../../utils';

type Props = React.PropsWithChildren & TextProps;

export const Paragraph: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <Text
      {...rest}
      className={cn(
        'text-center font-inter-regular text-base text-gray-500',
        className
      )}
    >
      {children}
    </Text>
  );
};
