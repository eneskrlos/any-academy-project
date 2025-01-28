import TexFieldBasic from '@/Components/textField/TexFieldBasic';
import { Theme } from '@mui/material';
import React, { useState } from 'react'

interface UseFormFieldsProps {
    isMobil: boolean,
    theme: Theme,
    fieldsToRender: string[]
}

const useFormFields = ({isMobil, theme, fieldsToRender}:UseFormFieldsProps) => {
    const [fields, setFields] = useState({
        nombre: '',
        telefono: '',
        correo: '',
        sms: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id,  value} = e.target;
        setFields({ ...fields, [id]: value})
    };

    const renderFields = () => {
        const fieldComponent = [];
        if (fieldsToRender.includes('nombre')) {
            fieldComponent.push(
                <TexFieldBasic
                key={`nombre`} 
                id='nombre' 
                label='Nombre' 
                required 
                fullWidth={false}
                variant='outlined' 
                style={{ 
                    border: theme.palette.primary.main,
                    width: isMobil? '300px' :  '350px'
                }}
                onChange={handleChange}
                value={fields.nombre} 
            />
            )
        }
        if (fieldsToRender.includes('telefono')) {
            fieldComponent.push(
                <TexFieldBasic
                key={`telefono`} 
                id='telefono' 
                label='Télefono' 
                required 
                fullWidth={false}
                variant='outlined' 
                style={{ 
                    border: theme.palette.primary.main,
                    width: isMobil? '300px' :'350px'
                }}
                onChange={handleChange}
                value={fields.telefono} 
            />
            )
        }
        if (fieldsToRender.includes('correo')) {
            fieldComponent.push(
                <TexFieldBasic
                key={`correo`} 
                id='correo' 
                label='Correo Electrónico' 
                required 
                fullWidth={false}
                variant='outlined' 
                style={{ 
                    border: theme.palette.primary.main,
                    width:isMobil? '300px' : '350px'
                }} 
                onChange={handleChange}
                value={fields.correo}
            />
            )
        }
        if (fieldsToRender.includes('sms')) {
            fieldComponent.push(
                <TexFieldBasic
                key={`sms`} 
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
                onChange={handleChange}
                value={fields.sms}
            />
            )
        }
        
        
        return fieldComponent;
    }    
  return { fields, renderFields}
}

export default useFormFields;
