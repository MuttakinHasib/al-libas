import React, { useRef } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import {
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput as Input,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Button, Heading, Paragraph, TextInput } from '@al-libas/ui';
import { KeyboardAvoidingView } from 'react-native';
import { Link, useNavigation } from 'expo-router';

const LoginPage = () => {
  const email = useRef<Input | null>(null);
  const password = useRef<Input | null>(null);

  const { height } = useWindowDimensions();
  const { bottom, top } = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ height }}
      className="bg-white"
    >
      <StatusBar barStyle="dark-content" />
      <SafeAreaView className="flex-1">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            className="gap-y-10 px-5"
            style={{ paddingBottom: bottom, paddingTop: top }}
          >
            <View className="gap-y-3">
              <Heading>Let's go</Heading>
              <Paragraph>Hi! Welcome back, you've been missed</Paragraph>
            </View>
            <View className="space-y-6">
              <View>
                <TextInput
                  label="Email"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  returnKeyType="next"
                  onSubmitEditing={() => password?.current?.focus()}
                  ref={email}
                />
              </View>
              <View>
                <TextInput
                  label="Password"
                  secureTextEntry
                  textContentType="password"
                  ref={password}
                />
              </View>
            </View>

            <Link href="/access-location" asChild>
              <Button>Sign In</Button>
            </Link>
            <View className="flex-row items-center justify-center">
              <View className="h-[2px] max-w-[100px] w-full bg-gray-200" />
              <Paragraph className="px-3">Or sign in with</Paragraph>
              <View className="h-[2px] max-w-[100px] w-full bg-gray-200" />
            </View>
            <View className="flex-row items-center justify-center space-x-5">
              <TouchableOpacity>
                <View className="border border-gray-200 w-14 h-14 justify-center items-center rounded-full">
                  <FontAwesome5 name="apple" size={25} color="black" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="border border-gray-200 w-14 h-14 justify-center items-center rounded-full">
                  <FontAwesome5 name="google" size={25} color="#DB4437" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="border border-gray-200 w-14 h-14 justify-center items-center rounded-full">
                  <FontAwesome5 name="facebook-f" size={25} color="#0165E1" />
                </View>
              </TouchableOpacity>
            </View>
            <Link href="/register" asChild>
              <TouchableOpacity>
                <Paragraph className="text-black">
                  Don't have an account?{' '}
                  <Text className="text-yellow-900">Sign Up</Text>
                </Paragraph>
              </TouchableOpacity>
            </Link>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginPage;
