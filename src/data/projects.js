import QuickConsult from "../assets/QuickConsult.png";
import SpringCore from "../assets/SpringCore.png";
import Haraf from "../assets/Haraf.png";

export const projects = [
  {
    title: "SpringCore Africa",
    slug: "springcore-africa",
    description: "A website I built for the tech company I served as a frontend developer intern.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    image: SpringCore,
    imageBg: "bg-gradient-to-br from-slate-100 to-blue-50",
    mockup: "light",
    liveDemo: "https://springcoreafrica.netlify.app/",
    sourceCode: "https://github.com/NwachukwuSam/springcore_africa_web.git",
  },
  {
    title: "Haraf",
    slug: "haraf",
    description: "NGO platform for humanitarian aid and community development across Africa. Features donation management, volunteer coordination, and impact tracking.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Firebase"],
    image: Haraf,
    imageBg: "bg-gray-900",
    mockup: "dark",
    liveDemo: "https://haraf.netlify.app/career",
    sourceCode: "https://github.com/NwachukwuSam/haraf_web.git",
  },
  {
    title: "QuickConsult",
    slug: "quickconsult",
    description: "Telemedicine platform for remote consultations & prescriptions with video calls, e-prescriptions, and medical records.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    image: QuickConsult,
    imageBg: "bg-gradient-to-br from-orange-50 to-slate-100",
    mockup: "blog",
    liveDemo: "#",
    sourceCode: "https://github.com/NwachukwuSam/Quick_Consult_Frontend.git",
  },
];
