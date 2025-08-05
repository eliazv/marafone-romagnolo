import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

// Hook to detect reduced motion preference
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
};

export interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    delay = 0,
    rootMargin = "0px 0px -100px 0px",
  } = options;

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        controls.start("visible");
      }, delay);
      return () => clearTimeout(timer);
    } else if (!triggerOnce) {
      controls.start("hidden");
    }
  }, [controls, inView, delay, triggerOnce]);

  return { ref, controls, inView };
};

// Predefined animation variants with reduced motion support
export const createFadeInUp = (prefersReducedMotion: boolean = false) => ({
  hidden: {
    opacity: 0,
    y: prefersReducedMotion ? 0 : 60,
    transition: {
      duration: prefersReducedMotion ? 0.1 : 0.6,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion ? 0.1 : 0.6,
      ease: "easeOut",
    },
  },
});

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -60,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 60,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Hook for staggered animations
export const useStaggerAnimation = (options: ScrollAnimationOptions = {}) => {
  const { ref, controls, inView } = useScrollAnimation(options);

  return {
    ref,
    containerVariants: staggerContainer,
    itemVariants: staggerItem,
    animate: controls,
    inView,
  };
};

// Hook for parallax effect
export const useParallax = (speed: number = 0.5) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  const parallaxVariants = {
    hidden: {
      y: 0,
    },
    visible: {
      y: speed * -100,
      transition: {
        duration: 0,
        ease: "linear",
      },
    },
  };

  return { ref, parallaxVariants, inView };
};
