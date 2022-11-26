import styled from '@emotion/native';
import { StatusBar } from 'expo-status-bar';
import { CategoryList } from '../components';
import { PlaceList } from '../components/PlaceList';
import { CategoryType } from '../types';
import { Colors } from '../values/colors';
import { useState } from 'react';
import { ScreenWrap } from '../components/ScreenWrap';
import { HeartOutlinedIcon } from '../icons';

const Title = styled.Text`
  font-size: 24px;
  text-transform: uppercase;
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${Colors.themeContrast};
`;

const HomePlaceList = styled(PlaceList)`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
`;

const CategoryListWrap = styled.View`
  height: 70px;
`;

export type HomeScreenProps = {};

export const HomeScreen = ({}: HomeScreenProps) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );

  return (
    <ScreenWrap>
      <Title>Descubra lugares incríveis!</Title>
      <CategoryListWrap>
        <CategoryList onChange={(category) => setSelectedCategory(category)} />
      </CategoryListWrap>
      <HomePlaceList
        selectedCategory={selectedCategory}
        buttons={[
          {
            children: <HeartOutlinedIcon width={24} height={24} />,
          },
        ]}
      />
      <StatusBar style="light" />
    </ScreenWrap>
  );
};
