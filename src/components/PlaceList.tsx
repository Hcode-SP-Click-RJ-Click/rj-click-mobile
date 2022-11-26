import styled from '@emotion/native';
import { PlaceItem } from './PlaceItem';
import { StyleProp, ViewStyle } from 'react-native';
import { useState, useEffect } from 'react';
import { CategoryType, PlaceType } from '../types';
import { placeListData } from '../data';
import { ButtonIconProps } from './ButtonIcon';

const Wrap = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

const PlaceListItem = styled(PlaceItem)`
  margin-bottom: 20px;
`;
export type PlaceListProps = {
  style?: StyleProp<ViewStyle>;
  selectedCategory?: CategoryType | null;
  buttons?: ButtonIconProps[];
  withPositions?: boolean;
};

export const PlaceList = ({
  style,
  selectedCategory = null,
  buttons,
  withPositions = false,
}: PlaceListProps) => {
  const [items, setItems] = useState<PlaceType[]>(placeListData);

  useEffect(() => {
    if (selectedCategory) {
      setItems(
        placeListData.filter((place) =>
          place.categories.includes(selectedCategory.id)
        )
      );
    } else {
      setItems(placeListData);
    }
  }, [selectedCategory]);

  return (
    <Wrap style={style}>
      {items.map((item, index) => (
        <PlaceListItem
          key={item.id}
          data={item}
          buttons={buttons}
          position={withPositions ? index + 1 : undefined}
        />
      ))}
    </Wrap>
  );
};
