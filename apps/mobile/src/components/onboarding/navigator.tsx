import { View, TouchableOpacity, Animated } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import DotIndicator from './dot-indicator';

interface Props {
  onBackClick: () => void;
  onNextClick: () => void;
  animationController: React.MutableRefObject<Animated.Value>;
}

const BottomNavigator = ({
  animationController,
  onBackClick,
  onNextClick,
}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { bottom } = useSafeAreaInsets();

  useEffect(() => {
    // I think this condition could be better?
    animationController.current.addListener(({ value }) => {
      if (value >= 0.7) {
        setSelectedIndex(3);
      } else if (value >= 0.5) {
        setSelectedIndex(2);
      } else if (value >= 0.3) {
        setSelectedIndex(1);
      } else if (value >= 0.1) {
        setSelectedIndex(0);
      }
    });
  }, [animationController]);

  const dots = useMemo(() => [0, 1, 2, 3], []);

  return (
    <View
      className="flex-row justify-between items-center"
      style={{ marginVertical: bottom }}
    >
      <TouchableOpacity
        className="h-16 w-16 border border-yellow-900 items-center justify-center rounded-full"
        onPress={onBackClick}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <View className="flex-row gap-3">
        {dots.map((item) => (
          <View key={item}>
            <DotIndicator index={item} {...{ selectedIndex }} />
          </View>
        ))}
      </View>
      <TouchableOpacity
        className="h-16 w-16 border border-yellow-900 bg-yellow-900 items-center justify-center rounded-full"
        onPress={onNextClick}
      >
        <AntDesign name="arrowright" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigator;
