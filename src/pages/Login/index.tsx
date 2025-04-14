import { FirebaseError } from "firebase/app";
import { toast } from 'react-toastify';

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { useCheckError } from "../../hooks/useCheckError";
import { Form } from "../../components/shared/Form";
import { useFormStore } from "../../store/form";
import { auth } from "../../firebase";

import "./index.scss";

export const Login = () => {

  const checkError = useCheckError()

  const createUserInServer = async () => {
    try {
      await createUserWithEmailAndPassword(auth, emailInput, passwordInput);

      toast.success("Вы успешно зарегистрировались");

      resetForm();
      setIsAuthenticated();
    } catch (error) {
        if (error instanceof FirebaseError) {
            checkError(error)
        }
  
    }
  };

  const {
    password: passwordInput,
    email: emailInput,
    resetForm,
    setIsAuthenticated,
  } = useFormStore();

  return (
    <div className="login">
      <Form password={true} email={true} action="Login" actionfirebase={createUserInServer}/>
    </div>
  );
};
