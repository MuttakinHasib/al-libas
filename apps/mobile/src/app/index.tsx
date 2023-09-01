import { View, Text } from 'react-native';
import React from 'react';
import IntroScreen from '../components/onboarding/intro';

const Onboarding = () => {
  return (
    <View className="flex-1 bg-white">
      <IntroScreen />
    </View>
  );
};

export default Onboarding;
