// ProjectCard.jsx

import { motion } from "framer-motion";

function ProjectCard({ project }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <article
                className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-sm
                transition
                duration-300
                hover:-translate-y-1
                hover:border-red-500/30
                "
            >
                <div
                    className="
                    overflow-hidden
                    "
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="
                        h-56
                        w-full
                        object-cover
                        transition
                        duration-500
                        hover:scale-105
                        "
                    />
                </div>

                <div
                    className="
                    p-6"
                >
                    <span
                        className="
                        text-sm
                        font-medium
                        text-red-500
                        "
                    >
                        {project.category}
                    </span>

                    <h3
                        className="
                        mt-3
                        text-xl
                        font-bold
                        "
                    >
                        {project.title}
                    </h3>

                    <p
                        className="
                        mt-4
                        line-clamp-4
                        text-sm
                        leading-relaxed
                        text-zinc-400
                        "
                    >
                        {project.description}
                    </p>

                    <div className="mt-6 flex items-center gap-4">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-sm font-medium text-red-500 transition hover:text-red-400 cursor-pointer"
                            >
                                Ver repositorio
                            </a>
                        )}

                        {project.page && (
                            <a
                                href={project.page}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:scale-105 cursor-pointer"
                            >
                                Ver página →
                            </a>
                        )}
                    </div>
                </div>
            </article>
        </motion.article>
    );
}

export default ProjectCard;