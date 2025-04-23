"use client"

import React, {
    createContext,
    useState,
    useCallback,
    ReactNode, // Tipo para children
  } from 'react';
  import Snackbar from '@mui/material/Snackbar';
  import Alert, { AlertColor } from '@mui/material/Alert'; // Importar AlertColor
  
  // --- Definición de Tipos ---
  
  // 1. Tipo para el estado interno del Snackbar
  interface SnackbarState {
    open: boolean;
    message: string;
    severity: AlertColor; // Usar el tipo específico de MUI
    autoHideDuration: number | null; // autoHideDuration puede ser null
  }
  
  // 2. Tipo para el valor que proveerá el Contexto
  interface SnackbarContextValue {
    showSnackbar: (
      message: string,
      severity?: AlertColor, // Hacer severity opcional
      autoHideDuration?: number | null // Hacer duración opcional
    ) => void;
  }
  
  // 3. Tipo para las props del Proveedor (solo necesita children)
  interface SnackbarProviderProps {
    children: ReactNode;
  }
  
  // --- Implementación ---
  
  // 4. Crear el Contexto con el tipo definido (inicialmente null)
  export const SnackbarContext = createContext<SnackbarContextValue | null>(null);
  
  // 5. Crear el Proveedor del Contexto
  export function SnackbarProvider({ children }: SnackbarProviderProps) {
    const [snackbarState, setSnackbarState] = useState<SnackbarState>({
      open: false,
      message: '',
      severity: 'success', // Valor inicial por defecto
      autoHideDuration: 5000, // Valor inicial por defecto
    });
  
    // Función para mostrar el Snackbar (con tipos)
    const showSnackbar = useCallback(
      (
        message: string,
        severity: AlertColor = 'success', // Valor por defecto si no se provee
        autoHideDuration: number | null = 5000 // Valor por defecto
      ) => {
        setSnackbarState({
          open: true,
          message,
          severity,
          autoHideDuration,
        });
      },
      [] // useCallback para memoización
    );
  
    // Función para cerrar el Snackbar (con tipos para event y reason)
    const handleClose = (
      event?: React.SyntheticEvent | Event, // Evento puede ser opcional
      reason?: string
    ) => {
      if (reason === 'clickaway') {
        return;
      }
      setSnackbarState((prevState) => ({ ...prevState, open: false }));
    };
  
    // El valor que será proveído por el contexto
    const contextValue: SnackbarContextValue = {
        showSnackbar,
    };
  
    return (
      // 6. Proveer el contexto y renderizar el Snackbar
      <SnackbarContext.Provider value={contextValue}>
        {children} {/* Renderiza el resto de tu aplicación */}
  
        <Snackbar
          open={snackbarState.open}
          autoHideDuration={snackbarState.autoHideDuration}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          {/* Asegurarse que Alert recibe la severidad correcta */}
          <Alert
            onClose={handleClose}
            severity={snackbarState.severity}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {snackbarState.message}
          </Alert>
        </Snackbar>
      </SnackbarContext.Provider>
    );
  }