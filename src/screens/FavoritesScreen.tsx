import styled from '@emotion/native';
import { PlaceList } from '../components';
import { HeaderBar } from '../components/HeaderBar';
import { ScreenWrap } from '../components/ScreenWrap';
import { TrashIcon } from '../icons/TrashIcon';

const FavoritesPlaceList = styled(PlaceList)`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
`;

export type FavoritesScreenProps = {};

export const FavoritesScreen = ({}: FavoritesScreenProps) => {
  return (
    <ScreenWrap>
      <HeaderBar title="Favoritos" />
      <FavoritesPlaceList
        buttons={[
          {
            children: <TrashIcon width={24} height={24} />,
          },
        ]}
      />
    </ScreenWrap>
  );
};
