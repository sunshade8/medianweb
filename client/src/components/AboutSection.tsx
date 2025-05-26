import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Zap, Shield } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
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

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 relative" id="about" ref={ref}>
      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-light mb-6 gradient-text">회사 소개</h2>
          <div className="w-24 h-0.5 bg-white mx-auto opacity-30"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div className="space-y-8" variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-light text-white">혁신적인 데이터 분석</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Median은 전통적인 여론조사의 한계를 뛰어넘어, 인공지능과 빅데이터 기술을 활용한 
              차세대 여론조사 플랫폼을 개발하고 있습니다.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              우리는 더 정확하고, 더 빠르며, 더 신뢰할 수 있는 데이터를 제공하여 
              의사결정의 질을 높이고 사회 발전에 기여하고자 합니다.
            </p>
          </motion.div>
          
          <motion.div className="relative" variants={itemVariants}>
            <motion.img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Data analytics dashboard with charts and graphs"
              className="rounded-2xl shadow-2xl w-full h-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl"></div>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <motion.div
            className="text-center p-8 rounded-2xl bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-all duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-medium mb-4">정확성</h3>
            <p className="text-gray-400 leading-relaxed">AI 기술을 통한 정밀한 데이터 분석으로 높은 정확도를 보장합니다.</p>
          </motion.div>

          <motion.div
            className="text-center p-8 rounded-2xl bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-all duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-medium mb-4">신속성</h3>
            <p className="text-gray-400 leading-relaxed">실시간 데이터 처리로 빠른 인사이트를 제공합니다.</p>
          </motion.div>

          <motion.div
            className="text-center p-8 rounded-2xl bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-all duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-medium mb-4">신뢰성</h3>
            <p className="text-gray-400 leading-relaxed">투명한 방법론과 검증된 알고리즘으로 신뢰할 수 있는 결과를 제공합니다.</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
