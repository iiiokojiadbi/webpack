import cls from "./Shop.module.scss";
import JavascriptIcon from "@/assets/icons/javascript.svg";

const Shop = () => {
  return (
    <div className={cls.Shop}>
      <JavascriptIcon width={100} height={100} />
      <h1>shop</h1>
    </div>
  );
};

export default Shop;
