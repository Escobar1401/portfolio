// ContactCard.jsx

import { motion } from "framer-motion";

function ContactCard({ item, index }) {
    return (
        <motion.a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            initial={{
                opacity: 0,
                y: 20,
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
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-6
            backdrop-blur-sm
            transition
            hover:border-red-500/30
            hover:-translate-y-1
            "
        >
            <p
                className="
                text-lg
                text-zinc-500
                flex
                items-center
                "
            >
                <img
                    src={item.imgSrc}
                    alt={item.alt}
                    className="inline-block h-5 w-5"
                />
            </p>

            <h3
                className="
                mt-2
                font-medium
                "
            >
                {item.value}
            </h3>
        </motion.a>
    );
}

export default ContactCard;