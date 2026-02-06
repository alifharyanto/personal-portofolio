"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
    FaGithub,
    FaArrowUpRightFromSquare,
    FaXmark,
    FaInstagram,
    FaTiktok,
    FaCopyright,
    FaChevronRight,
    FaEnvelope,
    FaWhatsapp,
    FaLayerGroup,
    FaCalendarDays,
    FaLock,
    FaXTwitter // <--- SUDAH DITAMBAHKAN BIAR GAK ERROR
} from "react-icons/fa6";

// --- DATA PROJECTS ---
const projects = [
    {
        id: 1,
        title: "E-Commerce Luxury",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1632&auto=format&fit=crop",
        shortDesc: "Platform belanja online modern dengan fitur payment gateway terintegrasi.",
        description: "Proyek ini adalah platform e-commerce skala penuh yang dibangun untuk bisnis fashion mewah. Memiliki fitur manajemen stok, keranjang belanja real-time, dan sistem pembayaran otomatis.",
        tech: ["Next.js", "Tailwind CSS", "Stripe", "Prisma"],
        date: "Januari 2026",
        link: "https://example.com",
        github: "https://github.com",
        isPrivate: true // <--- Mode Private Aktif
    },
    {
        id: 2,
        title: "AI Image Generator",
        category: "AI Integration",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop",
        shortDesc: "Aplikasi pengolah gambar berbasis AI menggunakan API Stable Diffusion.",
        description: "Aplikasi ini memungkinkan pengguna menghasilkan gambar berkualitas tinggi hanya dengan perintah teks (prompt). Menggunakan integrasi API OpenAI.",
        tech: ["Python", "React", "FastAPI", "OpenAI"],
        date: "Desember 2025",
        link: "https://example.com",
        github: "https://github.com",
        isPrivate: false
    },
    {
        id: 3,
        title: "Roblox Combat System",
        category: "Game Scripting",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470&auto=format&fit=crop",
        shortDesc: "Script sistem pertarungan tingkat lanjut untuk game bergenre RPG di Roblox.",
        description: "Mengembangkan kerangka kerja (framework) untuk sistem pertarungan yang mencakup combo hit dan sinkronisasi data server-client.",
        tech: ["Luau", "Roblox Engine"],
        date: "November 2025",
        link: "#",
        github: "#",
        isPrivate: false
    }
];

export default function ProjectPage() {
    const [init, setInit] = useState(false);
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Service", path: "/service" },
        { name: "Project", path: "/project" },
        { name: "Contact", path: "/contact" },
    ];

    const smoothTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any };

    return (
        <section className="relative min-h-screen w-full bg-[#121212] pt-32 md:pt-40 overflow-x-hidden selection:bg-[#fbbf24]/30 selection:text-[#fbbf24]">

            {/* PARTICLES */}
            {init && (
                <Particles
                    id="tsparticles"
                    className="absolute inset-0 z-0"
                    options={{
                        background: { color: { value: "transparent" } },
                        particles: {
                            color: { value: "#fbbf24" },
                            links: { color: "#fbbf24", distance: 150, enable: true, opacity: 0.1, width: 1 },
                            move: { enable: true, speed: 0.8 },
                            number: { value: 50 },
                            opacity: { value: 0.2 },
                            size: { value: { min: 1, max: 2 } },
                        },
                    }}
                />
            )}

            <div className="relative z-10 max-w-6xl mx-auto px-4 pb-10">
                {/* HEADER */}
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={smoothTransition}
                    className="text-center mb-20 space-y-4"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white uppercase italic tracking-tighter">
                        My <span className="text-[#fbbf24]">Projects</span>
                    </h1>
                    <div className="h-[2px] w-24 bg-[#fbbf24] mx-auto" />
                    <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base italic px-4">
                        Kumpulan karya digital pilihan yang dibangun dengan fokus pada kualitas dan inovasi.
                    </p>
                </motion.header>

                {/* PROJECT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ ...smoothTransition, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-[#1e1e1f] rounded-3xl overflow-hidden border border-[#383838] hover:border-[#fbbf24]/50 transition-all duration-500 shadow-2xl"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2 opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-[#fbbf24] text-black text-[10px] font-black uppercase tracking-widest rounded-lg italic">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-bold text-white uppercase tracking-tighter group-hover:text-[#fbbf24] transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 italic">{project.shortDesc}</p>
                                <button onClick={() => setSelectedProject(project)} className="w-full py-3 rounded-xl border border-[#fbbf24]/20 text-[#fbbf24] text-[11px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#fbbf24] hover:text-black transition-all duration-300 active:scale-95">
                                    View Details <FaChevronRight size={10} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* MODAL DETAIL - FIXED SLIM BUTTONS */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl bg-[#1e1e1f] border border-[#383838] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] max-h-[90vh] overflow-y-auto custom-scrollbar"
                        >
                            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-[#fbbf24] hover:text-black transition-all">
                                <FaXmark size={18} />
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="relative h-56 lg:h-full min-h-[250px]">
                                    <img src={selectedProject.image} className="w-full h-full object-cover" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                                </div>

                                <div className="p-6 md:p-12 space-y-6 md:space-y-8">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-[#fbbf24] text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                                            <FaLayerGroup /> {selectedProject.category}
                                        </div>
                                        <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter leading-tight">{selectedProject.title}</h2>
                                        <div className="flex items-center gap-2 text-gray-500 text-[10px] md:text-xs">
                                            <FaCalendarDays className="text-[#fbbf24]/50" /> {selectedProject.date}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="text-white font-bold uppercase text-[10px] tracking-widest border-l-2 border-[#fbbf24] pl-3">Overview</h4>
                                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed italic">{selectedProject.description}</p>
                                    </div>

                                    {/* --- BAGIAN TOMBOL YG DIPERBAIKI (SLIM & RESPONSIVE) --- */}
                                    <div className="flex flex-row gap-2 pt-2">
                                        {selectedProject.isPrivate ? (
                                            /* BUTTON PRIVATE: Lebih ramping, warna redup, gembok */
                                            <div className="flex-[2] flex items-center justify-center gap-1.5 px-3 py-2.5 bg-white/5 text-gray-500 rounded-xl border border-white/5 cursor-not-allowed">
                                                <FaLock size={10} className="opacity-50" />
                                                <span className="text-[9px] font-black uppercase tracking-wider whitespace-nowrap">Private Access</span>
                                            </div>
                                        ) : (
                                            /* BUTTON LIVE: Slim, sebaris */
                                            <a
                                                href={selectedProject.link}
                                                target="_blank"
                                                className="flex-[2] flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#fbbf24] text-black rounded-xl font-black uppercase tracking-wider text-[9px] hover:shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all active:scale-95 whitespace-nowrap"
                                            >
                                                Live Demo <FaArrowUpRightFromSquare size={10} />
                                            </a>
                                        )}

                                      
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-white/5 text-white border border-white/10 rounded-xl font-black uppercase tracking-wider text-[9px] hover:bg-white/10 transition-all active:scale-95"
                                        >
                                            Source <FaGithub size={12} />
                                        </a>
                                    </div>
                                    {/* ------------------------------------------------------- */}

                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* COPYRIGHT MOBILE */}
            <div className="md:hidden flex flex-col items-center text-center pt-5 pb-24 space-y-3">
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

            {/* FOOTER DESKTOP */}
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
                        <div className="space-y-3">
                            <ContactItem icon={<FaEnvelope />} label="Email Me" value="alifharyanto201012@gmail.com" href="mailto:alifharyanto201012@gmail.com" />
                            <ContactItem icon={<FaWhatsapp />} label="WhatsApp" value="+62 895-4042-09300" href="https://wa.me/62895404209300" />
                            <ContactItem icon={<FaGithub />} label="GitHub" value="alifharyanto" href="https://github.com/alifharyanto" />
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center opacity-40">
                    <p className="text-[10px] text-white font-bold uppercase tracking-widest">© 2026 Muhammad Alif Haryanto • All Rights Reserved</p>
                    <p className="text-[10px] text-white font-bold uppercase tracking-widest italic tracking-tighter">Handcrafted with Style</p>
                </div>
            </footer>

            {/* NAVBAR MOBILE */}
            <div className="md:hidden fixed bottom-0 left-0 w-full z-50">
                <div className="nav-glass flex justify-around backdrop-blur-md items-center h-20 px-4 border-t border-white/10">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`text-[12px] font-black uppercase tracking-widest transition-all ${isActive ? "text-[#fbbf24] border-b-2 border-[#fbbf24]" : "text-gray-500"
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

// --- HELPERS ---
function SocialLink({ href, icon }: any) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#fbbf24] transition-all">
            {icon}
        </a>
    );
}

function ContactItem({ icon, label, value, href }: any) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-[#fbbf24]/30 transition-all group overflow-hidden">
            <div className="w-8 h-8 bg-[#fbbf24]/10 rounded-lg flex items-center justify-center text-[#fbbf24] shrink-0">
                {icon}
            </div>
            <div className="min-w-0">
                <p className="text-[9px] text-gray-500 uppercase font-bold tracking-tighter">{label}</p>
                <p className="text-white text-[11px] font-bold truncate">{value}</p>
            </div>
        </a>
    );
}