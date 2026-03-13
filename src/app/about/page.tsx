"use client";

import { motion } from "framer-motion";
import {
    GraduationCap,
    Globe,
    Award,
    HeartHandshake,
    Target,
    Eye,
    Users,
    TrendingUp,
} from "lucide-react";
import { defaultContent } from "@/lib/content";
import { useScrollAnimation } from "@/hooks/useAnimations";
import CTASection from "@/components/CTASection";

const highlightIcons: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-8 h-8" />,
    Globe: <Globe className="w-8 h-8" />,
    Award: <Award className="w-8 h-8" />,
    HeartHandshake: <HeartHandshake className="w-8 h-8" />,
};

export default function AboutPage() {
    const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
    const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation();
    const { ref: highlightsRef, isVisible: highlightsVisible } = useScrollAnimation();
    const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

    const stats = [
        { icon: <Users className="w-6 h-6" />, value: "5000+", label: "Students Placed" },
        { icon: <Globe className="w-6 h-6" />, value: "200+", label: "Partner Universities" },
        { icon: <Target className="w-6 h-6" />, value: "15+", label: "Countries" },
        { icon: <TrendingUp className="w-6 h-6" />, value: "98%", label: "Success Rate" },
    ];

    return (
        <>
            {/* Hero banner */}
            <section className="relative bg-hero-gradient py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
                </div>
                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <span className="inline-block bg-white/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-white/10">
                            About Us
                        </span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                            {defaultContent.about.title}
                        </h1>
                        <p className="text-white/70 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                            {defaultContent.about.description.substring(0, 200)}...
                        </p>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto fill-white">
                        <path d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,69.3C672,85,768,107,864,106.7C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
                    </svg>
                </div>
            </section>

            {/* About detail */}
            <section ref={aboutRef} className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="grid lg:grid-cols-2 gap-16 items-center"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                                Your Trusted Partner for{" "}
                                <span className="gradient-text">Study Abroad</span>
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                                {defaultContent.about.description}
                            </p>
                            <p className="text-slate-500 leading-relaxed">
                                Whether you&apos;re exploring different fields or seeking clarity on your career path,
                                we&apos;re here to guide your university application process every step of the way.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12">
                                <div className="grid grid-cols-2 gap-6">
                                    {stats.map((stat, index) => (
                                        <motion.div
                                            key={stat.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
                                            transition={{ delay: 0.3 + index * 0.1 }}
                                            className="text-center"
                                        >
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 text-primary">
                                                {stat.icon}
                                            </div>
                                            <div className="text-3xl font-display font-bold text-slate-900 mb-1">
                                                {stat.value}
                                            </div>
                                            <div className="text-sm text-slate-500">
                                                {stat.label}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section ref={missionRef} className="section-padding bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={missionVisible ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
                                Our Mission
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {defaultContent.about.mission}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={missionVisible ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100"
                        >
                            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="w-7 h-7 text-accent" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
                                Our Vision
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {defaultContent.about.vision}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section ref={highlightsRef} className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={highlightsVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                            What Makes Us <span className="gradient-text">Different</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {defaultContent.about.highlights.map((highlight, index) => (
                            <motion.div
                                key={highlight.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={highlightsVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-primary/5 to-accent/5 border border-slate-100 rounded-2xl p-6 text-center group"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary group-hover:scale-110 transition-transform">
                                    {highlightIcons[highlight.icon] || <Award className="w-8 h-8" />}
                                </div>
                                <h3 className="text-lg font-display font-bold text-slate-900 mb-2">
                                    {highlight.title}
                                </h3>
                                <p className="text-sm text-slate-600">
                                    {highlight.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats banner */}
            <section ref={statsRef} className="py-16 bg-hero-gradient">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-white/60 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
