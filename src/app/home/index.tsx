import Menu from "../../layouts/Menu";
import Description from "./components/Description";
import ImgHome from "./components/ImgHome";
import ImgCode from "../../assets/home-j.png";
import { Proyectos } from "./components/Proyectos";
import imgLogo from "/logo.svg";
const Home = () => {
  return (
    <>
      <section id="#" className="w-[80%] flex flex-col h-screen m-auto">
        <Menu />
        <div className="mt-12 w-full h-full flex justify-center items-center">
          <div className="flex gap-4 w-full">
            <Description />
            <ImgHome />
          </div>
        </div>
        <div className="relative w-full h-full mt-7 flex justify-center">
          <img
            src={ImgCode}
            className="shadow-[0_0_80px_1px_var(--bg-2-opacity)] rounded-3xl mb-3"
            alt=""
          />
          <img
            src={ImgCode}
            className="w-[80%] absolute -top-9  -z-10
             blur-xs  rounded-3xl mb-3 shadow-[0_0_80px_1px_var(--bg-2-opacity)]"
            alt=""
          />
        </div>
        <section id="proyectos">
          <Proyectos />
        </section>
        <div className="flex justify-end">
          <img src={imgLogo} alt="" className="mb-2" />
        </div>
      </section>
    </>
  );
};
export default Home;
