import * as Components from './styled'
import { useNavigate, Link} from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent,useEffect } from 'react';
import { Theme } from '../../Components/Theme';
import { SelectOption } from '../../Components/SelectOption';

export const FormStap2 = () => {

    const navigate =useNavigate();

    const{ state , dispatch }= useForm();
  
    const handleNextStep = () => {
  
      if(state.name !==''){
  
        navigate('/page3')
      }else{
    alert('selecione às opções abaixo  ')
      }
  
    }
    useEffect(() => {
      if(state.name ===''){
       navigate('/')

      }
      else{
      dispatch({
        type:FormActions.setCurrentStep,
        playload: 2
  
      })}
    }, [] )

    const setLevel = ( level: number) => {
      dispatch({

         type:FormActions.setLevel,
         playload: level
      })
    
    }
    return(
       <div>
          <Theme>
             <Components.Container>
               <p>passo {state.currentStep}</p> 
               <h1> {state.name}</h1>
               <h1> Selecione às opções abaixo  </h1>
               <hr/>         
            <SelectOption
            title='Júnior '
            description='Progamo à 1 ano ou mais '
            icon='👦'
            selected={ state.level === 0 }
            onClick ={() => setLevel(0)}       
            />
            <SelectOption
            title='Pleno'
            description='Progamo à 2 anos ou mais '
            icon=' 👨‍🦰'
            selected={ state.level === 1}
            onClick = {() => setLevel(1)}
            />
            <SelectOption
            title='Sênior'
            description=' Progamo à 5 anos ou mais '
            icon='🧔'
            selected={state.level === 2 }
            onClick={() =>setLevel(2) }
            />
           <Link 
           to='/'
           className='backButton'
           >
             Voltar
            </Link>
           <button 
           onClick={ handleNextStep}
            >
            Proximo 
             </button>
            </Components.Container>
          </Theme>
        </div>
    )
}