// AboutPillar.jsx

import { motion } from "framer-motion";

function AboutPillar({ pillar, index }) {
    return (
        <motion.article
            initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 0.6,
                delay: index * 0.15,
            }}
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-sm
            transition
            duration-300
            hover:border-red-500/30
            hover:-translate-y-1
            "
        >
            <div
                className="
                mb-6
                h-3
                w-3
                rounded-full
                bg-red-500
                "
            />

            <h3
                className="
                text-2xl
                font-bold
                "
            >
                {pillar.title}
            </h3>

            <p
                className="
                mt-4
                leading-relaxed
                text-zinc-400
                "
            >
                {pillar.description}
            </p>
        </motion.article>
    );
}

export default AboutPillar;