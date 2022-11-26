import styled from '@emotion/native';
import { useState } from 'react';
import { Button } from '../components';
import { HeaderBar } from '../components/HeaderBar';
import { Input } from '../components/Input';
import { ScreenWrap } from '../components/ScreenWrap';
import { TrashIcon } from '../icons/TrashIcon';
import { Colors } from '../values/colors';

const ProfileContent = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

const PhotoWrap = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  margin-top: 30px;
`;

const Photo = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;

const Text = styled.Text`
  color: ${Colors.themeContrast};
  font-size: 24px;
`;

const Form = styled.View`
  padding: 20px;
  width: 100%;
`;

export type ProfileScreenProps = {};

export const ProfileScreen = ({}: ProfileScreenProps) => {
  const [firstName, setFirstName] = useState('João');
  const [lastName, setLastName] = useState('Rangel');

  return (
    <ScreenWrap>
      <HeaderBar
        title="Perfil"
        buttons={[
          {
            children: <TrashIcon width={24} height={24} color="#fff" />,
          },
        ]}
      />
      <ProfileContent>
        <PhotoWrap>
          <Photo source={require('../assets/photo.png')} />
        </PhotoWrap>
      </ProfileContent>
      <Text>Alterar foto do perfil</Text>
      <Form>
        <Input
          value={firstName}
          onChangeText={(value) => setFirstName(value)}
          label="Primeiro nome"
          style={{ marginBottom: 10 }}
        />
        <Input
          value={lastName}
          onChangeText={(value) => setLastName(value)}
          label="Último nome"
          style={{ marginBottom: 10 }}
        />
        <Button>Salvar</Button>
      </Form>
    </ScreenWrap>
  );
};
