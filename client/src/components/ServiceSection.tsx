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
          <h2 className="text-4xl md:text-5xl font-light mb-6 gradient-text">우리의 서비스</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            AI 지지율 분석과 중립뉴스로 정확하고 객관적인 정보를 제공합니다
          </p>
          <div className="w-24 h-0.5 bg-white mx-auto mt-8 opacity-30"></div>
        </motion.div>

        {/* AI 지지율 분석 Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
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
            <h3 className="text-3xl md:text-4xl font-light text-white">AI 지지율 분석</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              기존 지지율 조사의 편향성과 한계를 극복하고, AI 기술을 통해 
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
                  <p className="text-gray-400">소셜미디어와 온라인 데이터를 실시간으로 분석하여 지지율 변화를 즉시 감지합니다.</p>
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
                  <p className="text-gray-400">과거 데이터와 현재 트렌드를 분석하여 미래 지지율 변화를 예측합니다.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* 중립뉴스 Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div className="space-y-8" variants={itemVariants}>
            <h3 className="text-3xl md:text-4xl font-light text-white">중립뉴스</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              편향되지 않은 객관적인 뉴스를 AI 기술로 큐레이션하여 제공합니다. 
              다양한 관점의 균형 잡힌 정보로 올바른 판단을 도와드립니다.
            </p>
            
            <div className="space-y-6">
              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="w-6 h-6 bg-white rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">편향성 제거</h4>
                  <p className="text-gray-400">AI가 뉴스의 편향성을 분석하고 중립적인 관점으로 재구성합니다.</p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="w-6 h-6 bg-white rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">다각도 분석</h4>
                  <p className="text-gray-400">동일한 사건에 대한 다양한 시각과 정보를 종합하여 균형 잡힌 뉴스를 제공합니다.</p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="w-6 h-6 bg-white rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">인스타그램 채널</h4>
                  <p className="text-gray-400">@median.ai에서 중립적인 시각의 뉴스를 매일 업데이트합니다.</p>
                </div>
              </motion.div>
            </div>

            <motion.a
              href="https://instagram.com/median.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@median.ai 팔로우</span>
            </motion.a>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Balanced news and media representation showing multiple perspectives"
              className="rounded-2xl shadow-2xl w-full h-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />
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
