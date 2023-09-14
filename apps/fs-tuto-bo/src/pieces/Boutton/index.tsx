import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type Childrenbtn = {
  children: React.ReactNode,
  handleClick?: () => void
}

const Boutton: React.FC<Childrenbtn> = ({ children , handleClick}) => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handleClick} > {children} </Button>
    </Stack>
  );
}

export default Boutton;