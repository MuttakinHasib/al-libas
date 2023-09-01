import { StyleSheet, Text, Animated, useWindowDimensions } from 'react-native';
import React, { FC } from 'react';

interface Props {
  animationController: React.MutableRefObject<Animated.Value>;
}

const Wishlist: FC<Props> = ({ animationController }) => {
  const window = useWindowDimensions();

  const slideAnimation = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8],
    outputRange: [window.width, window.width, 0, -window.width, -window.width],
  });

  return (
    <Animated.View
      className="gap-6 justify-center"
      style={{
        transform: [{ translateX: slideAnimation }],
        ...StyleSheet.absoluteFillObject,
      }}
    >
      <Text className="text-center font-inter-semibold text-3xl capitalize">
        Wishlist: where <Text className="text-yellow-900">fashion dreams</Text>{' '}
        begin
      </Text>
      <Text className="text-center font-inter-regular text-base">
        Step into a world where style knows no bounds and possibilities are
        endless
      </Text>
    </Animated.View>
  );
};

export default Wishlist;
