"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { defaultContent } from "@/lib/content";
import { useScrollAnimation } from "@/hooks/useAnimations";

export default function CountryCards() {
    const { ref, isVisible } = useScrollAnimation();

    const colors = [
        "from-primary-500 to-primary-700",
        "from-accent-500 to-accent-700",
        "from-primary-600 to-primary-800",
        "from-accent-600 to-accent-800",
    ];

    return (
        <section ref={ref} className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                        Global Destinations
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                        Study in the World&apos;s{" "}
                        <span className="gradient-text">Best Countries</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Discover the best countries for higher education, world-ranked
                        universities, and life-changing global experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {defaultContent.countries.map((country, index) => (
                        <motion.div
                            key={country.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/countries/${country.id}`}>
                                <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br ${colors[index % colors.length]} h-72 hover-lift cursor-pointer">
                                    {/* Background gradient */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${colors[index % colors.length]
                                            } opacity-90`}
                                    />

                                    {/* Decorative elements */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                                    {/* Content */}
                                    <div className="relative h-full p-6 flex flex-col justify-between z-10">
                                        <div>
                                            <span className="text-5xl mb-3 block group-hover:scale-125 transition-transform duration-500">
                                                {country.flag}
                                            </span>
                                            <h3 className="text-xl font-display font-bold text-white mb-2">
                                                {country.name}
                                            </h3>
                                            <div className="flex items-center gap-1 text-white/70 text-sm">
                                                <MapPin size={14} />
                                                {country.universities.length} Partner Universities
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-white/60 text-sm">
                                                {country.costEstimation.split(" ")[0]}
                                            </span>
                                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all">
                                                <ArrowRight className="text-white w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <Link href="/countries" className="btn-outline inline-flex items-center gap-2">
                        View All Countries
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
