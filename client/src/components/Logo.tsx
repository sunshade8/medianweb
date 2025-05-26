import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  animate?: boolean;
}

export default function Logo({ className = "", animate = false }: LogoProps) {
  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const LogoComponent = (
    <div className={`logo-container ${className}`}>
      <div className="logo-circle large"></div>
      <div className="logo-circle small-left"></div>
      <div className="logo-circle small-right"></div>
    </div>
  );

  if (animate) {
    return (
      <motion.div
        variants={logoVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={floatVariants} animate="animate">
          {LogoComponent}
        </motion.div>
      </motion.div>
    );
  }

  return LogoComponent;
}
