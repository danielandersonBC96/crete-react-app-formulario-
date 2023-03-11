import { Link } from 'react-router-dom';
import * as Components  from './styled';



type Props= {
    title:string;
    description:string;
    icon:string;
    path:string;
    active:boolean;

}
export const SidebarItem = ({ title, description, icon, path, active }: Props) => {
    return (
        <Components.Container>
            <Link to={path}>
                <Components.Info>
                    <Components.Title>{title}</Components.Title>
                    <Components.Description>{description}</Components.Description>
                </Components.Info>
                <Components.IconArea active={active}>
                   
                </Components.IconArea>
                <Components.Point active={active}></Components.Point>
            </Link>
        </Components.Container>
    );
                }