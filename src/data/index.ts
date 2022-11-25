import { PlaceType } from '../types';

export const placeListData: PlaceType[] = [
  {
    id: 1,
    address: 'Parque Nacional da Tijuca',
    description:
      'Cristo Redentor é uma estátua art déco que retrata Jesus Cristo, localizada no topo do morro do Corcovado, a 709 metros acima do nível do mar, com vista para parte considerável da cidade brasileira do Rio de Janeiro.',
    photo: 'https://ppcult-2022.web.app/images/rj/cristo.jpg',
    rating: 5,
    subtitle: 'No topo do morro do Corcovado',
    title: 'Cristo Redentor',
    categories: [1, 5],
  },
  {
    id: 2,
    address: 'Estação de teleférico no Rio de Janeiro',
    description:
      'O Bondinho do Pão de Açúcar é um teleférico localizado no bairro da Urca, no município do Rio de Janeiro, no estado do Rio de Janeiro, no Brasil. Liga a Praia Vermelha ao Morro da Urca e ao Morro do Pão de Açúcar. É uma das principais atrações turísticas da cidade.',
    photo: 'https://ppcult-2022.web.app/images/rj/pao-de-acucar.jpg',
    rating: 5,
    subtitle: 'Uma vista incrível no bairro da Urca',
    title: 'Bondinho Pão de Açúcar',
    categories: [1, 5],
  },
  {
    id: 3,
    address: 'Praia no Rio de Janeiro',
    description:
      'A Praia de Copacabana é uma praia localizada no bairro de Copacabana, na Zona Sul da cidade do Rio de Janeiro, no Brasil. É considerada uma das praias mais famosas do mundo.',
    photo: 'https://ppcult-2022.web.app/images/rj/copacabana.jpg',
    rating: 5,
    subtitle: 'Uma das praias mais famosas do mundo',
    title: 'Praia de Copacabana',
    categories: [1, 6],
  },
];
