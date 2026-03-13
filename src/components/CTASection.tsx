"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useAnimations";

export default function CTASection() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section ref={ref} className="section-padding bg-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="relative bg-gradient-to-br from-primary via-navy to-primary-700 rounded-3xl p-8 md:p-16 text-center overflow-hidden"
                >
                    {/* Decorations */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                    <div className="absolute top-6 right-6">
                        <Sparkles className="w-8 h-8 text-accent/30" />
                    </div>

                    <div className="relative z-10">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={isVisible ? { scale: 1 } : {}}
                            transition={{ delay: 0.3, type: "spring" }}
                            className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-8"
                        >
                            <GraduationCap className="w-10 h-10 text-accent" />
                        </motion.div>

                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                            Ready to Start Your{" "}
                            <span className="gradient-text">Study Abroad Journey?</span>
                        </h2>

                        <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg">
                            Take the first step towards your dream university. Book a free
                            counselling session with our experts and get personalized guidance
                            for your application.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary text-base flex items-center justify-center gap-2">
                                Book Free Counselling
                                <ArrowRight size={18} />
                            </Link>
                            <Link href="/services" className="btn-secondary text-base flex items-center justify-center gap-2">
                                Explore Our Services
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
