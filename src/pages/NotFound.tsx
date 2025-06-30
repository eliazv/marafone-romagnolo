import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Pagina non trovata | Marafone Romagnolo</title>
        <meta name="robots" content="noindex, follow" />
        <meta
          name="description"
          content="Pagina non trovata. Gioco di carte romagnolo Marafone Maraffa."
        />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Pagina non trovata</p>
          <a
            href="/"
            className="text-marafone-red hover:text-marafone-yellow underline font-game text-lg"
          >
            Torna alla Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
