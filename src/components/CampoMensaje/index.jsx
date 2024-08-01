import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function CampoMensaje({type, placeholder, label}) {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        boxSizing: 'border-box',
        flexGrow: '2',

        '& > :not(style)': { 
            m: 1, 
            flexGrow: 2,
            minWidth: '320px',
            maxWidth: '800px',
          },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="outlined-multiline-static"
          label={label}
          placeholder={placeholder}
          type={type}
          multiline
          rows={4}
        />
    </Box>
  );
}
