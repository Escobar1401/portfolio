// Experience.jsx

import { experiences } from "../../data/experience";
import TimelineItem from "./TimelineItem";

function Experience() {
    return (
        <section
            id="experience"
            className="
            mx-auto
            max-w-7xl
            px-6
            py-32
            "
        >
            <div
                className="
                mb-16
                "
            >
                <span
                    className="
                    font-medium
                    text-red-500
                    "
                >
                    EXPERIENCIA
                </span>

                <h2
                    className="
                    mt-4
                    text-4xl
                    font-bold
                    "
                >
                    Mi trayectoria profesional
                </h2>
            </div>

            <div
                className="
                relative
                "
            >
                <div
                    className="
                    absolute
                    left-3
                    top-0
                    h-full
                    w-px
                    bg-zinc-800
                    "
                />

                <div
                    className="
                    space-y-16
                    "
                >
                    {experiences.map((experience) => (
                        <TimelineItem
                            key={experience.id}
                            experience={experience}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;