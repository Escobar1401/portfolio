// FeaturedProject.jsx

import { motion } from "framer-motion"

function FeaturedProject({ project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
        >
            <article
                className="
                grid
                gap-8
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-sm
                lg:grid-cols-2
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
                        h-full
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
                    flex
                    flex-col
                    justify-center
                    p-8
                    lg:p-12
                    "
                >
                    <span
                        className="
                        mb-4
                        text-sm
                        font-medium
                        text-red-500
                        "
                    >
                        {project.category}
                    </span>

                    <h3
                        className="
                        text-3xl
                        font-bold
                        lg:text-4xl
                        "
                    >
                        {project.title}
                    </h3>

                    <p
                        className="
                        mt-6
                        leading-relaxed
                        text-zinc-400
                        "
                    >
                        {project.description}
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                        {project.page && (
                            <a
                                href={project.page}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-fit rounded-xl bg-red-600 px-6 py-3 font-medium text-white transition hover:scale-105 cursor-pointer"
                            >
                                Ver página
                            </a>
                        )}

                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-fit rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-red-500 transition hover:scale-105 cursor-pointer"
                            >
                                Ver repositorio
                            </a>
                        )}
                    </div>
                </div>
            </article>
        </motion.div>
    );
}

export default FeaturedProject;