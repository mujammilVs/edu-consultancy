"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { defaultContent } from "@/lib/content";
import LeadForm from "@/components/LeadForm";

export default function ContactPage() {
    return (
        <div className="pt-20 bg-slate-50">
            {/* Header */}
            <section className="bg-hero-gradient py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-7xl font-display font-bold text-white mb-6"
                    >
                        Get in <span className="gradient-text">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/70 max-w-2xl mx-auto text-lg"
                    >
                        Have questions about study abroad? Our expert counselors are here to help you navigate every step of your international education journey.
                    </motion.p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 -mt-16 pb-24 relative z-20">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

                            <div className="space-y-6">
                                <a href={`tel:${defaultContent.contact.phone}`} className="flex items-start gap-5 group">
                                    <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm">Call Us Anytime</p>
                                        <p className="font-bold text-lg">{defaultContent.contact.phone}</p>
                                    </div>
                                </a>

                                <a href={`mailto:${defaultContent.contact.email}`} className="flex items-start gap-5 group">
                                    <div className="p-4 bg-accent/10 rounded-2xl text-accent group-hover:bg-accent group-hover:text-white transition-all">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm">Email Support</p>
                                        <p className="font-bold text-lg">{defaultContent.contact.email}</p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-5 group">
                                    <div className="p-4 bg-emerald-100 rounded-2xl text-emerald-600">
                                        <MessageCircle className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm">WhatsApp Chat</p>
                                        <p className="font-bold text-lg">Online Now</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
                                <div>
                                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Business Hours</p>
                                    <p className="text-slate-900 font-semibold">Mon - Sat: 10:00 AM - 7:00 PM</p>
                                </div>
                                <Clock className="text-slate-300 h-10 w-10" />
                            </div>
                        </div>

                        {/* Office Locations */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold px-4">Our Offices</h2>
                            {defaultContent.contact.offices.map((office, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-accent transition-colors">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">{office.city}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-3">{office.address}</p>
                                            {office.mapUrl && (
                                                <a
                                                    href={office.mapUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary text-sm font-semibold hover:underline flex items-center gap-1"
                                                >
                                                    View on Maps
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-7">
                        <LeadForm formType="contact" />
                    </div>
                </div>
            </div>
        </div>
    );
}
