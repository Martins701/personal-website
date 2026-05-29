const stats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7 text-blue-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    value: "2+",
    label: "Years Experience",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7 text-blue-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    value: "15+",
    label: "Projects Completed",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7 text-blue-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    value: "10+",
    label: "Happy Clients",
  },
];

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const AboutMe = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">

        {/* LEFT: Text content */}
        <div className="flex-1 max-w-xl">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
            Get to know me
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
            I'm a passionate frontend engineer who loves building beautiful and
            functional user interfaces. I enjoy turning complex problems into
            simple, intuitive and delightful digital experiences.
          </p>
          <button className="flex items-center gap-2 border border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-700 font-medium px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm sm:text-base bg-white">
            More About Me <ArrowRight />
          </button>
        </div>

        {/* RIGHT: Stat cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {stats.map(({ icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Icon box */}
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                {icon}
              </div>
              {/* Stat number */}
              <span className="text-4xl font-extrabold text-gray-900 leading-none">
                {value}
              </span>
              {/* Label */}
              <span className="text-sm text-gray-500 font-medium">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutMe;