// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Navigation from '../components/Navigation';
import Abonnement from '../Container/Abonnement';
import Category from '../Container/Category'
import Home from '../Container/Home/Home';
import { Routes, Route } from 'react-router-dom';
import './app.scss'
import Cours from '../Container/Cours'
import FichierCours from '../Container/FichierCours'
import { useRecoilValue } from 'recoil';
import { Fichier } from '../Utils/Atoms/Fichier';
import { Course } from '../Utils/Atoms/course';

const nav = [{
  link: '/',
  label: 'Acceuil'
},
{
  link: '/Abonnement',
  label: 'Abonnement'
},
{
  link: '/Categories',
  label: 'Categories de cours'
},
{
  link: '/Cours',
  label: 'Cours'
},
{
  link: '/FichierCours',
  label: 'Fichiers du Cours'
},
]




const datum = [{
  cours: 'js',
  titre: 'var',
  lien: 'logo',
}]

export function App() {
  
  const cours = useRecoilValue(Fichier)
  const donnees = useRecoilValue(Course)

  return (
    <div className='main'>
      <div className='bar-nav'>
        <Navigation links={nav} />
      </div>
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Abonnement" element={<Abonnement />} />
          <Route path="/Categories" element={<Category donnees={donnees} />} />
          <Route path="/Cours" element={<Cours datum={datum} />} />
          <Route path="/FichierCours" element={<FichierCours datum={cours} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
