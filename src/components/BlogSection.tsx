"use client";

import { motion } from "framer-motion";
import { defaultContent } from "@/lib/content";
import { ArrowRight, Calendar, User } from "lucide-react";
import Image from "next/image";

export default function BlogSection() {
    const posts = defaultContent.blogPosts || [];

    return (
        <section className="section-padding bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                            Latest from our <span className="gradient-text">Experts</span>
                        </h2>
                        <p className="text-slate-600">
                            Stay updated with the latest visa rules, university deadlines, and student life insights.
                        </p>
                    </div>
                    <button className="btn-outline flex items-center gap-2">
                        View All News <ArrowRight size={18} />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row h-full transition-all hover:shadow-xl hover:border-accent/30"
                        >
                            <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-primary shadow-lg">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 md:w-3/5 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} className="text-accent" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User size={14} className="text-accent" />
                                        {post.author}
                                    </div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <button className="mt-auto flex items-center gap-2 text-primary font-bold text-sm tracking-wide">
                                    READ STORY <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
