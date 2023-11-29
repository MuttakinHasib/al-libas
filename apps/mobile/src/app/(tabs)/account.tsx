import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS, Container, Heading, cn } from '@al-libas/ui';
import { AntDesign, Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const accountNav = [
  {
    name: 'Your Profile',
    icon: <AntDesign name="user" size={28} color={COLORS.primary} />,
    route: 'profile',
  },
  {
    name: 'Your Orders',
    icon: 'box',
    route: 'orders',
  },
  {
    name: 'Your Addresses',
    icon: 'book',
    route: 'addresses',
  },
  {
    name: 'Payment Methods',
    icon: 'credit-card',
    route: 'payment-methods',
  },
  {
    name: 'Settings',
    icon: 'settings',
    route: 'settings',
  },
  {
    name: 'Help Center',
    icon: 'help-circle',
    route: 'help-center',
  },
  {
    name: 'Logout',
    icon: 'log-out',
    route: 'logout',
  },
];

const AccountScreen = () => {
  const [avatar, setAvatar] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      selectionLimit: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  return (
    <Container>
      <TouchableOpacity className="relative mx-auto" onPress={pickImage}>
        <View className="w-28 h-28 rounded-full bg-red-100 overflow-hidden">
          {avatar && (
            <Image source={{ uri: avatar }} className="w-full h-full" />
          )}
        </View>
        <View className="absolute bottom-0 right-0 w-10 h-10 bg-primary border-2 border-lightGray rounded-full justify-center items-center">
          <Feather name="edit" size={15} color="#fff" />
        </View>
      </TouchableOpacity>
      <Heading className="py-5 text-secondary">Muttakin Islam Hasib</Heading>
      {accountNav.map((nav, index) => {
        return (
          <TouchableOpacity
            key={index}
            className={cn(
              'flex-row items-center justify-between divide-y-2 py-3',
              {
                'border-b border-lightGray': index !== accountNav.length - 1,
              }
            )}
          >
            <View className="flex-row items-center gap-x-3">
              {index === 0 ? (
                nav.icon
              ) : (
                <Feather
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  name={nav.icon as any}
                  size={28}
                  color={COLORS.primary}
                />
              )}
              <Text className="text-lg font-normal text-secondary">
                {nav.name}
              </Text>
            </View>
            <Feather name="chevron-right" size={28} color={COLORS.primary} />
          </TouchableOpacity>
        );
      })}
    </Container>
  );
};

export default AccountScreen;
