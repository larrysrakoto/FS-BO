export type dataType  = { 
  id: number,
  label: string,
  prix: string,
  Jvalide: string, 
  Jmin: string, 
  Nbcours: string,
 }

 export type FichierType = {
  id: number,
  cours: string, 
  titre: string, 
  lien: string,
 }

 export type CoursType = {
  id: string
  label: string,
  icon: string
 }
 
 export type CategoryType = {
  id: string
  label: string,
  icon: string
 }