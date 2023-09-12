// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Navigation from '../components/Navigation';
import Abonnement from '../Container/Abonnement';
import Category from '../Container/Category'
import Home from '../Container/Home/Home';
import { Routes, Route } from 'react-router-dom';
import './app.scss'
import logo from '../assets/logo.svg'
import Cours from '../Container/Cours'
import FichierCours from '../Container/FichierCours'

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

const data = [{
  label: 'dev',
  prix: 12000,
  Nbvalide: 12,
  Nbminimal: 2,
  Nbcours: 4
},

]

const donnees = [{
  id: '12',
  label: 'dev',
  icon: logo,
},
{
  id: '1',
  label: 'dev',
  icon: logo,
}

]

const datum = [{
  cours: 'js',
  titre: 'var',
  lien: 'logo',
}]

export function App() {
  return (
    <div className='main'>
      <div className='bar-nav'>
        <Navigation links={nav} />
      </div>
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Abonnement" element={<Abonnement data={data} />} />
          <Route path="/Categories" element={<Category donnees={donnees} />} />
          <Route path="/Cours" element={<Cours datum={datum} />} />
          <Route path="/FichierCours" element={<FichierCours datum={datum} />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
