import { easeInOut } from "framer-motion";

export const animateTitle = () => ({
    changeColor: {
        color: ["#FFFFFF", "#FFFF00", "#00FFFF", "#FF00FF", "#FFA500", "#00FF00"],
        transition: {
            duration: 5, 
            repeat: Infinity, 
            repeatType: "mirror",
            ease: easeInOut
        }
    }
});