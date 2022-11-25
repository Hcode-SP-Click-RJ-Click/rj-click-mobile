import styled from '@emotion/native';
import { Colors } from '../values/colors';
import { StyleProp, ViewStyle, GestureResponderEvent } from 'react-native';

const Wrap = styled.TouchableOpacity`
  background-color: ${Colors.primary};
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;

const Text = styled.Text`
  color: #fff;
  font-size: 23px;
  font-weight: bold;
`;

export type ButtonProps = {
  children: string;
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
};

export const Button = ({ children, style, onPress }: ButtonProps) => {
  return (
    <Wrap style={style} onPress={onPress}>
      <Text>{children}</Text>
    </Wrap>
  );
};
