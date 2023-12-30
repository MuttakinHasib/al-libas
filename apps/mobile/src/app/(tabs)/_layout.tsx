import { Tabs } from 'expo-router';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Platform, View } from 'react-native';
import { COLORS, cn } from '@al-libas/ui';

const tabs = [
  {
    name: 'home',
    icon: 'home',
  },
  {
    name: 'cart',
    icon: 'shoppingcart',
  },
  {
    name: 'wishlist',
    icon: 'hearto',
  },
  {
    name: 'chat',
    icon: 'message1',
  },
  {
    name: 'account',
    icon: 'user',
  },
];

const TabsLayout = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: Platform.OS === 'ios' ? bottom : 20,
          display: 'flex',
          justifyContent: 'center',
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: COLORS.secondary,
          borderRadius: 50,
          paddingBottom: 0,
          overflow: 'hidden',
          height: 70,
        },
      }}
    >
      {tabs.map(({ name, icon }) => (
        <Tabs.Screen
          key={name}
          {...{ name }}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                className={cn(
                  'w-14 h-14 justify-center items-center rounded-full',
                  { 'bg-[#EDEDED]': focused }
                )}
              >
                <AntDesign
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  name={icon as any}
                  size={25}
                  color={COLORS[focused ? 'primary' : 'slateGray']}
                />
              </View>
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
