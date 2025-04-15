import { useFormStore } from "../../store/form";

interface HomeProps {
    email? : string | null;
}

export const Home:React.FC<HomeProps> = ({email}) => {

    
    return (
        <p style={{fontSize: '40px'}}>Привет , {email || 'пользователь'}</p>
    )
}