"use client";

import { motion } from "framer-motion";
import CountryCards from "@/components/CountryCards";
import CTASection from "@/components/CTASection";

export default function CountriesPage() {
    return (
        <div className="pt-20">
            <section className="bg-hero-gradient py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
                    >
                        Study <span className="gradient-text">Destinations</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/70 max-w-2xl mx-auto text-lg"
                    >
                        Explore top-tier education systems across the globe. From historical Ivy League universities in the USA to modern innovation hubs in Germany.
                    </motion.p>
                </div>
            </section>

            <CountryCards />
            <CTASection />
        </div>
    );
}
