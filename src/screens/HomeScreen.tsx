import styled from '@emotion/native';
import { StatusBar } from 'expo-status-bar';
import { PlaceList } from '../components/PlaceList';
import { Colors } from '../values/colors';

const Wrap = styled.View`
  flex: 1;
  background-color: ${Colors.theme};
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding: 20px;
  padding-bottom: 0;
`;

const Title = styled.Text`
  font-size: 24px;
  text-transform: uppercase;
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${Colors.themeContrast};
`;

export type HomeScreenProps = {};

export const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <Wrap>
      <Title>Descubra lugares incríveis!</Title>
      <PlaceList />
      <StatusBar style="light" />
    </Wrap>
  );
};
