import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const IntroScreen = () => {
  return (
    <View className="flex-1 px-5">
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
    </View>
  );
};

export default IntroScreen;
