import React from 'react';
import Logo from '../images/logo.png';
import Button from './Button';

const Navbar = () => {
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full fixed z-10 bg-black opacity-90">
      <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
        <a
          href="/"
          className="flex items-center justify-center text-white text-lg cursor-pointer"
        >
          <img
            src={Logo}
            alt="Logo"
            className="hidden md:block w-8 h-8 lg:w-14 lg:h-14"
          />
          Chef<span>Guru</span>
        </a>

        <ul className="hidden md:flex text-white gap-6">
          <li>
            <a className="hover:font-extrabold" href="/">
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:font-extrabold"
              href="#gallery"
              onClick={(e) => handleScroll(e, 'gallery')}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="hover:font-extrabold"
              onClick={(e) => handleScroll(e, 'testimonials')}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              className="hover:font-extrabold"
              href="#team"
              onClick={(e) => handleScroll(e, 'team')}
            >
              Team
            </a>
          </li>
          <li>
            <a
              className="hover:font-extrabold"
              href="#service"
              onClick={(e) => handleScroll(e, 'service')}
            >
              Service
            </a>
          </li>
        </ul>

        <Button
          title="Sign in"
          containerStyle="hidden md:block bg-black border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
