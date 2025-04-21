import React from 'react'
import ButtonContainded from './ButtonContainded'
import { Theme } from '@mui/material'
import Title from '../Titles/Title'
import { storeUser } from '@/store/storeUser'
import { procesSendEmail } from '@/Services/SendEmail'
import { EMAIL_REGEX } from '@/utils/constants'
import { storeError } from '@/store/storeErrorForm'

interface ButtonProps {
    theme: Theme,
    textButton: string,
    closeModal: () => void
}



export default function ButtonContact({ theme, textButton, closeModal }:ButtonProps) {
    
    const {
        user,
        clearUser
    } = storeUser()
    
    const { error, updateError, clearError } = storeError()
    const sendMessage = async  () => {
        
        
        if (!user.email || !EMAIL_REGEX.test(user.email)) {
            updateError( {...error, email: 'El email no es valido'})
        }
        if (!user.name || (user.name === '' || user.name === undefined) ) {
            updateError({
              ...error,
              name: 'El campo nombre no puede estar vacio.'
            })
        }
        if (!user.phone || (user.phone === '' || user.phone === undefined) ) {
            updateError({
              ...error,
              phone: 'El campo teléfono no puede estar vacio.'
            })
        }
        if (!user.message || (user.message === '' || user.message === undefined) ) {
            updateError({
              ...error,
              message: 'El campo mensaje no puede estar vacio.'
            })
        }
        try {
            if(error.email || error.message || error.name || error.phone || error.genericError){
                console.log("Tiene errores")
                return;
            }
            const  result = await  procesSendEmail(
                {
                    emailPerson: user.email,
                    namePerson: user.name,
                    phone: user.phone,
                    subject: 'Contacto desde la web',
                    message: user.message
                }
            )
            clearError()
            clearUser()
            closeModal()
            console.log(result)
            // alert("Se envio el correo correctamente")
        } catch (error) {
            clearUser()
            closeModal()
            console.log(error)
            return;
        }
        
    }
    
  return (
    <ButtonContainded sx={{ 
        background: theme.palette.background.paper,
        width: '50%',
        height: '56px'
        }}
        onclick={sendMessage}
        >
        <Title
            text={textButton}
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
  )
}
