import styled from '@emotion/native';
import { CategoryItem } from './CategoryItem';
import { useState, useEffect } from 'react';
import { CategoryType } from '../types';

const Wrap = styled.ScrollView`
  padding-left: 20px;
  padding-top: 15px;
`;

const Bar = styled.View`
  width: 30px;
`;

export type CategoryListProps = {
  onChange: (category: CategoryType) => void;
};

export const CategoryList = ({ onChange }: CategoryListProps) => {
  const [active, setActive] = useState(1);
  const [items, setItems] = useState<CategoryType[]>([
    { name: 'Populares', id: 1 },
    { name: 'Museus', id: 2 },
    { name: 'Esportes', id: 3 },
    { name: 'Restaurantes', id: 4 },
    { name: 'Pontos Turísticos', id: 5 },
    { name: 'Praias', id: 6 },
  ]);

  useEffect(() => {
    const category = items.find((item) => item.id === active);
    if (category && typeof onChange === 'function') {
      onChange(category);
    }
  }, [active, items, onChange]);

  return (
    <Wrap horizontal={true} showsHorizontalScrollIndicator={false}>
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          data={item}
          onPress={() => setActive(item.id)}
          active={item.id === active}
        />
      ))}
      <Bar />
    </Wrap>
  );
};
