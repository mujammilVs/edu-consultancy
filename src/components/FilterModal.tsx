"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Search, CheckCircle } from "lucide-react";
import { defaultContent } from "@/lib/content";
import { useState, useMemo } from "react";

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
    filters: any;
    setFilters: (filters: any) => void;
    onApply: () => void;
}

export default function FilterModal({ isOpen, onClose, filters, setFilters, onApply }: FilterModalProps) {
    const countries = defaultContent.countries;
    const universities = defaultContent.universities;
    const durations = [
        "6 Months", "9 Months", "1 Year", "1 Year 2 Months", "1 Year 3 Months",
        "1 Year 4 Months", "2 Years 6 Months", "3 Years", "4 Years", "5 Years 6 Months"
    ];
    const types = ["Master's", "Bachelor's", "PhD", "Diploma"];
    const intakes = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const filteredUniversities = useMemo(() => {
        if (filters.selectedCountries.length === 0) return universities;
        return universities.filter(u => filters.selectedCountries.includes(u.country));
    }, [filters.selectedCountries, universities]);

    const toggleMultiSelect = (key: string, value: string) => {
        const current = filters[key] || [];
        if (current.includes(value)) {
            setFilters({ ...filters, [key]: current.filter((v: string) => v !== value) });
        } else {
            setFilters({ ...filters, [key]: [...current, value] });
        }
    };

    const handleReset = () => {
        setFilters({
            universitySearch: "",
            selectedCountries: [],
            selectedTypes: [],
            selectedDurations: [],
            selectedIntakes: [],
            minIelts: "",
            maxIelts: "",
            minTuition: "",
            maxTuition: "",
        });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[200]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 m-auto w-[95%] max-w-4xl h-[85vh] bg-white rounded-[2.5rem] shadow-2xl z-[210] overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="px-8 py-6 flex items-center justify-between border-b border-slate-100 bg-white">
                            <h2 className="text-2xl font-display font-bold text-slate-900">More Filters</h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <X size={24} className="text-slate-400" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8 scrollbar-hide">
                            {/* Country Selection */}
                            <div>
                                <label className="block text-slate-900 font-bold mb-3">Target Country</label>
                                <div className="flex flex-wrap gap-2">
                                    {countries.map((country) => (
                                        <button
                                            key={country.id}
                                            onClick={() => toggleMultiSelect("selectedCountries", country.id)}
                                            className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-semibold transition-all ${filters.selectedCountries?.includes(country.id)
                                                ? "bg-primary text-white shadow-md border-primary"
                                                : "bg-slate-50 border-slate-100 text-slate-600 hover:border-slate-300"
                                                }`}
                                        >
                                            <span className="text-lg">{country.flag}</span>
                                            {country.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* University Selection (Contextual) */}
                            <div>
                                <label className="block text-slate-900 font-bold mb-3">
                                    Universities {filters.selectedCountries.length > 0 && `in ${filters.selectedCountries.join(", ").toUpperCase()}`}
                                </label>
                                <div className="relative mb-4">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Search university name..."
                                        className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 pl-11 pr-4 focus:ring-2 focus:ring-primary/20 outline-none"
                                        value={filters.universitySearch}
                                        onChange={(e) => setFilters({ ...filters, universitySearch: e.target.value })}
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-48 overflow-y-auto p-1 scrollbar-thin scrollbar-thumb-slate-200">
                                    {filteredUniversities
                                        .filter((u: any) => !filters.universitySearch || u.name.toLowerCase().includes(filters.universitySearch.toLowerCase()))
                                        .map((uni: any) => (
                                            <button
                                                key={uni.id}
                                                onClick={() => {
                                                    // We can treat university search as a string search or a multi-select.
                                                    // For now, let's stick to the search term for simplicity but visually list them.
                                                    setFilters({ ...filters, universitySearch: uni.name });
                                                }}
                                                className={`flex items-center justify-between px-4 py-3 rounded-xl border text-left transition-all ${filters.universitySearch === uni.name
                                                    ? "bg-slate-900 text-white border-slate-900"
                                                    : "bg-white border-slate-100 hover:border-slate-300 group"
                                                    }`}
                                            >
                                                <span className="text-sm font-semibold truncate pr-4">{uni.name}</span>
                                                {filters.universitySearch === uni.name && <CheckCircle size={16} />}
                                            </button>
                                        ))}
                                </div>
                            </div>

                            {/* Type Selection */}
                            <div>
                                <label className="block text-slate-900 font-bold mb-3">Type</label>
                                <div className="flex flex-wrap gap-2">
                                    {types.map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => toggleMultiSelect("selectedTypes", type)}
                                            className={`px-6 py-2.5 rounded-full border text-sm font-semibold transition-all ${filters.selectedTypes?.includes(type)
                                                ? "bg-primary/5 border-primary text-primary shadow-sm"
                                                : "bg-slate-50 border-slate-100 text-slate-600 hover:border-slate-300"
                                                }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Duration Selection */}
                            <div>
                                <label className="block text-slate-900 font-bold mb-3">Duration</label>
                                <div className="flex flex-wrap gap-2">
                                    {durations.map((duration) => (
                                        <button
                                            key={duration}
                                            onClick={() => toggleMultiSelect("selectedDurations", duration)}
                                            className={`px-4 py-2.5 rounded-full border text-sm font-semibold transition-all ${filters.selectedDurations?.includes(duration)
                                                ? "bg-primary/5 border-primary text-primary shadow-sm"
                                                : "bg-slate-50 border-slate-100 text-slate-600 hover:border-slate-300"
                                                }`}
                                        >
                                            {duration}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Intake Selection */}
                            <div>
                                <label className="block text-slate-900 font-bold mb-3">Intake</label>
                                <div className="flex flex-wrap gap-2">
                                    {intakes.map((intake) => (
                                        <button
                                            key={intake}
                                            onClick={() => toggleMultiSelect("selectedIntakes", intake)}
                                            className={`px-6 py-2.5 rounded-full border text-sm font-semibold transition-all ${filters.selectedIntakes?.includes(intake)
                                                ? "bg-primary/5 border-primary text-primary shadow-sm"
                                                : "bg-slate-50 border-slate-100 text-slate-600 hover:border-slate-300"
                                                }`}
                                        >
                                            {intake}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* IELTS Score */}
                            <div>
                                <label className="block text-slate-900 font-bold mb-3">IELTS Score</label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="text"
                                        placeholder="Min (e.g., 4.0)"
                                        className="flex-1 bg-white border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none"
                                        value={filters.minIelts}
                                        onChange={(e) => setFilters({ ...filters, minIelts: e.target.value })}
                                    />
                                    <span className="text-slate-400">to</span>
                                    <input
                                        type="text"
                                        placeholder="Max (e.g., 7.5)"
                                        className="flex-1 bg-white border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none"
                                        value={filters.maxIelts}
                                        onChange={(e) => setFilters({ ...filters, maxIelts: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Annual Fees */}
                            <div>
                                <label className="block text-slate-900 font-bold mb-3">Annual Fees (Application Fee)</label>
                                <input
                                    type="number"
                                    placeholder="Enter amount (integer)"
                                    className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none"
                                    value={filters.annualFees}
                                    onChange={(e) => setFilters({ ...filters, annualFees: e.target.value })}
                                />
                            </div>

                            {/* Tuition Fee Range */}
                            <div className="pb-10">
                                <label className="block text-slate-900 font-bold mb-3">Tuition Fee Range</label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="number"
                                        placeholder="Min"
                                        className="flex-1 bg-white border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none"
                                        value={filters.minTuition}
                                        onChange={(e) => setFilters({ ...filters, minTuition: e.target.value })}
                                    />
                                    <span className="text-slate-400">to</span>
                                    <input
                                        type="number"
                                        placeholder="Max"
                                        className="flex-1 bg-white border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none"
                                        value={filters.maxTuition}
                                        onChange={(e) => setFilters({ ...filters, maxTuition: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-8 py-6 border-t border-slate-100 flex items-center justify-end gap-4 bg-white">
                            <button
                                onClick={handleReset}
                                className="px-10 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all"
                            >
                                Reset
                            </button>
                            <button
                                onClick={() => {
                                    onApply();
                                    onClose();
                                }}
                                className="px-10 py-3 rounded-xl bg-[#00a39c] text-white font-bold hover:bg-[#008c86] shadow-lg shadow-teal/20 transition-all"
                            >
                                Apply Filters
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
