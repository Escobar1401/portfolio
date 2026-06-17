// AboutHeader.jsx

import { motion } from "framer-motion";
import profileImage from "../../assets/images/profile.webp";
import { about } from "../../data/about";

function AboutHeader() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 60,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 0.8,
            }}
            className="
            grid
            items-center
            gap-12
            lg:grid-cols-2
            "
        >
            <div
                className="
                relative
                flex
                justify-center
                "
            >
                <div
                    className="
                    absolute
                    h-80
                    w-80
                    rounded-full
                    bg-red-500/20
                    blur-3xl
                    "
                />

                <img
                    src={profileImage}
                    alt="Luis Felipe Cano"
                    className="
                    relative
                    z-10
                    h-80
                    w-80
                    rounded-3xl
                    border
                    border-red-500/20
                    object-cover
                    "
                />
            </div>

            <div>
                <span
                    className="
                    font-medium
                    text-red-500
                    "
                >
                    MI ENFOQUE
                </span>

                <h2
                    className="
                    mt-4
                    text-4xl
                    font-bold
                    leading-tight
                    lg:text-5xl
                    "
                >
                    {about.title}
                </h2>

                <p
                    className="
                    mt-6
                    max-w-xl
                    text-lg
                    leading-relaxed
                    text-zinc-400
                    "
                >
                    {about.description}
                </p>
            </div>
        </motion.div>
    );
}

export default AboutHeader;