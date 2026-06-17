// TechBadges.jsx

import { personalInfo } from "../../data/personalInfo";

function TechBadges() {
    return (
        <div 
            className="
            mt-10 
            flex 
            flex-wrap 
            gap-3
            "
        >
            {personalInfo.technologies.map((tech) => (
                <span
                    key={tech.name}
                    className="
                    rounded-full
                    border
                    border-red-500/20
                    px-4
                    py-2
                    "
                >
                    {tech.name}
                </span>
            ))}
        </div>
    );
}

export default TechBadges;