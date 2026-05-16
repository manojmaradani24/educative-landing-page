"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play, TrendingUp, Award, Users } from "lucide-react";

export default function Hero() {
  const stats = [
    { icon: Users, value: "50K+", label: "Active Students" },
    { icon: Award, value: "98%", label: "Success Rate" },
    { icon: TrendingUp, value: "30+", label: "Expert Instructors" },
  ];

  return (
    <section id="home" className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles size={18} />
              <span className="text-sm font-semibold">AI-Powered Learning Platform</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your
              <span className="text-gradient block"> Learning Journey</span>
              With AI Technology
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Join over 50,000 students mastering new skills with personalized AI guidance, 
              interactive courses, and a supportive global community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Learning Free <ArrowRight size={18} />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play size={18} /> Watch Demo Video
              </motion.button>
            </div>

            <div className="flex flex-wrap gap-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-2 rounded-lg">
                    <stat.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 animate-float">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop"
                alt="Students learning together"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-3xl"></div>
            </div>
            
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-60"
            ></motion.div>
            
            <motion.div 
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-60"
            ></motion.div>
            
            <div className="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-white rounded-xl shadow-xl p-3 z-20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">2,500+ online now</span>
              </div>
            </div>
            
            <div className="absolute bottom-10 -right-5 bg-white rounded-xl shadow-xl p-3 z-20">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-purple-600" />
                <span className="text-sm font-semibold">AI recommended for you</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}