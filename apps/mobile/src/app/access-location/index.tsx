import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Button, Heading, Paragraph } from '@al-libas/ui';
import * as Location from 'expo-location';

const AccessLocationPage = () => {
  const [status, requestPermission] = Location.useForegroundPermissions();

  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  useEffect(() => {
    (async () => {
      if (!status || status.status !== 'granted') {
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, [status]);
  console.log(location);
  return (
    <View className="bg-white flex-1 p-5 justify-center items-center">
      <StatusBar barStyle="dark-content" />
      <View className="gap-y-5 items-center">
        <View className="w-28 h-28 bg-lightGray flex items-center justify-center rounded-full">
          <Fontisto name="map-marker-alt" size={45} color="#704F38" />
        </View>
        <View className="gap-y-3">
          <Heading>What is your Location?</Heading>
          <Paragraph>
            We need to know your location in order to suggest near by services .
          </Paragraph>
        </View>
        <Button onPress={() => requestPermission()}>
          Allow Location Access
        </Button>
      </View>
    </View>
  );
};

export default AccessLocationPage;
