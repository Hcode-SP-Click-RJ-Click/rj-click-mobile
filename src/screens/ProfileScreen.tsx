import styled from '@emotion/native';

const Wrap = styled.View`
  padding-top: 30px;
  align-items: center;
`;
const Title = styled.Text``;

export type ProfileScreenProps = {};

export const ProfileScreen = ({}: ProfileScreenProps) => {
  return (
    <Wrap>
      <Title>Profile Screen</Title>
    </Wrap>
  );
};
