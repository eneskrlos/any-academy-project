import * as React from 'react';
import { Box, ThemeProvider } from '@mui/material';

export default function BoxLogo() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC',
          },
        },
      }}
    >
      <Box
        sx={{
          width: 30,
          height: 30,
          borderRadius: 1,
          background: `linear-gradient(200deg, #e1e9f1, #007FFF)`,
          transform: 'rotate(1130deg)',
          transition: 'background-color 0.3s, transform 0.3s',
          '&:hover': {
            background: `linear-gradient(200deg, #e1e9f1, #007FFF)`,
            transform: 'rotate(1130deg) scale(1.1)',
          },
        }}
      />
    </ThemeProvider>
  );
}
