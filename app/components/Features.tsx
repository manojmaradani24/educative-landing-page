"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Clock, Award, Users, Zap, Shield, Video, BookOpen, BarChart, MessageCircle, Code, Cloud } from "lucide-react";

export default function Features() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    { icon: Brain, title: "AI Personalized Learning", desc: "Adaptive curriculum tailored to your pace and learning style", badge: "New" },
    { icon: Clock, title: "Flexible Schedule", desc: "Learn anytime, anywhere at your convenience with mobile access", badge: "Popular" },
    { icon: Award, title: "Certified Courses", desc: "Industry-recognized certifications from top companies", badge: "" },
    { icon: Users, title: "Peer Collaboration", desc: "Connect with learners worldwide in study groups", badge: "" },
    { icon: Zap, title: "Real-time Feedback", desc: "Instant insights and progress tracking with AI analysis", badge: "AI Powered" },
    { icon: Shield, title: "Secure Platform", desc: "Your data privacy and security is our top priority", badge: "" },
    { icon: Video, title: "Live Sessions", desc: "Interactive classes with expert instructors", badge: "" },
    { icon: BookOpen, title: "Rich Resources", desc: "Access to extensive library of learning materials", badge: "" },
    { icon: BarChart, title: "Career Tracking", desc: "Monitor your progress and career readiness", badge: "Pro" },
    { icon: MessageCircle, title: "24/7 Support", desc: "AI chatbot and human support always available", badge: "" },
    { icon: Code, title: "Hands-on Projects", desc: "Real-world projects to build your portfolio", badge: "" },
    { icon: Cloud, title: "Cloud Labs", desc: "Practice in professional cloud environments", badge: "New" },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1 bg-purple-100 rounded-full mb-4">
            <span className="text-purple-600 font-semibold text-sm">Platform Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to accelerate your learning journey and achieve your goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              {feature.badge && (
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    feature.badge === "New" ? "bg-green-100 text-green-600" :
                    feature.badge === "Popular" ? "bg-orange-100 text-orange-600" :
                    feature.badge === "AI Powered" ? "bg-purple-100 text-purple-600" :
                    "bg-blue-100 text-blue-600"
                  }`}>
                    {feature.badge}
                  </span>
                </div>
              )}
              
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="text-purple-600 font-semibold text-sm flex items-center gap-1">
                  Learn more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300">
            View All Features
          </button>
        </motion.div>
      </div>
    </section>
  );
}