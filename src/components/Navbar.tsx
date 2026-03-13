"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { defaultContent } from "@/lib/content";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Course Finder" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    {
        href: "/countries",
        label: "Explore countries",
        children: defaultContent.countries.slice(0, 5).map((c) => ({
            href: `/countries/${c.id}`,
            label: c.name,
            flag: c.flag,
        })),
    },
    { href: "/contact", label: "Contact Us" },
];

const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", color: "text-[#1877F2]" },
    { icon: <Twitter size={20} />, href: "#", color: "text-[#000000]" },
    { icon: <Instagram size={20} />, href: "#", color: "text-[#E4405F]" },
    { icon: <Linkedin size={20} />, href: "#", color: "text-[#0A66C2]" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileDropdownActive, setMobileDropdownActive] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [mobileOpen]);

    return (
        <>
            {/* Top info bar */}
            <div className="hidden lg:block bg-primary text-white/90 text-sm font-medium">
                <div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-between items-center">
                    <div className="flex items-center gap-8">
                        <a
                            href={`tel:${defaultContent.contact.phone}`}
                            className="flex items-center gap-2 hover:text-accent transition-colors"
                        >
                            <Phone size={14} className="text-accent" />
                            {defaultContent.contact.phone}
                        </a>
                        <a
                            href={`mailto:${defaultContent.contact.email}`}
                            className="flex items-center gap-2 hover:text-accent transition-colors"
                        >
                            <Mail size={14} className="text-accent" />
                            {defaultContent.contact.email}
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-white/60">Follow Us:</span>
                        <div className="flex gap-3">
                            {socialLinks.map((social, i) => (
                                <a key={i} href={social.href} className="hover:text-accent transition-colors">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main navbar */}
            <nav
                className={`sticky top-0 z-[9999] transition-all duration-500 ${scrolled
                    ? "navbar-glass shadow-lg py-2"
                    : "bg-white/95 backdrop-blur-sm py-4"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between h-14 md:h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            {/* <div className="w-10 h-10 md:w-11 md:h-11 bg-gradient-to-br from-primary to-primary-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
                                <span className="text-white font-display font-bold text-lg md:text-xl">
                                    E
                                </span>
                            </div> */}
                            <img
                                src="/edu_logo.jpg"
                                alt={defaultContent.brandName}
                                className="h-10 md:h-12 xl:h-14 w-auto object-contain"
                            />
                            {/* <div className="hidden sm:block">
                                <h1 className="font-display font-bold text-primary text-sm md:text-base leading-tight">
                                    {defaultContent.brandName}
                                </h1>
                                <p className="text-[10px] md:text-xs text-slate-500 font-medium">
                                    {defaultContent.tagline}
                                </p>
                            </div> */}
                        </Link>

                        {/* Desktop links */}
                        <div className="hidden lg:flex items-center gap-2">
                            {navLinks.map((link) => (
                                <div
                                    key={link.href}
                                    className="relative group"
                                    onMouseEnter={() =>
                                        link.children && setActiveDropdown(link.label)
                                    }
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={link.href}
                                        className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all rounded-full ${pathname === link.href
                                            ? "bg-primary text-white"
                                            : "text-slate-700 hover:bg-slate-100"
                                            }`}
                                    >
                                        {link.label}
                                        {link.children && <ChevronDown size={14} className={activeDropdown === link.label ? "rotate-180 transition-transform" : "transition-transform"} />}
                                    </Link>

                                    {/* Dropdown */}
                                    {link.children && (
                                        <AnimatePresence>
                                            {activeDropdown === link.label && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-[10000]"
                                                >
                                                    {link.children.map((child) => (
                                                        <Link
                                                            key={child.href}
                                                            href={child.href}
                                                            className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-primary hover:text-white rounded-xl transition-all"
                                                        >
                                                            <span className="text-lg">{child.flag}</span>
                                                            <span className="font-medium">{child.label}</span>
                                                        </Link>
                                                    ))}
                                                    <div className="border-t border-slate-100 mt-2 pt-2">
                                                        <Link
                                                            href="/countries"
                                                            className="flex items-center justify-between px-4 py-3 text-sm font-bold text-accent hover:bg-accent/5 rounded-xl transition-all"
                                                        >
                                                            View All Countries
                                                            <ArrowRight size={14} />
                                                        </Link>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Link href="/contact" className="btn-primary text-sm shadow-xl shadow-red/20">
                                Get Free Counselling
                            </Link>
                        </div>

                        {/* Mobile toggle */}
                        <div className="flex lg:hidden items-center ">
                            <button
                                onClick={() => setMobileOpen(true)}
                                className="p-2.5 rounded-xl bg-slate-50 text-primary border border-slate-200"
                                aria-label="Open menu"
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile sidebar (Sidebar from Image) */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[10001] lg:hidden"
                        />

                        {/* Sidebar Content */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-[100dvh] w-[85%] max-w-[360px] bg-white z-[10002] lg:hidden flex flex-col shadow-2xl overscroll-none"
                        >
                            {/* Header */}
                            <div className=" px-6 py-5 flex items-center justify-between border-b border-slate-100 bg-white sticky top-0 z-[1001]">
                                <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
                                    <img
                                        src="/edu_logo.jpg"
                                        alt={defaultContent.brandName}
                                        className="h-10 w-auto object-contain"
                                    />
                                </Link>
                                <button
                                    onClick={() => setMobileOpen(false)}
                                    className="p-2 rounded-full bg-slate-50 text-slate-900 border border-slate-100 active:scale-90 transition-transform"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Navigation */}
                            <div className="flex-1 overflow-y-auto pt-4 pb-8">
                                <div className="px-6 space-y-3">
                                    {navLinks.map((link) => (
                                        <div key={link.href}>
                                            {link.children ? (
                                                <div
                                                    className="flex items-center justify-between py-4 px-4 rounded-2xl transition-all cursor-pointer text-slate-900 font-semibold hover:bg-slate-50"
                                                    onClick={() => setMobileDropdownActive(mobileDropdownActive === link.label ? null : link.label)}
                                                >
                                                    <span className="text-lg">{link.label}</span>
                                                    <ChevronDown
                                                        size={20}
                                                        className={`transition-transform duration-300 text-primary ${mobileDropdownActive === link.label ? "rotate-180" : ""}`}
                                                    />
                                                </div>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className={`flex items-center justify-between py-4 px-4 rounded-2xl transition-all ${pathname === link.href
                                                        ? "bg-slate-50 text-primary font-bold shadow-sm"
                                                        : "text-slate-900 font-semibold hover:bg-slate-50"
                                                        }`}
                                                >
                                                    <span className="text-lg">{link.label}</span>
                                                </Link>
                                            )}

                                            {/* Submenu */}
                                            {link.children && (
                                                <AnimatePresence>
                                                    {mobileDropdownActive === link.label && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="ml-6 mt-2 space-y-1 overflow-hidden border-l-2 border-slate-100"
                                                        >
                                                            {link.children.map((child) => (
                                                                <Link
                                                                    key={child.href}
                                                                    href={child.href}
                                                                    onClick={() => setMobileOpen(false)}
                                                                    className="flex items-center gap-3 py-3 px-4 text-slate-600 font-medium hover:text-primary transition-colors"
                                                                >
                                                                    <span className="text-lg">{child.flag}</span>
                                                                    {child.label}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <div className="px-6 pt-8">
                                    <Link
                                        href="/contact"
                                        onClick={() => setMobileOpen(false)}
                                        className="block w-full text-center py-4 bg-accent text-white rounded-full font-bold text-lg shadow-xl shadow-red/20 active:scale-[0.98] transition-all"
                                    >
                                        Get Free Counseling
                                    </Link>
                                    <div className="h-[1px] bg-slate-100 my-10" />
                                </div>

                                {/* Social Follow */}
                                <div className="px-6">
                                    <span className="block text-slate-900 font-bold text-base mb-6">Follow Us</span>
                                    <div className="flex gap-5">
                                        {socialLinks.map((social, i) => (
                                            <a key={i} href={social.href} className={`p-3 rounded-2xl bg-white border border-slate-100 shadow-sm ${social.color} hover:scale-110 active:scale-95 transition-all`}>
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="h-[1px] bg-slate-100 my-10" />
                                </div>

                                {/* Contact Card from Image */}
                                <div className="px-6 pb-10">
                                    <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-[2rem] p-6 space-y-5 shadow-sm">
                                        <span className="block text-slate-900 font-bold text-base border-b border-slate-200/60 pb-3">For Program Related Queries</span>
                                        <div className="space-y-4">
                                            <a href={`tel:${defaultContent.contact.phone}`} className="flex items-center gap-4 text-slate-700 font-semibold hover:text-accent transition-colors group">
                                                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform">
                                                    <Phone size={18} />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] text-slate-400 uppercase tracking-wider">Call Us</span>
                                                    <span>{defaultContent.contact.phone}</span>
                                                </div>
                                            </a>
                                            <a href={`mailto:${defaultContent.contact.email}`} className="flex items-center gap-4 text-slate-700 font-semibold hover:text-accent transition-colors group">
                                                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform">
                                                    <Mail size={18} />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] text-slate-400 uppercase tracking-wider">Email Us</span>
                                                    <span className="text-sm break-all">{defaultContent.contact.email}</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
