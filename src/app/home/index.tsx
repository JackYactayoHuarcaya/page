const Home = () => {
  return (
    <div
      className="w-full h-screen flex justify-center items-center
       bg-slate-800"
    >
      <div className="">
        <h1
          className=" text-3xl cursor-default border-slate-700
        text-slate-200 font-mono border p-5 rounded-lg"
        >
          <span className="hover:text-shadow-[0_0_24px] text-shadow-blue-300">
            App{" "}
          </span>
          <span>-</span>
          <span className="hover:text-shadow-[0_0_18px] text-shadow-blue-300">
            {" "}
            jack
          </span>
        </h1>
      </div>
    </div>
  );
};
export default Home;
