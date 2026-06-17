// Projects.jsx

import { projects } from "../../data/projects";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

function Projects() {
    const featuredProject = projects.find(
        (project) => project.featured
    );

    const otherProjects = projects.filter(
        (project) => !project.featured
    );

    return (
        <section
            id="projects"
            className="
            relative
            overflow-hidden
            px-6
            py-32
            "
        >
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
                <div className="absolute top-10 left-1/4 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
                <div className="absolute bottom-16 right-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
                <div className="absolute top-1/3 right-1/4 h-56 w-56 rounded-full bg-blue-500/5 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl">
                <div
                    className="
                    mb-16
                    "
                >
                    <span
                        className="
                    text-red-500
                    font-medium
                    "
                    >
                        PROYECTOS
                    </span>

                    <h2
                        className="
                    mt-4
                    text-4xl
                    font-bold
                    "
                    >
                        Proyectos destacados
                    </h2>
                </div>

                <FeaturedProject
                    project={featuredProject}
                />

                <div
                    className="
                mt-12
                grid
                gap-8
                md:grid-cols-2
                "
                >
                    {otherProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;