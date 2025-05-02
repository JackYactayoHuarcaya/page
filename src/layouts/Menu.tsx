import { MENU } from "../constants/menu";
import imgLogo from "../../public/logo.svg";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <section className="pt-16">
      <ul className="flex justify-between items-center">
        <li>
          <img src={imgLogo} />
        </li>
        <li className="flex gap-2">
          {MENU.map((item, index) => {
            return (
              <li key={index} className="list-none text-slate-50">
                <Link to={`${item.name}`}>{item.title}</Link>
              </li>
            );
          })}
        </li>
      </ul>
    </section>
  );
};
export default Menu;
