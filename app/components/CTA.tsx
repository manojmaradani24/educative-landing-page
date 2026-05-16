"use client";
import { motion } from "framer-motion";
import { ArrowRight, Gift, CreditCard, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <Gift size={18} className="text-white" />
            <span className="text-white font-semibold">Limited Time Offer</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Future?
          </h2>
          
          <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join 50,000+ students already advancing their careers with Educate.ai. 
            Get 30% off your first year - limited time only!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Start Free Trial <ArrowRight size={18} />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              View Pricing <CreditCard size={18} />
            </motion.button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-purple-100">
            <div className="flex items-center gap-2">
              <Zap size={16} />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift size={16} />
              <span>14-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight size={16} />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}