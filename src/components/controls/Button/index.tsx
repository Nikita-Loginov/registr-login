import './index.scss'

interface ButtonProps {
    type : 'submit' | 'reset' | 'button';
    children : React.ReactNode;
}

export const Button:React.FC<ButtonProps> = ({type, children}) => {
    return <button className="button" type={type}>{children}</button>
}