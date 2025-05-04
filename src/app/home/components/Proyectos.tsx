import imgFlexmapp from "../../../assets/proyects/image 34.png";
import imgWeather from "../../../assets/proyects/image 35.png";
import imgMusic from "../../../assets/proyects/image 33.png";
import imgCalculadora from "../../../assets/proyects/image 32.png";

const proyectos = [
  {
    title: "Flexmapp",
    description: "Información de gestión de proyectos de software",
    src: imgFlexmapp,
    url: "https://jackyactayohuarcaya.github.io/app_flexmapp/",
  },
  {
    title: "Weather",
    description: "Clima de cualquier ciudad del mundo",
    src: imgWeather,
    url: "https://jackyactayohuarcaya.github.io/clima-weater/",
  },
  {
    title: "Music",
    description: "Escucha música de tus artistas favoritos",
    src: imgMusic,
    url: "https://jackyactayohuarcaya.github.io/music/",
  },
  {
    title: "Calculator",
    description: "Calculadora interactiva para realizar cálculos matemáticos",
    src: imgCalculadora,
    url: "https://jackyactayohuarcaya.github.io/calculadora/",
  },
];
export const Proyectos = () => {
  return (
    <div>
      <h2
        className="bg-clip-text  bg-gradient-to-r from-[#67A1FE] to-[#BD34FE]
        text-4xl lg:text-5xl text-transparent pb-2 font-bold inline"
      >
        Proyectos
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-2 ">
        {proyectos.map((proyecto, index) => (
          <a
            href={proyecto.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="mb-4 flex p-3 rounded-md hover:border-[var(--bg-2)]
          justify-center border border-gray-800 cursor-default"
          >
            <div>
              <img
                src={proyecto.src}
                alt={proyecto.title}
                className="rounded-lg shadow-lg h-full max-h-[17rem]"
              />
              <div className="text-gray-300">
                <h3 className="text-xl font-bold mt-2">{proyecto.title}</h3>
                <p>{proyecto.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
