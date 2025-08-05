import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ScaleIn } from "@/components/ui/animated-element";

const ScreenshotCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Array delle immagini degli screenshot
  const screenshots = [
    "/img/screen-playstore/1.png",
    "/img/screen-playstore/2.png",
    "/img/screen-playstore/3.png",
    "/img/screen-playstore/4.png",
    "/img/screen-playstore/5.png",
    "/img/screen-playstore/6.png",
    "/img/screen-playstore/7.png",
  ];

  // Duplica le immagini per creare l'effetto infinito
  const duplicatedScreenshots = [
    ...screenshots,
    ...screenshots,
    ...screenshots,
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    const scrollSpeed = 0.5; // Velocità di scorrimento lento

    const autoScroll = () => {
      if (!isUserInteracting && carousel) {
        carousel.scrollLeft += scrollSpeed;

        // Reset quando raggiungiamo la fine del primo set di immagini
        if (carousel.scrollLeft >= carousel.scrollWidth / 3) {
          carousel.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isUserInteracting]);

  // Gestione del touch/mouse per lo swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsUserInteracting(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isUserInteracting || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Moltiplicatore per la velocità di swipe
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsUserInteracting(false);
    // Riprende l'auto-scroll dopo 2 secondi
    setTimeout(() => {
      setIsUserInteracting(false);
    }, 2000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsUserInteracting(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isUserInteracting || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsUserInteracting(false);
    // Riprende l'auto-scroll dopo 2 secondi
    setTimeout(() => {
      setIsUserInteracting(false);
    }, 2000);
  };

  return (
    <ScaleIn>
      <section className="py-10 bg-gradient-to-r from-marafone-beige to-marafone-yellow overflow-hidden">
        <div className="container mx-0 px-0">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitScrollbar: { display: "none" },
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {duplicatedScreenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-52 md:w-60 lg:w-72"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={screenshot}
                  alt={`Screenshot ${(index % screenshots.length) + 1}`}
                  className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white transition-shadow duration-300"
                  draggable={false}
                  style={{ userSelect: "none" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ScaleIn>
  );
};

export default ScreenshotCarousel;
