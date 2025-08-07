const Footer = () => {
  return (
    <footer className=" text-white px-6 lg:px-16 py-12 inset-0 bg-gradient-to-b from-black to-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
        <div className="space-y-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/1200px-F1.svg.png"
            alt="F1 Logo"
            className="h-10 w-auto filter brightness-0 invert"
          />
          <p className="text-sm text-white/70">
            © 2025 Formula 1. All rights reserved. Made for speed & passion.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4 uppercase">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#" className="hover:text-white">Races</a></li>
            <li><a href="#" className="hover:text-white">Drivers</a></li>
            <li><a href="#" className="hover:text-white">Standings</a></li>
            <li><a href="#" className="hover:text-white">Teams</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4 uppercase">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#" className="hover:text-white">2025 Calendar</a></li>
            <li><a href="#" className="hover:text-white">Rules & Regs</a></li>
            <li><a href="#" className="hover:text-white">Highlights</a></li>
            <li><a href="#" className="hover:text-white">Tickets</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4 uppercase">
            Follow Us
          </h4>
          <div className="flex space-x-4 text-white/70">
            <a href="#" className="hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 001.88-2.38 8.68 8.68 0 01-2.74 1.05 4.28 4.28 0 00-7.3 3.9A12.15 12.15 0 013 4.79a4.27 4.27 0 001.32 5.7 4.2 4.2 0 01-1.94-.54v.06a4.28 4.28 0 003.43 4.2 4.3 4.3 0 01-1.93.07 4.29 4.29 0 004 2.97A8.6 8.6 0 012 19.54 12.14 12.14 0 008.29 21c7.55 0 11.68-6.26 11.68-11.69 0-.18-.01-.35-.02-.53A8.2 8.2 0 0022.46 6z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.45C0 23.2.8 24 1.77 24h20.45C23.2 24 24 23.2 24 22.23V1.77C24 .8 23.2 0 22.23 0zM7.1 20.45H3.56V9H7.1v11.45zM5.33 7.5a2.05 2.05 0 110-4.1 2.05 2.05 0 010 4.1zM20.45 20.45h-3.54v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66h-3.54V9h3.4v1.56h.05c.47-.9 1.6-1.85 3.3-1.85 3.52 0 4.17 2.32 4.17 5.34v6.4z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.8 8s-.2-1.5-.8-2.2c-.8-.9-1.7-.9-2.1-1C16.2 4.5 12 4.5 12 4.5h0s-4.2 0-6.9.3c-.4.1-1.3.1-2.1 1C2.2 6.5 2 8 2 8S1.8 9.6 1.8 11.3v1.4C1.8 14.4 2 16 2 16s.2 1.5.8 2.2c.8.9 1.9.9 2.4 1 1.7.2 7.1.3 7.1.3s4.2 0 6.9-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.2.8-2.2s.2-1.6.2-3.3v-1.4C22 9.6 21.8 8 21.8 8zM9.8 14.3V9.7l5.6 2.3-5.6 2.3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
        Built with ❤️ for racing fans. Updated for 2025 season.
      </div>
    </footer>
  );
};

export default Footer;
