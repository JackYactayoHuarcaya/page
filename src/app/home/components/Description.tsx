import { HOME } from "../../../constants/home";
const Description = () => {
  return (
    <section className=" w-full flex items-center">
      <div>
        <h1 className="lg:text-5xl text-slate-50 text-4xl font-bold">
          {HOME.title}
        </h1>
        <h2
          className="bg-clip-text  bg-gradient-to-r from-[#67A1FE] to-[#BD34FE]
        text-4xl lg:text-5xl text-transparent pb-2 font-bold inline"
        >
          {HOME.subtitle}
        </h2>
        <p className="text-[#BBBCF1] text-lg lg:text-xl mt-4">
          {HOME.description}
        </p>
      </div>
    </section>
  );
};
export default Description;
