import cls from "./About.module.scss";
import TypescriptIcon from "@/assets/icons/typescript.svg";

const About = () => {
  return (
    <div className={cls.About}>
      <TypescriptIcon width={100} height={100} />
      <h1>about</h1>
    </div>
  );
};

export default About;
