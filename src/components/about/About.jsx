// About.jsx

import { about } from "../../data/about";

import AboutBackground from "./AboutBackground";
import AboutHeader from "./AboutHeader";
import AboutStats from "./AboutStats";
import AboutPillar from "./AboutPillar";

function About() {
    return (
        <section
            id="about"
            className="
            relative
            overflow-hidden
            px-6
            py-32
            "
        >
            <AboutBackground />

            <div
                className="
                relative
                z-10
                mx-auto
                max-w-7xl
                "
            >
                <AboutHeader />

                <AboutStats stats={about.stats} />

                <div
                    className="
                    mt-24
                    grid
                    gap-8
                    md:grid-cols-2
                    "
                >
                    {about.pillars.map(
                        (pillar, index) => (
                            <AboutPillar
                                key={pillar.title}
                                pillar={pillar}
                                index={index}
                            />
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

export default About;