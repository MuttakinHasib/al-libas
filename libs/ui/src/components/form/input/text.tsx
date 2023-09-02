import { View, TextInput as Input, TextInputProps } from 'react-native';
import React, { forwardRef } from 'react';
import { Paragraph } from '../../text';
import { cn } from '../../../utils/index';

interface Props extends TextInputProps {
  label?: string;
}

export const TextInput = forwardRef<Input, Props>((props, ref) => {
  const {
    placeholder = 'Type here',
    placeholderTextColor = '#ddd',
    className,
    label,
    ...rest
  } = props;
  return (
    <View className="space-y-3">
      {label && (
        <Paragraph className="text-left text-black font-inter-medium">
          {label}
        </Paragraph>
      )}
      <View className="border border-yellow-900/10 rounded-full px-5 py-4 mt-3">
        <Input
          {...rest}
          {...{ placeholder, placeholderTextColor, ref }}
          className={cn('flex-1', className)}
          style={{ fontSize: 16 }}
        />
      </View>
    </View>
  );
});
