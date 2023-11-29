import React, { PropsWithChildren } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { Heading } from '../text';
import { useNavigation } from 'expo-router';

interface Props extends PropsWithChildren {
  hideBackButton?: boolean;
  hideTitle?: boolean;
  hideHeader?: boolean;
}

export const Container = ({
  children,
  hideBackButton = false,
  hideHeader = false,
  hideTitle = false,
}: Props) => {
  const { top } = useSafeAreaInsets();
  const { getState, goBack } = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1 px-5">
      {!hideHeader && (
        <View
          className="relative h-12 justify-center"
          style={{ marginBottom: top / 2 }}
        >
          {!hideBackButton && (
            <TouchableOpacity
              onPress={goBack}
              className="absolute left-0 z-50 rounded-full h-12 w-12 border-2 justify-center items-center border-lightGray"
            >
              <AntDesign name="arrowleft" size={20} color={COLORS.primary} />
            </TouchableOpacity>
          )}
          {!hideTitle && (
            <Heading className="text-xl">
              {getState().routes.at(-1)?.name}
            </Heading>
          )}
        </View>
      )}
      {children}
    </SafeAreaView>
  );
};
