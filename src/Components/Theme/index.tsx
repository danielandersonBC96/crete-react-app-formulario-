import { ReactNode } from "react";
import { Header} from "../Header";
import * as Components from "./styled"

type Props = {

    children: ReactNode;
}

export const Theme = ( {children}:Props ) => {

    return(
        <Components.Container>
            <Components.Area>
                <Header/>
                <Components.Steps>
                    <Components.Sidebar>

                    </Components.Sidebar>
                    <Components.Page>
                        
                   
                    {children}
                    </Components.Page>
                </Components.Steps>
            </Components.Area>
        </Components.Container>


    )
}