import { MENU } from "../constants/menu";
import imgLogo from "/logo.svg";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <section className="pt-16">
      <ul className="flex justify-between items-center">
        <li>
          <img className="w-[7rem]" src={imgLogo} />
        </li>
        <li className="flex gap-2">
          {MENU.map((item, index) => {
            return (
              <li key={index} className="list-none text-slate-50">
                <Link to={`${item.name}`}>
                  <p className="text-md hover:opacity-80">{item.title}</p>
                </Link>
              </li>
            );
          })}
        </li>
      </ul>
    </section>
  );
};
export default Menu;
