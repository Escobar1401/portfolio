// TimelineItem.jsx

import { motion } from "framer-motion"

function TimelineItem({ experience }) {
    return (
        <motion.article
            initial={{
                opacity: 0,
                x: -40
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            transition={{
                duration: 1.2,
                ease: "easeOut"
            }}
        >
            <article
                className="
                relative
                pl-12
                "
            >
                <div
                    className="
                    absolute
                    left-0
                    top-2
                    h-6
                    w-6
                    rounded-full
                    border-4
                    border-zinc-950
                    bg-red-500
                    "
                />

                <span
                    className="
                    text-sm
                    text-zinc-500
                    "
                >
                    {experience.startDate} — {experience.endDate}
                </span>

                <h3
                    className="
                    mt-2
                    text-2xl
                    font-bold
                    "
                >
                    {experience.title}
                </h3>

                <p
                    className="
                    mt-1
                    text-red-500
                    "
                >
                    {experience.company}
                </p>

                <p
                    className="
                    mt-4
                    max-w-3xl
                    leading-relaxed
                    text-zinc-400
                    "
                >
                    {experience.description}
                </p>

                <div
                    className="
                    mt-6
                    flex
                    flex-wrap
                    gap-2
                    "
                >
                    {experience.technologies.map((tech) => (
                        <span
                            key={tech.name}
                            className="
                            rounded-full
                            border
                            border-red-500/20
                            px-3
                            py-1
                            text-sm
                            text-zinc-300
                            "
                        >
                            {tech.name}
                        </span>
                    ))}
                </div>
            </article>
        </motion.article>
    );
}

export default TimelineItem;    