import { StyleSheet, Text, Animated, useWindowDimensions } from 'react-native';
import React, { FC } from 'react';
import { Heading, Paragraph } from '../text';

interface Props {
  animationController: React.MutableRefObject<Animated.Value>;
}

export const Wishlist: FC<Props> = ({ animationController }) => {
  const window = useWindowDimensions();

  const slideAnimation = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8],
    outputRange: [window.width, window.width, 0, -window.width, -window.width],
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
        Wishlist: where <Text className="text-yellow-900">fashion dreams</Text>{' '}
        begin
      </Heading>
      <Paragraph>
        Step into a world where style knows no bounds and possibilities are
        endless
      </Paragraph>
    </Animated.View>
  );
};
