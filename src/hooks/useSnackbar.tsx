import { useContext } from 'react';
  import{ AlertColor } from '@mui/material/Alert'; 
import { SnackbarContext } from '@/Components/Alert/SnackbarContext';

interface SnackbarContextValue {
    showSnackbar: (
      message: string,
      severity?: AlertColor, // Hacer severity opcional
      autoHideDuration?: number | null // Hacer duración opcional
    ) => void;
}

export const useSnackbar = (): SnackbarContextValue => {
    const context = useContext(SnackbarContext);
    if (!context) {
      // Error en tiempo de ejecución si se usa fuera del proveedor
      throw new Error('useSnackbar debe ser usado dentro de un SnackbarProvider');
    }
    return context;
  };