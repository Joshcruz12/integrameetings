import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { langContext } from "./../context/langContext";

const Partners = () => {
  const language = useContext(langContext);

  return (
    <div className="container-aboutus items-center mt-1">
      <div className="text-center">
        <h1 className="title">
          <FormattedMessage
            id="ourPartners"
            defaultMessage="NUESTROS CLIENTES"
          />
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-6 lg:gap-9 px-2 text-center ">
        <div className="sm:col-span-1 lg:col-start-1 lg:col-span-2">
          <a href="https://etechevolvingeducation.com/" target="_blank">
            <img src="./images/nostros/logo_etech.png" />
          </a>
        </div>
        <div className="sm:col-span-1 lg:col-start-3 lg:col-span-2">
          <a href="https://foroautomotriztlaxcala.com/" target="_blank">
            <img src="./images/nostros/logoforo.png" />
          </a>
        </div>
        <div className="sm:col-span-1 lg:col-start-5 lg:col-span-2">
          <a
            href="https://live.eventtia.com/es/fedpatmex/bienvenidos"
            target="_blank"
          >
            <img src="./images/nostros/logo_fedpatmex.png" />
          </a>
        </div>
        <div className="sm:col-span-1 lg:col-start-2 lg:col-span-2">
          <a href="https://imin.org.mx/congreso.html" target="_blank">
            <img src="./images/nostros/logo-IMIN.png" />
          </a>
        </div>
        <div className="sm:col-span-1 lg:col-start-4 lg:col-span-2">
          <a href="https://www.sigma-alimentos.com/" target="_blank">
            <img src="./images/nostros/logo-sigma.png" />
          </a>
        </div>
      </div>
    </div>

    /*<div className="justify-center text-center content-center">
      <h1 className="font-bold text-black-800">Nosotros</h1>
      <ul className="justify-items-center grid grid-cols-3 grid-rows-3">
        <li className="">
          <img src="./images/nostros/logo_etech.png" />
        </li>
        <li className="">
          <img src="./images/nostros/logoforo.png" />
        </li>
        <li className="">
          <img src="./images/nostros/logo_fedpatmex.png" />
        </li>
        <li className="col-span-1.5">
          <img src="./images/nostros/logo-IMIN.png" />
        </li>
        <li className="col-span-1.5">
          <img src="./images/nostros/logo-sigma.png" />
        </li>
      </ul>
    </div> */
  );
};

export default Partners;
