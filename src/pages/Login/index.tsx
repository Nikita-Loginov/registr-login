import { FirebaseError } from "firebase/app";
import { toast } from 'react-toastify';

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { useCheckError } from "../../hooks/useCheckError";
import { Form } from "../../components/shared/Form";
import { useFormStore } from "../../store/form";
import { auth } from "../../firebase";

import "./index.scss";
import { Navigate, useNavigate } from "react-router";

export const Login = () => {
  const navigate = useNavigate();
  const checkError = useCheckError()

  const {
    password: passwordInput,
    email: emailInput,
    resetForm,
    setIsAuthenticated,
  } = useFormStore();
  console.log(auth.app.options.projectId)
  const createUserInServer = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailInput, passwordInput);
      await sendEmailVerification(userCredential.user);

      toast.success("Вы успешно зарегистрировались");

      resetForm();
      setIsAuthenticated(true);

      navigate("/", { replace: true })
    } catch (error) {
        if (error instanceof FirebaseError) {
            checkError(error)
        }
  
    }
  };

  return (
    <div className="login">
      <Form password={true} email={true} action="Login" actionfirebase={createUserInServer}/>
    </div>
  );
};
