//context , reducer , provider , hook 

import React from "react";
import { createContext,useContext,useReducer, ReactNode  } from "react";

//Context

const FormContext = createContext <ContextType | undefined >( undefined);

type State = {
    currentStep: number;
    name:string ;
    level: 0 | 1 ;
    email:string;
    github:string;

}

type ContextType = {

    state: State;
    dispatch: ( action: Action) => void

}

type Action = {

    type: FormActions;
    playload: any ;
}

type FormeProvideProps = {

    children: ReactNode ;

}

const initalDate: State = {
   currentStep:0,
   name:'',
   level:0,
   email:'',
   github:'',


}

// reduce 

 export enum FormActions {
    setCurrentStep,
    setName, 
    setLevel,
    setEmail,
    setGitHub

}

const FormReduce = ( state:State,action:Action ) => {

    switch(action.type ){
        case FormActions.setCurrentStep:
            return{...state, currentStep:action.playload}
            case FormActions.setName:
            return{...state, name:action.playload}
            case FormActions.setLevel:
            return{...state, level:action.playload} 
            case FormActions.setEmail:
            return{ ... state,email:action.playload}  
            case FormActions.setGitHub:
            return{...state, gitHub:action.playload}
            
            default:
                return state; 


    }
}

//Provider 
export const FormProvider = ({children}: FormeProvideProps) => {
    const [state, dispatch] = useReducer(FormReduce, initalDate);
    const value = { state, dispatch };
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

//Context Hook

export const useForm = ()  => {
    
    const context = useContext(FormContext);

    if ( context === undefined) {

        throw new Error ( ' useForme precisa ser usado dentro do FormProvider ')

    }

    return context; 

} 

