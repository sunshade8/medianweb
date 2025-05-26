import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ServiceSection() {
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

  const statsVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 relative" id="service" ref={ref}>
      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-light mb-6 gradient-text">AI 여론조사</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            인공지능이 만들어가는 여론조사의 새로운 표준
          </p>
          <div className="w-24 h-0.5 bg-white mx-auto mt-8 opacity-30"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div className="order-2 lg:order-1" variants={itemVariants}>
            <motion.img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Artificial intelligence and machine learning visualization with neural networks"
              className="rounded-2xl shadow-2xl w-full h-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />
          </motion.div>
          
          <motion.div className="order-1 lg:order-2 space-y-8" variants={itemVariants}>
            <h3 className="text-3xl md:text-4xl font-light text-white">차세대 여론조사 플랫폼</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              기존 여론조사의 편향성과 한계를 극복하고, AI 기술을 통해 
              더욱 정확하고 포괄적인 민심을 파악할 수 있는 혁신적인 플랫폼을 개발하고 있습니다.
            </p>
            
            <div className="space-y-6">
              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="w-6 h-6 bg-white rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">실시간 감정 분석</h4>
                  <p className="text-gray-400">소셜미디어와 온라인 데이터를 실시간으로 분석하여 여론 변화를 즉시 감지합니다.</p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="w-6 h-6 bg-white rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">편향 제거 알고리즘</h4>
                  <p className="text-gray-400">AI가 데이터의 편향성을 자동으로 감지하고 보정하여 객관적인 결과를 제공합니다.</p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="w-6 h-6 bg-white rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">예측 모델링</h4>
                  <p className="text-gray-400">과거 데이터와 현재 트렌드를 분석하여 미래 여론 변화를 예측합니다.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 border border-gray-800"
          variants={itemVariants}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4">기술 혁신</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">최첨단 AI 기술을 활용한 차별화된 여론조사 솔루션</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div className="text-center" variants={statsVariants}>
              <div className="text-3xl font-light text-white mb-2">99.5%</div>
              <div className="text-gray-400">정확도</div>
            </motion.div>
            <motion.div className="text-center" variants={statsVariants}>
              <div className="text-3xl font-light text-white mb-2">24/7</div>
              <div className="text-gray-400">실시간 모니터링</div>
            </motion.div>
            <motion.div className="text-center" variants={statsVariants}>
              <div className="text-3xl font-light text-white mb-2">1M+</div>
              <div className="text-gray-400">데이터 포인트</div>
            </motion.div>
            <motion.div className="text-center" variants={statsVariants}>
              <div className="text-3xl font-light text-white mb-2">&lt; 1s</div>
              <div className="text-gray-400">응답 시간</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
