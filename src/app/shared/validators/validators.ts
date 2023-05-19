import { FormControl, ValidationErrors } from '@angular/forms';

export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

//Se supone que strider hace como referencia a un valor del backend donde haya uno usuario con ese nombre
//y se busca que se escriba otro nombre en el formulario
export const cantBeStrider = ( control: FormControl ): ValidationErrors | null => { 

  const value: string = control.value.trim().toLowerCase();

  if ( value === 'strider' ) {
    return {
      noStrider: true,
    }
  }

  return null;
}
