"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Heart, Lightbulb, Rocket, Globe, Shield, Clock, Zap } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    { icon: Target, title: "Our Mission", text: "Democratize quality education through AI technology", color: "from-purple-500 to-purple-600" },
    { icon: Heart, title: "Core Values", text: "Innovation, Accessibility, Excellence, Integrity", color: "from-pink-500 to-pink-600" },
    { icon: Lightbulb, title: "Our Vision", text: "Create lifelong learners who shape the future", color: "from-yellow-500 to-orange-500" },
  ];

  const achievements = [
    { icon: Globe, value: "50+", label: "Countries", desc: "Students worldwide" },
    { icon: Clock, value: "1M+", label: "Hours Learned", desc: "Total learning hours" },
    { icon: Zap, value: "500+", label: "Courses", desc: "And growing daily" },
    { icon: Shield, value: "24/7", label: "Support", desc: "AI-powered assistance" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1 bg-purple-100 rounded-full mb-4">
            <span className="text-purple-600 font-semibold text-sm">Who We Are</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Educate.ai</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to revolutionize education by making quality learning accessible, 
            personalized, and engaging for everyone, everywhere.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-12 mb-16">
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex p-4 bg-gradient-to-r ${item.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, idx) => (
              <div key={idx} className="text-center text-white">
                <item.icon className="w-10 h-10 mx-auto mb-3 opacity-90" />
                <div className="text-3xl md:text-4xl font-bold mb-1">{item.value}</div>
                <div className="text-lg font-semibold mb-1">{item.label}</div>
                <div className="text-sm opacity-90">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Founded in 2023, Educate.ai has quickly become a leader in AI-powered education, 
            serving learners from over 50 countries and partnering with top industry experts 
            to deliver cutting-edge content.
          </p>
        </motion.div>
      </div>
    </section>
  );
}