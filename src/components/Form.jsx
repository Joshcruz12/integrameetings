import React from "react";
import { FormattedMessage } from "react-intl";
// To set language by localization:

const Form = () => {
  return (
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
  );
};

export default Form;
