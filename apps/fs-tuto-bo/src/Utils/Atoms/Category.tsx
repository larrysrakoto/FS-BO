import { atom } from 'recoil';
import { CategoryType } from '../Types';



export const SubsState = atom<CategoryType[]>({
  key: 'Category', // Identifiant unique (une chaîne)
  default: []
});
