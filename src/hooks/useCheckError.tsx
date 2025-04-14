import { FirebaseError } from "firebase/app";
import { toast } from "react-toastify";

export const useCheckError = () => {
  return (error: FirebaseError) => {
    switch (error.code) {
      case "auth/email-already-in-use":
        toast.error("Такой пользователь уже существует");
        break;
      case "auth/invalid-email":
        toast.error("Вы ввели некорректный email");
        break;
      case "auth/weak-password":
        toast.error("Пароль должен содержать минимум 6 символов");
        break;
      default:
        toast.error("Произошла неизвестная ошибка: " + error.message);
    }
  };
};