import { Link } from 'expo-router';
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
import { Heading, Paragraph } from '../text';

interface Props {
  onNextClick: () => void;
  animationController: React.MutableRefObject<Animated.Value>;
}

export const IntroScreen = (props: Props) => {
  const window = useWindowDimensions();

  const translateY = props.animationController.current.interpolate({
    inputRange: [0, 0.2, 0.8],
    outputRange: [0, -window.height, -window.height],
  });

  return (
    <Animated.View className="px-5" style={{ transform: [{ translateY }] }}>
      <ScrollView alwaysBounceVertical={false}>
        <SafeAreaView
          className="flex justify-between"
          style={{ height: window.height }}
        >
          <View className="justify-center flex-1">
            <View className="flex flex-row justify-between">
              <View
                style={{ width: window.width / 2 - 20 * 2 }}
                className="bg-red-500 rounded-t-full rounded-b-full"
              ></View>
              <View className="gap-y-5">
                <View
                  style={{
                    width: window.width / 2 - 20 * 2,
                    height: window.height / 6,
                  }}
                  className="h-24 bg-pink-400 rounded-t-full rounded-b-full"
                ></View>
                <View
                  style={{
                    width: window.width / 2 - 20 * 2,
                    height: window.height / 4.5,
                  }}
                  className="bg-blue-400 rounded-t-full rounded-b-full"
                ></View>
              </View>
            </View>
          </View>
          <View className="gap-y-5 pb-5">
            <Heading className="font-inter-black">
              <Text className="text-yellow-900">Al Libas</Text> that {'\n'}{' '}
              makes you look your best
            </Heading>
            <Paragraph>
              Elevate your style and confidence with attire that ensures you
              look your best for any occasion.
            </Paragraph>
            <TouchableOpacity
              className="py-5 px-10 bg-yellow-900 rounded-full"
              activeOpacity={0.8}
              onPress={props.onNextClick}
            >
              <Text className="font-bold text-lg text-center text-white">
                Let's get started
              </Text>
            </TouchableOpacity>
            <Link href="/login" asChild>
              <TouchableOpacity>
                <Paragraph className="text-black">
                  Already have an account?{' '}
                  <Text className="text-yellow-900">Sign In</Text>
                </Paragraph>
              </TouchableOpacity>
            </Link>
          </View>
        </SafeAreaView>
      </ScrollView>
    </Animated.View>
  );
};
