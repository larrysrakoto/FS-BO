import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormInput from '../../pieces/FormIntput'
import './Modal.scss'
import Boutton from '../../pieces/Boutton'
import { useRecoilState } from 'recoil';
import { SubsState } from '../../Utils/Atoms/Abonnement';
import { dataType } from '../../Utils/Types';


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
  const [label, setlabel] = React.useState('');
  const [prix, setprix] = React.useState('');
  const [Jvalide, setJvalide] = React.useState('');
  const [Jmin, setJmin] = React.useState('');
  const [Nbcours, setNbcours] = React.useState('');
  const [subs, setsubs] = useRecoilState(SubsState);
 

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave = () => {
  
    const newItem: dataType  = {
      id: (subs.length) + 1,
      label,
      prix,
      Jvalide,
      Jmin,
      Nbcours
    }
    
    setsubs([...subs, newItem])
    setlabel("")
    setprix("")
    setJvalide("")
    setJmin("")
    setNbcours("")

     handleClose()
  }

  React.useEffect(() => {
    console.log({subs});
  }, [subs])



  return (
    <div className='border-modal'>
      <Button variant="contained" onClick={handleOpen}>Ajouter</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ajouter un Abonnnemnet
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="form-content">
              <div className="form">
                <FormInput label="label" type="text" value={label} onChange={(val: string) => {
                  setlabel(val)
                }} />
                <FormInput label="prix" type="number" value={prix} onChange={(val: string) => {
                  setprix(val)
                }} />
                <FormInput label="Nombre de Jours de validité" type="number" value={Jvalide} onChange={(val: string) => {
                  setJvalide(val)
                }} />
                <FormInput label="Nombre de jour minimal" type="number" value={Jmin}
                onChange={(val: string) => {setJmin(val)
                }} />
                <FormInput label="Nombre de cours" type="number" value={Nbcours} onChange={(val: string) => {
                  setNbcours(val)
                }} />
              </div>
              <div className="validate">

                <Boutton handleClick={handleSave}> Enregister </Boutton>
                <Boutton > Effacer </Boutton>
                <Boutton handleClick={handleClose}> Fermer </Boutton>

              </div>

            </div>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}