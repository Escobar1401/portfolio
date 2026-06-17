// NavItem.jsx

import { motion } from "framer-motion";

function NavItem({
    label,
    href,
    active,
}) {
    const isActive = !!active;

    return (
        <a
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`relative text-sm transition ${
                isActive ? "text-white" : "text-zinc-400 hover:text-white"
            }`}
        >
            <span className="relative z-10">{label}</span>

            <motion.span
                layout
                initial={false}
                animate={isActive ? { width: "100%", opacity: 1 } : { width: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute left-0 -bottom-1 h-0.5 rounded-full bg-red-400"
            />
        </a>
    );
}

export default NavItem;