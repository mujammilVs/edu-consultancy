"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useAnimations";
import { defaultContent } from "@/lib/content";

export default function StreamsSection() {
    const { ref, isVisible } = useScrollAnimation();

    const icons = ["📊", "🔬", "🏥", "⚖️"];
    const colors = [
        "from-blue-500/20 to-indigo-500/20 border-blue-500/30",
        "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        "from-red-500/20 to-rose-500/20 border-red-500/30",
        "from-amber-500/20 to-orange-500/20 border-amber-500/30",
    ];
    const textColors = [
        "text-blue-600",
        "text-emerald-600",
        "text-red-600",
        "text-amber-600",
    ];

    return (
        <section ref={ref} className="section-padding bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                        Academic Streams
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                        Explore Streams That{" "}
                        <span className="gradient-text">Shape Careers</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Discover the most in-demand courses and global universities that
                        align with your skills, passion, and career goals.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {defaultContent.streams.map((stream, index) => (
                        <motion.div
                            key={stream.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group cursor-pointer"
                        >
                            <div
                                className={`h-full bg-gradient-to-br ${colors[index]} border rounded-2xl p-8 relative overflow-hidden`}
                            >
                                {/* Large background icon */}
                                <div className="absolute -bottom-4 -right-4 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">
                                    {icons[index]}
                                </div>

                                <div className="relative z-10">
                                    <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">
                                        {icons[index]}
                                    </span>
                                    <h3 className="text-xl font-display font-bold text-slate-900 mb-2">
                                        {stream.name}
                                    </h3>
                                    <p
                                        className={`text-2xl font-bold ${textColors[index]} mb-1`}
                                    >
                                        {stream.colleges} Colleges
                                    </p>
                                    <p className="text-sm text-slate-600">
                                        {stream.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
