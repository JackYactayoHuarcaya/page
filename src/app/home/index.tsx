import Menu from "../../layouts/Menu";
import Description from "./components/Description";
import ImgHome from "./components/ImgHome";

const Home = () => {
  return (
    <>
      <section
        id="section_home"
        className="w-[80%] flex flex-col h-screen m-auto"
      >
        <Menu />
        <div className="w-full h-full flex justify-center items-center">
          <div className="flex gap-4 w-full">
            <Description />
            <ImgHome />
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
