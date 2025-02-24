import React from 'react'
import AC from '../assets/games/AC.webp'
import ACII from '../assets/games/ACII.webp'
import ACBrotherhood from '../assets/games/ACBrotherhood.webp'
import ACRevelations from '../assets/games/ACRevelations.webp'
import ACIII from '../assets/games/ACIII.webp'
import ACBlackFlag from '../assets/games/ACBlackFlag.webp'
import ACUnity from '../assets/games/ACUnity.jfif'
import ACSyndicate from '../assets/games/ACSyndicate.jfif'
import ACOrigins from '../assets/games/ACOrigins.jfif'
import ACOdyssey from '../assets/games/ACOdyssey.jfif'
import ACValhalla from '../assets/games/ACValhalla.webp'
import ACMirage from '../assets/games/ACMirage.webp'
import ACShadows from '../assets/games/ACShadows.webp'
import { motion } from 'framer-motion'

const GameList = () => {
  const games = [
    { title: "Assassin's Creed", year: 2007, image: AC },
    { title: "Assassin's Creed II", year: 2009, image: ACII },
    { title: "Assassin's Creed Brotherhood", year: 2010, image: ACBrotherhood },
    { title: "Assassin's Creed Revelation", year: 2011, image: ACRevelations },
    { title: "Assassin's Creed III", year: 2012, image: ACIII },
    {
      title: "Assassin's Creed IV: Black Flag",
      year: 2013,
      image: ACBlackFlag,
    },
    { title: "Assassin's Creed Unity", year: 2014, image: ACUnity },
    { title: "Assassin's Creed Syndicate", year: 2015, image: ACSyndicate },
    { title: "Assassin's Creed Origins", year: 2017, image: ACOrigins },
    { title: "Assassin's Creed Odyssey", year: 2018, image: ACOdyssey },
    { title: "Assassin's Creed Valhalla", year: 2020, image: ACValhalla },
    { title: "Assassin's Creed Mirage", year: 2023, image: ACMirage },
    { title: "Assassin's Creed Shadows", year: 2025, image: ACShadows },
  ]
  return (
    <section id="games" className="py-12 bg-ac-dark bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-ac-gold sm:text-4xl mb-8">
          Juegos de la saga
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={index}
              className="bg-ac-dark rounded-lg shadow-lg overflow-hidden border border-ac-gold h-full flex flex-col"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-56 object-fill"
              />
              <div className="p-4 flex flex-col flex-grow justify-between">
                <h3 className="text-lg font-semibold text-ac-gold">
                  {game.title}
                </h3>
                <p className="text-sm text-gray-300 mt-auto">{game.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GameList
