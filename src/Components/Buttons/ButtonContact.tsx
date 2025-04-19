import React from 'react'
import ButtonContainded from './ButtonContainded'
import { Theme } from '@mui/material'
import Title from '../Titles/Title'
import { storeUser } from '@/store/storeUser'
import { procesSendEmail } from '@/Services/SendEmail'

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
    console.log(user)
    const sendMessage = () => {
        
        console.log(user.message)
        try {
            const  result = procesSendEmail(
                {
                    emailPerson: user.email,
                    namePerson: user.name,
                    phone: user.phone,
                    subject: 'Contacto desde la web',
                    message: user.message
                }
            )
            console.log(result)
            clearUser()
            closeModal()
            alert("Se envio el correo correctamente")
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
