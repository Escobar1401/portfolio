// footer.js

import LinkedInIcon from "../assets/icons/linkedin.svg";
import GitHubIcon from "../assets/icons/github.svg";
import EmailIcon from "../assets/icons/email.svg";
import WhatsAppIcon from "../assets/icons/whatsapp.svg";

export const footer = {
    name: "Luis Felipe Cano Escobar",

    role: "Frontend Developer • Mobile Developer",

    copyright:
        "© 2026 Todos los derechos reservados.",

    links: [
        {
            label: "LinkedIn",
            value: "linkedin.com/in/felipe-escobar-24187b2a7",
            href: "https://www.linkedin.com/in/felipe-escobar-24187b2a7",
            imgSrc: LinkedInIcon,
            alt: "LinkedIn",
        },
        {
            label: "GitHub",
            value: "github.com/Escobar1401",
            href: "https://github.com/Escobar1401",
            imgSrc: GitHubIcon,
            alt: "GitHub",
        },
        {
            label: "Correo",
            value: "luis1401cano2005@gmail.com",
            href: "mailto:luis1401cano2005@gmail.com",
            imgSrc: EmailIcon,
            alt: "Correo",
        },
        {
            label: "WhatsApp",
            value: "wa.me/573018239958",
            href: "https://wa.me/573018239958?text=Vi%20tu%20portafolio%2C%20me%20interes%C3%B3%20tu%20perfil%20y%20me%20gustar%C3%ADa%20tenerte%20en%20mi%20equipo.",
            imgSrc: WhatsAppIcon,
            alt: "WhatsApp",
        }
    ],
};