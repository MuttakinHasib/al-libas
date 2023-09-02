import { Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';

interface Props {
  index: number;
  selectedIndex: number;
}

export const DotIndicator = ({ index, selectedIndex }: Props) => {
  const activeIndexRef = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(activeIndexRef.current, {
      toValue: index === selectedIndex ? 1 : 0,
      duration: 480,
      useNativeDriver: false,
    }).start();
  }, [selectedIndex, index]);

  const backgroundColor = activeIndexRef.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(113, 63, 18, .20)', '#b25a0d'],
  });

  const scale = activeIndexRef.current.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.25],
  });

  return (
    <Animated.View
      className="h-3 w-3 rounded-full"
      style={{ backgroundColor, transform: [{ scale }] }}
    />
  );
};
