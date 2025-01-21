import React from 'react'
import { Grid2, IconButton } from '@mui/material'
/* import ButtonIcon from '../Buttons/ButtonIcon' */
import MenuIcon from '@mui/icons-material/Menu'
// import CloseIcon from '@mui/icons-material/Close';
import { /* Grid2,*/  Theme, useTheme } from '@mui/material'


import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import LinkButton from '../Buttons/LinkButton';
import AcordionMenu from '../Acordion/AcordionMenu';
import ModalContact from '../Modals/ModalContact';


const STYLE_BUTTOM_ICON = (theme: Theme) => ({
  fontSize: '30px',
  color: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.text.primary,
    cursor: "pointer"
  }
})

const STYLE_LIST = (theme: Theme) => ({
  fontSize: '20px',
  color: theme.palette.primary.main
})

/* const fraja = {
  width: '100%',
  height: '100px',
  backgroundColor: 'red'
} */



export default function NavMobile() {
    const theme = useTheme()
    const [state, setState] = React.useState(false);
    const svgWaveBlue = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1" d="M0,0L60,0C120,0,240,0,360,10.7C480,21,600,43,720,80C840,117,960,171,1080,170.7C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
      </svg>`

    const svgWaveBlueUrl = `data:image/svg+xml;base64,${btoa(svgWaveBlue)}`
    
      const toggleDrawer =
        (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            
          if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
              (event as React.KeyboardEvent).key === 'Shift')
          ) {
            return;
          }
    
          setState(open);
        };

        const [openModal, setOpenModal] = React.useState(false);
        const handleOpenModal = () => setOpenModal(true);
        const handleCloseModal = () => setOpenModal(false);
    
      const list = () => (
        <Box
          sx={{ width: 250, height: 'auto'}}
          role="presentation"
          //onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style={{backgroundColor: theme.palette.background.paper}}
        > 
            <List>
                <ListItem key={'Inicio'} disablePadding>
                  <ListItemButton onClick={toggleDrawer(false)}>
                    <LinkButton 
                      href="/" 
                      variant="inherit"
                      underline="none"
                      style={STYLE_LIST(theme)}
                      text="Inicio"
                    / >
                  </ListItemButton>
                </ListItem>
                <ListItem key={'Servicios'}  disablePadding>
                    <AcordionMenu />
                </ListItem>
                <ListItem key={'Sobre Any'}  disablePadding>
                    <ListItemButton onClick={toggleDrawer(false)}>
                      <LinkButton 
                        href="#sobreAny" 
                        variant="inherit"
                        underline="none"
                        style={STYLE_LIST(theme)}
                        text="Sobre Any"
                      / >
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Contacto'}  disablePadding onClick={handleOpenModal} >
                    <ListItemButton onClick={toggleDrawer(false)}>
                      <LinkButton 
                        href="#" 
                        variant="inherit"
                        underline="none"
                        style={STYLE_LIST(theme)}
                        text="Contacto"
                      / >
                    </ListItemButton>
              </ListItem>
            </List>
        </Box>
      );
    


  return (
    <>
        <div>
          <IconButton onClick={toggleDrawer(true)} style={STYLE_BUTTOM_ICON(theme)} >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={'right'}
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            transitionDuration={500}
            style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
          >
            <>
              <Grid2 sx={{
                backgroundImage: `url(${svgWaveBlueUrl})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '10%',
              }}>

              </Grid2>
              {list()}
            </>
          </SwipeableDrawer>
        
        </div>
        <ModalContact theme={theme} open={openModal} handleClose={handleCloseModal} />
    </>
  )
}
