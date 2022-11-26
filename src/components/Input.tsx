import styled from '@emotion/native';
import { useState } from 'react';
import { StyleProp, TextInputProps, ViewStyle } from 'react-native';
import { Colors } from '../values/colors';

const Wrap = styled.View`
  width: 100%;
`;

const TextInput = styled.TextInput<{ focus: boolean }>`
  background-color: ${Colors.inputBackground};
  width: 100%;
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  border-color: ${(props) =>
    props.focus ? Colors.primary : Colors.inputBackground};
  border-width: 3px;
  border-style: solid;
  color: ${Colors.themeContrast};
`;

const Label = styled.Text`
  color: ${Colors.themeContrast};
  font-size: 16px;
  margin-bottom: 5px;
`;

export type InputProps = {
  label?: string;
  style?: StyleProp<ViewStyle>;
} & TextInputProps;

export const Input = (props: InputProps) => {
  const [focus, setFocus] = useState(false);

  return (
    <Wrap style={props.style}>
      {props.label && <Label>{props.label}</Label>}
      <TextInput
        {...props}
        focus={focus}
        onFocus={(e) => {
          if (typeof props.onFocus === 'function') {
            props.onFocus(e);
          }
          setFocus(true);
        }}
        onBlur={(e) => {
          if (typeof props.onBlur === 'function') {
            props.onBlur(e);
          }
          setFocus(false);
        }}
      />
    </Wrap>
  );
};
