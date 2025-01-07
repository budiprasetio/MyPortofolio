import { UAJY, Mattcom, SMKHasanah, SMA17, Iteba, IL } from "./icons";

import { FaCode, FaServer, FaPalette, FaTools } from "react-icons/fa";

// siatma
import scafSiatma from "../assets/images/projects/siatma/1.jpg";
import loginSiatma from "../assets/images/projects/siatma/2.jpg";
import calSiatma from "../assets/images/projects/siatma/3.jpg";
import homeSiatma from "../assets/images/projects/siatma/4.jpg";
import profSiama from "../assets/images/projects/siatma/5.jpg";

// kkn
import homeKkn from "../assets/images/projects/kkn/1.png";
import umkmKkn from "../assets/images/projects/kkn/3.png";
import KontakKkn from "../assets/images/projects/kkn/4.png";
import adminKkn from "../assets/images/projects/kkn/5.png";

// atma kitchen
import homeAtma from "../assets/images/projects/atmak/1.png";
import detailAtma from "../assets/images/projects/atmak/2.png";
import profAtma from "../assets/images/projects/atmak/3.png";
import dashboardAtma from "../assets/images/projects/atmak/4.png";

export const Experiences = [
  {
    company: "Infinite Learning Indonesia",
    position: "Mentor Technical Web",
    duration: "Aug 2023 - Jan 2025",
    desc: "I have developed a web programming curriculum aligned with industry standards, training fresh graduates, junior developers, and mentees to become skilled Web and UI/UX Developers. I am also involved in various educational initiatives, such as the Frontend Web Development Bootcamp and training programs for students and teachers at SMK 1 Batam, ensuring they acquire the technical skills and communication abilities needed to succeed in the industry.",
    skills: "ReactJS, ExpressJS, Algorithm, MySQL, Javascript Programming, UI/UX Design",
    image: <IL />,
  },
  {
    company: "Infinite Learning Indonesia",
    position: "Mentee RedHat & IBM Academy",
    duration: "Feb 2023 - Jul 2023",
    desc: "I participated in Infinite Learning's Certified Independent Study Learning Program, focusing on IBM Academy's Hybrid Cloud and AI program. This comprehensive program equipped me with knowledge and practical skills in areas like command-line interface (CLI), bash scripting, remote system management via SSH, network configuration, AI, cybersecurity, and Red Hat Enterprise Linux. I also learned about managing storage systems, network-attached storage, logical volume manager (LVM), and container management with Podman. By the end, I earned two certifications: IBM AI & Cybersecurity Practitioner and Red Hat Certified System Administrator (RHCSA)",
    skills: "Linux, Linux System Administrator, AI, RHEL",
    image: <IL />,
  },
];

export const Certificates = [
  {
    title: "Red Hat Certified Systems Administrator",
    proficency: "Expert",
    company: "RedHat",
    skills: "Linux, Linux Systems Administrator, RHEL",
    link: "https://www.credly.com/badges/0821a09c-f8a9-4c5a-bb03-1eb7a509721c/linked_in_profile",
    date: "May 2023 - May 2026",
  },
  {
    title: "Dasar-Dasar Pemrograman: API dan Layanan Web",
    proficency: "Expert",
    company: "LinkedIn",
    skills: "Web Services API",
    link: "https://www.linkedin.com/learning/certificates/bd2e0b60dc2bc8a00dfbb26a4be482092788e01c8b58942cbad3f1401dbdb53a?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BCPpU221EQhS0ybduvRbmuw%3D%3D",
    date: "Aug 2024",
  },
  {
    title: "Pelatihan Esensial JavaScript",
    proficency: "Basic",
    company: "LinkedIn",
    skills: "JavaScript",
    link: "https://www.linkedin.com/learning/certificates/2cae5fa932697fbecc8cf97369ce4139b8aff61b298c75d993fa1e9815ebc0df?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BCPpU221EQhS0ybduvRbmuw%3D%3D",
    date: "Aug 2024",
  },
  {
    title: "Belajar Membuat Aplikasi Web dengan React",
    proficency: "Basic",
    company: "Dicoding",
    skills: "Front-End Development",
    link: "https://www.dicoding.com/certificates/1OP813O8QZQK",
    date: "November 2023 - November 2026",
  },
  {
    title: "Belajar Back-End Pemula dengan JavaScript",
    proficency: "Basic",
    company: "Dicoding",
    skills: "Back-End Development",
    link: "https://www.dicoding.com/certificates/NVP7Q0L0RZR0",
    date: "September 2024 - September 2027",
  },
];

export const projects = [
  {
    title: "E-commerce BANGBRUS.ID",
    platform: "Web",
    link: "",
    description:
      "The Bangbrus.ID e-commerce website aims to expand its market, enhance shopping convenience and trust, provide complete product information, optimize operations, maximize sales through promotions, and build long-term relationships with customers. This platform is designed to support business growth and strengthen the brand professionally.",
    images: [],
    techStack: ["ReactJS", "ExpressJS", "MongoDB", "Javascript"],
    apis: [],
  },
  {
    title: "ITEBA Chatbot",
    platform: "Web",
    link: "https://github.com/budiprasetio/Chatbot-AI-LSTM",
    description:
      "The AI Chatbot project with LSTM is a deep learning-based chatbot application developed using Python, Flask, and an LSTM network to classify user intents and provide relevant responses. Equipped with an interactive web interface, dynamic retraining capabilities, customizable intents, and a lightweight MySQL database, this chatbot is flexible, user-friendly, and easy to integrate.",
    images: [],
    techStack: ["Python", "Flask", "TensorFlow", "Keras", "Javascript", "MySQL"],
    apis: [],
  },
  {
    title: "Guess The Word Game",
    platform: "Web",
    link: "https://github.com/budiprasetio/Word-Guessing-Game",
    description:
      "The Guess The Word Game is a simple, web-based game built with HTML, CSS, and JavaScript, where players guess a word based on a given hint. It features a random word generator, hint system, a 30-second countdown timer, dynamic alerts for correct or incorrect answers, and a responsive design optimized for various screen sizes. The game has a modern UI with animations and is structured with an HTML file, a CSS styling file, JavaScript for game logic, and a word collection file. To play, users click Refresh Word, read the hint, enter their guess, and press Check Word to verify their answer.",
    images: [],
    techStack: ["Javascript"],
    apis: [],
  },
  {
    title: "Simple Crud API Notes",
    platform: "Web",
    link: "https://github.com/budiprasetio/Simple-CRUD-API-Notes",
    description:
      "The Simple CRUD API Notes project is a web application built with Node.js and Express.js for managing notes, featuring add, update, retrieve, and delete functions via an API. Users can easily configure the environment, install dependencies, and run the server. Technologies used include Node.js, Express.js, dotenv, and CORS.",
    images: [],
    techStack: ["NodeJS", "ExpressJS", "Dotenv", "CORS", "MySQL", "Javascript"],
    apis: [],
  },
];

export const education = [
  {
    school: "SMAN 17 Batam",
    degree: "Social Science",
    period: "2017 - 2020",
    logo: <SMA17 />,
    description: "Assists users in simple technical troubleshooting and software/hardware maintenance.",
  },
  {
    school: "Institut Teknologi Batam",
    degree: "Bachelor of Computer Engineer",
    period: "2020 - 2024",
    logo: <Iteba />,
    description:
      "Focus on developing websites and web-based applications, according to experience creating websites, Focus on managing traditional and cloud-based IT infrastructure, Connecting hardware and software to create automated systems(IOT). ",
  },
];

export const skills = {
  frontend: {
    title: "Programming Languages",
    icon: FaCode,
    skills: [
      { name: "PHP", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 80 },
    ],
  },
  backend: {
    title: "Frameworks & Libraries",
    icon: FaServer,
    skills: [
      { name: "Laravel", level: 95 },
      { name: "ReactJS/NextJS", level: 90 },
      { name: "ExpressJS", level: 90 },
      { name: "Flask", level: 80 },
    ],
  },
  design: {
    title: "Design",
    icon: FaPalette,
    skills: [
      { name: "UI/UX Design", level: 80 },
      { name: "Figma/Adobe XD", level: 70 },
      { name: "Design Systems", level: 80 },
      { name: "Prototyping", level: 80 },
    ],
  },
  tools: {
    title: "Tools & Others",
    icon: FaTools,
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "Docker/Kubernetes", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Testing", level: 85 },
    ],
  },
};

// CONTOH YANG ADA GAMBAR DI VIEWS ALL PROJECT

// export const projects = [
//   {
//     title: "E-commerce BANGBRUS.ID",
//     platform: "Web",
//     link: "https://github.com/apocalcrk/siatma-release",
//     description:
//       "The Bangbrus.ID e-commerce website aims to expand its market, enhance shopping convenience and trust, provide complete product information, optimize operations, maximize sales through promotions, and build long-term relationships with customers. This platform is designed to support business growth and strengthen the brand professionally.",
//     images: [scafSiatma, loginSiatma, homeSiatma, calSiatma, profSiama],
//     techStack: ["ReactJS", "ExpressJS", "MongoDB", "Javascript"],
//     apis: [],
//   },
//   {
//     title: "ITEBA Chatbot",
//     platform: "Web",
//     link: "https://github.com/budiprasetio/Chatbot-AI-LSTM",
//     description:
//       "The AI Chatbot project with LSTM is a deep learning-based chatbot application developed using Python, Flask, and an LSTM network to classify user intents and provide relevant responses. Equipped with an interactive web interface, dynamic retraining capabilities, customizable intents, and a lightweight MySQL database, this chatbot is flexible, user-friendly, and easy to integrate.",
//     images: [homeAtma, detailAtma, profAtma, dashboardAtma],
//     techStack: ["Python", "Flask", "TensorFlow", "Keras", "Javascript", "MySQL"],
//     apis: [],
//   },
//   {
//     title: "Guess The Word Game",
//     platform: "Web",
//     link: "https://github.com/budiprasetio/Word-Guessing-Game",
//     description:
//       "The Guess The Word Game is a simple, web-based game built with HTML, CSS, and JavaScript, where players guess a word based on a given hint. It features a random word generator, hint system, a 30-second countdown timer, dynamic alerts for correct or incorrect answers, and a responsive design optimized for various screen sizes. The game has a modern UI with animations and is structured with an HTML file, a CSS styling file, JavaScript for game logic, and a word collection file. To play, users click Refresh Word, read the hint, enter their guess, and press Check Word to verify their answer.",
//     images: [homeKkn, umkmKkn, KontakKkn, adminKkn],
//     techStack: ["Javascript"],
//     apis: [],
//   },
//   {
//     title: "Simple Crud API Notes",
//     platform: "Web",
//     link: "https://github.com/budiprasetio/Simple-CRUD-API-Notes",
//     description:
//       "The Simple CRUD API Notes project is a web application built with Node.js and Express.js for managing notes, featuring add, update, retrieve, and delete functions via an API. Users can easily configure the environment, install dependencies, and run the server. Technologies used include Node.js, Express.js, dotenv, and CORS.",
//     images: [homeKkn, umkmKkn, KontakKkn, adminKkn],
//     techStack: ["NodeJS", "ExpressJS", "Dotenv", "CORS", "MySQL"],
//     apis: [],
//   },
// ];
