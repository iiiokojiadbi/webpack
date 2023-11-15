import { Link, Outlet } from "react-router-dom";
import cls from "./App.module.scss";

export const App = () => {
  return (
    <div className={cls.App}>
      <Link to="/about">about</Link>
      <br />
      <Link to="/shop">shop</Link>

      <h1>main</h1>

      <Outlet />
    </div>
  );
};
