import React from 'react'
import { Facebook, TwitterX, Instagram } from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <footer id="footer" className="bg-ac-dark bg-opacity-90 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-ac-gold">
              Acerca de
            </h3>
            <p className="text-sm">
              Assassin's Creed es una franquicia de videojuegos de acción y
              aventura creada por Ubisoft.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-ac-gold">
              Enlaces rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-ac-gold transition duration-300"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  className="text-sm hover:text-ac-gold transition duration-300"
                >
                  Historia
                </a>
              </li>
              <li>
                <a
                  href="#games"
                  className="text-sm hover:text-ac-gold transition duration-300"
                >
                  Juegos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-ac-gold">
              Síguenos
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-ac-gold transition duration-300"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-ac-gold transition duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-ac-gold transition duration-300"
              >
                <TwitterX size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 Assassin's Creed Fan Page. Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
