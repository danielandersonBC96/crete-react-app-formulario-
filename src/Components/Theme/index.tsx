import { ReactNode } from "react";
import { Header} from "../Header";
import { SidebarItem } from "../SideBar";
import * as Components from "./styled"
import { useForm } from '../../contexts/FormContext';


type Props = {

    children: ReactNode;
}

export const Theme = ( {children}:Props ) => {
    const { state } = useForm();
    return(
        <Components.Container>
            <Components.Area>
                <Header/>
                <Components.Steps>
                    <Components.Sidebar>
                       <SidebarItem
                       title="Pessoal"
                       description=" Se identifique "
                       icon="profile "
                      path='/'
                       active={state.currentStep === 1}
                       />
                       <SidebarItem
                         title="Peofisional"
                         description=" Seu  Nivel"
                         icon="book "
                         path="/step2"
                         active={state.currentStep === 2}
                       />
                       <SidebarItem
                       title="Contatos"
                       description='Seus Dados'
                       icon=" mail"
                       path="/step3"
                       active={state.currentStep === 3} 
                       />
                    </Components.Sidebar>
                    <Components.Page>'
                        
                   
                    {children}
                    </Components.Page>
                </Components.Steps>
            </Components.Area>
        </Components.Container>


    )
    }