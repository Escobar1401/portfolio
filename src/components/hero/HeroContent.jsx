// HeroContent.jsx

import { personalInfo } from "../../data/personalInfo";
import TechBadges from "./TechBadges";
import { motion } from "framer-motion";

function HeroContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
        >
            <span
                className="
                rounded-full
                border
                border-red-500/30
                px-4
                py-2
                text-sm
                "
            >
                Disponible para trabajar inmediatamente
            </span>

            <h1
                className="
                mt-6
                text-5xl
                font-bold
                lg:text-7xl
                "
            >
                {personalInfo.name}
            </h1>

            <h2
                className="
                mt-4
                text-2xl
                text-red-500
                "
            >
                {personalInfo.role}
            </h2>

            <p
                className="
                mt-6
                text-lg
                text-zinc-400
                "
            >
                {personalInfo.description}
            </p>

            <TechBadges />

            <div
                className="
                mt-8 
                flex 
                flex-wrap 
                gap-4
                "
            >
                <a
                    href="#projects"
                    className="
                    rounded-xl
                    bg-red-600
                    px-6
                    py-3
                    font-medium
                    transition
                    hover:scale-105
                    inline-block
                    text-center
                    "
                >
                    Ver proyectos
                </a>

                <a
                    href="#contact"
                    className="
                    rounded-xl
                    border
                    border-zinc-700
                    px-6
                    py-3
                    font-medium
                    transition
                    hover:border-red-500
                    inline-block
                    text-center
                    "
                >
                    Contactarme
                </a>
            </div>
        </motion.div>
    );
}

export default HeroContent;