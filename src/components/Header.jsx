import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../assets/images/logo.png';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  window.addEventListener('scroll',()=>{
    setScrollY(window.scrollY)
  })
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  const scrollToTop =()=>{
    window.scrollTo({top:0,behavior:'smooth'})
  }
  return (
    <header className={` text-white shadow-md top-0 z-20 sticky bg-gray-950 ${scrollY > window.innerHeight ? 'opacity-80' : 'opacity-100'} `} >
      <div className="container mx-auto flex justify-between items-center pb-2 px-4 ">
        <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
          <img src={logo} alt="logo" className="w-25 hover:drop-shadow-amber-500 hover:drop-shadow-xl" />
        </div>
        <nav>
          <RxHamburgerMenu className="text-3xl cursor-pointer md:hidden relative z-1" onClick={toggleMenu} />
          <ul className={`${isOpen ? ' bg-gray-950 opacity-100 translate-y-0' : '-translate-y-16 opacity-0 md:opacity-100'} absolute flex-col top-20 left-0 right-0 md:static md:translate-y-0 md:flex text-center pt-10 space-y-4 text-lg transition-all md:flex-row  md:space-x-8 duration-500 py-5`}>
            <li className='header-link hover:text-amber-500 hover:drop-shadow-amber-500 hover:drop-shadow-xs cursor-pointer' onClick={scrollToTop}><span  >Home</span></li>
            {[{ link: "#projects", text: "Projects" }, { link: "#about", text: "About" }, { link: "#contact", text: "Contact" }].map(({ link, text }) => {
              return <li key={text} className='header-link hover:text-amber-500 hover:drop-shadow-amber-500 hover:drop-shadow-xs'><a href={link} >{text}</a></li>

            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}