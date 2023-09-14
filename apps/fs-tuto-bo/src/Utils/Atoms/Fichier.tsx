import { atom } from 'recoil';
import { FichierType } from '../Types';



export const Fichier = atom<FichierType[]>({
  key: 'FichierCours', // Identifiant unique (une chaîne)
  default: []
});
