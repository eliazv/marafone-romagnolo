import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header
      className="fixed top-3 left-1/2 z-50 -translate-x-1/2 w-[98vw] max-w-5xl bg-white/70 md:bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border-2 border-marafone-yellow flex items-center justify-between px-2 md:px-6 py-2 md:py-3 gap-2 transition-all duration-300"
      style={{ margin: "0 auto" }}
    >
      <a
        href="#"
        className="flex items-center group relative"
        style={{ zIndex: 20 }}
      >
        <img
          src="/img/logo.png"
          alt="Logo Marafone"
          className="w-20 h-20 md:w-24 md:h-24 drop-shadow-2xl group-hover:scale-105 transition-transform -translate-y-2 md:-translate-y-4"
          style={{ position: "absolute", left: "-1.5rem", top: "-1rem" }}
        />
        <span
          className="font-retro text-2xl md:text-4xl text-marafone-red font-bold tracking-tight group-hover:text-marafone-dark transition-colors ml-24 md:ml-32"
          style={{ whiteSpace: "nowrap" }}
        >
          Marafone
        </span>
      </a>
      <nav className="hidden md:flex flex-1 justify-center gap-8 md:gap-12">
        {/* Mobile menu */}
        <div className="md:hidden flex-1 flex justify-end">
          <details className="relative">
            <summary className="list-none cursor-pointer px-3 py-2 rounded-lg font-game text-xl text-marafone-dark hover:text-marafone-red transition-colors select-none">
              ☰
            </summary>
            <div className="absolute right-0 mt-2 w-48 bg-white/95 rounded-2xl shadow-2xl border-2 border-marafone-yellow py-2 z-50 flex flex-col gap-2">
              <button
                className="font-game text-lg text-marafone-dark hover:text-marafone-red transition-colors px-4 py-2 text-left bg-transparent border-none cursor-pointer"
                onClick={() => {
                  const el = document.getElementById("features");
                  if (el) {
                    if (window.location.pathname !== "/") {
                      window.location.href = "/#features";
                    } else {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  } else {
                    window.location.href = "/#features";
                  }
                }}
              >
                Funzionalità
              </button>
              <button
                className="font-game text-lg text-marafone-dark hover:text-marafone-red transition-colors px-4 py-2 text-left bg-transparent border-none cursor-pointer"
                onClick={() => {
                  window.location.href = "/regole";
                }}
              >
                Regole
              </button>
              <button
                className="font-game text-lg text-marafone-dark hover:text-marafone-red transition-colors px-4 py-2 text-left bg-transparent border-none cursor-pointer"
                onClick={() => {
                  const el = document.getElementById("community");
                  if (el) {
                    if (window.location.pathname !== "/") {
                      window.location.href = "/#community";
                    } else {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  } else {
                    window.location.href = "/#community";
                  }
                }}
              >
                Community
              </button>
            </div>
          </details>
        </div>
        <button
          className="font-game text-xl text-marafone-dark hover:text-marafone-red transition-colors px-3 py-1 rounded-md bg-transparent border-none cursor-pointer"
          onClick={() => {
            const el = document.getElementById("features");
            if (el) {
              if (window.location.pathname !== "/") {
                window.location.href = "/#features";
              } else {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            } else {
              window.location.href = "/#features";
            }
          }}
        >
          Funzionalità
        </button>
        <button
          className="font-game text-xl text-marafone-dark hover:text-marafone-red transition-colors px-3 py-1 rounded-md bg-transparent border-none cursor-pointer"
          onClick={() => {
            window.location.href = "/regole";
          }}
        >
          Regole
        </button>
        <button
          className="font-game text-xl text-marafone-dark hover:text-marafone-red transition-colors px-3 py-1 rounded-md bg-transparent border-none cursor-pointer"
          onClick={() => {
            const el = document.getElementById("community");
            if (el) {
              if (window.location.pathname !== "/") {
                window.location.href = "/#community";
              } else {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            } else {
              window.location.href = "/#community";
            }
          }}
        >
          Community
        </button>
      </nav>
    </header>
  );
};

export default Header;
