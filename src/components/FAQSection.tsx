"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "How do I choose the right country for my studies?",
        answer: "Choosing the right country depends on your career goals, budget, and academic background. Our experts evaluate your profile to suggest countries like the USA for research, Germany for engineering, or the UK for management, matching your specific needs."
    },
    {
        question: "What are the requirements for a student visa?",
        answer: "Common requirements include a valid passport, an admission letter from a recognized university, proof of financial stability, English proficiency scores (IELTS/PTE), and health insurance. Specific rules vary by country."
    },
    {
        question: "Can I work while studying abroad?",
        answer: "Yes, most countries like Canada, UK, and Australia allow international students to work up to 20 hours per week during semesters and full-time during breaks. Some countries also offer post-study work permits."
    },
    {
        question: "Do you help with scholarship applications?",
        answer: "Absolutely! We assist in identifying eligible scholarships and help with the application process, including strengthening your Statement of Purpose (SOP) to increase your chances of securing financial aid."
    },
    {
        question: "What is the best time to start my application?",
        answer: "We recommend starting 8-12 months before the intake. This gives you enough time for test preparation (IELTS/GRE), university applications, and visa processing without any last-minute stress."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                        <HelpCircle size={32} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                        Common <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="text-slate-600">
                        Everything you need to know about the study abroad process.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border-2 rounded-3xl transition-all duration-300 ${openIndex === index ? 'border-primary/30 bg-primary/5' : 'border-slate-100 hover:border-slate-200'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left p-6 md:p-8 flex justify-between items-center gap-4"
                            >
                                <span className="text-lg font-bold text-slate-900">
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-8 md:px-8 md:pb-10 text-slate-600 leading-relaxed italic">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
