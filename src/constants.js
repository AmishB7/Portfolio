// Skills Section Logo's
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import awsLogo from "./assets/tech_logo/aws.svg";
import socketLogo from "./assets/tech_logo/socket.png";

// Experience Section Logo's
import beamlabLogo from "./assets/company_logo/beamlab_logo.png";

// Education Section Logo's
import uniglobeLogo from "./assets/education_logo/uniglobe_logo.png";
import primeLogo from "./assets/education_logo/prime_logo.png";

// Project Section Logo's
import gharbikriLogo from "./assets/work_logo/gharbikri.png";
import sajhakhabarLogo from "./assets/work_logo/sajhakhabar.png";
import movieBookingLogo from "./assets/work_logo/movieBooking.png";
import liveGuardLogo from "./assets/work_logo/liveGuard.png";
import chatcommerceLogo from "./assets/work_logo/chat_commerce.png";
import tasklyticsLogo from "./assets/work_logo/tlm_plus.png";

export const SkillsInfo = [
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "Socket.io", logo: socketLogo },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "AWS", logo: awsLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: beamlabLogo,
    role: "Software Engineer",
    company: "BeamLab Pvt. Ltd.",
    date: "Jul 2024 - Present",
    desc: "Developed dynamic and scalable software applications mostly using Node.js, Express.js with sequelize ORM and MySQL, handling backend development. Collaborated with cross-functional teams to implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "React JS",
      "Node JS",
      "MongoDb",
      "Express JS",
      "Sequelize",
      "MySQL",
      "PostgreSQL",
      "Socket.io",
      "Cloud Functions",
      "AWS",
      "Microservices",
      "Git",
      "Firebase",
    ],
  },
  {
    id: 1,
    img: beamlabLogo,
    role: "Backend Intern",
    company: "BeamLab Pvt. Ltd.",
    date: "April 2024 - Jul 2024",
    desc: "Worked as a Backend Developer Intern, successfully developed the backend system for a security management application using Node.js, Express.js, and a SQL database with Sequelize for ORM. Collaborated with the mobile dev team to build the mobile application using Flutter, and implemented the backend APIs for the mobile app.",
    skills: ["JavaScript", "Node JS", "Express JS", "Sequelize", , "MySQL"],
  },
];

export const education = [
  {
    id: 0,
    img: primeLogo,
    school: "Prime College, Kathmandu",
    date: "April 2021 - June 2025",
    grade: "75%",
    degree:
      "Bachelor in Computer Science and Information Technology - BSc. CSIT",
  },
  {
    id: 1,
    img: uniglobeLogo,
    school: "Uniglobe Secondary School, Kathmandu",
    date: "Sept 2018 - Sept 2020",
    grade: "3.18 CGPA",
  },
];

export const projects = [
  {
    id: 0,
    title: "GharBikri",
    image: gharbikriLogo,
    description:
      "GharBikri is a RealEstate website using PERN stack where you can buy, sell and rent houses.",
    tags: [
      "JavaScript",
      "React JS",
      "Bootstrap",
      "Node JS",
      "Express JS",
      "PostgreSQL",
    ],
    github: "https://github.com/AmishB7/GharBikri",
    webapp: "https://gharbikri.vercel.app/",
  },
  {
    id: 1,
    title: "SajhaKhabar",
    description:
      "News portal for nepali community with devnagari scripts combined with various machine learning features such as sentiment analysis, news category classifier, news summarizer with english translation, news recommendation",
    image: sajhakhabarLogo,
    tags: [
      "React JS",
      "Node.js",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
      "Next.js",
      "PostgreSQL",
    ],
    github: "https://github.com/AmishB7/Nepali-news-portal-",
    webapp: "https://nepali-news-portal.vercel.app/",
  },
  {
    id: 2,
    title: "Movie Ticket Booking App",
    description:
      "A React.js-based movie ticket booking application that allows users to browse and book tickets for movies.",
    image: movieBookingLogo,
    tags: ["React JS", "Node.js", "HTML", "CSS", "JavaScript", "MongoDB"],
    github: "https://github.com/AmishB7/Movie-Ticket-Booking-App",
    webapp: "https://movie-ticket-booking-app-fe.vercel.app/",
  },
  {
    id: 3,
    title: "ChatCommerce-Backend",
    description:
      "A Node.js-based backend application that provides a chat feature for customers to communicate with sellers using multiple social media platforms in a single platform.",
    image: chatcommerceLogo,
    tags: ["React JS", "Node.js", "Socket.io", "MySQL"],
    github: "https://github.com/AmishB7/ChatCommerce-Backend",
    webapp: "",
  },
  {
    id: 4,
    title: "LiveGuard : Property Security Management System",
    description: "A Mobile Application for Property Security Management System",
    image: liveGuardLogo,
    tags: ["Node JS", "Firebase", "MySQL"],
    github: "",
    webapp: "",
  },
  {
    id: 5,
    title: "Tasklytics – Video-Based Performance Tracking ",
    description:
      "A mobile application where organizations define tasks and procedures, and employees upload timestamped videos of task execution to track performance, efficiency, and step-by-step metrics.",
    image: tasklyticsLogo,
    tags: ["Node JS", "MySQL", "Sequelize", "Express JS"],
    github: "",
    webapp: "",
  },
];
