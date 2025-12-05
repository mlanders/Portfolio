function Header() {
  return (
    <div className="bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 flex justify-center font-normal relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-[800px] w-full min-h-[400px] flex flex-col justify-center items-start p-8 relative z-10">
        <div className="text-7xl md:text-8xl font-bold text-white mb-4 animate-fadeInDown">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
            Mike
          </span>
        </div>
        <div className="text-3xl md:text-4xl text-dark-300 font-light animate-slideUp">
          Full Stack Web Developer
        </div>
        <div className="mt-8 h-1 w-24 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full animate-slideUp"></div>
      </div>
    </div>
  );
}

export default Header;
