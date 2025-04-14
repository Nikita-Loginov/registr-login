import { useFormStore } from "../../store/form"

export const Home = () => {
    const {email} = useFormStore()

    return (
        <p style={{fontSize: '40px'}}>Привет , {email}</p>
    )
}