import { HOME } from "../../../constants/home";
const Description = () => {
  return (
    <section className=" w-full flex items-center">
      <div>
        <h1 className="md:text-4xl text-slate-50 text-4xl font-bold">
          {HOME.title}
        </h1>
        <h2
          className="bg-clip-text  bg-gradient-to-r from-[#67A1FE] to-[#BD34FE]
        text-4xl md:text-4xl text-transparent pb-2 font-bold"
        >
          {HOME.subtitle}
        </h2>
        <p className="text-[#BBBCF1] md:text-md mt-4">{HOME.description}</p>
      </div>
    </section>
  );
};
export default Description;
