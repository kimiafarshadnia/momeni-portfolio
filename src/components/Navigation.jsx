import { useParams, NavLink } from "react-router-dom";
import { useState } from "react";
import 'boxicons';
const items = [
  { name: "Home", to: "/"},
  { name: "Resume", to: "/resume" },
  { name: "About Me", to: "/about-me" },
  { name: "Contact Me", to: "/contact-me" },
];


const Navigation = () => {
  const params = useParams();
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex flex-col md:flex-row w-full">

      <div className="w-full flex justify-between items-center md:hidden cursor-pointer"  >
        <div onClick={()=> setOpen(!open)} >
          <box-icon name={open ? 'x' : 'menu-alt-left'}></box-icon>
        </div>
      </div>

      <ul className={`transition-color md:flex items-center md:z-auto left-0 w-full md:w-auto transition-all duration-500 ease-in ${open ? 'h-32 block ' : 'h-0 hidden'} md:h-8`}>
        {items.map((item) => {
          return (
            <li key={item.to} className="mb-2 md:mb-0 md:ml-8 text-gray-400 dark:text-gray-400">
              <NavLink
                to={item.to}
               className={(navData)=> (navData.isActive ? "text-bold text-gray-800 dark:text-gray-100" : "")}                                                                         
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>

    </nav>
  );
};

export default Navigation;
