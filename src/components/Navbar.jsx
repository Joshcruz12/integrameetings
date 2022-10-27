import React, { useState, useContext } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FormattedMessage } from "react-intl";
import { langContext } from "./../context/langContext";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setNavbar(!navbar);

  const handleClose = () => setNavbar(!navbar);
  const language = useContext(langContext);

  return (
    <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
            <img
            className="p-absolute object-cover sm: "
            src="./images/IntegraMeetings_logo_horizontal.png"
            alt="integra-logo"
          />
          
        </div>
        <div className="hidden md:flex pr-4 mr-10">
          <ul className="hidden md:flex pr-4">
            <li>
              <Link to="about" smooth={true} duration={500}>
                <FormattedMessage id="aboutUs" defaultMessage="NOSOTROS" />
              </Link>
            </li>
            <li>
              <Link
                to="our-partners"
                smooth={true}
                offset={-200}
                duration={500}
              >
                <FormattedMessage
                  id="ourPartners"
                  defaultMessage="NUESTROS CLIENTES"
                />
              </Link>
            </li>
            <li>
              <Link to="support" smooth={true} offset={-50} duration={500}>
                <FormattedMessage id="support" defaultMessage="CONTACTO" />
              </Link>
            </li>
            <li>
              <button onClick={() => language.setLanguage("en-US")}>
                <img
                  style={{ width: "25px", heigth: "auto" }}
                  src="https://flagcdn.com/w2560/us.png"
                  alt="en"
                />
              </button>
            </li>
            <li>
              <button onClick={() => language.setLanguage("es-MX")}>
                <img
                  style={{ width: "25px", heigth: "auto" }}
                  src="https://flagcdn.com/w2560/es.png"
                  alt="es"
                />
              </button>
            </li>
          </ul>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!navbar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </div>
      </div>

      <ul className={!navbar ? "hidden" : "absolute bg-white w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="about" smooth={true} duration={500}>
            <FormattedMessage id="aboutUs" defaultMessage="NOSOTROS" />
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="our-partners"
            smooth={true}
            offset={-200}
            duration={500}
          >
            <FormattedMessage
              id="ourPartners"
              defaultMessage="NUESTROS CLIENTES"
            />
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            <FormattedMessage id="support" defaultMessage="CONTACTO" />
          </Link>
        </li>
        <li>
          <Link to="">
            <button onClick={() => language.setLanguage("en-US")}>
              <img
                style={{ width: "25px", heigth: "auto" }}
                src="https://flagcdn.com/w2560/us.png"
                alt="en"
              />
            </button>
          </Link>
        </li>
        <li>
          <button onClick={() => language.setLanguage("es-MX")}>
            <img
              style={{ width: "25px", heigth: "auto" }}
              src="https://flagcdn.com/w2560/es.png"
              alt="es"
            />
          </button>
        </li>
      </ul>
    </div>

    /*
    <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadlow-lg">
      <div className="px-2 flex jusyify-betweem items-center w-full h-full">
        <div className="flex items-center">
          <img
            className="p-absolute sm:"
            src="./images/IntegraMeetings_logo_horizontal.png"
            alt="integra-logo"
          />
          <div>
            <ul className="hidden xl:flex mr-4">
              <li>NOSOTROS</li>
              <li>NUESTROS CLIENTES</li>
              <li>CONTACTO</li>
            </ul>
            
          <select className="hidden md:flex pr-4">
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
          </div>
        </div>
        <div>
          <div className="md:hidden" onClick={handleClick}>
            {!navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      <ul className={!navbar ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-3">NOSOTROS</li>
        <li className="border-b-2">NUESTROS CLIENTES</li>
        <li className="border-b-2">CONTACTO</li>
      </ul>
    </div> */
  );
};

export default Navbar;
