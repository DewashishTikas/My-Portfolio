import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <header className="bg-gray-950 text-white shadow-md relative z-20">
      <div className="container mx-auto flex justify-between items-center pb-2 px-4 ">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-25 hover:drop-shadow-amber-500 hover:drop-shadow-xl" />
        </div>
        <nav>
          <RxHamburgerMenu className="text-3xl cursor-pointer md:hidden relative z-1" onClick={toggleMenu} />
          <ul className={`${isOpen ? ' bg-gray-950 opacity-100 translate-y-0' : '-translate-y-16 opacity-0 md:opacity-100'} absolute flex-col top-20 left-0 right-0 md:static md:translate-y-0 md:flex text-center pt-10 space-y-4 text-lg transition-all md:flex-row  md:space-x-8 duration-500 py-5`}>
            {[{ link: "#home", text: "Home" }, { link: "#projects", text: "Projects" }, { link: "#about", text: "About" }, { link: "#contact", text: "Contact" }].map(({ link, text }) => {
              return <li key={text} className='header-link hover:text-amber-500 hover:drop-shadow-amber-500 hover:drop-shadow-xs'><a href={link} >{text}</a></li>

            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}