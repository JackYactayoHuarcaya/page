import Menu from "../../layouts/Menu";
import Description from "./components/Description";
import ImgHome from "./components/ImgHome";
import ImgCode from "/code.png";

const Home = () => {
  return (
    <>
      <section
        id="section_home"
        className="w-[80%] flex flex-col h-screen m-auto"
      >
        <Menu />
        <div className="mt-12 w-full h-full flex justify-center items-center">
          <div className="flex gap-4 w-full">
            <Description />
            <ImgHome />
          </div>
        </div>
        <div className="w-full h-full mt-6 flex justify-center">
          <img
            src={ImgCode}
            className="shadow-[0_0_80px_1px_var(--bg-2-opacity)] rounded-3xl mb-3"
            alt=""
          />
        </div>
      </section>
    </>
  );
};
export default Home;
