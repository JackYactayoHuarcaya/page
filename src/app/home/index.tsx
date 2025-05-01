import ImgHome from "./components/ImgHome";

const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="">
        <h1
          className=" text-3xl cursor-default 
        text-slate-200 font-mono p-5 rounded-lg"
        >
          <ImgHome />
        </h1>
      </div>
    </div>
  );
};
export default Home;
