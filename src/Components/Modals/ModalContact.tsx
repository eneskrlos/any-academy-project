import * as React from 'react';

import Modal from '@mui/material/Modal';
import { Box, Chip, Divider, Grid2,  Theme, useMediaQuery } from '@mui/material';
import Title from '../Titles/Title';
import TexFieldBasic from '../textField/TexFieldBasic';
import ButtonContainded from '../Buttons/ButtonContainded';
import BoxFooterModal from './BoxFooterModal';
import CloseIcon from '@mui/icons-material/Close';

const style = (theme: Theme, isMobil: boolean) => ({
  position: isMobil? 'fixed' : 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: theme.palette.background.default,
  border: `2px solid ${theme.palette.common.white}`,
  boxShadow: 24,
  p: 4,
})

const styleBox = (theme: Theme) => ({
    // maxWidth: '760px',
    bgcolor: theme.palette.background.default,
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center',
    gap: 2,
    marginTop: '40px',
    marginBottom: '40px'
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
    style={{
        width: '100%',
        margin: '2rem' 
    }}
    >
        
        <Grid2 sx={style(theme, isMobil)}>
        {
           isMobil && <div style={{
                position: 'absolute',
                top: '2%',
                right: '10%',
                width: '20px',
            
            }}>
                <CloseIcon color={'primary'} onClick={handleClose} />
            </div>
        }
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
                    {
                        isMobil ?
                        <></> :
                        <article style={{ marginTop: '15px' }}>
                            <Title text={`Estamos aquí para orientarte. Si necesitas más información sobre nuestros servicios, 
                            contáctanos mediante el formulario y te responderemos lo antes posible. `} 
                                variant='subtitle1' component={'p'} style={{
                                fontFamily: '"Quicksand", sans-serif',
                                fontSize: isMobil? '18px' : '22px',
                                color: theme.palette.text.primary,
                                fontWeight: '300',
                                textAlign:'center',
                                lineHeight: isMobil? '20px' :'30px',
                                width: '560px',
                                height: 'auto',
                                textWrap: 'wrap'
                            }} />
                        </article>
                    }
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
                        width: isMobil? '300px' :  '350px'
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
                        width: isMobil? '300px' :'350px'
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
                        width:isMobil? '300px' : '350px'
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
                        width:isMobil? '300px' : '350px'
                    }} 
                />
                <ButtonContainded sx={{ 
                    background: theme.palette.background.paper,
                    width: '50%',
                    height: '56px'
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
            <footer>
                <Divider>
                    <Chip label="O" size="small" />
                </Divider>
                <BoxFooterModal
                    theme={theme}
                    textImage={{
                        src: '/resources/images/Phone.png',
                        alt: 'Phone',
                        text: 'Lamanos'
                    }}
                    subTitle='+1 (305) 607-6884'
                    isMobil={isMobil} 
                />
                <BoxFooterModal
                    theme={theme}
                    textImage={{
                        src: '/resources/images/Mail.png',
                        alt: 'Mail',
                        text: 'Correo'
                    }}
                    subTitle='anyslacademy@gmail.com '
                    isMobil={isMobil} 
                />
            </footer>
        </Grid2>
    </Modal>
  );
}
