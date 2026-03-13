"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, GraduationCap, Calendar, Clock, ChevronDown } from "lucide-react";
import { defaultContent } from "@/lib/content";
import FilterModal from "./FilterModal";

interface CourseFilters {
    universitySearch: string;
    selectedCountries: string[];
    selectedTypes: string[];
    selectedDurations: string[];
    selectedIntakes: string[];
    minIelts: string;
    maxIelts: string;
    minTuition: string;
    maxTuition: string;
}

export default function CourseFinder() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState<CourseFilters>({
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

    const courses = defaultContent.courses || [];
    const universities = defaultContent.universities || [];

    const filteredCourses = useMemo(() => {
        return courses.filter((course) => {
            const university = universities.find(u => u.id === course.universityId);

            // Text Search (Main search bar and University search in modal)
            const matchesMainSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                university?.name.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesUniModalSearch = !filters.universitySearch ||
                university?.name.toLowerCase().includes(filters.universitySearch.toLowerCase());

            // Multi-select Filters
            const matchesCountry = filters.selectedCountries.length === 0 ||
                filters.selectedCountries.includes(course.country);

            const matchesType = filters.selectedTypes.length === 0 ||
                (course.level === "Masters" && filters.selectedTypes.includes("Master's")) ||
                (course.level === "Bachelors" && filters.selectedTypes.includes("Bachelor's")) ||
                filters.selectedTypes.includes(course.level);

            const matchesDuration = filters.selectedDurations.length === 0 ||
                filters.selectedDurations.includes(course.duration);

            const matchesIntake = filters.selectedIntakes.length === 0 ||
                course.intake.some(i => filters.selectedIntakes.includes(i));

            // Range Filters
            const matchesIelts = (!filters.minIelts || course.ieltsRequirement >= parseFloat(filters.minIelts)) &&
                (!filters.maxIelts || course.ieltsRequirement <= parseFloat(filters.maxIelts));

            const matchesTuition = (!filters.minTuition || course.annualFee >= parseInt(filters.minTuition)) &&
                (!filters.maxTuition || course.annualFee <= parseInt(filters.maxTuition));

            return matchesMainSearch && matchesUniModalSearch && matchesCountry && matchesType && matchesDuration && matchesIntake && matchesIelts && matchesTuition;
        });
    }, [searchTerm, filters, courses, universities]);

    return (
        <section className="section-padding bg-[#f8fafc] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Search Hero Area */}
                <div className="relative mb-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative flex items-center bg-white rounded-full p-2 shadow-2xl shadow-primary/5 hover:shadow-primary/10 transition-all border border-slate-100">
                            <div className="flex-1 flex items-center px-6">
                                <Search className="text-slate-400 mr-3" size={22} />
                                <input
                                    type="text"
                                    placeholder="Search for courses, universities and more"
                                    className="w-full bg-transparent border-none focus:ring-0 outline-none text-slate-700 font-medium placeholder:text-slate-400"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <button className="bg-accent hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-red/20 active:scale-95">
                                Search
                            </button>
                        </div>

                        {/* Quick Action Bar */}
                        <div className="flex items-center justify-center gap-6 mt-8">
                            <span className="text-slate-400 text-sm font-medium">Filter by:</span>
                            <div className="flex items-center gap-4">
                                <button className="text-primary font-bold text-sm bg-primary/5 px-4 py-1.5 rounded-lg">University</button>
                                <button
                                    onClick={() => setIsFilterOpen(true)}
                                    className="flex items-center gap-2 text-primary border border-primary/20 hover:border-primary px-4 py-1.5 rounded-full text-sm font-bold transition-all"
                                >
                                    More Filters <ChevronDown size={14} className={isFilterOpen ? "rotate-180 transition-transform" : "transition-transform"} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Course Results */}
                <div className="space-y-8">
                    <AnimatePresence mode="popLayout">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course, idx) => {
                                const university = universities.find(u => u.id === course.universityId);
                                return (
                                    <motion.div
                                        key={course.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group"
                                    >
                                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                                            {/* University Info */}
                                            <div className="flex gap-6 items-start">
                                                <div className="w-20 h-20 flex-shrink-0 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center p-2 group-hover:bg-white transition-colors">
                                                    {/* Placeholder for University Logo */}
                                                    <div className="text-slate-400 font-black text-xl">{university?.logo}</div>
                                                </div>
                                                <div className="space-y-1">
                                                    <h4 className="text-slate-400 text-sm font-medium uppercase tracking-wide">{university?.name}</h4>
                                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 group-hover:text-primary transition-colors">
                                                        {course.name}
                                                    </h3>
                                                    <div className="flex items-center gap-4 pt-1">
                                                        <div className="flex items-center gap-2 text-slate-500 font-medium">
                                                            <MapPin size={16} className="text-accent" />
                                                            {university?.country === 'uk' ? 'United Kingdom' : university?.country.toUpperCase()}
                                                        </div>
                                                        <span className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
                                                        <div className="text-accent font-bold flex items-center gap-2">
                                                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                                            {course.type}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Top CTAs */}
                                            <div className="flex items-center gap-3">
                                                <button className="px-8 py-3 rounded-full border border-primary text-primary font-bold hover:bg-primary/5 transition-all active:scale-95">
                                                    Visit University
                                                </button>
                                                <button className="px-8 py-3 rounded-full bg-accent text-white font-bold hover:bg-red-700 shadow-lg shadow-red/10 transition-all active:scale-95">
                                                    Shortlist
                                                </button>
                                            </div>
                                        </div>

                                        {/* Course Details Grid */}
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                                            <div className="bg-slate-50/50 rounded-3xl p-5 border border-slate-100 group-hover:bg-white transition-all">
                                                <span className="text-slate-400 text-xs font-bold uppercase block mb-2">Program Type</span>
                                                <div className="flex items-center gap-3">
                                                    <GraduationCap className="text-primary" size={24} />
                                                    <span className="text-slate-900 font-bold text-lg">{course.level}</span>
                                                </div>
                                            </div>
                                            <div className="bg-slate-50/50 rounded-3xl p-5 border border-slate-100 group-hover:bg-white transition-all">
                                                <span className="text-slate-400 text-xs font-bold uppercase block mb-2">Duration</span>
                                                <div className="flex items-center gap-3">
                                                    <Clock className="text-primary" size={22} />
                                                    <span className="text-slate-900 font-bold text-lg">{course.duration}</span>
                                                </div>
                                            </div>
                                            <div className="bg-slate-50/50 rounded-3xl p-5 border border-slate-100 group-hover:bg-white transition-all">
                                                <span className="text-slate-400 text-xs font-bold uppercase block mb-2">Annual tuition fee</span>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black">
                                                        $
                                                    </div>
                                                    <span className="text-slate-900 font-bold text-lg">{course.annualFee.toLocaleString()} $</span>
                                                </div>
                                            </div>
                                            <div className="bg-slate-50/50 rounded-3xl p-5 border border-slate-100 group-hover:bg-white transition-all">
                                                <span className="text-slate-400 text-xs font-bold uppercase block mb-2">Intakes</span>
                                                <div className="flex items-center gap-3">
                                                    <Calendar className="text-primary" size={22} />
                                                    <span className="text-slate-900 font-bold text-lg">{course.intake.join(", ")}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })
                        ) : (
                            <div className="py-20 text-center bg-white rounded-[3rem] border border-dashed border-slate-200">
                                <Search className="mx-auto text-slate-200 mb-6" size={64} />
                                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">No results found</h3>
                                <p className="text-slate-500 mb-8">Try adjusting your filters or search terms.</p>
                                <button
                                    onClick={() => {
                                        setSearchTerm("");
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
                                    }}
                                    className="px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/20"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Filter Modal */}
            <FilterModal
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                filters={filters}
                setFilters={setFilters}
                onApply={() => {
                    // Actual filtering is handled by useMemo, just close modal
                }}
            />
        </section>
    );
}
