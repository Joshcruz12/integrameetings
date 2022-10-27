import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { langContext } from "./../context/langContext";

const Homepage = () => {
  const language = useContext(langContext);

  return (
    <>
      <section>
        <div className="w-full h-full  bg-zinc-200 flex flex-col justify-between">
          <div className="grid md:object-fill max-w-[1536px]">
            <img
              className="w-full p-absolute lg:mt-0 sd:mt-[20%]"
              src="./images/bannertop.png"
              alt="/"
            />
          </div>
        </div>
      </section>
      <section>
        <div name="about" className="w-full my-32 pb-5">
          <div className="max-w-[1240px] mx-auto">
            <div className="grid-cols-1 text-center mt-[15%]">
              <h1 className="title"></h1>
              {language === "es-MX" ? (
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
              ) : (
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
              )}
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
      </section>
      <section>
        <div className="container-aboutus items-center mt-1 p-[5%]">
          <div className="text-center">
            <h1 className="title">
              <FormattedMessage
                id="ourPartners"
                defaultMessage="NUESTROS CLIENTES"
              />
            </h1>
          </div>
          <div className="px-2 text-center mt-10 grid sm:grid-cols-4 lg:grid-cols-6 lg:gap-9">
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
      </section>
      <section>
        <div name="support" className="flex justify-center content-center">
          <form
            className="content-center text-center mb-6 w-96"
            method="POST"
            action="enviar.php"
            encType="multipart/form-data"
          >
            <div className="mt-[25%]">
              <h1 className="title">
                <FormattedMessage id="support" defaultMessage="CONTACTO" />
              </h1>
              <FormattedMessage id="name" defaultMessage="Nombre">
                {(placeholder) => (
                  <input
                    type="text"
                    id="name"
                    className="mt-8 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder={placeholder}
                    required
                    name="name"
                  />
                )}
              </FormattedMessage>
              <FormattedMessage id="surname" defaultMessage="Apellidos">
                {(placeholder) => (
                  <input
                    type="text"
                    className="mt-8 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder={placeholder}
                    required
                    name="surname"
                  />
                )}
              </FormattedMessage>
              <FormattedMessage id="email" defaultMessage="Correo">
                {(placeholder) => (
                  <input
                    type="email"
                    id="email"
                    className="mt-8 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder={placeholder}
                    required
                    name="email"
                  />
                )}
              </FormattedMessage>
              <FormattedMessage id="phone" defaultMessage="Teléfono">
                {(placeholder) => (
                  <input
                    type="tel"
                    className="mt-8 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder={placeholder}
                    required
                    name="phone"
                  />
                )}
              </FormattedMessage>
              <FormattedMessage id="message" defaultMessage="Mensaje">
                {(placeholder) => (
                  <textarea
                    name="message"
                    rows="7"
                    className="mt-8 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder={placeholder}
                    required
                  />
                )}
              </FormattedMessage>

              <button
                className="bg-gray-300 hover:bg-orange-400 mt-5 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                type="submit"
                value="Submit"
              >
                <span>
                  <FormattedMessage id="btn" defaultMessage="Enviar" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Homepage;
