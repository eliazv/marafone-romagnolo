import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Star, BookOpen, HelpCircle, Edit3 } from "lucide-react";

// Componente menu mobile con overlay e animazioni
function MobileMenu({ onMenuStateChange }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Notifica il componente parent quando il menu cambia stato
  useEffect(() => {
    onMenuStateChange(open);
  }, [open, onMenuStateChange]);

  // Chiudi menu cliccando fuori
  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Blocca scroll sotto menu
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div ref={menuRef} className="relative z-50">
        {/* Hamburger button con animazione */}
        <button
          aria-label="Apri menu"
          className={`relative p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            open
              ? "bg-gradient-to-br from-red-500 to-red-600 shadow-2xl shadow-red-500/30"
              : "bg-gradient-to-br from-marafone-yellow to-yellow-400 shadow-xl shadow-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/40"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="relative w-8 h-8 flex flex-col justify-center items-center">
            <span
              className={`block w-6 h-0.5 bg-marafone-dark transition-all duration-300 ${
                open ? "rotate-45 translate-y-0.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-marafone-dark mt-1.5 transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-marafone-dark mt-1.5 transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>

        {/* Menu a comparsa con design moderno */}
        <div
          className={`absolute right-0 mt-4 w-54 bg-gradient-to-br from-white via-white to-gray-50 rounded-3xl shadow-2xl border border-gray-200/50 py-6 z-50 backdrop-blur-xl transition-all duration-500 ease-out transform ${
            open
              ? "scale-100 opacity-100 pointer-events-auto translate-y-0"
              : "scale-95 opacity-0 pointer-events-none -translate-y-4"
          } origin-top-right`}
          style={{
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
          }}
        >
          {/* Menu items */}
          <div className="px-3 space-y-2">
            <button
              className="w-full group relative overflow-hidden bg-gradient-to-r from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200 text-marafone-dark hover:text-marafone-red transition-all duration-300 px-6 py-4 rounded-2xl text-left font-game text-lg border border-yellow-200/50 hover:border-yellow-300 hover:shadow-lg hover:shadow-yellow-500/20 transform hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => {
                setOpen(false);
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
              <div className="flex items-center space-x-3">
                <Star
                  className="w-6 h-6 text-marafone-dark group-hover:text-marafone-red transition-colors duration-300"
                  strokeWidth={2.2}
                />
                <span>Funzionalità</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>

            <button
              className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-marafone-dark hover:text-marafone-red transition-all duration-300 px-6 py-4 rounded-2xl text-left font-game text-lg border border-blue-200/50 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => {
                setOpen(false);
                window.location.href = "/regole";
              }}
            >
              <div className="flex items-center space-x-3">
                <BookOpen
                  className="w-6 h-6 text-marafone-dark group-hover:text-marafone-red transition-colors duration-300"
                  strokeWidth={2.2}
                />
                <span>Regole</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>

            <button
              className="w-full group relative overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 text-marafone-dark hover:text-marafone-red transition-all duration-300 px-6 py-4 rounded-2xl text-left font-game text-lg border border-purple-200/50 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => {
                setOpen(false);
                window.location.href = "/blog";
              }}
            >
              <div className="flex items-center space-x-3">
                <Edit3
                  className="w-6 h-6 text-marafone-dark group-hover:text-marafone-red transition-colors duration-300"
                  strokeWidth={2.2}
                />
                <span>Articoli</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-3 left-1/2 z-50 -translate-x-1/2 w-full max-w-5xl rounded-2xl shadow-2xl border-2 border-marafone-yellow flex items-center justify-between px-2 md:px-6 py-1.5 md:py-3 gap-2 transition-all duration-300 ${
        isMobileMenuOpen
          ? "bg-white/95 md:bg-white/80 md:backdrop-blur-lg"
          : "bg-white/70 md:bg-white/80 backdrop-blur-lg"
      }`}
      style={{
        left: "50%",
        right: "auto",
        width: "calc(100vw - 3rem)",
        maxWidth: "100vw",
        boxSizing: "border-box",
      }}
    >
      {/* Logo e titolo */}
      <a
        href="/"
        className="flex items-center group relative"
        style={{ zIndex: 20 }}
      >
        <img
          src="/img/logo.png"
          alt="Logo Marafone"
          className="w-14 h-14 md:w-20 md:h-20 drop-shadow-2xl group-hover:scale-110 transition-all duration-300 -translate-y-1 md:-translate-y-3 shadow-xl hover:shadow-2xl"
          style={{ position: "absolute", left: "0.5rem", top: "-0.5rem" }}
        />
        <span
          className="font-retro text-xl md:text-4xl text-marafone-red font-bold tracking-tight group-hover:text-marafone-dark transition-all duration-300 ml-20 md:ml-24 drop-shadow-lg hover:drop-shadow-xl"
          style={{ whiteSpace: "nowrap" }}
        >
          Marafone
        </span>
      </a>

      {/* Menu mobile: visibile solo su mobile */}
      <div className="flex md:hidden items-center ml-auto z-30">
        <MobileMenu onMenuStateChange={setIsMobileMenuOpen} />
      </div>

      {/* Menu desktop: visibile solo su desktop */}
      <nav className="hidden md:flex flex-1 justify-center gap-8 lg:gap-12">
        <button
          className="relative font-game text-xl text-marafone-dark hover:text-marafone-red transition-all duration-300 px-4 py-2 rounded-xl bg-transparent border-none cursor-pointer group overflow-hidden hover:bg-marafone-yellow/10 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2"
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
          <Star
            className="w-6 h-6 lg:mr-1 text-marafone-dark group-hover:text-marafone-red transition-colors duration-300"
            strokeWidth={2.2}
          />
          <span className="relative z-10 hidden lg:block">Funzionalità</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-marafone-yellow/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
        </button>
        <button
          className="relative font-game text-xl text-marafone-dark hover:text-marafone-red transition-all duration-300 px-4 py-2 rounded-xl bg-transparent border-none cursor-pointer group overflow-hidden hover:bg-marafone-yellow/10 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2"
          onClick={() => {
            window.location.href = "/regole";
          }}
        >
          <BookOpen
            className="w-6 h-6 lg:mr-1 text-marafone-dark group-hover:text-marafone-red transition-colors duration-300"
            strokeWidth={2.2}
          />
          <span className="relative z-10 hidden lg:block">Regole</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-marafone-yellow/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
        </button>
        <button
          className="relative font-game text-xl text-marafone-dark hover:text-marafone-red transition-all duration-300 px-4 py-2 rounded-xl bg-transparent border-none cursor-pointer group overflow-hidden hover:bg-marafone-yellow/10 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2"
          onClick={() => {
            window.location.href = "/blog";
          }}
        >
          <Edit3
            className="w-6 h-6 lg:mr-1 text-marafone-dark group-hover:text-marafone-red transition-colors duration-300"
            strokeWidth={2.2}
          />
          <span className="relative z-10 hidden lg:block">Articoli</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-marafone-yellow/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
        </button>
      </nav>
    </header>
  );
};

export default Header;
