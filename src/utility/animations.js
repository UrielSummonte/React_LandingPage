import { easeInOut } from 'framer-motion'

export const animateTitle = () => ({
    changeColor: {
        color: [
            '#FFFFFF',
            '#FFFF00',
            '#00FFFF',
            '#FF00FF',
            '#FFA500',
            '#00FF00',
        ],
        transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: easeInOut,
        },
    },
})

export const animateImage = () => ({
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: {
        duration: 0.4,
        scale: {
            type: 'spring',
            duration: 2,
            bounce: 0.5,
        },
    },
})
