import { Text, Animated, useWindowDimensions, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { Heading, Paragraph } from '../text';

interface Props {
  animationController: React.MutableRefObject<Animated.Value>;
}

export const Experience: FC<Props> = ({ animationController }) => {
  const window = useWindowDimensions();

  const slideAnimation = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8],
    outputRange: [0, 0, -window.width, -window.width, -window.width],
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
        <Text className="text-yellow-900">Seamless</Text> Shopping {'\n'}{' '}
        experience
      </Heading>
      <Paragraph>
        Step into a world where style knows no bounds and possibilities are
        endless
      </Paragraph>
    </Animated.View>
  );
};
