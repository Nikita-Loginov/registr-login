

import { Link } from "react-router";
import { Button } from "../../controls/Button";

import "./index.scss";
import { useFormStore } from "../../../store/form";

interface FormProps {
  password?: boolean;
  email?: boolean;
  action: "Login" | "Sign in";
  actionfirebase : () => void;
}

export const Form: React.FC<FormProps> = ({ password, email, action, actionfirebase }) => {
  const {
    password: passwordInput,
    email: emailInput,
    setEmail,
    setPassword,
  } = useFormStore();

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    actionfirebase()
  };

  return (
    <form className="form" onSubmit={handleSumbit}>
      <div className="form__content">
        <div className="form__boxs">
          {email && (
            <div className="form__box">
              <label className="form__box-head">
                <span className="form__box-head-text">Email</span>

                <div className="input-box">
                  <input
                    type="email"
                    name="email"
                    placeholder="username@gmail.com"
                    value={emailInput}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </label>

              {/* <div className="form__box-details">
              <span className="form-error">Lorem, ipsum dolor.</span>
            </div> */}
            </div>
          )}

          {password && (
            <div className="form__box">
              <label className="form__box-head">
                <span className="form__box-head-text">Password</span>

                <div className="input-box">
                  <input
                    type="password"
                    required
                    autoComplete="email"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    value={passwordInput}
                  />
                </div>
              </label>

              <div className="form__box-details">
                {/* <span className="form-error">Lorem, ipsum dolor.</span> */}

                <Link to="/" className="form__box-details-text">
                  Forgot Password?
                </Link>
              </div>
            </div>
          )}
        </div>

        {action && <Button type="submit">{action}</Button>}
      </div>

      {/* <div className="form__details"></div> */}
    </form>
  );
};
