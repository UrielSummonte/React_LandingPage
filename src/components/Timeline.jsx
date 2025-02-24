import React from 'react'

const Timeline = () => {
  const Eventos = [
    {
      year: '1191',
      title: 'Tercera Cruzada',
      description:
        "Altaïr Ibn-La'Ahad lucha contra los Templarios en Tierra Santa.",
    },
    {
      year: '1476',
      title: 'Renacimiento Italiano',
      description:
        'Ezio Auditore da Firenze inicia su venganza contra los conspiradores.',
    },
    {
      year: '1715',
      title: 'Edad de Oro de la Piratería',
      description:
        'Edward Kenway navega por el Caribe buscando fortuna y libertad.',
    },
    {
      year: '1789',
      title: 'Revolución Francesa',
      description:
        'Arno Dorian busca redención en medio del caos revolucionario en París.',
    },
    {
      year: '1868',
      title: 'Revolución Industrial',
      description:
        'Los gemelos Frye luchan por liberar Londres del control Templario.',
    },
    {
      year: '2012',
      title: 'Era Moderna',
      description:
        'Desmond Miles revive las memorias de sus antepasados para salvar el mundo.',
    },
  ]

  return (
    <section id="timeline" className="py-12 bg-ac-dark bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-ac-gold sm:text-4xl mb-8 text-center">
          Línea del tiempo de Assassin's Creed
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-ac-gold"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Eventos.map((event, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? 'md:pr-8 md:ml-8' : 'md:pl-8 md:col-start-2'
                }`}
              >
                <div className="bg-ac-dark p-6 rounded-lg border border-ac-gold">
                  <div className="absolute top-2 -mt-1.5 rounded-full bg-ac-gold text-ac-dark font-bold text-xs py-1 px-2 -left-2 md:left-auto md:right-auto md:-ml-[4.5rem] md:-mr-[4.5rem]">
                    {event.year}
                  </div>
                  <h3 className="text-xl font-semibold text-ac-gold">
                    {event.title}
                  </h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
