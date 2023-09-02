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

const LoginPage = () => {
  const email = useRef<Input | null>(null);
  const password = useRef<Input | null>(null);

  const { height } = useWindowDimensions();
  const { bottom, top } = useSafeAreaInsets();
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
              <Heading>Create an account </Heading>
              <Paragraph>
                Fill your information bellow or register with your social
                account.
              </Paragraph>
            </View>
            <View className="space-y-6">
              <View>
                <TextInput
                  label="Name"
                  textContentType="name"
                  returnKeyType="next"
                  onSubmitEditing={() => email?.current?.focus()}
                />
              </View>
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
            <Button>Sign Up</Button>
            <View className="flex-row items-center justify-center">
              <View className="h-[2px] max-w-[100px] w-full bg-gray-200" />
              <Paragraph className="px-3">Or sign up with</Paragraph>
              <View className="h-[2px] max-w-[100px] w-full bg-gray-200" />
            </View>
            <View className="flex-row items-center justify-center space-x-5">
              <TouchableOpacity>
                <View className="border border-gray-200 w-16 h-16 justify-center items-center rounded-full">
                  <FontAwesome5 name="apple" size={32} color="black" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="border border-gray-200 w-16 h-16 justify-center items-center rounded-full">
                  <FontAwesome5 name="google" size={32} color="#DB4437" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="border border-gray-200 w-16 h-16 justify-center items-center rounded-full">
                  <FontAwesome5 name="facebook-f" size={32} color="#0165E1" />
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Paragraph className="text-black">
                Already have an account?{' '}
                <Text className="text-yellow-900">Sign In</Text>
              </Paragraph>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginPage;
