"use client";

import { motion } from "framer-motion";
import {
    Trophy,
    BookOpen,
    MessageSquare,
    Plane,
    FileText,
    Compass,
    CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { defaultContent } from "@/lib/content";
import { useScrollAnimation } from "@/hooks/useAnimations";
import CTASection from "@/components/CTASection";

const iconMap: Record<string, React.ReactNode> = {
    Trophy: <Trophy className="w-8 h-8" />,
    BookOpen: <BookOpen className="w-8 h-8" />,
    MessageSquare: <MessageSquare className="w-8 h-8" />,
    Plane: <Plane className="w-8 h-8" />,
    FileText: <FileText className="w-8 h-8" />,
    Compass: <Compass className="w-8 h-8" />,
};

const visaProcess = [
    {
        step: "01",
        title: "Profile Evaluation",
        description: "We assess your academic profile, work experience, and career goals to recommend the best universities and courses.",
    },
    {
        step: "02",
        title: "University Selection",
        description: "Based on your profile, we shortlist universities and courses that match your aspirations and budget.",
    },
    {
        step: "03",
        title: "Application & Documentation",
        description: "We help you prepare compelling SOPs, LORs, and applications that stand out to admission committees.",
    },
    {
        step: "04",
        title: "Visa Processing",
        description: "Expert guidance on visa documentation, interview preparation, and submission for maximum success.",
    },
    {
        step: "05",
        title: "Pre-Departure Support",
        description: "From accommodation to travel plans, cultural orientation to forex assistance—we cover it all.",
    },
    {
        step: "06",
        title: "Post-Arrival Assistance",
        description: "Continued support even after you arrive—including orientation, banking, and settling in.",
    },
];

export default function ServicesPage() {
    const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0);
    const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
    const { ref: processRef, isVisible: processVisible } = useScrollAnimation();
    const { ref: visaRef, isVisible: visaVisible } = useScrollAnimation();

    return (
        <>
            {/* Hero */}
            <section className="relative bg-hero-gradient py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
                </div>
                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <span className="inline-block bg-white/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-white/10">
                            Our Services
                        </span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                            Comprehensive Support for Your{" "}
                            <span className="gradient-text">Journey</span>
                        </h1>
                        <p className="text-white/70 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                            We provide end-to-end assistance for your international education journey,
                            from university selection to post-arrival support.
                        </p>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto fill-white">
                        <path d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,69.3C672,85,768,107,864,106.7C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
                    </svg>
                </div>
            </section>

            {/* Services grid */}
            <section ref={servicesRef} className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {defaultContent.services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={servicesVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="group"
                            >
                                <div className="h-full bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 shadow-sm hover:shadow-card-hover border border-slate-100 transition-all duration-500">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <div className="text-primary">
                                            {iconMap[service.icon] || <BookOpen className="w-8 h-8" />}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3 text-sm text-slate-600">
                                                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
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

            {/* Visa Process Timeline */}
            <section ref={processRef} className="section-padding bg-slate-50">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={processVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                            How It Works
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                            Your Path to{" "}
                            <span className="gradient-text">Study Abroad</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {visaProcess.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                animate={processVisible ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-6 items-start"
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-navy rounded-2xl flex items-center justify-center text-white font-display font-bold text-xl shadow-lg">
                                    {step.step}
                                </div>
                                <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                                    <h3 className="text-lg font-display font-bold text-slate-900 mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visa Types */}
            <section ref={visaRef} className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={visaVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                            Visa Types We <span className="gradient-text">Assist With</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {defaultContent.visaTypes.map((visa, index) => (
                            <motion.div
                                key={visa}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={visaVisible ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-gradient-to-br from-primary/5 to-accent/5 border border-slate-200 rounded-2xl p-6 text-center cursor-default"
                            >
                                <div className="text-3xl mb-3">
                                    {["🎓", "💼", "✈️", "🏠", "👨‍👩‍👧", "📋"][index]}
                                </div>
                                <div className="font-semibold text-slate-900 text-sm">
                                    {visa}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
