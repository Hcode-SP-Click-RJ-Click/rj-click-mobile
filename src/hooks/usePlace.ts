import { useContext } from 'react';
import { PlaceContext } from '../contexts/PlaceContext';

export function usePlace() {
  const context = useContext(PlaceContext);
  if (!context) {
    throw new TypeError('Place context not found.');
  }
  return context;
}
