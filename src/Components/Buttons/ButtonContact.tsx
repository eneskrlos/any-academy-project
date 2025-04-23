import React, { useEffect, useState } from 'react'
import ButtonContainded from './ButtonContainded'
import { Theme } from '@mui/material'
import Title from '../Titles/Title'
import { storeUser } from '@/store/storeUser'
import { procesSendEmail } from '@/Services/SendEmail'

import { storeError } from '@/store/storeErrorForm'
import { useSnackbar } from '@/hooks/useSnackbar'



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

    const [desabilitar, setDesabilitar] = useState(true)
    
    const { error, clearError } = storeError()
    const { showSnackbar } = useSnackbar();

    const sendMessage = async  () => {
        try {
            
           const  result = await  procesSendEmail(
                {
                    emailPerson: user.email,
                    namePerson: user.name,
                    phone: user.phone,
                    subject: 'Contacto desde la web',
                    messagePerson: user.message
                }
            )
                
            clearError()
            clearUser()
            if(result && result.code === 200) {
                showSnackbar(result.message, 'success');
            } else {
                showSnackbar('A ocurrido un error. Intente mas tarde', 'error');
            }
            closeModal()
        } catch (error) {
            clearUser()
            closeModal()
            console.log(error)
            return;
        }
        
    }

    
    
    useEffect(() => {
        if(error.email.trim() !== '' || error.message.trim() !== '' || error.name.trim() !== '' 
        || error.phone.trim() !== ''){
            setDesabilitar(true)
        } else {
            setDesabilitar(false)
        }
    }, [error])

    
    
  return (
    <>
        <ButtonContainded sx={{ 
                background: theme.palette.background.paper,
                width: '50%',
                height: '56px',
                
            }}
            disabled={desabilitar}
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
    </>

  )
}
