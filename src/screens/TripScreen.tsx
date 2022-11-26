import styled from '@emotion/native';
import { PlaceList } from '../components';
import { HeaderBar } from '../components/HeaderBar';
import { ScreenWrap } from '../components/ScreenWrap';
import { TrashIcon } from '../icons/TrashIcon';

const TripPlaceList = styled(PlaceList)`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
`;

export type TripScreenProps = {};

export const TripScreen = ({}: TripScreenProps) => {
  return (
    <ScreenWrap>
      <HeaderBar title="Minha Viagem" />
      <TripPlaceList
        withPositions={true}
        buttons={[
          {
            children: <TrashIcon width={24} height={24} />,
          },
        ]}
      />
    </ScreenWrap>
  );
};
