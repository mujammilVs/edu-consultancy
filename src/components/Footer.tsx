"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Phone,
    Mail,
    MapPin,
    ArrowUpRight,
    // GraduationCap,
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
} from "lucide-react";
import { defaultContent } from "@/lib/content";

const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/countries", label: "Study Destinations" },
    { href: "/contact", label: "Contact Us" },
];

const serviceLinks = [
    "Scholarships",
    "Visa Assistance",
    "University Admissions",
    "Course Selection",
    "Pre-Departure Support",
    "Documentation Help",
];

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-slate-800">
                    {/* Brand */}
                    <div className="lg:col-span-1 space-y-6">
                        <Image
                            src="/edu_logo_name.jpg"
                            alt={defaultContent.brandName}
                            className="w-auto h-16 object-contain"
                        />
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Your trusted partner for international education, helping students 
                            achieve their dreams of studying abroad since 2010.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Facebook size={20} />, href: "#", color: "hover:text-[#1877F2]" },
                                { icon: <Instagram size={20} />, href: "#", color: "hover:text-[#E4405F]" },
                                { icon: <Linkedin size={20} />, href: "#", color: "hover:text-[#0A66C2]" },
                                { icon: <Youtube size={20} />, href: "#", color: "hover:text-[#FF0000]" },
                            ].map((social, i) => (
                                <a 
                                    key={i} 
                                    href={social.href} 
                                    className={`w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 transition-all ${social.color} hover:bg-white`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display font-semibold text-white mb-6 text-lg">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-accent transition-colors text-sm flex items-center gap-1 group"
                                    >
                                        <ArrowUpRight
                                            size={14}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                                        />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-display font-semibold text-white mb-6 text-lg">
                            Our Services
                        </h4>
                        <ul className="space-y-3">
                            {serviceLinks.map((service) => (
                                <li key={service}>
                                    <Link
                                        href="/services"
                                        className="text-slate-400 hover:text-accent transition-colors text-sm flex items-center gap-1 group"
                                    >
                                        <ArrowUpRight
                                            size={14}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                                        />
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-semibold text-white mb-6 text-lg">
                            Contact Us
                        </h4>
                        <div className="space-y-4">
                            <a
                                href={`tel:${defaultContent.contact.phone}`}
                                className="flex items-start gap-3 text-sm text-slate-400 hover:text-accent transition-colors"
                            >
                                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                                {defaultContent.contact.phone}
                            </a>
                            <a
                                href={`mailto:${defaultContent.contact.email}`}
                                className="flex items-start gap-3 text-sm text-slate-400 hover:text-accent transition-colors"
                            >
                                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                                {defaultContent.contact.email}
                            </a>
                            {defaultContent.contact.offices[0] && (
                                <div className="flex items-start gap-3 text-sm text-slate-400">
                                    <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                                    <span>{defaultContent.contact.offices[0].address}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Study destinations */}
                <div className="py-8 border-b border-slate-800">
                    <h4 className="font-display font-semibold text-white mb-4 text-sm">
                        Top Destinations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {defaultContent.countries.map((country) => (
                            <Link
                                key={country.id}
                                href={`/countries/${country.id}`}
                                className="px-3 py-1.5 bg-slate-800/50 hover:bg-accent/10 border border-slate-700/50 hover:border-accent/30 rounded-full text-xs text-slate-400 hover:text-accent transition-all"
                            >
                                {country.flag} {country.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} {defaultContent.brandName}. All rights
                        reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <a href="#" className="hover:text-accent transition-colors">
                            Terms of Use
                        </a>
                        <a href="#" className="hover:text-accent transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-accent transition-colors">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
