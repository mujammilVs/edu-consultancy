"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { defaultContent } from "@/lib/content";
import { useScrollAnimation } from "@/hooks/useAnimations";
import { useState } from "react";

export default function Testimonials() {
    const { ref, isVisible } = useScrollAnimation();
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section
            ref={ref}
            className="section-padding bg-white relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                        Student Testimonials
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                        What Our Students{" "}
                        <span className="gradient-text">Say About Us</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Hear from students who successfully achieved their dream of studying
                        abroad with our guidance.
                    </p>
                </motion.div>

                {/* Featured testimonial */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="bg-gradient-to-br from-primary to-navy rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <Quote className="absolute top-6 right-6 w-24 h-24 text-white/5" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-1 mb-4">
                                {Array.from({ length: defaultContent.testimonials[activeIndex].rating }).map(
                                    (_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 text-accent fill-accent"
                                        />
                                    )
                                )}
                            </div>
                            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
                                &ldquo;{defaultContent.testimonials[activeIndex].text}&rdquo;
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-lg border-2 border-accent/30">
                                    {defaultContent.testimonials[activeIndex].avatar}
                                </div>
                                <div>
                                    <div className="text-white font-semibold text-lg">
                                        {defaultContent.testimonials[activeIndex].name}
                                    </div>
                                    <div className="text-white/50">
                                        {defaultContent.testimonials[activeIndex].country}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Thumbnail navigation */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {defaultContent.testimonials.map((testimonial, index) => (
                        <motion.button
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                            onClick={() => setActiveIndex(index)}
                            className={`p-4 rounded-xl transition-all duration-300 text-left ${activeIndex === index
                                    ? "bg-primary/10 border-2 border-primary"
                                    : "bg-slate-50 border-2 border-transparent hover:border-slate-200"
                                }`}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${activeIndex === index
                                            ? "bg-primary text-white"
                                            : "bg-slate-200 text-slate-600"
                                        }`}
                                >
                                    {testimonial.avatar}
                                </div>
                            </div>
                            <div className="text-sm font-medium text-slate-900 truncate">
                                {testimonial.name}
                            </div>
                            <div className="text-xs text-slate-500 truncate">
                                {testimonial.country}
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
}
