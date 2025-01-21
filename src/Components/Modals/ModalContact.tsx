import * as React from 'react';

import Modal from '@mui/material/Modal';
import { Box, Grid2, Theme, useMediaQuery } from '@mui/material';
import Title from '../Titles/Title';
import TexFieldBasic from '../textField/TexFieldBasic';
import ButtonContainded from '../Buttons/ButtonContainded';

const style = (theme: Theme) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: theme.palette.background.paper,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
})

const styleBox = (theme: Theme) => ({
    // maxWidth: '760px',
    bgcolor: theme.palette.background.paper,
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center',
    gap: 4,
    marginTop: '60px',
    marginBottom: '60px'
  })

interface ModalContactProps {
    theme: Theme,
    open: boolean,
    handleClose: () => void  
}

export default function ModalContact({ theme, open, handleClose } : ModalContactProps) {
  
  const isMobil = useMediaQuery("(max-width: 768px)")
  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
        <Grid2 sx={style}>
            <header>
                <>
                    <Title
                        text={'Conéctate con Nosotros'}
                        variant='h3'
                        style={{
                            fontFamily: '"Quicksand", sans-serif',
                            fontSize: isMobil ? '22px' : '45px',
                            color: theme.palette.text.secondary,
                            fontWeight: '500',
                            textAlign: 'center',
                            lineHeight: 'normal',
                            width: '100%',
                            textWrap: 'wrap'
                        }}
                    />
                    <article style={{ marginTop: '32px' }}>
                        <Title text={`Estamos aquí para orientarte. Si necesitas más información sobre nuestros servicios, 
                        contáctanos mediante el formulario y te responderemos lo antes posible. `} 
                            variant='subtitle1' component={'p'} style={{
                            fontFamily: '"Quicksand", sans-serif',
                            fontSize: isMobil? '18px' : '22px',
                            color: theme.palette.text.primary,
                            fontWeight: '300',
                            textAlign:'center',
                            lineHeight: isMobil? '20px' :'30px',
                            maxWidth: '560px',
                            height: '84px',
                            textWrap: 'wrap'
                        }} />
                    </article>
                </>
            </header>
            <Box sx={styleBox} >
                <TexFieldBasic 
                    id='nombre' 
                    label='Nombre' 
                    required 
                    fullWidth={false}
                    variant='outlined' 
                    style={{ 
                        border: theme.palette.primary.main,
                        maxWidth: '700px',
                        minWidth: '350px'
                    }} 
                />
                <TexFieldBasic 
                    id='telefono' 
                    label='Télefono' 
                    required 
                    fullWidth={false}
                    variant='outlined' 
                    style={{ 
                        border: theme.palette.primary.main,
                        maxWidth: '700px',
                        minWidth: '350px'
                    }} 
                />
                <TexFieldBasic 
                    id='correo' 
                    label='Correo Electrónico' 
                    required 
                    fullWidth={false}
                    variant='outlined' 
                    style={{ 
                        border: theme.palette.primary.main,
                        maxWidth: '700px',
                        minWidth: '350px'
                    }} 
                />
                <TexFieldBasic 
                    id='sms' 
                    label='Mensaje' 
                    required 
                    fullWidth={false}
                    multiline
                    rows={4}
                    variant='outlined' 
                    style={{ 
                        border: theme.palette.primary.main,
                        maxWidth: '700px',
                        minWidth: '350px'
                    }} 
                />
                <ButtonContainded sx={{ 
                    background: '#F6F6F6',
                    width: '50%',
                    height: '56px',
                    marginTop: '61px'
                 }}>
                    <Title
                        text='Enviar'
                        variant='h2'
                        component={'h2'}
                        style={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontSize: '22px',
                        color: '#A9ACAF',
                        fontWeight: '600',
                        textAlign: 'center',
                        lineHeight: '20px',
                        width: '100%',
                        textWrap: 'wrap',
                        textTransform: 'capitalize'
                        
                        }} 
                    />
                </ButtonContainded>
            </Box>
        </Grid2>
    </Modal>
  );
}
