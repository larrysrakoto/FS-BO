import { atom } from 'recoil';
import { CoursType } from '../Types';



export const Course = atom<CoursType[]>({
  key: 'Cours', // Identifiant unique (une chaîne)
  default: []
});
