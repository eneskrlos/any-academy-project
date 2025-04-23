import React, { useEffect } from 'react'
import TexFieldBasic from '@/Components/textField/TexFieldBasic';
// import { User } from '@/interfaces/user';
import { storeError } from '@/store/storeErrorForm';
import { storeUser } from '@/store/storeUser';
import { Theme } from '@mui/material';
import { EMAIL_REGEX } from '@/utils/constants';
import { shallow } from 'zustand/shallow';


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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name,  value} = e.target;
        
        updateUser({ ...user, [name]: value})
       
    };

    useEffect(() => {
        const newErrors = {
            name: '',
            email: '',
            phone: '',
            message: '',
            genericError: ''
        };
        if (fieldsToRender.includes('nombre')) {
            if (!user.name?.trim()) { // Usar trim() para evitar espacios en blanco solos
                newErrors.name = 'El campo nombre no puede estar vacio.';
            }
        }
        if (fieldsToRender.includes('correo')) {
            if (!user.email?.trim()) {
                newErrors.email = 'El campo correo no puede ser vacio';
            } else if (!EMAIL_REGEX.test(user.email)) {
                newErrors.email = 'El email no es valido.';
            }
        }
        if (fieldsToRender.includes('telefono')) {
            if (!user.phone?.trim()) {
                newErrors.phone = 'El campo teléfono no puede estar vacio.';
            }
            else if (!/^\+?[\d-]+$/.test(user.phone)) {
                newErrors.phone = 'El teléfono debe contener solo números, un signo \'+\' opcional al inicio y guiones (-).';
            }
        }
        if (fieldsToRender.includes('sms')) {
            if (!user.message?.trim()) {
               newErrors.message = 'El campo mensaje no puede estar vacio.';
           }
       }
       const currentErrors = storeError.getState().error;

        // Compara los errores calculados con los actuales.
        //    Usa 'shallow' de Zustand u otra función de comparación superficial.
        //    ¡SOLO actualiza si son DIFERENTES!
        if (!shallow(newErrors, currentErrors)) {
            updateError(newErrors);
        }
    }, [user, updateError, fieldsToRender])
    

    const renderFields = () => {
        const fieldComponent = [];
        if (fieldsToRender.includes('nombre')) {
            fieldComponent.push(
                <div key={`nombre`} style={{display: 'flex',flexDirection: 'column',gap: '1px'}} >
                    <TexFieldBasic
                        key={`nombre`} 
                        id='nombre'
                        name='name' 
                        label='Nombre' 
                        required 
                        fullWidth={false}
                        variant='outlined'
                        placeholder='Felipe..' 
                        style={{ 
                            border: theme.palette.primary.main,
                            width: isMobil? '300px' :  '350px'
                        }}
                        onChange={handleChange}
                        value={user.name || ''}
                        error={!!error.name} 
                    />
                    
                    {error.name && (<span  style={{color: 'red', fontSize: '10px'}}>{error.name}</span>)}
                    {!error.name && (<span style={{ minHeight: '12px' }}></span>)}
                </div>
            )
        }
        if (fieldsToRender.includes('telefono')) {
            fieldComponent.push(
                <div key={`telefono`}  style={{display: 'flex',flexDirection: 'column',gap: '1px'}}>
                        <TexFieldBasic
                        key={`telefono`} 
                        id='telefono'
                        name='phone' 
                        label='Teléfono' 
                        required 
                        fullWidth={false}
                        variant='outlined'
                        placeholder='+1 (305) 607-6884'
                        style={{ 
                            border: theme.palette.primary.main,
                            width: isMobil? '300px' :'350px'
                        }}
                        onChange={handleChange}
                        value={user.phone || ''}
                        error={!!error.phone} 
                    />
                    {error.phone && (<span  style={{color: 'red', fontSize: '10px'}}>{error.phone}</span>)}
                    {!error.phone && (<span style={{ minHeight: '12px' }}></span>)}
                </div>
            )
        }
        if (fieldsToRender.includes('correo')) {
            fieldComponent.push(
                <div key={`correo`}  style={{display: 'flex',flexDirection: 'column',gap: '1px'}}>

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
                        value={user.email || ''}
                        error={!!error.email}
                    />
                    {error.email && (<span  style={{color: 'red', fontSize: '10px'}}>{error.email}</span>)}
                    {!error.email && (<span style={{ minHeight: '12px' }}></span>)}
                </div>
            )
        }
        if (fieldsToRender.includes('sms')) {
            fieldComponent.push(
                <div key={`sms`}  style={{display: 'flex',flexDirection: 'column',gap: '1px'}} >
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
                        value={user.message || ''}
                        error={!!error.message}
                    />
                    {error.message && (<span  style={{color: 'red', fontSize: '10px'}}>{error.message}</span>)}
                    {!error.message && (<span style={{ minHeight: '12px' }}></span>)}
                </div>
            )
        }
        
        
        return fieldComponent;
    }    
  return { user, renderFields}
}

export default useFormFields;
