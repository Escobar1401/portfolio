// HeroImage.jsx

import { motion } from "framer-motion";
import profileImage from "../../assets/images/profile.webp";

function HeroImage() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.9,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 0.8,
                delay: 0.2,
            }}
            className="
            relative 
            flex 
            justify-center
            "
        >
            <div
                className="
                absolute
                h-72
                w-72
                rounded-full
                bg-red-500/20
                blur-3xl
                "
            />

            <picture>
                <source
                    media="(max-width: 767px)"
                    srcSet="/assets/profile-mobile.webp"
                    type="image/webp"
                />
                <img
                    src={profileImage}
                    alt="Luis Felipe Cano"
                    width="320"
                    height="320"
                    fetchPriority="high"
                    className="
                    relative
                    z-10
                    h-80
                    w-80
                    rounded-full
                    object-cover
                    border
                    border-red-500/20
                    "
                />
            </picture>
        </motion.div>
    );
}

export default HeroImage;