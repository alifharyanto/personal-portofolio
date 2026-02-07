"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
    FaEnvelope, FaPhone, FaGithub, FaUser, FaTrash, FaClock, FaDesktop,
    FaInstagram, FaXTwitter, FaTiktok, FaWhatsapp, FaChevronRight, FaCopyright, FaLock
} from "react-icons/fa6";

interface Message {
    id: number;
    name: string;
    email: string;
    phone: string;
    message: string;
    created_at: string;
    os?: string;
    city?: string;
}

// DEFINISI KOMPONEN PENDUKUNG AGAR TIDAK ERROR
const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#fbbf24] hover:text-black hover:border-[#fbbf24] transition-all duration-300">
        {icon}
    </a>
);

const ContactItem = ({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) => (
    <a href={href} className="flex items-center gap-4 group/item">
        <div className="text-[#fbbf24] group-hover/item:scale-110 transition-transform">{icon}</div>
        <div>
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{label}</p>
            <p className="text-white text-xs font-bold">{value}</p>
        </div>
    </a>
);

export default function HistoryPage() {
    const [init, setInit] = useState(false);
    const pathname = usePathname();
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);

    // STATE UNTUK SECURITY LOGIN
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [passwordInput, setPasswordInput] = useState("");
    const [passError, setPassError] = useState(false);

    useEffect(() => {
        // Cek jika sudah login di session ini
        const auth = sessionStorage.getItem("_admin_session");
        if (auth === "true") setIsAuthorized(true);

        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
        
        if (auth === "true") fetchMessages();
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Password sesuai request: qwerty123
        if (passwordInput === "qwerty123") {
            sessionStorage.setItem("_admin_session", "true");
            setIsAuthorized(true);
            setPassError(false);
            fetchMessages();
        } else {
            setPassError(true);
            setPasswordInput("");
        }
    };

    const fetchMessages = async () => {
        try {
            const res = await fetch("/api/messages");
            const data = await res.json();
            setMessages(data);
        } catch (error) {
            console.error("Failed to fetch:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Hapus pesan ini secara permanen?")) return;
        try {
            const res = await fetch(`/api/messages?id=${id}`, { method: "DELETE" });
            if (res.ok) {
                setMessages(messages.filter((m) => m.id !== id));
            }
        } catch (error) {
            alert("Gagal menghapus pesan");
        }
    };

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Service", path: "/service" },
        { name: "Project", path: "/project" },
        { name: "Contact", path: "/contact" },
    ];

    // --- LAYAR LOGIN (GABISA DI INSPECT KONTENNYA) ---
    if (!isAuthorized) {
        return (
            <div className="fixed inset-0 z-[9999] bg-[#121212] flex items-center justify-center px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md bg-[#1e1e1f] border border-white/5 p-10 rounded-[3rem] shadow-2xl text-center"
                >
                    <div className="w-20 h-20 bg-[#fbbf24] rounded-full flex items-center justify-center text-black mx-auto mb-6 shadow-[0_0_40px_rgba(251,191,36,0.2)]">
                        <FaLock size={30} />
                    </div>
                    <h2 className="text-white text-2xl font-black uppercase italic tracking-tighter mb-2">Restricted Access</h2>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8">Verification Required</p>
                    
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input 
                            type="password" 
                            value={passwordInput}
                            onChange={(e) => setPasswordInput(e.target.value)}
                            placeholder="Enter Password"
                            className={`w-full bg-black/40 border ${passError ? 'border-red-500' : 'border-white/10'} rounded-2xl p-4 text-center text-white font-mono focus:outline-none focus:border-[#fbbf24] transition-all`}
                            autoFocus
                        />
                        <AnimatePresence>
                            {passError && (
                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-[10px] font-black uppercase tracking-widest">
                                    Incorrect Credentials
                                </motion.p>
                            )}
                        </AnimatePresence>
                        <button type="submit" className="w-full bg-[#fbbf24] text-black font-black py-4 rounded-2xl uppercase tracking-widest text-xs hover:bg-white transition-all active:scale-95">
                            Grant Access
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    // --- KONTEN UTAMA ADMIN (HANYA MUNCUL JIKA SUDAH LOGIN) ---
    return (
        <section className="relative min-h-screen w-full bg-[#121212] pt-32 md:pt-40 overflow-x-hidden selection:bg-[#fbbf24]/30">

            {/* NAVBAR */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4 md:py-6 bg-[#121212]/70 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="text-[#fbbf24] font-mono text-xl md:text-2xl font-black tracking-tighter">
                        Portofolio<span className="text-white">.</span>
                    </div>
                    <div className="hidden md:flex gap-10">
                        {navItems.map((item) => (
                            <Link key={item.name} href={item.path} className={`text-sm font-bold uppercase tracking-tight transition-all relative ${pathname === item.path ? "text-white" : "text-gray-500 hover:text-white"}`}>
                                {item.name}
                                {pathname === item.path && <motion.div layoutId="underline" className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#fbbf24]" />}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-5">
                        <button onClick={() => { sessionStorage.clear(); window.location.reload(); }} className="text-[10px] font-black uppercase text-red-500 border border-red-500/20 px-3 py-1 rounded-lg hover:bg-red-500 hover:text-white transition-all">Logout</button>
                        <a href="https://github.com/alifharyanto" target="_blank" className="text-2xl text-white hover:text-[#fbbf24] transition-all"><FaGithub /></a>
                    </div>
                </div>
            </nav>

            {/* PARTICLES */}
            {init && (
                <Particles id="tsparticles" className="absolute inset-0 z-0" options={{
                    fpsLimit: 120,
                    particles: {
                        color: { value: "#fbbf24" },
                        links: { color: "#fbbf24", distance: 150, enable: true, opacity: 0.1, width: 1 },
                        move: { enable: true, speed: 1 },
                        number: { value: 50, density: { enable: true } },
                        opacity: { value: 0.2 },
                        size: { value: { min: 1, max: 2 } },
                    },
                    detectRetina: true,
                }} />
            )}

            <div className="relative z-10 max-w-6xl mx-auto px-4 pb-20">
                <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase italic">
                        Message <span className="text-[#fbbf24]">History</span>
                    </h1>
                    <div className="h-[2px] w-24 bg-[#fbbf24] mx-auto mt-4" />
                </motion.header>

                <div className="space-y-6">
                    {loading ? (
                        <p className="text-center text-gray-500 animate-pulse uppercase tracking-widest text-xs">Loading Messages...</p>
                    ) : messages.length === 0 ? (
                        <p className="text-center text-gray-500 italic">No messages found.</p>
                    ) : (
                        messages.map((msg, index) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#1e1e1f]/80 backdrop-blur-sm border border-[#383838] rounded-[2.5rem] p-6 md:p-8 hover:border-[#fbbf24]/50 transition-all"
                            >
                                <div className="flex flex-col md:flex-row justify-between gap-8">
                                    <div className="space-y-4 flex-1">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <div className="flex items-center gap-2 px-3 py-1 bg-[#fbbf24]/10 border border-[#fbbf24]/20 rounded-full text-[#fbbf24] text-[9px] font-black uppercase tracking-tighter">
                                                <FaDesktop /> {msg.os || "WINDOWS"}, {msg.city || "Jakarta"} 2026
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-500 text-[10px] font-black uppercase tracking-widest">
                                                <FaClock className="text-[#fbbf24]" />
                                                {new Date(msg.created_at).toLocaleString('id-ID')}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-[#fbbf24] rounded-full flex items-center justify-center text-black shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                                                <FaUser size={18} />
                                            </div>
                                            <h3 className="text-white text-xl font-bold uppercase italic">{msg.name}</h3>
                                        </div>
                                        <p className="text-gray-300 text-sm leading-relaxed bg-white/5 p-5 rounded-3xl italic border border-white/5">
                                            "{msg.message}"
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-2 min-w-[260px]">
                                        <p className="text-gray-600 text-[9px] font-black uppercase tracking-widest ml-2">Quick Action</p>
                                        <a href={`mailto:${msg.email}`} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#fbbf24] hover:text-black transition-all group/link">
                                            <FaEnvelope className="text-[#fbbf24] group-hover/link:text-black" />
                                            <span className="text-xs font-bold truncate">{msg.email}</span>
                                        </a>
                                        <a href={`tel:${msg.phone}`} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#fbbf24] hover:text-black transition-all group/link">
                                            <FaPhone className="text-[#fbbf24] group-hover/link:text-black" />
                                            <span className="text-xs font-bold">{msg.phone}</span>
                                        </a>
                                        <button
                                            onClick={() => handleDelete(msg.id)}
                                            className="mt-2 flex items-center justify-center gap-2 p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all font-black text-[10px] uppercase tracking-widest"
                                        >
                                            <FaTrash size={14} /> Delete Permanently
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>

            {/* COPYRIGHT MOBILE */}
            <div className="md:hidden flex flex-col items-center text-center pt-10 pb-24 space-y-3">
                <div className="flex items-center gap-2 text-white/50">
                    <FaCopyright size={16} />
                    <span className="text-sm font-black uppercase tracking-[0.2em]">Copyright</span>
                </div>
                <div className="flex items-center gap-3 w-full justify-center px-10">
                    <div className="h-[1px] flex-1 bg-[#fbbf24]" />
                    <p className="text-[#fbbf24] text-sm font-bold tracking-widest whitespace-nowrap uppercase">Muhammad Alif Haryanto</p>
                    <div className="h-[1px] flex-1 bg-[#fbbf24]" />
                </div>
                <p className="text-white/30 text-sm font-black">2026</p>
            </div>

            {/* FOOTER */}
            <footer className="relative z-10 hidden md:block bg-[#1e1e1f]/90 backdrop-blur-md border-t border-[#383838] pt-20 pb-10 px-10">
                <div className="max-w-6xl mx-auto grid grid-cols-4 gap-12">
                    <div className="col-span-2 space-y-6">
                        <div className="flex items-center gap-4">
                            <img src="/photo-portofolio.png" className="w-14 h-14 rounded-full border border-[#fbbf24] object-cover" alt="Profile" />
                            <div>
                                <h3 className="text-white font-bold text-xl uppercase italic">Muhammad Alif</h3>
                                <p className="text-gray-500 text-xs font-medium">Software Engineering Student</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                            Creating programs is not just a job, but also an art that has aesthetic value. Let's build something amazing.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <SocialLink href="https://www.instagram.com/44mhmdaliff_/" icon={<FaInstagram />} />
                            <SocialLink href="https://x.com/alifxfluxy" icon={<FaXTwitter />} />
                            <SocialLink href="https://tiktok.com/@hahahahahahabruhh" icon={<FaTiktok />} />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-xs uppercase tracking-widest border-l-2 border-[#fbbf24] pl-3">Shortcuts</h4>
                        <div className="flex flex-col gap-3">
                            {navItems.map(item => (
                                <Link key={item.name} href={item.path} className="text-gray-500 hover:text-[#fbbf24] text-sm transition-all flex items-center gap-2 group">
                                    <FaChevronRight size={8} className="group-hover:translate-x-1 transition-transform" /> {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-xs uppercase tracking-widest border-l-2 border-[#fbbf24] pl-3">Get in Touch</h4>
                        <div className="space-y-4">
                            <ContactItem icon={<FaEnvelope />} label="Email Me" value="alifharyanto201012@gmail.com" href="mailto:alifharyanto201012@gmail.com" />
                            <ContactItem icon={<FaWhatsapp />} label="WhatsApp" value="+62 895-4042-09300" href="https://wa.me/62895404209300" />
                            <ContactItem icon={<FaGithub />} label="GitHub" value="alifharyanto" href="https://github.com/alifharyanto" />
                        </div>
                    </div>
                </div>
            </footer>

      {/* NAVBAR MOBILE */}
        <div className="md:hidden fixed bottom-0 left-0 w-full z-50">
        <div className="nav-glass flex justify-around backdrop-blur-md items-center h-20 px-4">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`text-[12px] font-black uppercase tracking-widest transition-all ${
                  isActive ? "text-primary nav-underline" : "text-gray-500"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
            </div>

        </section>
    );
}