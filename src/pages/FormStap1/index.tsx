import {  useNavigate} from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import * as Components from './styled'
import { Theme } from '../../Components/Theme';
import { ChangeEvent,useEffect } from 'react';

export const FormStep1 = ( ) => {

  const navigate =useNavigate();

  const{ state , dispatch }= useForm();

  const handleNextStep = () => {

    if(state.name !==''){

      navigate('/page2')
    }else{
      alert('preencha seu some ')
    }

  }

  useEffect(() => {
    dispatch({
      type:FormActions.setCurrentStep,
      playload: 1

    })
  }, [] )

  const handleNameChange = (e:ChangeEvent<HTMLInputElement>) =>{

    dispatch({
      type: FormActions.setName,
      playload:e.target.value

    })

    
  }

    return (
      <Theme>
        <Components.Container>

              <p>Passo 1 {state.currentStep}</p> 
              <h1> Seu nome completo </h1>
               <hr/>
              <label>
                Seu nome completo 
                <input
                type='text'
                autoFocus
                value={state.name}
                onChange={handleNameChange}
                />
              </label>
              <button onClick={ handleNextStep}>
                Proximo 
              </button>

         </Components.Container>
      </Theme>
         
    )

}