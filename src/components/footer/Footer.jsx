// Footer.jsx

import { motion } from "framer-motion";
import { footer } from "../../data/footer";

function Footer() {
    return (
        <footer
            className="
            px-6
            pb-10
            pt-20
            "
        >
            <div
                className="
                mx-auto
                max-w-7xl
                border-t
                border-white/10
                pt-10
                "
            >
                <motion.div
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
                        duration: 0.8,
                    }}
                    className="
                    flex
                    flex-col
                    items-center
                    gap-6
                    text-center
                    "
                >
                    <div>
                        <h3
                            className="
                            text-xl
                            font-bold
                            "
                        >
                            {footer.name}
                        </h3>

                        <p
                            className="
                            mt-2
                            text-zinc-500
                            "
                        >
                            {footer.role}
                        </p>
                    </div>

                    <div
                        className="
                        flex
                        flex-wrap
                        justify-center
                        gap-6
                        "
                    >
                        {footer.links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="
                                text-zinc-400
                                transition
                                hover:text-red-500
                                "
                            >
                                <img
                                    src={link.imgSrc}
                                    alt={link.alt}
                                    className="inline-block h-5 w-5"
                                />
                            </a>
                        ))}
                    </div>

                    <p
                        className="
                        text-sm
                        text-zinc-600
                        "
                    >
                        {footer.copyright}
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;