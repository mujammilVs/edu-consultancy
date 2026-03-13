"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, GraduationCap, Globe2, Users, TrendingUp, Search, ChevronDown } from "lucide-react";
import { defaultContent } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
    "Students Placed": <GraduationCap className="w-6 h-6" />,
    "Partner Universities": <Globe2 className="w-6 h-6" />,
    "Countries": <Users className="w-6 h-6" />,
    "Success Rate": <TrendingUp className="w-6 h-6" />,
};

export default function Hero() {
    const { hero, brandName } = defaultContent;

    // Proper state initialization
    const [searchState, setSearchState] = useState({
        country: "",
        search: "",
        intake: "",
        duration: "",
        type: ""
    });

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-hero-gradient">
            {/* Animated background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float-slow" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full" />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Floating icons */}
                <motion.div
                    animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-32 right-[15%] hidden lg:block"
                >
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20">
                        <GraduationCap className="text-accent w-8 h-8" />
                    </div>
                </motion.div>

                <motion.div
                    animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-40 left-[10%] hidden lg:block"
                >
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20">
                        <Globe2 className="text-blue-300 w-7 h-7" />
                    </div>
                </motion.div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full mb-6"
                        >
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                            <span className="text-white/80 text-sm font-medium">
                                Trusted by 5000+ Students Worldwide
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-[1.1] mb-6"
                        >
                            {hero.headline.split(":")[0]}:
                            <span className="block gradient-text mt-2">
                                {hero.headline.split(":")[1] || "Perfectly Guided"}
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl text-white/70 max-w-xl mb-8 leading-relaxed"
                        >
                            {hero.subheadline}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 mb-8"
                        >
                            <Link href={hero.ctaLink} className="btn-primary flex items-center justify-center gap-2 text-base">
                                {hero.cta}
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href={hero.secondaryCtaLink}
                                className="btn-secondary flex items-center justify-center gap-2 text-base"
                            >
                                <Play size={18} className="fill-white" />
                                {hero.secondaryCta}
                            </Link>
                        </motion.div>

                        {/* Search Filter Box */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="bg-white/90 backdrop-blur-xl p-4 md:p-6 rounded-[2.5rem] shadow-2xl border border-white/20 mb-12 max-w-4xl"
                        >
                            <div className="space-y-4">
                                {/* Top Row */}
                                <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl md:rounded-full p-2 border border-slate-100 shadow-sm gap-2">
                                    <div className="w-full md:w-auto px-6 py-2 flex items-center justify-between gap-4 border-b md:border-b-0 md:border-r border-slate-100 cursor-pointer group">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Destination</span>
                                            <span className="text-sm font-bold text-slate-700 whitespace-nowrap">
                                                {searchState.country || "Select Country"}
                                            </span>
                                        </div>
                                        <ChevronDown size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
                                    </div>
                                    <div className="flex-1 flex items-center px-6 py-2 w-full">
                                        <input
                                            type="text"
                                            placeholder="Search by Course / University"
                                            className="w-full bg-transparent border-none focus:ring-0 outline-none text-slate-700 font-medium placeholder:text-slate-400 text-sm"
                                            onChange={(e) => setSearchState({ ...searchState, search: e.target.value })}
                                        />
                                        <button className="hidden md:flex w-10 h-10 bg-primary/5 rounded-full items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                            <Search size={18} />
                                        </button>
                                    </div>
                                </div>

                                {/* Bottom Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                    <div className="bg-white rounded-2xl p-3 border border-slate-100 flex items-center justify-between cursor-pointer hover:border-primary/30 transition-all">
                                        <div className="flex flex-col pl-2">
                                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Intake</span>
                                            <span className="text-xs font-bold text-slate-700">{searchState.intake || "Select Intake"}</span>
                                        </div>
                                        <ChevronDown size={14} className="text-slate-400" />
                                    </div>
                                    <div className="bg-white rounded-2xl p-3 border border-slate-100 flex items-center justify-between cursor-pointer hover:border-primary/30 transition-all">
                                        <div className="flex flex-col pl-2">
                                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Duration</span>
                                            <span className="text-xs font-bold text-slate-700">{searchState.duration || "Select Duration"}</span>
                                        </div>
                                        <ChevronDown size={14} className="text-slate-400" />
                                    </div>
                                    <div className="bg-white rounded-2xl p-3 border border-slate-100 flex items-center justify-between cursor-pointer hover:border-primary/30 transition-all">
                                        <div className="flex flex-col pl-2">
                                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Level</span>
                                            <span className="text-xs font-bold text-slate-700">{searchState.type || "Program Type"}</span>
                                        </div>
                                        <ChevronDown size={14} className="text-slate-400" />
                                    </div>
                                    <Link
                                        href="/courses"
                                        className="bg-[#00a39c] hover:bg-[#008c86] text-white rounded-2xl flex items-center justify-center font-bold text-sm shadow-lg shadow-teal/20 transition-all active:scale-95 py-4 lg:py-0"
                                    >
                                        Apply Filters
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        {/* Brands/trust */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex items-center gap-4"
                        >
                            <div className="flex -space-x-3">
                                {["PS", "RP", "AR", "MK", "SN"].map((initials, i) => (
                                    <div
                                        key={initials}
                                        className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/80 to-accent border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                                        style={{ zIndex: 5 - i }}
                                    >
                                        {initials}
                                    </div>
                                ))}
                            </div>
                            <div className="text-white/70 text-sm">
                                <span className="text-white font-semibold">4.9★</span> rated by students
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Stats grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hidden lg:block"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {hero.stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="glass-card p-6 card-shine group cursor-default"
                                >
                                    <div className="text-accent mb-3 group-hover:scale-110 transition-transform">
                                        {iconMap[stat.label] || <GraduationCap className="w-6 h-6" />}
                                    </div>
                                    <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-white/60 text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Brand badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="mt-6 glass-card p-4 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                                <GraduationCap className="text-accent w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-white font-semibold text-sm">{brandName}</div>
                                <div className="text-white/50 text-xs">Your Trusted Education Partner</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" className="w-full h-auto fill-white">
                    <path d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,69.3C672,85,768,107,864,106.7C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
                </svg>
            </div>
        </section>
    );
}
