import { useNavigation } from '@react-navigation/native';
import { Screens } from '../routes';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';

export function useTabNavigation() {
  return useNavigation<MaterialBottomTabNavigationProp<typeof Screens>>();
}
