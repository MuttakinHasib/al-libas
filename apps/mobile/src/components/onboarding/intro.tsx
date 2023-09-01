import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Animated,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

interface Props {
  onNextClick: () => void;
  animationController: React.MutableRefObject<Animated.Value>;
}

const IntroScreen = (props: Props) => {
  const window = useWindowDimensions();

  const translateY = props.animationController.current.interpolate({
    inputRange: [0, 0.2, 0.8],
    outputRange: [0, -window.height, -window.height],
  });

  return (
    <Animated.View
      className="flex-1 px-5"
      style={{ transform: [{ translateY }] }}
    >
      <ScrollView className="flex-grow-0 h-full" alwaysBounceVertical={false}>
        <SafeAreaView className="flex h-screen justify-between">
          <View className="flex flex-row justify-between pt-16">
            <View className="h-full w-44 bg-red-500 rounded-t-full rounded-b-full"></View>
            <View className="gap-5">
              <View className="h-48 w-44 bg-pink-400 rounded-t-full rounded-b-full"></View>
              <View className="h-44 w-44 bg-blue-400 rounded-t-full rounded-b-full"></View>
            </View>
          </View>
          <View className="gap-6">
            <Text className="text-center font-inter-black text-3xl">
              The <Text className="text-yellow-900">Al Libas</Text> that {'\n'}{' '}
              makes you look your best
            </Text>
            <Text className="text-center font-inter-regular text-base">
              Elevate your style and confidence with attire that ensures you
              look your best for any occasion.
            </Text>
            <TouchableOpacity
              className="py-5 px-10 bg-yellow-900 rounded-full"
              activeOpacity={0.8}
              onPress={props.onNextClick}
            >
              <Text className="font-bold text-xl text-center text-white">
                Let's get started
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-center font-inter-regular text-base">
                Already have an account?{' '}
                <Text className="text-yellow-900">Sign In</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </Animated.View>
  );
};

export default IntroScreen;
