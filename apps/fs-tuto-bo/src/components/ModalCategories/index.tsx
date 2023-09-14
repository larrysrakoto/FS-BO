import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormInput from '../../pieces/FormIntput'
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
  const [label, setlabel] = React.useState('')
  const [icon, seticon] = React.useState('')
  
// const handleSave = () => {

// }
  // React.useEffect(() => {
  //   console.log({icon});
  // }, [icon])
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
            Ajouter un Cours
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="form-content">
              <div className="form">
                <FormInput label="label" type="text" value={label} onChange={(val:string) => {
                  setlabel(val)
                  console.log(label);
                } }/>
                <FormInput label="Icon" type="file" accept="image/*" value={icon} onChange={(e) => seticon(e)} />
                
              </div>
              <div className="validate">

                <Boutton> Enregister </Boutton>
                <Boutton > Annuler </Boutton>
                <Boutton handleClick={handleClose}> Fermer </Boutton>

              </div>

            </div>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}