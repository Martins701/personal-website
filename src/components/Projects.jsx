import { Link } from "react-router-dom";
import { projects } from "../data/projects";
const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);


// Simple SVG mockup illustrations per project type
const Mockup = ({ type }) => {
  if (type === "light") {
    return (
      <svg viewBox="0 0 380 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Sidebar */}
        <rect x="0" y="0" width="90" height="160" fill="#f1f5f9" />
        {[20, 44, 68, 92, 116].map((y, i) => (
          <rect key={i} x="12" y={y} width={i === 1 ? 66 : 50} height="10" rx="3" fill={i === 1 ? "#6366f1" : "#cbd5e1"} />
        ))}
        {/* Main area */}
        <rect x="90" y="0" width="290" height="160" fill="#fff" />
        <rect x="102" y="12" width="120" height="8" rx="3" fill="#1e293b" />
        {[32, 54, 76, 98, 120, 142].map((y, i) => (
          <g key={i}>
            <rect x="102" y={y} width="158" height="14" rx="3" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <rect x="108" y={y + 3} width="60" height="8" rx="2" fill="#94a3b8" />
            <rect x="310" y={y + 3} width="36" height="8" rx="2" fill={i % 3 === 0 ? "#f97316" : i % 3 === 1 ? "#22c55e" : "#ef4444"} />
          </g>
        ))}
      </svg>
    );
  }
  if (type === "dark") {
    return (
      <svg viewBox="0 0 380 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="380" height="160" fill="#0f172a" />
        {/* Header */}
        <rect x="0" y="0" width="380" height="28" fill="#1e293b" />
        <circle cx="14" cy="14" r="5" fill="#475569" />
        <rect x="25" y="9" width="60" height="10" rx="3" fill="#475569" />
        <rect x="300" y="7" width="70" height="14" rx="5" fill="#3b82f6" />
        {/* Chat messages */}
        {[38, 68, 98, 128].map((y, i) => (
          <g key={i}>
            <circle cx={i % 2 === 0 ? 18 : 362} cy={y + 8} r="8" fill="#334155" />
            <rect
              x={i % 2 === 0 ? 32 : 200}
              y={y}
              width={i % 2 === 0 ? 140 : 140}
              height="20"
              rx="8"
              fill={i % 2 === 0 ? "#1e293b" : "#3b82f6"}
            />
            <rect
              x={i % 2 === 0 ? 40 : 208}
              y={y + 6}
              width={80}
              height="8"
              rx="3"
              fill={i % 2 === 0 ? "#64748b" : "#bfdbfe"}
            />
          </g>
        ))}
      </svg>
    );
  }
  // blog
  return (
    <svg viewBox="0 0 380 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="380" height="160" fill="#fafafa" />
      {/* Header bar */}
      <rect x="0" y="0" width="380" height="22" fill="#fff" stroke="#e5e7eb" strokeWidth="1" />
      <rect x="10" y="7" width="55" height="8" rx="3" fill="#f97316" />
      <rect x="280" y="6" width="45" height="10" rx="3" fill="#f1f5f9" />
      <rect x="330" y="6" width="40" height="10" rx="3" fill="#3b82f6" />
      {/* Hero image */}
      <rect x="10" y="30" width="175" height="85" rx="4" fill="#e2e8f0" />
      <rect x="30" y="55" width="135" height="10" rx="3" fill="#94a3b8" />
      <rect x="30" y="72" width="100" height="8" rx="3" fill="#cbd5e1" />
      {/* Side cards */}
      {[30, 72, 112].map((y, i) => (
        <g key={i}>
          <rect x="196" y={y} width="80" height="30" rx="4" fill="#f1f5f9" />
          <rect x="202" y={y + 8} width="50" height="6" rx="2" fill="#94a3b8" />
          <rect x="202" y={y + 18} width="35" height="5" rx="2" fill="#cbd5e1" />
        </g>
      ))}
      {[30, 72, 112].map((y, i) => (
        <g key={i}>
          <rect x="286" y={y} width="84" height="30" rx="4" fill="#f1f5f9" />
          <rect x="292" y={y + 8} width="50" height="6" rx="2" fill="#94a3b8" />
          <rect x="292" y={y + 18} width="35" height="5" rx="2" fill="#cbd5e1" />
        </g>
      ))}
      {/* Bottom tags */}
      <rect x="10" y="124" width="40" height="12" rx="6" fill="#fef3c7" />
      <rect x="56" y="124" width="55" height="12" rx="6" fill="#dbeafe" />
      <rect x="117" y="124" width="48" height="12" rx="6" fill="#dcfce7" />
    </svg>
  );
};

const ProjectCard = ({ title, description, tags, mockup, image, imageBg, slug, liveDemo, sourceCode }) => (
  <div className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
    {/* Image / mockup area */}
    <div className={`w-full h-48 sm:h-52 ${imageBg} overflow-hidden flex items-center justify-center`}>
      {image
        ? <img src={image} alt={title} className="w-full h-full object-cover object-top" />
        : <Mockup type={mockup} />
      }
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-5 gap-4">
      {/* Title + external link */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <Link to={`/projects/${slug}`} aria-label={`Open ${title}`} className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
          <ExternalLinkIcon />
        </Link>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 mt-auto pt-1">
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 border border-gray-200 hover:border-blue-500 hover:text-blue-600 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Live Demo <ExternalLinkIcon />
        </a>
        <a
          href={sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 border border-gray-200 hover:border-gray-400 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Source Code <GithubIcon />
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-start sm:items-center justify-between mb-10 gap-4">
          <div>
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
              Projects
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Some of my work
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-semibold whitespace-nowrap transition-colors duration-200 mt-1"
          >
            View all projects <ArrowRight />
          </a>
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;