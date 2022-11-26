import { createContext } from 'react';

export type PlaceContextType = {
  open: (placeId: number) => void;
};

export const PlaceContext = createContext<PlaceContextType>({
  open: () => {},
});
