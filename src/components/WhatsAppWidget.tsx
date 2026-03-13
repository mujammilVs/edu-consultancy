"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { defaultContent } from "@/lib/content";

export default function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false);

    const whatsappUrl = `https://wa.me/${defaultContent.contact.whatsapp}?text=${encodeURIComponent(
        "Hi, I would like to know more about your courses and counseling."
    )}`;

    return (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25 }}
                        className="mb-4 bg-white rounded-2xl shadow-2xl border border-slate-200 w-[calc(100vw-2rem)] sm:w-80 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[#25D366] p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <MessageCircle className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-sm">
                                        {defaultContent.brandName}
                                    </h4>
                                    <p className="text-white/80 text-xs text-balance">
                                        Typically replies instantly
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white p-1"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-4 bg-[#ECE5DD] max-h-[40vh] overflow-y-auto">
                            <div className="bg-white rounded-xl p-3 shadow-sm max-w-[85%]">
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    👋 Hello! Welcome to {defaultContent.brandName}. How can we
                                    help you with your study abroad plans?
                                </p>
                                <span className="text-[10px] text-slate-400 mt-1 block text-right">
                                    Now
                                </span>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="p-4 bg-white">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full bg-[#25D366] hover:bg-[#20BD5B] text-white text-center py-3.5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                            >
                                Start Chat on WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Float button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow border-2 border-white/20"
                aria-label="Chat on WhatsApp"
            >
                {isOpen ? (
                    <X className="w-6 h-6 text-white" />
                ) : (
                    <MessageCircle className="w-6 h-6 text-white" />
                )}
            </motion.button>
        </div>
    );
}
