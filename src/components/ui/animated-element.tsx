import { motion, Variants } from 'framer-motion';
import { useScrollAnimation, ScrollAnimationOptions } from '@/hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface AnimatedElementProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  as?: keyof typeof motion;
  animationOptions?: ScrollAnimationOptions;
  whileHover?: any;
  whileTap?: any;
  style?: React.CSSProperties;
}

export const AnimatedElement = ({
  children,
  variants,
  className = '',
  as = 'div',
  animationOptions = {},
  whileHover,
  whileTap,
  style
}: AnimatedElementProps) => {
  const { ref, controls } = useScrollAnimation(animationOptions);
  const MotionComponent = motion[as] as any;

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
      whileHover={whileHover}
      whileTap={whileTap}
      style={style}
    >
      {children}
    </MotionComponent>
  );
};

// Predefined animated components
export const FadeInUp = ({ children, className = '', delay = 0, ...props }: Omit<AnimatedElementProps, 'variants'> & { delay?: number }) => {
  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay
      }
    }
  };

  return (
    <AnimatedElement variants={fadeInUpVariants} className={className} {...props}>
      {children}
    </AnimatedElement>
  );
};

export const FadeInLeft = ({ children, className = '', delay = 0, ...props }: Omit<AnimatedElementProps, 'variants'> & { delay?: number }) => {
  const fadeInLeftVariants = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay
      }
    }
  };

  return (
    <AnimatedElement variants={fadeInLeftVariants} className={className} {...props}>
      {children}
    </AnimatedElement>
  );
};

export const FadeInRight = ({ children, className = '', delay = 0, ...props }: Omit<AnimatedElementProps, 'variants'> & { delay?: number }) => {
  const fadeInRightVariants = {
    hidden: {
      opacity: 0,
      x: 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay
      }
    }
  };

  return (
    <AnimatedElement variants={fadeInRightVariants} className={className} {...props}>
      {children}
    </AnimatedElement>
  );
};

export const ScaleIn = ({ children, className = '', delay = 0, ...props }: Omit<AnimatedElementProps, 'variants'> & { delay?: number }) => {
  const scaleInVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay
      }
    }
  };

  return (
    <AnimatedElement variants={scaleInVariants} className={className} {...props}>
      {children}
    </AnimatedElement>
  );
};

export const StaggerContainer = ({ children, className = '', ...props }: Omit<AnimatedElementProps, 'variants'>) => {
  const staggerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  return (
    <AnimatedElement variants={staggerVariants} className={className} {...props}>
      {children}
    </AnimatedElement>
  );
};

export const StaggerItem = ({ children, className = '', ...props }: Omit<AnimatedElementProps, 'variants'>) => {
  const staggerItemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatedElement variants={staggerItemVariants} className={className} {...props}>
      {children}
    </AnimatedElement>
  );
};
