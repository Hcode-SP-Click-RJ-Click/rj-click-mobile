import styled from '@emotion/native';
import { useCallback } from 'react';
import { GestureResponderEvent } from 'react-native';
import { useTabNavigation } from '../hooks';
import { ArrowLeftIcon } from '../icons';
import { Colors } from '../values/colors';
import { ButtonIcon, ButtonIconProps } from './ButtonIcon';

const Wrap = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 18px;
  color: ${Colors.themeContrast};
  flex: 1;
  margin-left: 15px;
`;

export type HeaderBarProps = {
  title: string;
  buttons?: ButtonIconProps[];
  onPressBack?: (event: GestureResponderEvent) => void;
};

export const HeaderBar = ({ title, buttons, onPressBack }: HeaderBarProps) => {
  const { goBack, canGoBack } = useTabNavigation();

  const onGoBack = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  return (
    <Wrap>
      <ButtonIcon onPress={onPressBack ?? onGoBack}>
        <ArrowLeftIcon width={24} height={24} />
      </ButtonIcon>
      <Title>{title}</Title>
      {(buttons ?? []).map((button, index) => (
        <ButtonIcon {...button} key={index}>
          {button.children}
        </ButtonIcon>
      ))}
    </Wrap>
  );
};
