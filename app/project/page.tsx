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
    FaChevronRight,
    FaEnvelope,
    FaWhatsapp,
    FaCalendarDays,
    FaLock,
    FaXTwitter,
    FaCode,
    FaCircleInfo,
    FaMagnifyingGlassPlus,
    FaRobot, // Tanda koma diperbaiki di sini
    FaCopyright
} from "react-icons/fa6";

import {
    SiNextdotjs,
    SiTailwindcss,
    SiStripe,
    SiPrisma,
    SiPython,
    SiReact,
    SiFastapi,
    SiOpenai,
    SiRoblox,
    SiLua,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiPhp,
    SiBootstrap,
    SiFlask,
    SiDjango,
    SiScikitlearn,
    SiGoogle,
    SiGooglegemini
} from "react-icons/si";

// --- HELPER UNTUK ICON TECH ---
const getTechIcon = (name: string) => {
    switch (name) {
        case "Next.js": return <SiNextdotjs />;
        case "Tailwind CSS": return <SiTailwindcss />;
        case "Stripe": return <SiStripe />;
        case "Prisma": return <SiPrisma />;
        case "FastAPI": return <SiFastapi />;
        case "OpenAI": return <SiOpenai />;
        case "AI": return <FaRobot />;
        case "Google": return <SiGoogle />;
        case "Google Gemini": return <SiGooglegemini />;
        case "Roblox Engine": return <SiRoblox />;
        case "Bootstrap": return <SiBootstrap />;
        case "Flask": return <SiFlask />;
        case "Django": return <SiDjango />;
        case "Scikit-learn": return <SiScikitlearn />;
        case "MediaPipe": return <SiGoogle />;
        case "HTML": return <SiHtml5 />;
        case "CSS": return <SiCss3 />;
        case "JavaScript": return <SiJavascript />;
        case "TypeScript": return <SiTypescript />;
        case "PHP": return <SiPhp />;
        case "Python": return <SiPython />;
        case "React": return <SiReact />;
        case "Luau":
        case "Lua": return <SiLua />;
        default: return <FaCode />;
    }
};

// --- DATA PROJECTS ---
const projects = [
    {
        id: 1,
        title: "Portofolio",
        category: "Web Development",
        image: "/img/portofolio.png",
        shortDesc: "Website Portofolio pribadi yang menampilkan karya dan informasi tentang saya.",
        description: "Website Portofolio pribadi yang dirancang untuk menampilkan karya, proyek, dan informasi tentang saya sebagai seorang pengembang perangkat lunak. Dibangun dengan Next.js dan Tailwind CSS untuk performa optimal dan desain responsif.",
        tech: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
        tags: ["Web Development", "Frontend", "UI/UX"],
        date: "Januari 2026",
        link: "/",
        github: "https://github.com",
        isPrivate: false,
        githubPrivate: true
    },
    {
        id: 2,
        title: "FX Intelligence",
        category: "AI Integration",
        image: "/img/fx intelligence.png",
        shortDesc: "Website Chatbot AI dengan model AI Google Gemini flash2.5 dan pollinations ai sebagai image generator.",
        description: "Website Chatbot AI yang mengintegrasikan model AI Google Gemini flash2.5 untuk interaksi percakapan alamai dan pollinations ai sebagai image genarator. Memmberikan pengalaman interaktif dan visual yang menarik bagi pengguna.",
        tech: ["HTML", "CSS", "JavaScript", "Google Gemini"],
        tags: ["AI Integration", "FrontEnd", "Web Development", "API Integration"],
        date: "12 Oktober 2025",
        link: "https://fxintelligencebetatest.netlify.app/",
        github: "https://github.com",
        isPrivate: false,
        githubPrivate: true
    },
    {
        id: 3,
        title: "FX Music",
        category: "Website Music Player",
        image: "/img/fx music -img.png",
        shortDesc: "Website Music Player dengan fitur kontrol pemutaran lengkap dan desain responsif.",
        description: "Website Music Player yang memungkinkan pengguna untuk memutar, menghentikan, dan mengontrol musik dengan antarmuka yang intuitif dan desain responsif.",
        tech: ["HTML", "CSS", "JavaScript"],
        tags: ["Music Player", "Web Development", "Frontend"],
        date: "1 April 2025",
        link: "https://fxecosystemfxmucic.netlify.app/",
        github: "#",
        isPrivate: false,
        githubPrivate: true
    },
    {
        id: 4,
        title: "FX Code",
        category: "Code Editor Web",
        image: "/img/fx code.png",
        shortDesc: "Website Editor Web dengan fitur kontrol lengkap dan sederhana",
        description: "Website Editor Web yang memungkinkan pengguna untuk mengedit kode dengan antarmuka yang intuitif dan desain responsif.",
        tech: ["HTML", "CSS", "JavaScript"],
        tags: ["Code Editor", "Web Development", "Frontend"],
        date: "1 April 2025",
        link: "https://fxcodefordeveloper.netlify.app/",
        github: "#",
        isPrivate: false,
        githubPrivate: true
    },
    {
        id: 5,
        title: "Citayam School CP & PW",
        category: "Game Roblox",
        image: "/img/citayam cp.png",
        shortDesc: "Game Roblox Virtual World di Roblox",
        description: "Game Roblox Virtual world  di Roblox yang memungkinkan pemain untuk menjelajahi lingkungan Citayam School, berinteraksi dengan pemain lain, dan pengalaman gedung sekolah yang di dunia nyata.",
        tech: ["Roblox Engine", "Lua"],
        tags: ["Game Development", "Roblox", "Lua"],
        date: "27 Juni 2025",
        link: "https://www.roblox.com/id/games/87998813686395/Citayam-Plus-Pariwisata-School",
        github: "#",
        isPrivate: false,
        githubPrivate: true
    },
    {
        id: 6,
        title: "Wira Buana School (COMING SOON)",
        category: "Game Roblox",
        image: "/img/wira buana School.png",
        shortDesc: "Game Roblox Virtual World di Roblox",
        description: "Game Roblox Virtual world  di Roblox yang memungkinkan pemain untuk menjelajahi lingkungan Sekolah Wira Buana yang di dunia nyata, berinteraksi dengan pemain lain, dan pengalaman bermain roleplay di game tersebut.",
        tech: ["Roblox Engine", "Lua"],
        tags: ["Game Development", "Roblox", "Lua"],
        date: "01 Juli 2025",
        link: "https://www.roblox.com/id/games/125110927083926/Sekolah-Wira-Buana",
        github: "#",
        isPrivate: false,
        githubPrivate: true
    }
];

export default function ProjectPage() {
    const [init, setInit] = useState(false);
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [zoomImage, setZoomImage] = useState<string | null>(null);
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
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: { enable: true, mode: "push" }, // Nambah partikel saat klik
                                onHover: {
                                    enable: true,
                                    mode: "grab", // Garis akan menyambung ke cursor
                                    parallax: { enable: true, force: 60, smooth: 10 }
                                },
                                resize: { enable: true },
                            },
                            modes: {
                                grab: { distance: 200, links: { opacity: 0.5 } },
                                push: { quantity: 4 },
                            },
                        },
                        particles: {
                            color: { value: "#fbbf24" },
                            links: {
                                color: "#fbbf24",
                                distance: 150,
                                enable: true,
                                opacity: 0.2,
                                width: 1
                            },
                            move: {
                                enable: true,
                                speed: 1.2, // Sedikit dipercepat agar lebih terasa interaksinya
                                direction: "none",
                                outModes: { default: "bounce" }
                            },
                            number: { value: 80, density: { enable: true } }, // Menambah jumlah partikel
                            opacity: { value: 0.3 },
                            size: { value: { min: 1, max: 3 } },
                        },
                        detectRetina: true,
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ ...smoothTransition, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-[#1e1e1f] rounded-3xl overflow-hidden border border-[#383838] hover:border-[#fbbf24]/50 transition-all duration-500 shadow-2xl flex flex-col"
                        >
                            {/* IMAGE */}
                            <div className="relative aspect-video overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-[#fbbf24] text-black text-[10px] font-black uppercase tracking-widest rounded-lg italic">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white uppercase tracking-tighter group-hover:text-[#fbbf24] transition-colors mb-3">{project.title}</h3>
                                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 italic mb-auto">{project.shortDesc}</p>

                                <div className="mt-6">
                                    <div className="w-full h-[1px] bg-[#383838] group-hover:bg-[#fbbf24]/30 transition-colors duration-500 mb-4" />

                                    {/* Tech Stack Icons */}
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.tech.map((t, i) => (
                                            <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
                                                <span className="text-[#fbbf24] text-[10px]">{getTechIcon(t)}</span>
                                                <span className="text-[9px] font-bold uppercase tracking-wider text-gray-300">{t}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1.5 rounded-full bg-[#fbbf24]/5 border border-[#fbbf24]/20 text-[#fbbf24] text-[9px] font-black uppercase tracking-widest italic group-hover:bg-[#fbbf24]/10 transition-colors duration-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button onClick={() => setSelectedProject(project)} className="w-full py-3 rounded-xl border border-[#fbbf24]/20 text-[#fbbf24] text-[11px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#fbbf24] hover:text-black transition-all duration-300 active:scale-95">
                                    View Details <FaChevronRight size={10} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* MODAL DETAIL */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/60 backdrop-blur-xl" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl bg-[#1e1e1f] border border-[#383838] rounded-[2rem] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar"
                        >
                            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-[#fbbf24] hover:text-black transition-all">
                                <FaXmark size={18} />
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="relative h-64 lg:h-full min-h-[300px] group cursor-zoom-in" onClick={() => setZoomImage(selectedProject.image)}>
                                    <img src={selectedProject.image} className="w-full h-full object-cover" alt="" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                        <FaMagnifyingGlassPlus className="text-[#fbbf24]" /> Click to Zoom
                                    </div>
                                </div>

                                <div className="p-8 md:p-12 space-y-6">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-[#fbbf24] text-[10px] font-black uppercase tracking-widest">
                                            <FaCircleInfo /> {selectedProject.category}
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter leading-tight">{selectedProject.title}</h2>
                                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                                            <FaCalendarDays className="text-[#fbbf24]/50" /> {selectedProject.date}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="text-white font-bold uppercase text-[10px] tracking-widest border-l-2 border-[#fbbf24] pl-3">Overview</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed italic">{selectedProject.description}</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map((t, i) => (
                                                <span key={i} className="px-2.5 py-1.5 bg-white/5 rounded-lg border border-white/10 text-[9px] text-gray-300 font-bold uppercase tracking-wider flex items-center gap-2">
                                                    <span className="text-[#fbbf24]">{getTechIcon(t)}</span> {t}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tags.map((tag, i) => (
                                                <span key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[#fbbf24]/60 text-[9px] font-bold uppercase tracking-widest italic">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-row gap-3 pt-4">
                                        {selectedProject.isPrivate ? (
                                            <div className="flex-[2] flex items-center justify-center gap-2 px-4 py-3 bg-white/5 text-gray-500 border border-white/5 rounded-xl font-black uppercase tracking-wider text-[10px] cursor-not-allowed">
                                                <FaLock size={12} className="opacity-40" /> Private Project
                                            </div>
                                        ) : (
                                            <a href={selectedProject.link} target="_blank" className="flex-[2] flex items-center justify-center gap-2 px-4 py-3 bg-[#fbbf24] text-black rounded-xl font-black uppercase tracking-wider text-[10px] hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all active:scale-95">
                                                Link Project <FaArrowUpRightFromSquare size={12} />
                                            </a>
                                        )}

                                        {selectedProject.githubPrivate ? (
                                            <div className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 text-gray-500 border border-white/5 rounded-xl font-black uppercase tracking-wider text-[10px] cursor-not-allowed">
                                                <FaLock size={12} className="opacity-40" /> Private
                                            </div>
                                        ) : (
                                            <a href={selectedProject.github} target="_blank" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 text-white border border-white/10 rounded-xl font-black uppercase tracking-wider text-[10px] hover:bg-white/10 transition-all active:scale-95">
                                                Source <FaGithub size={14} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* FULLSCREEN IMAGE ZOOM */}
            <AnimatePresence>
                {zoomImage && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-12">
                        <div className="absolute inset-0 bg-[#121212]/40 backdrop-blur-2xl" onClick={() => setZoomImage(null)} />
                        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="relative max-w-7xl w-full h-full flex items-center justify-center z-20">
                            <img src={zoomImage} className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl" alt="Fullscreen zoom" />
                            <button onClick={() => setZoomImage(null)} className="absolute top-0 -right-2 md:-top-10 md:-right-10 w-12 h-12 bg-[#fbbf24] text-black rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                                <FaXmark size={24} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>


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

            {/* FOOTER DESKTOP */}
            <footer className="relative z-10 hidden md:block bg-[#1e1e1f]/90 backdrop-blur-md border-t border-[#383838] pt-20 pb-10 px-10 mt-20">
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
                            Creating programs is not just a job, but also an art that has aesthetic value. Let&apos;s build something amazing.
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
                </div>
            </footer>

            {/* MOBILE BOTTOM NAVBAR */}
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