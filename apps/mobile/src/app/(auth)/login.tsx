import { StatusBar, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heading, Paragraph } from '@al-libas/ui';

const LoginPage = () => {
  return (
    <SafeAreaView className="bg-white flex-1 px-5 justify-center">
      <StatusBar barStyle="dark-content" />
      <View className="gap-y-3">
        <Heading>Create an account </Heading>
        <Paragraph>
          Fill your information bellow or register with your social account.
        </Paragraph>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
