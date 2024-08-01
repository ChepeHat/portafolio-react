import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function CampoTexto({type, required, placeholder, label}) {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        boxSizing: 'border-box',

        '& > :not(style)': { 
            m: 1, 
            flexGrow: 1 ,
            minWidth: '320px',
            maxWidth: '800px',
          },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        id="outlined-basic" 
        label={label} 
        type={type}
        required={required}
        placeholder={placeholder}
        variant="outlined" />
    </Box>
  );
}
