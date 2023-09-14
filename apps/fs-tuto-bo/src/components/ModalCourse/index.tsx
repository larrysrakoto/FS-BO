import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormInput from '../../pieces/FormIntput'
import Boutton from '../../pieces/Boutton'
import { useRecoilState } from 'recoil';
import {Fichier} from '../../Utils/Atoms/Fichier'
import { FichierType } from '../../Utils/Types';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [cours, setcours] = React.useState('');
  const [titre, settitre] = React.useState('');
  const [lien, setlien] = React.useState('');
  const [Fichiers, setFichiers] = useRecoilState(Fichier)

  const handleSave = () => {
    const newItem: FichierType  = {
      id: ((Fichiers.length)+1)-1,
      cours,
      titre,
      lien
    }

    
    setFichiers((prev) => ([...prev, newItem]))

    setcours("")
    settitre("")
    setlien("")

    handleClose()

  }

  return (
    <div className='border-modal'>
      <Button variant="contained" onClick={handleOpen}>Ajouter</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='t'
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ajouter un Cours
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="form-content">
              <div className="form">
                <FormInput label="Cours" type="text" value={cours} onChange={(val: string) => {
                 setcours(val)}
                 }/>
                <FormInput label="Titre du Fichier" type="text" value={titre} onChange={(val: string) => {
                settitre(val)}
                }/>
                <FormInput label="Lien" type="text" value={lien} onChange={(val: string) => {
                setlien(val)} 
                }/>
              
              </div>
              <div className="validate">

                <Boutton handleClick={handleSave}> Enregister </Boutton>
                <Boutton> Annuler </Boutton>
                <Boutton> Fermer </Boutton>

              </div>

            </div>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}