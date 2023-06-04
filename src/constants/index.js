import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "work",
    title: "Experiences",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Réseau et sécurité",
    icon: web,
  },
  {
    title: "Pentesting",
    icon: mobile,
  },
  {
    title: "Linux",
    icon: backend,
  },
  {
    title: "Programmation",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technicien Support Informatique",
    company_name: "Ecobank",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2021 - April 2022",
    points: [
      "Administrateur Windows server 2016 (Active directory)",
      "Support des utilisateurs",
      "Gestion du parc Informatique (Imprimantes, +50 PC...)",
      "Maintenance Informatique(panne, problème réseau, installation logiciel…)",
      "Utilisation de suite Office ",
      "Gestion des sauvegardes",
      "Migration de poste vers windows 11"
    ],
  },
  {
    title: "Bachelor 3 Administration d'infrastructures securisées",
    company_name: "ETNA",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Aujourd'hui",
    points: [
      "Piscine de 6 semaines : Développement d’une  API REST en C# avec Mongodb.",
      "Administration Système sous Windows et LINUX (Debian, Docker, Active Directory, Bash…).",
      "Développement de son portfolio React, Treejs, Tailwind.",
      "Développement en C, Typescript, Python, Bash.",
    ],
  },
 
  {
    title: "Bachelor 3 Cybersecurité & Business",
    company_name: "Cyber management school",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "A partir de Septembre 2023",
    points: [
      
   ],
  },
];

const testimonials = [
  {
    testimonial:
      "Je crois fermement que ma passion pour le numérique et ma soif constante d'apprendre en font un choix idéal pour contribuer efficacement à votre équipe de cybersécurité.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "J'ai constamment cherché à en apprendre davantage sur les dernières avancées dans le domaine de la cybersécurité, des systèmes informatiques et des nouvelles technologies émergentes.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "je crois fermement que la cybersécurité nécessite une approche collaborative. Travailler en équipe et partager mes connaissances avec mes collègues est une valeur que je chéris",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Identification des vulnérabilités de sécurité",
    description:
      "Utilisation d'outils spécialisés tels que Maltego, Recon-ng, et SpiderFoot pour collecter et analyser des informations à partir de sources publiques et identifier les vulnérabilités de sécurité critiques, Évaluation des risques de sécurité pour l'entreprise et proposition de recommandations.",
    tags: [
      {
        name: "maltego",
        color: "blue-text-gradient",
      },
      {
        name: "Recon-ng",
        color: "green-text-gradient",
      },
      {
        name: "Spider-foot",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    //source_code_link: "https://github.com/",
  },
  {
    name: "Code To Work",
    description:
      "Conception d'une API REST permettant de créer et gérer des utilisateurs ainsi que des produits, Déploiement et configuration automatisés d'une VM AWS avec Terraform, installation de Git et Docker, et exécution d'un projet via Terraform sur la VM déployée, Mise en place et déploiement de l'API et de la base de données sous Docker, Creation du Front-end associé.",
    tags: [
      {
        name: "C#, Angular",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    //source_code_link: "https://github.com/",
  },
  {
    name: "Configuration d'un serveur de fichiers",
    description:
      "J'ai analysé les besoins de l'entreprise, installé et configuré le  serveur de fichiers, et créé des comptes utilisateurs et des partages de  fichiers avec des autorisations d'accès personnalisées. Le projet a été  validé avec succès, et j'ai assuré la formation des utilisateurs et le  support technique.",
    tags: [
      {
        name: "Wireshark",
        color: "blue-text-gradient",
      },
      {
        name: "Active Directory",
        color: "green-text-gradient",
      },
      {
        name: "Tcp",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    //source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };