"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    FileUp,
    Users,
    LayoutDashboard,
    Settings,
    LogOut,
    CheckCircle,
    Mail,
    Phone,
    Globe,
    Trash2,
    Menu,
    X
} from "lucide-react";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("leads");
    const [leads, setLeads] = useState([]);
    const [loadingLeads, setLoadingLeads] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [stats, setStats] = useState({ total: 0, new: 0, contacts: 0 });
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter();

    const fetchLeads = async () => {
        setLoadingLeads(true);
        try {
            const res = await fetch("/api/leads");
            const data = await res.json();
            if (data.success) {
                setLeads(data.data);
                setStats({
                    total: data.data.length,
                    new: data.data.filter((l: { status: string }) => l.status === 'new').length,
                    contacts: data.data.filter((l: { formType: string }) => l.formType === 'contact').length
                });
            } else {
                // Client-side error handling for fetchLeads
                console.error("Failed to fetch leads:", data.message);
                alert(`Error fetching leads: ${data.message}`);
            }
        } catch (error: unknown) {
            // Client-side network/parsing error handling
            const message = error instanceof Error ? error.message : "An unknown error occurred while fetching leads.";
            console.error("LEADS_FETCH_ERROR:", error);
            alert(`Error fetching leads: ${message}`);
        } finally {
            setLoadingLeads(false);
        }
    };

    useEffect(() => {
        // Check auth
        const token = localStorage.getItem("admin_token");
        if (!token) {
            router.push("/admin");
            return;
        }

        fetchLeads();
    }, [router]);

    const logout = () => {
        localStorage.removeItem("admin_token");
        router.push("/admin");
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("/api/upload-pdf", {
                method: "POST",
                body: formData,
            });
            const data = await res.json();
            if (data.success) {
                alert("Website updated from PDF content!");
            } else {
                // Client-side error handling for file upload
                console.error("Failed to upload PDF:", data.message);
                alert(`Error uploading PDF: ${data.message}`);
            }
        } catch (error: unknown) {
            // Client-side network/parsing error handling
            const message = error instanceof Error ? error.message : "Failed to upload file";
            console.error("UPLOAD_PDF_ERROR:", error);
            alert(`Error uploading PDF: ${message}`);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <div className="w-64 bg-slate-900 text-white flex flex-col hidden md:flex">
                <div className="p-6 border-b border-slate-800">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold">E</div>
                        <h1 className="font-bold text-lg">EDU Admin</h1>
                    </div>
                    <p className="text-slate-500 text-xs">Consultancy Management</p>
                </div>

                <nav className="flex-1 p-4 space-y-2 mt-4">
                    <button
                        onClick={() => setActiveTab("leads")}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === "leads" ? "bg-accent text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
                    >
                        <Users size={18} />
                        Leads
                    </button>
                    <button
                        onClick={() => setActiveTab("content")}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === "content" ? "bg-accent text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
                    >
                        <FileUp size={18} />
                        Smart PDF
                    </button>
                    <button
                        onClick={() => setActiveTab("settings")}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === "settings" ? "bg-accent text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
                    >
                        <Settings size={18} />
                        Settings
                    </button>
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <button onClick={logout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-red-400 transition-all">
                        <LogOut size={18} />
                        Sign Out
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="p-2 md:hidden text-slate-600 hover:bg-slate-100 rounded-lg"
                        >
                            <Menu size={24} />
                        </button>
                        <div className="flex items-center gap-2 md:hidden">
                            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-white text-xs">E</div>
                        </div>
                        <div className="hidden md:flex items-center gap-4">
                            <LayoutDashboard className="text-slate-400" />
                            <h2 className="text-xl font-bold capitalize">{activeTab} Dashboard</h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold">Admin User</p>
                            <p className="text-xs text-slate-500">Super Administrator</p>
                        </div>
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 border border-slate-200">
                            U
                        </div>
                    </div>
                </header>

                {/* Dash Body */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50">
                    <AnimatePresence mode="wait">
                        {activeTab === "leads" && (
                            <motion.div
                                key="leads"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-6"
                            >
                                {/* Stats */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                                        <p className="text-slate-500 text-sm font-medium mb-1">Total Leads</p>
                                        <div className="text-3xl font-display font-bold">{stats.total}</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                                        <p className="text-slate-500 text-sm font-medium mb-1">New Inquiries</p>
                                        <div className="text-3xl font-display font-bold text-accent">{stats.new}</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                                        <p className="text-slate-500 text-sm font-medium mb-1">Response Rate</p>
                                        <div className="text-3xl font-display font-bold text-emerald-500">94%</div>
                                    </div>
                                </div>

                                {/* Table */}
                                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                                    <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                                        <h3 className="font-bold">Recent Inquiries</h3>
                                        <button onClick={fetchLeads} className="text-xs text-primary font-bold hover:underline">Refresh List</button>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left">
                                            <thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                                                <tr>
                                                    <th className="px-6 py-4">Student</th>
                                                    <th className="px-6 py-4">Preference</th>
                                                    <th className="px-6 py-4">Type</th>
                                                    <th className="px-6 py-4">Status</th>
                                                    <th className="px-6 py-4 text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100">
                                                {loadingLeads ? (
                                                    <tr><td colSpan={5} className="px-6 py-10 text-center text-slate-400">Loading leads...</td></tr>
                                                ) : leads.length === 0 ? (
                                                    <tr><td colSpan={5} className="px-6 py-10 text-center text-slate-400">No leads found yet.</td></tr>
                                                ) : leads.map((lead: { _id: string; name: string; email: string; phone: string; countryPreference: string; formType: string; status: string }) => (
                                                    <tr key={lead._id} className="hover:bg-slate-50/50 transition-colors">
                                                        <td className="px-6 py-5">
                                                            <p className="font-bold text-slate-900 capitalize">{lead.name}</p>
                                                            <div className="flex flex-col gap-1 mt-1">
                                                                <span className="text-xs text-slate-500 flex items-center gap-1"><Mail size={12} /> {lead.email}</span>
                                                                <span className="text-xs text-slate-500 flex items-center gap-1"><Phone size={12} /> {lead.phone}</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-5">
                                                            <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold">{lead.countryPreference || "General"}</span>
                                                        </td>
                                                        <td className="px-6 py-5">
                                                            <span className="text-xs font-medium text-slate-600">{lead.formType}</span>
                                                        </td>
                                                        <td className="px-6 py-5">
                                                            <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${lead.status === 'new' ? 'bg-accent/10 text-accent' : 'bg-emerald-100 text-emerald-600'}`}>
                                                                {lead.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-5 text-right space-x-2">
                                                            <button className="p-2 text-slate-400 hover:text-primary"><CheckCircle size={18} /></button>
                                                            <button className="p-2 text-slate-400 hover:text-red-500"><Trash2 size={18} /></button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "content" && (
                            <motion.div
                                key="content"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="max-w-2xl"
                            >
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold mb-2">PDF Content Sync</h3>
                                        <p className="text-slate-500">Upload a brochure or PDF listing to automatically update the website sections like services, branding, and contact details.</p>
                                    </div>

                                    <div className="border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                                        <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                            <FileUp className="text-primary h-8 w-8" />
                                        </div>

                                        <div className="space-y-4">
                                            <p className="text-sm text-slate-500">Drag & drop your brochure PDF here, or click to browse</p>

                                            <div className="flex flex-col items-center gap-4">
                                                <label className="cursor-pointer bg-primary hover:opacity-90 text-white font-bold py-3 px-8 rounded-xl transition-all">
                                                    {uploading ? "Parsing PDF..." : "Choose PDF File"}
                                                    <input
                                                        type="file"
                                                        className="hidden"
                                                        accept=".pdf"
                                                        onChange={handleFileUpload}
                                                        disabled={uploading}
                                                    />
                                                </label>
                                                {uploading && <div className="loader scale-50"></div>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 p-4 bg-slate-50 rounded-2xl flex items-start gap-3">
                                        <Globe className="text-accent mt-1" size={18} />
                                        <div>
                                            <h4 className="font-bold text-sm">Smart Parsing AI</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">The system will use heuristic extraction to identify Brand Name, Services, Country Highlights, and Office Addresses from the PDF text immediately after upload.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </main>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[999] md:hidden"
                        />
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 w-[80%] max-w-[300px] bg-slate-900 z-[1000] md:hidden flex flex-col shadow-2xl"
                        >
                            <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-white">E</div>
                                    <h1 className="font-bold text-lg text-white">EDU Admin</h1>
                                </div>
                                <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-white">
                                    <X size={24} />
                                </button>
                            </div>

                            <nav className="flex-1 p-4 space-y-2 mt-4">
                                <button
                                    onClick={() => { setActiveTab("leads"); setMobileMenuOpen(false); }}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === "leads" ? "bg-accent text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
                                >
                                    <Users size={18} />
                                    Leads
                                </button>
                                <button
                                    onClick={() => { setActiveTab("content"); setMobileMenuOpen(false); }}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === "content" ? "bg-accent text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
                                >
                                    <FileUp size={18} />
                                    Smart PDF
                                </button>
                                <button
                                    onClick={() => { setActiveTab("settings"); setMobileMenuOpen(false); }}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === "settings" ? "bg-accent text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
                                >
                                    <Settings size={18} />
                                    Settings
                                </button>
                            </nav>

                            <div className="p-4 border-t border-slate-800">
                                <button onClick={logout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-red-400 transition-all">
                                    <LogOut size={18} />
                                    Sign Out
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
