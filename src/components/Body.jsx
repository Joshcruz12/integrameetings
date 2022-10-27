import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { langContext } from "./../context/langContext";

const Body = () => {
  const lang = localStorage.getItem("lang");

  return (
    <div name="about" className="w-full my-32 pt-5">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid-cols-1 text-center mt-[15%]">
          <h1 className="title"></h1>
          {lang === "es-MX" ? 
            <>
              <p className="text-center p-1 text-sm">
                <FormattedMessage id="paragraph_0" defaultMessage="En " />
                <strong>
                  <FormattedMessage
                    id="strong"
                    defaultMessage="Integra Meetings"
                  />
                </strong>
                <FormattedMessage
                  id="paragraph_1"
                  defaultMessage=" conectamos ideas y las transformamos en excelentes proyectos de negocio."
                />
                <br />
                <FormattedMessage
                  id="paragraph_2"
                  defaultMessage="Pensamos en grande, conformados por un equipo multidisciplinario enfocado en la creación de experiencias,"
                />
                <br />
                <FormattedMessage
                  id="paragraph_3"
                  defaultMessage="estamos comprometidos con alcanzar el éxito y lograr los objetivos de desarrollo de nuestros clientes."
                />
              </p>

              <p className="about-integra-text text-center p-1 text-sm mb-5">
                <FormattedMessage
                  id="paragraph_4"
                  defaultMessage="Como líderes en el sector, estamos comprometidos con conectar personas para impulsar los mejores negocios"
                />
                <br />
                <FormattedMessage
                  id="paragraph_5"
                  defaultMessage="mediante el apoyo de las herramientas tecnológicas más innovadoras y manteniéndonos actualizados con el"
                />
                <br />
                <FormattedMessage
                  id="paragraph_6"
                  defaultMessage="contexto global, impulsando así el desarrollo económico, social y sostenible en el mundo."
                />
              </p>
            </>
           : 
            <p className="about-integra-text text-center p-1 text-sm">
              <FormattedMessage id="paragraph_0" defaultMessage="En " />
              <strong>
                <FormattedMessage
                  id="strong"
                  defaultMessage="Integra Meetings"
                />
              </strong>
              <FormattedMessage
                id="paragraph_1"
                defaultMessage=" conectamos ideas y las transformamos en excelentes proyectos de negocio."
              />
              <br />
              <FormattedMessage
                id="paragraph_2"
                defaultMessage="Pensamos en grande, conformados por un equipo multidisciplinario enfocado en la creación de experiencias,"
              />
              <br />
              <FormattedMessage
                id="paragraph_3"
                defaultMessage="estamos comprometidos con alcanzar el éxito y lograr los objetivos de desarrollo de nuestros clientes."
              />
              <br />
              <FormattedMessage
                id="paragraph_4"
                defaultMessage="Como líderes en el sector, estamos comprometidos con conectar personas para impulsar los mejores negocios"
              />
              <br />
              <FormattedMessage
                id="paragraph_5"
                defaultMessage="mediante el apoyo de las herramientas tecnológicas más innovadoras y manteniéndonos actualizados con el"
              />
              <br />
              <FormattedMessage
                id="paragraph_6"
                defaultMessage="contexto global, impulsando así el desarrollo económico, social y sostenible en el mundo."
              />
            </p>
          }
          {/*<FormattedMessage id="paragraph_0" defaultMessage="About Us" /><strong><FormattedMessage id="strong" defaultMessage="About Us" /></strong>
              <FormattedMessage id="paragraph_1" defaultMessage="About Us" />
              <br /> <FormattedMessage id="paragraph_2" defaultMessage="About Us" />
              <br /><FormattedMessage id="paragraph_3" defaultMessage="About Us" />
            </p>
            <p className="about-integra-text text-center p-1 text-sm mt-10">
            <FormattedMessage id="paragraph_4" defaultMessage="About Us" />
              <br /><FormattedMessage id="paragraph_5" defaultMessage="About Us" />
              <br /> <FormattedMessage id="paragraph_6" defaultMessage="About Us" /><FormattedMessage id="about.us" defaultMessage="About Us" />*/}
        </div>

        {/* Agregar datos sobre lo que hemos hecho y el impacto de nuestros servicios con nuestros socios 
        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100%</p>
            <p className="text-gray-400 mt-2">Completion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">24/7</p>
            <p className="text-gray-400 mt-2">Delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100K</p>
            <p className="text-gray-400 mt-2">Transactions</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Body;
