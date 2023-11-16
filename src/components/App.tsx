import { Link, Outlet } from "react-router-dom";
import cls from "./App.module.scss";
import nodejsImage from "@/assets/images/nodejs.png?url";

export const App = () => {
  return (
    <div className={cls.App}>
      <Link to="/about">about</Link>
      <br />
      <Link to="/shop">shop</Link>

      <div>
        <img src={nodejsImage} alt="nodejs image" />
      </div>

      <h1>{_PLATFORM_}</h1>

      <Outlet />
    </div>
  );
};
