// Navbar.jsx

import NavItem from "./NavItem";
import { navigation } from "../../data/navigation";
import { useActiveSection } from "../../hooks/useActiveSection";


function Navbar() {
    const activeSection = useActiveSection();
    return (
        <header
            className="
            fixed
            top-0
            left-0
            z-50
            w-full
            "
        >
            <nav
                className="
                mx-auto
                mt-6
                flex
                w-fit
                items-center
                gap-8
                rounded-full
                border
                border-white/10
                bg-black/20
                px-8
                py-4
                backdrop-blur-md
                "
            >
                {navigation.map((item) => {
                    const id = item.href.replace("#", "");
                    return (
                        <NavItem
                            key={item.label}
                            label={item.label}
                            href={item.href}
                            active={activeSection === id}
                        />
                    );
                })}
            </nav>
        </header>
    );
}

export default Navbar;