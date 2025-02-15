import React from 'react'
import body from '../assets/body.webp'
import { motion } from "framer-motion"
import { animateTitle } from '../utility/animations'

const Body = () => {

    

  return (
    <div className='relative overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
            <div className='relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
                <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
                    <div className='sm:text-center lg:text-left'>
                        <h1 className='text-4xl tracking-tight font-extrabold text-ac-gold sm:text-5xl md:text-6xl'>
                            <span className='block xl:inline'>Descubre el mundo de</span>{" "}
                            <motion.span 
                            className='block text-white xl:inline'
                             variants={animateTitle()}
                             animate = 'changeColor'
                            //animate={{ color: ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FF5733"] }}
                            //transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                            >Assassin's Creed</motion.span>
                        </h1>
                        <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                            Sumergete en una saga épica que abarca siglos de historia, conspiraciones y acción trepidante
                        </p>
                        <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                            <div className='rounded-md shadow'>
                                <a 
                                href="#games"
                                className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-ac-dark bg-ac-gold hover:bg-ac-gold hover:bg-opacity-80 md:py-4 md:text-lg md:px-10 transition duration-300'
                                >
                                    Explorar juegos
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <motion.div 
        
        
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 2, bounce: 0.5 },
        }}
        >
            
            
        
            <img 
            src={body} 
            alt="Assassin's Creed" 
            className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-full mt-20'
            />
            </motion.div>
        </div>
    </div>
  )
}

export default Body