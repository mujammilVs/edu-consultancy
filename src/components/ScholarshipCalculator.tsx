"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Award, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ScholarshipCalculator() {
    const [gpa, setGpa] = useState("");
    const [ielt, setIelt] = useState("");
    const [country, setCountry] = useState("usa");
    const [result, setResult] = useState<null | { range: string; chance: string; category: string }>(null);

    const calculateScholarship = (e: React.FormEvent) => {
        e.preventDefault();
        const gpaValue = parseFloat(gpa);
        const ieltValue = parseFloat(ielt);

        let range = "No scholarship found";
        let chance = "Low";
        let category = "Standard";

        if (gpaValue >= 3.8 && ieltValue >= 7.5) {
            range = "50% - 100% Tuition Waiver";
            chance = "High";
            category = "Platinum Prestige";
        } else if (gpaValue >= 3.5 && ieltValue >= 7.0) {
            range = "30% - 50% Tuition Waiver";
            chance = "Medium-High";
            category = "Gold Merit";
        } else if (gpaValue >= 3.0 && ieltValue >= 6.5) {
            range = "15% - 25% Tuition Waiver";
            chance = "Medium";
            category = "Silver Entry";
        } else {
            range = "$2,000 - $5,000 Bursary";
            chance = "Variable";
            category = "General Aid";
        }

        setResult({ range, chance, category });
    };

    return (
        <section className="section-padding bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-bold mb-6">
                            <Calculator size={16} /> Scholarship Calculator
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                            Estimate Your <span className="gradient-text">Financial Aid</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Wondering how much scholarship you qualify for? Use our smart tool to get an instant estimate based on your academic profile and language scores.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Instant eligibility check",
                                "Covers top universities in 7+ countries",
                                "Based on latest university criteria",
                                "Personalized funding advice"
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-slate-600">
                                    <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={20} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-slate-50 rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100"
                        >
                            <form onSubmit={calculateScholarship} className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Academic GPA (4.0)</label>
                                        <input
                                            type="number"
                                            step="0.1"
                                            max="4.0"
                                            placeholder="e.g. 3.5"
                                            required
                                            className="w-full bg-white border border-slate-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-accent outline-none"
                                            value={gpa}
                                            onChange={(e) => setGpa(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">IELTS / PTE Score</label>
                                        <input
                                            type="number"
                                            step="0.5"
                                            max="9.0"
                                            placeholder="e.g. 7.5"
                                            required
                                            className="w-full bg-white border border-slate-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-accent outline-none"
                                            value={ielt}
                                            onChange={(e) => setIelt(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Dream Destination</label>
                                    <select
                                        className="w-full bg-white border border-slate-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-accent outline-none appearance-none"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    >
                                        <option value="usa">USA</option>
                                        <option value="uk">UK</option>
                                        <option value="canada">Canada</option>
                                        <option value="australia">Australia</option>
                                        <option value="germany">Germany</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-navy text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95"
                                >
                                    Calculate Estimate
                                </button>
                            </form>

                            {result && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="mt-8 pt-8 border-t border-slate-200"
                                >
                                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center">
                                        <Award className="mx-auto text-emerald-500 mb-3" size={32} />
                                        <p className="text-xs font-bold text-emerald-600 uppercase mb-1">{result.category} Qualification</p>
                                        <h4 className="text-2xl font-display font-bold text-slate-900 mb-2">{result.range}</h4>
                                        <div className="flex justify-center gap-4 text-sm">
                                            <span className="text-slate-500">Chance: <strong className="text-slate-900">{result.chance}</strong></span>
                                        </div>
                                        <button className="mt-6 text-primary font-bold text-sm flex items-center gap-2 mx-auto hover:underline">
                                            Apply for this Scholarship <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
