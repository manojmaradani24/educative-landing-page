"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { 
      name: "Sarah Johnson", 
      role: "Software Engineer at Google", 
      text: "The AI-powered recommendations completely transformed my learning experience. Within 6 months, I went from beginner to landing my dream job at Google. The personalized path kept me motivated and focused.", 
      rating: 5, 
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      course: "Full Stack Development"
    },
    { 
      name: "Michael Chen", 
      role: "Data Scientist at Amazon", 
      text: "Best learning platform I've ever used. The AI-driven curriculum adapts to your skill level and the projects are industry-relevant. Got promoted within 3 months of completing the Data Science track!", 
      rating: 5, 
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      course: "Data Science & AI"
    },
    { 
      name: "Priya Patel", 
      role: "Product Manager", 
      text: "Flexible schedule and amazing content. Completed my certification while working full-time. The peer collaboration feature helped me network with professionals worldwide.", 
      rating: 5, 
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      course: "Product Management"
    },
    { 
      name: "James Wilson", 
      role: "CTO at Startup", 
      text: "The cloud labs and hands-on projects are incredible. I've hired 3 developers who trained on Educate.ai - their practical skills are outstanding.", 
      rating: 5, 
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      course: "Cloud Architecture"
    },
    { 
      name: "Emma Davis", 
      role: "UX Designer", 
      text: "The AI mentor feature is game-changing. It feels like having a personal tutor available 24/7. The feedback on my portfolio projects was invaluable.", 
      rating: 5, 
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      course: "UI/UX Design"
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1 bg-purple-100 rounded-full mb-4">
            <span className="text-purple-600 font-semibold text-sm">Student Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Join 50,000+ successful graduates who transformed their careers
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            >
              <Quote className="w-12 h-12 text-purple-200 mb-6" />
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-100 px-4 py-2 rounded-full">
                  <span className="text-purple-600 font-semibold text-sm">{testimonials[currentIndex].course}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 md:-ml-6 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-purple-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 md:-mr-6 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronRight className="w-6 h-6 text-purple-600" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-8 bg-purple-600" : "bg-purple-300"
              }`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="text-3xl font-bold text-purple-600">4.9</div>
            <div className="flex justify-center gap-1 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="text-3xl font-bold text-purple-600">50K+</div>
            <div className="text-gray-600">Happy Students</div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="text-3xl font-bold text-purple-600">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="text-3xl font-bold text-purple-600">100+</div>
            <div className="text-gray-600">Expert Instructors</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}