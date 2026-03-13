"use client";

import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { defaultContent } from "@/lib/content";
import { GraduationCap, Landmark, Wallet, Clock, CheckCircle2, ArrowLeft, Star, Users } from "lucide-react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export default function CountryDetailPage() {
    const params = useParams();
    const countryId = params.id as string;
    const country = defaultContent.countries.find((c) => c.id === countryId);

    if (!country) {
        notFound();
    }

    return (
        <div className="bg-slate-50">
            {/* Dynamic Hero with Background Image */}
            <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={country.image}
                        alt={country.name}
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-3xl"
                    >
                        <Link href="/countries" className="inline-flex items-center text-accent mb-8 font-bold hover:gap-2 transition-all">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Destination Hub
                        </Link>
                        <div className="flex items-center gap-6 mb-6">
                            <span className="text-6xl md:text-8xl filter drop-shadow-2xl">{country.flag}</span>
                            <div className="h-16 w-1.5 bg-accent rounded-full"></div>
                            <h1 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tight">
                                Study in <br /><span className="gradient-text">{country.name}</span>
                            </h1>
                        </div>
                        <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
                            {country.description}
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                                <Star className="text-accent h-5 w-5" />
                                <span className="text-white font-bold text-sm">Top Global Rankings</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                                <Users className="text-accent h-5 w-5" />
                                <span className="text-white font-bold text-sm">International Student Hub</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Detailed Info */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                                        <Wallet className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-display font-bold">Estimated Cost</h3>
                                </div>
                                <div className="text-3xl font-display font-bold text-slate-900 mb-2">
                                    {country.costEstimation.split(' per ')[0]}
                                </div>
                                <p className="text-slate-500 text-sm italic">per academic year starting cost</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-4 bg-accent/10 rounded-2xl text-accent">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-display font-bold">Process Timeline</h3>
                                </div>
                                <div className="text-3xl font-display font-bold text-slate-900 mb-2">
                                    {country.timeline}
                                </div>
                                <p className="text-slate-500 text-sm italic">recommended start before intake</p>
                            </motion.div>
                        </div>

                        {/* Universities & Academic Excellence */}
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
                            <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-4">
                                <GraduationCap className="text-primary h-8 w-8" /> Partner Universities
                            </h2>
                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                {country.universities.map((uni, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 border-b border-slate-50 group hover:bg-slate-50 transition-colors">
                                        <div className="h-2 w-2 rounded-full bg-accent group-hover:scale-150 transition-transform"></div>
                                        <span className="font-semibold text-slate-700 group-hover:text-primary">{uni}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visa requirements with modern layout */}
                        <div className="bg-primary p-12 rounded-[2.5rem] text-white overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-10 opacity-10">
                                <Landmark size={200} />
                            </div>
                            <h2 className="text-3xl font-display font-bold mb-8 relative z-10">Visa Check-list</h2>
                            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                                {country.visaRequirements.map((req, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckCircle2 size={14} className="text-white" />
                                        </div>
                                        <span className="text-white/80 font-medium">{req}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-28 space-y-8">
                            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
                                <div className="bg-accent p-8 text-white">
                                    <h3 className="text-2xl font-display font-bold mb-2">Speak to Experts</h3>
                                    <p className="text-white/80 text-sm">Get personalized guidance for {country.name} application & visa.</p>
                                </div>
                                <div className="p-8">
                                    <LeadForm formType="consultation" compact />
                                </div>
                            </div>

                            {/* Promo Card */}
                            <div className="bg-hero-gradient p-8 rounded-[2.5rem] text-white">
                                <h4 className="font-bold text-xl mb-4 text-accent">98.5% Success Rate</h4>
                                <p className="text-white/70 text-sm leading-relaxed mb-6">
                                    Our visa success rate for {country.name} is the highest in the region. Join 5000+ students and start your journey today.
                                </p>
                                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[98.5%] bg-accent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
