"use client";

import { motion } from "framer-motion";
import {
    Trophy,
    BookOpen,
    MessageSquare,
    Plane,
    FileText,
    Compass,
} from "lucide-react";
import { defaultContent } from "@/lib/content";
import { useScrollAnimation } from "@/hooks/useAnimations";

const iconMap: Record<string, React.ReactNode> = {
    Trophy: <Trophy className="w-7 h-7" />,
    BookOpen: <BookOpen className="w-7 h-7" />,
    MessageSquare: <MessageSquare className="w-7 h-7" />,
    Plane: <Plane className="w-7 h-7" />,
    FileText: <FileText className="w-7 h-7" />,
    Compass: <Compass className="w-7 h-7" />,
};

export default function ServiceCards() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section
            ref={ref}
            className="section-padding bg-slate-50"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                        Our Services
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                        Comprehensive Support for Your{" "}
                        <span className="gradient-text">Study Abroad Journey</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        From counselling to post-arrival support, we provide end-to-end
                        assistance for your international education journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {defaultContent.services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group"
                        >
                            <div className="h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-card-hover border border-slate-100 transition-all duration-500 card-shine">
                                {/* Icon */}
                                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                    <div className="text-primary">
                                        {iconMap[service.icon] || <BookOpen className="w-7 h-7" />}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-600 mb-5 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2">
                                    {service.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center gap-2 text-sm text-slate-500"
                                        >
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
