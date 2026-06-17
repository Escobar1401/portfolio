// Contact.jsx

import { motion } from "framer-motion";

import { contact } from "../../data/contact";

import ContactBackground from "./ContactBackground";
import ContactCard from "./ContactCard";

function Contact() {
    return (
        <section
            id="contact"
            className="
            relative
            overflow-hidden
            px-6
            py-32
            "
        >
            <ContactBackground />

            <div
                className="
                relative
                z-10
                mx-auto
                max-w-5xl
                "
            >
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 50,
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
                    text-center
                    "
                >
                    <span
                        className="
                        font-medium
                        text-red-500
                        "
                    >
                        CONTACTO
                    </span>

                    <h2
                        className="
                        mt-4
                        text-4xl
                        font-bold
                        leading-tight
                        lg:text-6xl
                        "
                    >
                        {contact.title}
                    </h2>

                    <p
                        className="
                        mx-auto
                        mt-6
                        max-w-2xl
                        text-lg
                        leading-relaxed
                        text-zinc-400
                        "
                    >
                        {contact.description}
                    </p>
                </motion.div>

                <div
                    className="
                    mt-16
                    grid
                    gap-6
                    md:grid-cols-3
                    "
                >
                    {contact.links.map((item, index) => (
                        <ContactCard
                            key={item.label}
                            item={item}
                            index={index}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
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
                        delay: 0.2,
                    }}
                    className="
                    mt-8
                    flex
                    flex-col
                    items-center
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    px-8
                    py-16
                    text-center
                    backdrop-blur-sm
                    "
                >
                    <div
                        className="
                        absolute
                        inset-0
                        -z-10
                        rounded-3xl
                        bg-gradient-to-r
                        from-cyan-500/5
                        via-transparent
                        to-red-500/5
                        "
                    />
                    <h3
                        className="
                        text-3xl
                        font-bold
                        lg:text-5xl
                        "
                    >
                        Disponible para nuevas oportunidades.
                    </h3>

                    <p
                        className="
                        mt-6
                        max-w-2xl
                        text-zinc-400
                        leading-relaxed
                        "
                    >
                        Si buscas un desarrollador capaz de construir,
                        liderar y aportar criterio técnico a tu equipo,
                        conversemos.
                    </p>

                    <a
                        href="https://wa.me/573018239958?text=Vi%20tu%20portafolio%2C%20me%20interes%C3%B3%20tu%20perfil%20y%20me%20gustar%C3%ADa%20tenerte%20en%20mi%20equipo."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        mt-10
                        rounded-xl
                        bg-red-600
                        px-8
                        py-4
                        font-medium
                        transition
                        hover:scale-105
                        "
                    >
                        Hablemos
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;