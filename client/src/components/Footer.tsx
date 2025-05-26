import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import lautrecLogo from "@assets/Logo_W_L_1748238177518.png";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <footer className="py-16 border-t border-gray-800" ref={ref}>
      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-8 md:mb-0">
            <img 
              src={lautrecLogo} 
              alt="Lautrec Logo" 
              className="h-8 w-auto object-contain"
            />
            <span className="text-2xl font-light text-white">(주)로트렉</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">© 2024 (주)로트렉. All rights reserved.</p>
            <p className="text-gray-500 text-sm">서울특별시 강남구 테헤란로 123, 메디안빌딩 10층</p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
