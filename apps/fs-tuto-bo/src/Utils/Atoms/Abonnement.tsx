import { atom } from 'recoil';
import { dataType } from '../Types';



export const SubsState = atom<dataType[]>({
  key: 'Abonnement', // Identifiant unique (une chaîne)
  default: []
});
