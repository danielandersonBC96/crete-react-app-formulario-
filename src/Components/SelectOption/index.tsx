import * as Componentes from './styled';
import React from 'react'

type Props = {
    title:string;
    description:string;
    icon:string;
    selected:boolean;
    onClick: () => void;
}


export const SelectOption = ( {title,description,icon, selected,onClick}:Props) => {

    return(
        <Componentes.Container onClick={onClick} selected={selected}>
            <div>
                  <Componentes.Icon> {icon}</Componentes.Icon>
                  <Componentes.Info> {title}</Componentes.Info>
                  <Componentes.Description> {description}</Componentes.Description>
            </div>
        </Componentes.Container>
    )
}