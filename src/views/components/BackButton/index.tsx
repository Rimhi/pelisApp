import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface BackButtonProps {
  onPress: () => void;
}
export const BackButtonComponent = ({onPress}: BackButtonProps) => {
  return (
    <TouchableOpacity style={style.backButton} onPress={onPress}>
      <Icon name={'arrow-back-outline'} size={30} color={'white'} />
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 20,
  },
});
