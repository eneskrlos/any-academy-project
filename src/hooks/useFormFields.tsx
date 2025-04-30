import React, { useCallback, useEffect } from 'react'
import TexFieldBasic from '@/Components/textField/TexFieldBasic';
// import { User } from '@/interfaces/user';
import { storeError } from '@/store/storeErrorForm';
import { storeUser } from '@/store/storeUser';
import { Theme } from '@mui/material';
import { EMAIL_REGEX } from '@/utils/constants';
import { shallow } from 'zustand/shallow';
import { storeTouched } from '@/store/storeTouchedFrom';


interface UseFormFieldsProps {
    isMobil: boolean,
    theme: Theme,
    fieldsToRender: string[]
}



const useFormFields = ({isMobil, theme, fieldsToRender}:UseFormFieldsProps) => {
    
    const error = storeError(state => state.error)
    const updateError = storeError( state => state.updateError );

    const touched = storeTouched(state => state.touched)
    const updateTouched = storeTouched( state => state.updateTouched );
   
    const user = storeUser(state => state.user)
    const updateUser = storeUser( state => state.updateUser );

    /* const [touched, setTouched] = useState<Record<string, boolean>>({name: false,
        email: false,
        phone: false,
        message: false}) */

    
    // UseCallback para memoizar la función de validación
    const validate = useCallback(
      () => {
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
                newErrors.email = 'El correo no es valido.';
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
       return newErrors;
      },
      [user, fieldsToRender],
    )
    

    useEffect(() => {
        const newErrors = validate();
        const currentErrors = storeError.getState().error;

        // Compara los errores calculados con los actuales.
        //    Usa 'shallow' de Zustand u otra función de comparación superficial.
        //    ¡SOLO actualiza si son DIFERENTES!
        if (!shallow(newErrors, currentErrors)) {
            updateError(newErrors);
        }
    }, [user, fieldsToRender, validate, updateError])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name,  value} = e.target;
        
        updateUser({ ...user, [name]: value})
       
    };
    // handle para evento onblur
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        // Marca el campo como "tocado" cuando pierde el foco
        updateTouched({ ...touched, [name]: true });
    };
    

    const renderFields = () => {
        const fieldComponent = [];
        if (fieldsToRender.includes('nombre')) {
            const showError = !!error.name && !!touched.name;
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
                        onBlur={handleBlur}
                        value={user.name || ''}
                        error={showError} 
                    />
                    
                    {showError && (<span  style={{color: 'red', fontSize: '10px'}}>{error.name}</span>)}
                    {!showError && (<span style={{ minHeight: '12px' }}></span>)}
                </div>
            )
        }
        if (fieldsToRender.includes('telefono')) {
            const showError = !!error.phone && !!touched.phone;
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
                        placeholder='+1-305-607-6884'
                        style={{ 
                            border: theme.palette.primary.main,
                            width: isMobil? '300px' :'350px'
                        }}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={user.phone || ''}
                        error={showError} 
                    />
                    {showError && (<span  style={{color: 'red', fontSize: '10px'}}>{error.phone}</span>)}
                    {!showError && (<span style={{ minHeight: '12px' }}></span>)}
                </div>
            )
        }
        if (fieldsToRender.includes('correo')) {
            const showError = !!error.email && !!touched.email;
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
                        onBlur={handleBlur}
                        value={user.email || ''}
                        error={showError}
                    />
                    {showError && (<span  style={{color: 'red', fontSize: '10px'}}>{error.email}</span>)}
                    {!showError && (<span style={{ minHeight: '12px' }}></span>)}
                </div>
            )
        }
        if (fieldsToRender.includes('sms')) {
            const showError = !!error.message && !!touched.message;
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
                        onBlur={handleBlur}
                        value={user.message || ''}
                        error={showError}
                    />
                    {showError && (<span  style={{color: 'red', fontSize: '10px'}}>{error.message}</span>)}
                    {!showError && (<span style={{ minHeight: '12px' }}></span>)}
                </div>
            )
        }
        
        
        return fieldComponent;
    }    
  return { user, renderFields}
}

export default useFormFields;
