import styled from '@emotion/native';
import { HeartOutlined } from '../icons/HeartOutlined';
import { PlaceItem } from './PlaceItem';

const Wrap = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

const PlaceListItem = styled(PlaceItem)`
  margin-bottom: 20px;
`;

export type PlaceListProps = {};

export const PlaceList = ({}: PlaceListProps) => {
  return (
    <Wrap>
      <PlaceListItem
        buttons={[
          {
            icon: <HeartOutlined width={24} height={24} />,
            onPress: () => console.log('Favorito 1'),
          },
        ]}
      />
      <PlaceListItem
        buttons={[
          {
            icon: <HeartOutlined width={24} height={24} />,
            onPress: () => console.log('Favorito 1'),
          },
        ]}
      />
      <PlaceListItem
        buttons={[
          {
            icon: <HeartOutlined width={24} height={24} />,
            onPress: () => console.log('Favorito 1'),
          },
        ]}
      />
      <PlaceListItem
        buttons={[
          {
            icon: <HeartOutlined width={24} height={24} />,
            onPress: () => console.log('Favorito 1'),
          },
        ]}
      />
    </Wrap>
  );
};
