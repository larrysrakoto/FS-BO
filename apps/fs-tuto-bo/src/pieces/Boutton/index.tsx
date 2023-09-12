import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type Childrenbtn = {
  children: React.ReactNode
}

const Boutton: React.FC<Childrenbtn> = ({ children }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained"> {children} </Button>
    </Stack>
  );
}

export default Boutton;