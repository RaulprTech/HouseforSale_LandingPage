import React from 'react';

import ElementFeatureTable from '../feature/ElementFeatureTable';

export default function TableFeatures() {
  return (
    <div>
      <div className="py-8 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-black font-semibold tracking-wide uppercase">
              Proceso
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              La Mejor Forma de Comprar una Casa
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              En HouseForSale nuestra prioridad es que brindarte la mejor
              experiencia de busqueda de tu nuevo hogar. Nos encargamos de todo
              el proceso de principio a fin para que tu no tengas que
              preocuparte de nada mas que de tu futuro.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <ElementFeatureTable
                title="Empieza tu busqueda desde cualquier lugar"
                description="Adios a las excusas, tu nuevo hogar te esta esperando a solo unos clicks de distancia. Comienza a elegir tu nuevo hogar desde cualquier parte."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
              />
              <ElementFeatureTable
                title="Tu seguridad es primero"
                description="Compra tu hogar sin preocuparte de arriesgar tu dinero. Supervisamos el proceso de inicio a fin para tu y tu dinero siempre esten seguros"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                }
              />
              <ElementFeatureTable
                title="Proceso Sencillo y Rapido"
                description="Mas facil imposible. Te acercamos a todo el proceso, para que puedas bascar, comparar y comprar tu nuevo hogar con solo unos clicks"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                }
              />
              <ElementFeatureTable
                title="Comunicacion durante todo el proceso"
                description="Tienes dudas sobre el proceso de compra, la casa que te ha gustado o lo que sea. No dudes en preguntar, estamos siempre atentos de ti y de tus necesidades"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                }
              />
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
