import type { project } from "./lib/types";

export const projects: project[] = [
    {
        "id": 1,
        "title": "Gutenberg Bookshelf",
        "description": " A digital library platform that pulls from the Project Gutenberg archive. Users can browse, track reading progress, and get personalized book suggestions - all with a modern UI and secure login.",
        "imgSource": "/img/gutenstobern.png",
        "imgAltText": "Thumbnail of Project: Gutenbern Bookshelf",
        "tags": ["Java", "Spring Boot", "Next.js", "TypeScript", "TailwindCSS", "MySQL", "JWT Auth"],
        "links": [
            { "name": "Source Code", "url": "https://github.com/joao-pmoliveira/gutenstobern" },
        ]
    },
    {
        "id": 2,
        "title": "Stadium Route and PoI Planner",
        "description": "An interactive mapp tool design to help users plan routes to stadiums and discover poitns of interest nearby. Built with event-goers in mind, the app combines custom geospatial filtering and a stadium-focused UX to offer a specialised 'Google Maps'-style experience for football stadiums.",
        "imgSource": "/img/estadios_nacionais.png",
        "imgAltText": "Thumbnail of Project: Stadium Route and PoI Planner",
        "tags": ["JavaScript", "PHP", "QGIS", "OpenLayers", "PostgreSQL"],
        "links": [
            { "name": "Source Code", "url": "https://github.com/joao-pmoliveira/ptas-estadios" },
        ]
    },
    {
        "id": 3,
        "title": "University Faculty Scheduling Platform",
        "description": "A Laravel-based tool used by university admins to collect professor availability and prep semester schedules. Automates from generation, data collection, and notification workflows.",
        "imgSource": "/img/sup_criacao_horarios.png",
        "imgAltText": "Thumbnail of Project: University Faculty Scheduling Platform",
        "tags": ["Laravel", "PHP", "PostgreSQL", "Docker", "REST APIs"],
        "links": [
            { "name": "Source Code", "url": "https://github.com/joao-pmoliveira/ptdw-grupo-3" },
        ]
    },
    {
        "id": 4,
        "title": "Automated Modbus Testing",
        "description": "Created an automated testing system for the Modbus protocol using Robot Framework and PyModbus. Integrated into a Jenkins CI/CD pipeline to streamline test execution and reporting.",
        "imgSource": "/img/robot_framework.png",
        "imgAltText": "Thumbnail of Project: Automated Modbus Testing",
        "tags": ["Python", "Robot Framework", "PyModbus"],
    },
]
