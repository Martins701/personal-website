const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 px-6 sm:px-10 lg:px-16 py-5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-400">
        <span>© 2024 Martins Nwachukwu. All rights reserved.</span>
        <span className="flex items-center gap-1">
          Built with{" "}
          <svg viewBox="0 0 24 24" fill="#ef4444" className="w-4 h-4 mx-0.5">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          and{" "}
          <span className="text-blue-600 font-semibold ml-0.5">React</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;