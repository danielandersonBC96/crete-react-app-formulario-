import { Link } from 'react-router-dom';
import * as Components  from './styled';
import { ReactComponent as ProfileIcon } from '../../svgs/profile.svg';
import { ReactComponent as BookIcon } from '../../svgs/book.svg';
import { ReactComponent as MailIcon } from '../../svgs/mail.svg';


type Props= {
    title:string;
    description:string;
    icon:string;
    path:string;
    active:boolean;

}
export const SideBar= ({title,description,icon,path,active}:Props) => {
    return(
        <Components.Container>
        <Link to="">
            <Components.Info>
                <Components.Title>{title}</Components.Title>
                <Components.Description>{description}</Components.Description>
            </Components.Info>
            <Components.IconArea active={active}>
            {icon === 'profile' &&
                        <ProfileIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'book' &&
                        <BookIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'mail' &&
                        <MailIcon fill="white" width={24} height={24} />
                    }


            </Components.IconArea>
            <Components.Point active={active}> </Components.Point>

        </Link>

        </Components.Container>
    )
}