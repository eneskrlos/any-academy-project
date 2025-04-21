import React from 'react'
import TexFieldBasic from '@/Components/textField/TexFieldBasic';
// import { User } from '@/interfaces/user';
import { storeError } from '@/store/storeErrorForm';
import { storeUser } from '@/store/storeUser';
import { Theme } from '@mui/material';
import { EMAIL_REGEX } from '@/utils/constants';


interface UseFormFieldsProps {
    isMobil: boolean,
    theme: Theme,
    fieldsToRender: string[]
}



const useFormFields = ({isMobil, theme, fieldsToRender}:UseFormFieldsProps) => {
    
    const error = storeError(state => state.error)
    const updateError = storeError( state => state.updateError );
   
    const user = storeUser(state => state.user)
    const updateUser = storeUser( state => state.updateUser );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name,  value} = e.target;
        if (name === 'email' && !EMAIL_REGEX.test(user.email)) {
            updateError({
                ...error,
                email: 'El email no es valido.'
              }) 
                 
        }
        if (name === 'name' && (user.name === '' || user.name === undefined) ) {
            updateError({
              ...error,
              name: 'El campo nombre no puede estar vacio.'
            })
            
        }
        if (name === 'phone' && (user.phone === '' || user.phone === undefined) ) {
            updateError({
              ...error,
              phone: 'El campo teléfono no puede estar vacio.'
            })
            
        }
        if (name === 'message' && (user.message === '' || user.message === undefined) ) {
            updateError({
              ...error,
              message: 'El campo mensaje no puede estar vacio.'
            })
            
        }
        if(error.email || error.message || error.name || error.phone || error.genericError){
            console.log("Tiene errores")
        } else {
            console.log("No tiene errores")
            updateUser({ ...user, [name]: value})
        }
    };

    const renderFields = () => {
        const fieldComponent = [];
        if (fieldsToRender.includes('nombre')) {
            fieldComponent.push(
                <div key={`nombre`} style={{display:"flex", flexDirection:"column", gap: "1px"}} >
                        <TexFieldBasic
                        key={`nombre`} 
                        id='nombre'
                        name='name' 
                        label='Nombre' 
                        required 
                        fullWidth={false}
                        variant='outlined' 
                        style={{ 
                            border: theme.palette.primary.main,
                            width: isMobil? '300px' :  '350px'
                        }}
                        onChange={handleChange}
                        value={user.name} 
                    />
                    
                    {error.name && (<span  style={{color: 'red'}}>{error.name}</span>)}
                </div>
            )
        }
        if (fieldsToRender.includes('telefono')) {
            fieldComponent.push(
                <TexFieldBasic
                key={`telefono`} 
                id='telefono'
                name='phone' 
                label='Teléfono' 
                required 
                fullWidth={false}
                variant='outlined' 
                style={{ 
                    border: theme.palette.primary.main,
                    width: isMobil? '300px' :'350px'
                }}
                onChange={handleChange}
                value={user.phone} 
            />
            )
        }
        if (fieldsToRender.includes('correo')) {
            fieldComponent.push(
                <TexFieldBasic
                key={`correo`} 
                id='correo'
                name='email'
                label='Correo electrónico' 
                required 
                fullWidth={false}
                variant='outlined' 
                style={{ 
                    border: theme.palette.primary.main,
                    width:isMobil? '300px' : '350px'
                }} 
                onChange={handleChange}
                value={user.email}
            />
            )
        }
        if (fieldsToRender.includes('sms')) {
            fieldComponent.push(
                <TexFieldBasic
                key={`sms`} 
                id='sms' 
                name='message'
                label='Mensaje'
                placeholder='Tengo una duda en...' 
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
                value={user.message}
            />
            )
        }
        
        
        return fieldComponent;
    }    
  return { user, renderFields}
}

export default useFormFields;
