"use client";

import { motion } from "framer-motion";
import {
    ListChecks,
    CheckCircle,
    Clock,
    Wallet,
    Users,
    ShieldCheck,
} from "lucide-react";
import { defaultContent } from "@/lib/content";
import { useScrollAnimation } from "@/hooks/useAnimations";

const iconMap: Record<string, React.ReactNode> = {
    ListChecks: <ListChecks className="w-6 h-6" />,
    CheckCircle: <CheckCircle className="w-6 h-6" />,
    Clock: <Clock className="w-6 h-6" />,
    Wallet: <Wallet className="w-6 h-6" />,
    Users: <Users className="w-6 h-6" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6" />,
};

export default function WhyChooseUs() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section
            ref={ref}
            className="section-padding bg-hero-gradient relative overflow-hidden"
        >
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block bg-white/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-white/10">
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                        Clear, Fair Processes &{" "}
                        <span className="gradient-text">Support That Puts You First</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        From application to arrival, we ensure a transparent and supportive
                        journey for every student.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {defaultContent.whyChooseUs.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass-card p-6 md:p-8 group cursor-default card-shine"
                        >
                            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent/30 transition-all duration-300">
                                <div className="text-accent">
                                    {iconMap[item.icon] || <CheckCircle className="w-6 h-6" />}
                                </div>
                            </div>
                            <h3 className="text-lg font-display font-bold text-white mb-3">
                                {item.title}
                            </h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
