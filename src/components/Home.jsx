import { useEffect, useState } from "react";
import MyPic from "../assets/MyPic.png";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

//const MailIcon = () => (
//  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
//    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//  </svg>
//);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const useTyping = (texts, speed = 80, pause = 1800) => {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % texts.length);
    }
    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, texts, speed, pause]);

  return displayed;
};

const Hero = () => {
  const role = useTyping(["Frontend Engineer", "React Developer", "Digital Marketer"]);

  return (
    <section
      className="relative w-full min-h-[calc(100vh-65px)] overflow-hidden flex items-center"
      style={{
        background: "linear-gradient(to bottom, #ffffff 0%, #ffffff 40%, #dbeafe 72%, #bfdbfe 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute right-0 top-0 w-[55%] h-full pointer-events-none" aria-hidden="true">
        <div className="absolute right-[-8%] top-[5%] w-[520px] h-[520px] rounded-full bg-blue-100 opacity-50 blur-[2px]" />
        <div className="absolute right-[18%] bottom-[10%] w-[200px] h-[240px] rounded-[60%_40%_55%_45%/50%_60%_40%_50%] bg-blue-200 opacity-40" />
      </div>

      {/* Floating decorative dots */}
      <span className="hidden lg:block absolute left-[42%] top-[22%] w-3 h-3 rounded-full bg-purple-400 opacity-70" aria-hidden />
      <span className="hidden lg:block absolute left-[55%] top-[58%] w-2.5 h-2.5 rounded-full bg-blue-400 opacity-60" aria-hidden />
      <div className="hidden lg:grid absolute right-[6%] top-[52%] grid-cols-3 gap-2" aria-hidden>
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-40" />
        ))}
      </div>
      <span className="hidden lg:block absolute right-[30%] top-[38%] text-blue-400 text-xl select-none opacity-60" aria-hidden>✓</span>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 lg:py-0 flex flex-col lg:flex-row items-center lg:items-end gap-10 lg:gap-0">

        {/* LEFT: Text content */}
        <div className="flex-1 flex flex-col items-start max-w-xl lg:max-w-none lg:pb-16">
          <p className="text-gray-500 text-base sm:text-lg font-medium mb-2 tracking-wide">
            Hi, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-1">
            Martins Nwachukwu
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600 leading-tight mb-5 min-h-[1.2em]">
            {role}
            <span className="inline-block w-[3px] h-[0.85em] bg-blue-600 ml-1 align-middle animate-pulse" />
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md mb-8">
            I build fast, responsive and pixel-perfect websites
            <br className="hidden sm:block" /> with modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8">
            <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm sm:text-base">
              View My Work <ArrowRight />
            </button>
            <button className="flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm sm:text-base bg-white/70">
              Contact Me <ArrowRight />
            </button>
          </div>
         <div className="flex items-center gap-5">
          {[
            { icon: <GithubIcon />, label: "GitHub", href: "https://github.com/Martins701" },
            { icon: <LinkedinIcon />, label: "LinkedIn", href: "https://www.linkedin.com/in/martins-nwachukwu-a23877344/" },
            { icon: <TwitterIcon />, label: "Twitter", href: "https://x.com/MartinsNwa35199" },
           // { icon: <MailIcon />, label: "Email", href: "mailto:martinsnwachukwu2024@gmail.com" },
          ].map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
              target={label === "Email" ? "_self" : "_blank"}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
            >
              {icon}
            </a>
          ))}
        </div>
        </div>

        {/* RIGHT: Photo */}
        <div className="flex-shrink-0 flex items-center justify-center lg:justify-end w-full lg:w-auto">
          <div className="relative w-64 sm:w-80 lg:w-[400px] xl:w-[460px]">
            <img
              src={MyPic}
              alt="Martins Nwachukwu"
              className="w-full object-cover rounded-2xl lg:rounded-3xl shadow-xl"
              style={{ aspectRatio: "460/520", objectPosition: "center 5%" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;