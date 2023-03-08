import * as Components from './styled'
import {  useNavigate} from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent,useEffect } from 'react';
import { Theme } from '../../Components/Theme';

export const FormStap2 = () => {

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
        playload: 2
  
      })
    }, [] )
  
    const handleNameChange = (e:ChangeEvent<HTMLInputElement>) =>{
  
      dispatch({
        type: FormActions.setName,
        playload:e.target.value
  
      }) 
    }
    return(
       <div>
          <Theme>
             <Components.Container>
               <p>Passo e {state.currentStep}</p> 
               <h1> Seu nome completo </h1>
               <hr/>
             </Components.Container>
          </Theme>
        </div>
    )
}