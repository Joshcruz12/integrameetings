import React, { useContext, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { langContext } from "./../context/langContext";

const Footer = () => {
  const [link, setLink] = useState(false);
  const lang = localStorage.getItem("lang");
  console.log(lang)
  
  return (
    <div
      className="w-full mt-24 text-gray-300 py-y px-2"
      style={{ backgroundColor: "#A5A4A4" }}
    >
      <div className="max-w-[1240px] flex justify-evenly mx-auto border-b-2 border-gray-600 py-8">
        <div className="">
          <img src="./images/integra_bco.png" />
        </div>
        <div className="flex items-center">
          <div>
            
            {
                <Link to={lang === "en-US" ? "/policy" : "/aviso"}>
                  <h6 className="font-bold uppercase pt-2">
                    <FormattedMessage
                      id="notice"
                      defaultMessage={lang === "en-US" ? "NOTICE OF PRIVACY" : "AVISO DE PRIVACIDAD"}
                    />
                  </h6>
                </Link>
            }
            <p>
              <FormattedMessage
                id="adress_1"
                defaultMessage="Rodríguez Saro 100, Int. 502, Colonia Actipan, Benito Juárez"
              />
              <br />{" "}
              <FormattedMessage
                id="adress_2"
                defaultMessage="Ciudad de México, 0323055"
              />
              <br />{" "}
              <FormattedMessage id="adress_3" defaultMessage="7580 2950" />
            </p>
          </div>
        </div>
        <div className="flex items-center ">
          <ul className="flex flex-wrap items-center">
            <li>
              <a
                href="https://www.linkedin.com/company/integra-meetingsllc/"
                target="_blank"
              >
                <img
                  className="w-8 h-8"
                  src="./images/redes/linkedin.png"
                  alt="linkedin-icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/integra_meetings/"
                target="_blank"
              >
                <img
                  className="w-8 h-8"
                  src="./images/redes/instagram_icon.png"
                  alt="instagram-icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Integrameetings"
                target="_blank"
              >
                <img
                  className="w-8 h-8"
                  src="./images/redes/facebook.png"
                  alt="facebook-logo"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* Propuesta de boletin de noticias para capturar microLeads
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
  </div>*/}
      </div>
    </div>
  );
};

export default Footer;
