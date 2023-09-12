import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormInput from '../../pieces/FormIntput'
import './Modal.scss'
import Boutton from '../../pieces/Boutton'
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
            Ajouter un Abonnnemnet
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="form-content">
              <div className="form">
                <FormInput label="label" type="text"/>
                <FormInput label="prix" type="text"/>
                <FormInput label="Nombre de Jours de validité" type="number"/>
                <FormInput label="Nombre de jour minimal" type="number"/>
                <FormInput label="Nombre de cous" type="number"/>
              </div>
              <div className="validate">

                <Boutton> Enregister </Boutton>
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