import * as React from 'react';

import Modal from '@mui/material/Modal';
import { Box, Chip, Divider, Grid2,  Theme, useMediaQuery } from '@mui/material';
import Title from '../Titles/Title';
// import TexFieldBasic from '../textField/TexFieldBasic';
import BoxFooterModal from './BoxFooterModal';
import CloseIcon from '@mui/icons-material/Close';
import ButtonContact from '../Buttons/ButtonContact';
import useFormFields from '@/hooks/useFormFields';

const style = (theme: Theme, isMobil: boolean) => ({
  position: isMobil? 'fixed' : 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: theme.palette.background.default,
  border: `2px solid ${theme.palette.common.white}`,
  boxShadow: 24,
  p: 2,
})

const styleBox = (theme: Theme) => ({
    // maxWidth: '760px',
    bgcolor: theme.palette.background.default,
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center',
    gap: '8px',
    marginTop: '20px',
    marginBottom: '20px'
  })

interface ModalContactProps {
    theme: Theme,
    open: boolean,
    handleClose: () => void  
}

export default function ModalContact({ theme, open, handleClose } : ModalContactProps) {
    const isMobil = useMediaQuery("(max-width: 768px)")
    const fieldsToRender: string [] = ['nombre', 'telefono', 'correo', 'sms'];
    const { renderFields } = useFormFields({ isMobil, theme, fieldsToRender })
    
  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    style={{
        // width: '100%',
        // margin: '2rem'
        maxHeight: '100vh',
        overflowY: 'auto'
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
                        <article style={{ marginTop: '2px' }}>
                            <Title text={`Estamos aquí para orientarte. Si necesitas más información sobre nuestros servicios, 
                            contáctanos mediante el formulario y te responderemos lo antes posible. `} 
                                variant='subtitle1' component={'p'} style={{
                                fontFamily: '"Quicksand", sans-serif',
                                fontSize: isMobil? '18px' : '22px',
                                color: theme.palette.text.primary,
                                fontWeight: '300',
                                textAlign:'center',
                                lineHeight: isMobil? '10px' :'20px',
                                width: '560px',
                                height: 'auto',
                                textWrap: 'wrap'
                            }} />
                        </article>
                    }
                </>
            </header>
            <Box sx={styleBox} >
                {renderFields()}
                <ButtonContact
                    textButton='Enviar'
                    theme={theme} 
                    closeModal={handleClose}
                />
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
                        text: 'LLamanos:'
                    }}
                    subTitle='+1 (305) 607-6884'
                    isMobil={isMobil} 
                />
                <BoxFooterModal
                    theme={theme}
                    textImage={{
                        src: '/resources/images/Mail.png',
                        alt: 'Mail',
                        text: 'Correo:'
                    }}
                    subTitle='anyslacademy@gmail.com '
                    isMobil={isMobil} 
                />
            </footer>
        </Grid2>
    </Modal>
  );
}
