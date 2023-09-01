import { Animated, Easing, View } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import IntroScreen from '../components/onboarding/intro';
import { useNavigation } from 'expo-router';

const Onboarding = () => {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(0);
  const animationController = useRef(new Animated.Value(0));
  const animationValue = useRef<number>(0);

  useEffect(() => {
    animationController.current.addListener(({ value }) => {
      animationValue.current = value;
      setCurrentPage(value);
    });
  }, []);

  const playAnimation = useCallback((toValue: number, duration = 1800) => {
    Animated.timing(animationController.current, {
      toValue,
      duration,
      easing: Easing.bezier(0.645, 0.045, 0.355, 1),
      useNativeDriver: true,
    }).start();
  }, []);

  const onNextClick = useCallback(() => {
    let toValue = 0;

    if (animationValue.current === 0) {
      toValue = 0.2;
    }
    toValue !== undefined && playAnimation(toValue);
  }, [playAnimation, navigation]);

  return (
    <View className="flex-1 bg-white">
      <IntroScreen {...{ animationController, onNextClick }} />
    </View>
  );
};

export default Onboarding;
