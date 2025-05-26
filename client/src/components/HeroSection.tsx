import { motion } from "framer-motion";
import Logo from "./Logo";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    initial: { y: 30, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" id="hero">
      <motion.div
        className="max-w-6xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={itemVariants}>
          <Logo className="mx-auto mb-8" animate />
        </motion.div>
        
        <motion.h1
          className="text-6xl md:text-8xl font-light mb-6 gradient-text"
          variants={itemVariants}
        >
          Median
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed max-w-3xl mx-auto"
          variants={itemVariants}
        >
          데이터의 중심에서 미래를 예측하다
        </motion.p>
        
        <motion.p
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          AI 여론조사와 중립뉴스를 통해 정확하고 객관적인 정보를 제공하며, 
          편향 없는 데이터 분석으로 사회의 진실한 목소리를 전달합니다.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => scrollToSection("service")}
            className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            서비스 알아보기
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("about")}
            className="border border-gray-600 text-white px-8 py-4 rounded-full font-medium hover:border-white hover:bg-white hover:bg-opacity-10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            회사 소개
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* Subtle background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-1 h-1 bg-white opacity-20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/3 w-1 h-1 bg-white opacity-30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-white opacity-10 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </section>
  );
}
