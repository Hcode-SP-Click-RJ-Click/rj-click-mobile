import styled from '@emotion/native';
import { ReactNode } from 'react';
import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

const Wrap = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  margin-left: 10px;
`;

export type ButtonIconProps = {
  children: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};

export const ButtonIcon = ({ children, onPress, style }: ButtonIconProps) => {
  return (
    <Wrap style={style} onPress={onPress}>
      {children}
    </Wrap>
  );
};
