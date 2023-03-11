
import  * as Components from './styled'
import { useNavigate, Link} from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent,useEffect } from 'react';
import { Theme } from '../../Components/Theme';
import { SelectOption } from '../../Components/SelectOption';

export const  FormStap3 = () => {


  const navigate =useNavigate();

  const{ state , dispatch }= useForm();

  const handleNextStep = () => {
    
 

    if(state.name !=='' &&  state.github !==''){
      console.log(state)
     
    
    }else{
      alert('preencha seus dados')
    

    }

  }
   
    

  useEffect(() => {
    if(state.name ===''){
     navigate('/')

    }
    else{
    dispatch({
      type:FormActions.setCurrentStep,
      playload: 3

    })}
  }, [] )

  const handleGithubChange = ( e:ChangeEvent<HTMLInputElement>) => {

    dispatch({
      type:FormActions.setGitHub,
      playload:e.target.value
    })
  }
  

  const handleEmailChange = ( e:ChangeEvent<HTMLInputElement>) => {

    dispatch({
      type:FormActions.setEmail,
      playload:e.target.value
    })
  }

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
             <h1> Dados do Usuário  </h1>
             <hr/>  

           
       
          <label>
            e-mail
           <input
           type='email'
           value={state.email}
             onChange={handleEmailChange}
           />
         </label>
          <label>
              Git 
                <input
                type='url'
                onChange={ handleGithubChange}
                 defaultValue={state.github}
                 />  
            
               </label>

         
             <Link 
           to='/'
           className='backButton'
           >
             Voltar
            </Link>    
         <button 
         onClick={ handleNextStep}
          >
          Finalizar
           </button>
          </Components.Container>
        </Theme>
      </div>
  )
}