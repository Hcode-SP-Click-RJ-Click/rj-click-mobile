import styled from '@emotion/native';

const Wrap = styled.View`
  padding-top: 30px;
  align-items: center;
`;
const Title = styled.Text``;

export type FavoritesScreenProps = {};

export const FavoritesScreen = ({}: FavoritesScreenProps) => {
  return (
    <Wrap>
      <Title>Favorites Screen</Title>
    </Wrap>
  );
};
