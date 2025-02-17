import React from 'react'
import TexFieldBasic from '@/Components/textField/TexFieldBasic';
// import { User } from '@/interfaces/user';
import { storeUser } from '@/store/storeUser';
import { Theme } from '@mui/material';

interface UseFormFieldsProps {
    isMobil: boolean,
    theme: Theme,
    fieldsToRender: string[]
}

const useFormFields = ({isMobil, theme, fieldsToRender}:UseFormFieldsProps) => {
    /* const [fields, setFields] = useState<User>({
        name: '',
        phone: '',
        email: '',
        message: ''
    }) */
    const user = storeUser(state => state.user)
    const updateUser = storeUser( state => state.updateUser );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name,  value} = e.target;
        // setFields({ ...fields, [name]: value})
        updateUser({ ...user, [name]: value})
    };

    const renderFields = () => {
        const fieldComponent = [];
        if (fieldsToRender.includes('nombre')) {
            fieldComponent.push(
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
