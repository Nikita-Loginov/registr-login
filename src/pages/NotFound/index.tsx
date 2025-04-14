import { Link } from "../../components/controls/Link";

import "./index.scss";

export const NotFound = () => {
  return (
    <div className="notFound">
      <div className="container">
        <div className="notFound__inner">
          <div className="notFound__content">
            <div className="notFound__textbox">
              Такой страницы не существует
            </div>

            <Link href="/">
              Перейти на главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
