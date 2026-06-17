// contact.js

import LinkedInIcon from "../assets/icons/linkedin.svg";
import GitHubIcon from "../assets/icons/github.svg";
import EmailIcon from "../assets/icons/email.svg";

export const contact = {
    title: "¿Tienes una idea, proyecto o reto técnico?",

    description:
        "Estoy disponible para colaborar en proyectos frontend, desarrollo móvil, soluciones web y retos que requieran análisis, liderazgo técnico y ejecución.",

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
    ],
};