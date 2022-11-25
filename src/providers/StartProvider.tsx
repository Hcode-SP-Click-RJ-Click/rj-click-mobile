import styled from '@emotion/native';
import { ReactNode, useState } from 'react';
import { Dimensions } from 'react-native';
import { Button } from '../components';
import { StartContext } from '../contexts/StartContext';

const { height, width } = Dimensions.get('window');

const Wrap = styled.View`
  width: ${String(width)}px;
  height: ${String(height)}px;
  position: absolute;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const BackgroundImage = styled.Image`
  width: ${String(width)}px;
  height: ${String(height)}px;
  position: absolute;
`;

const LogoPPCult = styled.Image`
  margin-top: 200px;
  height: 60px;
`;

const LogoRio = styled.Image`
  margin-top: 100px;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 30px;
  margin-top: 50px;
`;
const Subtitle = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-top: 30px;
`;

const StartButton = styled(Button)`
  position: absolute;
  bottom: 20px;
`;

export type StartProviderProps = {
  children: ReactNode;
};

export const StartProvider = ({ children }: StartProviderProps) => {
  const [show, setShow] = useState(true);

  return (
    <StartContext.Provider value={{}}>
      {children}
      {show && (
        <Wrap>
          <BackgroundImage
            source={require('./../assets/start.webp')}
            resizeMode="cover"
          />
          <LogoPPCult
            source={require('./../assets/logo-ppcult.webp')}
            resizeMode="contain"
          />
          <LogoRio source={require('./../assets/logo-rio.webp')} />
          <Title>Seja bem-vindo ao Rio</Title>
          <Subtitle>Conheça a Terra do Cristo Redentor</Subtitle>
          <StartButton onPress={() => setShow(false)}>
            Vamos começar!
          </StartButton>
        </Wrap>
      )}
    </StartContext.Provider>
  );
};
