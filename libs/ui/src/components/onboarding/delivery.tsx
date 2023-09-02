import { StyleSheet, Text, Animated, useWindowDimensions } from 'react-native';
import React, { FC } from 'react';
import { Heading, Paragraph } from '../text';

interface Props {
  animationController: React.MutableRefObject<Animated.Value>;
}

export const Delivery: FC<Props> = ({ animationController }) => {
  const window = useWindowDimensions();

  const slideAnimation = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8],
    outputRange: [window.width, window.width, window.width, 0, -window.width],
  });

  return (
    <Animated.View
      className="gap-y-6 justify-center px-5"
      style={{
        transform: [{ translateX: slideAnimation }],
        ...StyleSheet.absoluteFillObject,
      }}
    >
      <Heading>
        <Text className="text-yellow-900">Swift</Text> and{' '}
        <Text className="text-yellow-900">Reliable</Text>
        {'\n'} Delivery
      </Heading>
      <Paragraph>
        Crucial for customer satisfaction, loyalty, and business success in
        today's fast-paced world.
      </Paragraph>
    </Animated.View>
  );
};
