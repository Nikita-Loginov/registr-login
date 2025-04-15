import { Form } from "../../components/shared/Form";

import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useFormStore } from "../../store/form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { FirebaseError } from "firebase/app";

import "./index.scss";

export const SignIn = () => {
  const navigate = useNavigate();
  const {
    password: passwordInput,
    email: emailInput,
    resetForm,
    setIsAuthenticated,
  } = useFormStore();
  console.log(auth.app.options.projectId);

  const exitsUser = async () => {
    const testEmail = "test1@test.com";
    const testPassword = "testtest";

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailInput,
        passwordInput
      );

      toast.success("Вход выполнен!");

      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        toast.error("Неверные учетные данные. Проверьте email и пароль");
      } else {
        toast.error(`Ошибка входа: ${error.message}`);
      }
    }
  };

  return (
    <div className="signIn">
      <Form
        password={true}
        email={true}
        action="Sign in"
        actionfirebase={exitsUser}
      />
    </div>
  );
};
