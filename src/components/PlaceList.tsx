import styled from '@emotion/native';
import { HeartOutlinedIcon } from '../icons/HeartOutlinedIcon';
import { PlaceItem } from './PlaceItem';
import { StyleProp, ViewStyle } from 'react-native';
import { useState, useEffect } from 'react';
import { CategoryType, PlaceType } from '../types';
import { placeListData } from '../data';

const Wrap = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

const PlaceListItem = styled(PlaceItem)`
  margin-bottom: 20px;
`;

export type PlaceListProps = {
  style?: StyleProp<ViewStyle>;
  selectedCategory: CategoryType | null;
};

export const PlaceList = ({ style, selectedCategory }: PlaceListProps) => {
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
      {items.map((item) => (
        <PlaceListItem
          key={item.id}
          data={item}
          buttons={[
            {
              icon: <HeartOutlinedIcon width={24} height={24} />,
              onPress: () => console.log('Favorito 1'),
            },
          ]}
        />
      ))}
    </Wrap>
  );
};
