// projects.js

import academicCover from "../assets/projects/academic-system/cover.webp";
import xistiCover from "../assets/projects/xistiapp/cover.webp";
import aquiCreamosCover from "../assets/projects/aqui-creamos/cover.webp";

export const projects = [
    {
        id: 1,

        featured: true,

        title: "Sistema Integral de Control Académico",

        slug: "sistema-control-academico",

        image: academicCover,

        category: "Full Stack",

        description: "Plataforma web para la gestión de asistencia estudiantil, control de inasistencias, gestión documental de excusas y comunicación entre estudiantes, docentes, secretaría y acudientes.",

        responsibilities: [
            "Desarrollo frontend con React y TypeScript",
            "Desarrollo backend con Node.js",
            "Diseño de flujos académicos y lógica de negocio",
            "Integración de notificaciones automáticas",
            "Gestión de roles y permisos"
        ],

        technologies: [
            {
                "name": "React"
            },
            {
                "name": "TypeScript"
            },
            {
                "name": "Node.js"
            },
            {
                "name": "Express"
            },
            {
                "name": "MySQL"
            }
        ],

        github: "https://github.com/Escobar1401/Faceverify-React",

        page: "https://escobar1401.github.io/Faceverify-React/",

        demo: "",
    },

    {
        id: 2,

        featured: false,

        title: "XISTIAPP",

        slug: "xistiapp",

        image: xistiCover,
        
        category: "Mobile",

        description: "Aplicación móvil de transporte bajo demanda inspirada en plataformas como InDrive y DiDi. Participé en el desarrollo móvil, la arquitectura de la aplicación y la coordinación técnica del equipo durante mi etapa de prácticas profesionales.",

        responsibilities: [
            "Desarrollo con Flutter",
            "Implementación de Clean Architecture",
            "Gestión de estado con BLoC y Riverpod",
            "Integración de APIs REST",
            "Comunicación en tiempo real con WebSockets",
            "Liderazgo técnico del equipo"
        ],

        technologies: [
            {
                "name": "Flutter"
            },
            {
                "name": "Dart"
            },
            {
                "name": "BLoC"
            },
            {
                "name": "Riverpod"
            },
            {
                "name": "REST API"
            },
            {
                "name": "WebSockets"
            }
        ],

        github: null,

        page: "https://www.xistiapp.com/",

        demo: null,
    },

    {
        id: 3,

        featured: false,

        title: "Aquí Creamos",

        slug: "aqui-creamos",
        
        image: aquiCreamosCover,

        category: "Frontend",

        description: "Proyecto frontend desarrollado para un cliente real, enfocado en la construcción de una interfaz moderna, responsive y alineada con un diseño previamente definido.",

        responsibilities: [
            "Maquetación responsive",
            "Implementación de componentes reutilizables",
            "Animaciones e interacciones visuales",
            "Adaptación fiel del diseño entregado por el cliente"
        ],

        technologies: [
            {
                "name": "React"
            },
            {
                "name": "Tailwind CSS"
            },
            {
                "name": "JavaScript"
            }
        ],

        github: "https://github.com/Escobar1401/AquiCreamos",

        page: "https://escobar1401.github.io/AquiCreamos/",

        demo: "",
    },
];