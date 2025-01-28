'use client'
import React from 'react'
import ButtonContainded from './ButtonContainded'
import { Theme } from '@mui/material'
import Title from '../Titles/Title'
import { storeUser } from '@/store/storeUser'

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
    
    const sendMessage = () => {
        console.log(user)
        clearUser()
        closeModal()
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
