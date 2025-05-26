import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
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

  return (
    <section className="py-24 relative" id="contact" ref={ref}>
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-light mb-8 gradient-text"
          variants={itemVariants}
        >
          함께 만들어가는 미래
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          variants={itemVariants}
        >
          AI 지지율 분석의 혁신적인 여정에 동참하여 더 나은 사회를 만들어가세요. 
          정확한 데이터와 인사이트로 의미 있는 변화를 이끌어내겠습니다.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <motion.a
            href="mailto:contact@median.kr"
            className="bg-white text-black px-10 py-4 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            <span>문의하기</span>
          </motion.a>
          <motion.a
            href="tel:+82-2-1234-5678"
            className="border border-gray-600 text-white px-10 py-4 rounded-full font-medium hover:border-white hover:bg-white hover:bg-opacity-10 transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5" />
            <span>전화 상담</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
