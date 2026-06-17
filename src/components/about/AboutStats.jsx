// AboutStats.jsx

import { motion } from "framer-motion";

function AboutStats({ stats }) {
    return (
        <div
            className="
            mt-20
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
            "
        >
            {stats.map((stat, index) => (
                <motion.article
                    key={stat.label}
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                    }}
                    className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-6
                    text-center
                    backdrop-blur-sm
                    "
                >
                    <h3
                        className="
                        text-3xl
                        font-bold
                        text-red-500
                        lg:text-4xl
                        "
                    >
                        {stat.value}
                    </h3>

                    <p
                        className="
                        mt-3
                        text-sm
                        text-zinc-400
                        "
                    >
                        {stat.label}
                    </p>
                </motion.article>
            ))}
        </div>
    );
}

export default AboutStats;