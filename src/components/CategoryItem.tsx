import styled from '@emotion/native';
import { CategoryType } from '../types';
import { Colors } from '../values/colors';
import { GestureResponderEvent } from 'react-native';

const Wrap = styled.TouchableOpacity<{ active: boolean }>`
  background-color: ${({ active }) =>
    active ? Colors.primary : 'transparent'};
  margin-right: 10px;
  height: 40px;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: center;
  border-radius: 15px;
`;

const Text = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export type CategoryItemProps = {
  data: CategoryType;
  onPress?: (event: GestureResponderEvent) => void;
  active: boolean;
};

export const CategoryItem = ({ data, onPress, active }: CategoryItemProps) => {
  return (
    <Wrap onPress={onPress} active={active}>
      <Text>{data.name}</Text>
    </Wrap>
  );
};
