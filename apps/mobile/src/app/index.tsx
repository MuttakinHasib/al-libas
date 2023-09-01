import {
  Animated,
  Easing,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import React, { useCallback, useEffect, useRef } from 'react';
import IntroScreen from '../components/onboarding/intro';
import { useNavigation } from 'expo-router';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomNavigator from '../components/onboarding/navigator';
import Experience from '../components/onboarding/experience';
import Wishlist from '../components/onboarding/wishlist';

const Onboarding = () => {
  const navigation = useNavigation();
  const window = useWindowDimensions();
  const { top } = useSafeAreaInsets();

  const animationController = useRef(new Animated.Value(0));
  const animationValue = useRef<number>(0);

  const marginTop = Platform.OS ? top : StatusBar.currentHeight;

  useEffect(() => {
    animationController.current.addListener(({ value }) => {
      animationValue.current = value;
    });
  }, []);

  const headerTranslateY = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8],
    outputRange: [-(56 + (marginTop ?? 0)), 0, 0, 0, 0],
  });

  const skipAnimation = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8],
    outputRange: [0, 0, 0, 0, 80],
  });

  const wishlistTranslateY = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8],
    outputRange: [window.height, 0, 0, 0, 0],
  });
  const playAnimation = useCallback((toValue: number, duration = 1600) => {
    Animated.timing(animationController.current, {
      toValue,
      duration,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1.0),
      // here it is false only cause of width animation in 'NextButtonArrow.tsx', as width doesn't support useNativeDriver: true
      // TODO:- find better solution so we can use true here and animation also work
      useNativeDriver: false,
    }).start();
  }, []);

  const onNextClick = useCallback(() => {
    let toValue;
    if (animationValue.current === 0) {
      toValue = 0.2;
    } else if (animationValue.current >= 0 && animationValue.current <= 0.2) {
      toValue = 0.4;
    } else if (animationValue.current > 0.2 && animationValue.current <= 0.4) {
      toValue = 0.6;
    } else if (animationValue.current > 0.4 && animationValue.current <= 0.6) {
      toValue = 0.8;
    } else if (animationValue.current > 0.6 && animationValue.current <= 0.8) {
      navigation.goBack();
    }

    toValue !== undefined && playAnimation(toValue);
  }, [playAnimation, navigation]);

  const onBackClick = useCallback(() => {
    let toValue;
    if (animationValue.current >= 0.2 && animationValue.current < 0.4) {
      toValue = 0.0;
    } else if (animationValue.current >= 0.4 && animationValue.current < 0.6) {
      toValue = 0.2;
    } else if (animationValue.current >= 0.6 && animationValue.current < 0.8) {
      toValue = 0.4;
    } else if (animationValue.current === 0.8) {
      toValue = 0.6;
    }

    toValue !== undefined && playAnimation(toValue);
  }, [playAnimation]);

  const onSkipClick = useCallback(() => {
    playAnimation(0.8, 1200);
  }, [playAnimation]);

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <Animated.View
        className="absolute left-0 right-0 h-14 z-10 justify-center items-end px-5"
        style={{
          marginTop,
          transform: [{ translateY: headerTranslateY }],
        }}
      >
        <Animated.View style={{ transform: [{ translateX: skipAnimation }] }}>
          <TouchableOpacity onPress={onSkipClick}>
            <Text className="text-center font-inter-regular text-base text-yellow-900">
              Skip
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
      <IntroScreen {...{ animationController, onNextClick }} />
      <Animated.View
        className="bg-yellow-900/5"
        style={[
          {
            ...StyleSheet.absoluteFillObject,
            transform: [{ translateY: wishlistTranslateY }],
          },
        ]}
      >
        <View className="flex-1">
          <View className="flex-1" />
          <View className="bg-white rounded-t-[55px] px-5 py-10 flex-[.2]">
            <Experience {...{ animationController }} />
            <Wishlist {...{ animationController }} />
          </View>
          <View className="bg-white px-5">
            <BottomNavigator
              {...{
                onBackClick,
                onNextClick,
                animationController,
              }}
            />
          </View>
        </View>
        {/* <Experience
        {...{ animationController, onBackClick, onNextClick }}
        currentScreen={Math.ceil(currentScreen)}
      /> */}
      </Animated.View>
    </View>
  );
};

export default Onboarding;
