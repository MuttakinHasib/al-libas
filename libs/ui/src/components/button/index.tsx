import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
  TextProps,
} from 'react-native';
import { Paragraph } from '../text';
import { cn } from '../../utils';
import { Ref, forwardRef } from 'react';

interface Props extends TouchableOpacityProps {
  container?: ViewProps;
  text?: TextProps;
}

export const Button = forwardRef(
  (
    { container, text, children, ...rest }: Props,
    ref: Ref<TouchableOpacity>
  ) => {
    return (
      <TouchableOpacity {...{ ref }} {...rest} activeOpacity={0.8}>
        <View
          className={cn(
            'py-5 px-10 bg-yellow-900 rounded-full',
            container?.className
          )}
        >
          <Paragraph
            className={cn(
              'font-inter-semibold text-xl text-center text-white',
              text?.className
            )}
          >
            {children}
          </Paragraph>
        </View>
      </TouchableOpacity>
    );
  }
);
