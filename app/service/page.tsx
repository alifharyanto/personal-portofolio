"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
    FaCode, FaRobot, FaGamepad, FaMobileScreen,
    FaChevronDown, FaCircleCheck, FaInstagram,
    FaTiktok, FaCopyright, FaChevronRight, 
    FaEnvelope, FaWhatsapp, FaGithub, FaXTwitter,
    FaClock, FaRocket 
} from "react-icons/fa6";

export default function ServicePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [init, setInit] = useState(false);
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

    const services = [
        {
            title: "Web Development",
            desc: "Membangun website responsif dan modern menggunakan Native atau Framework Next.js atau React.js serta styling Tailwind CSS.",
            icon: <FaCode />,
            tags: ["Native","Next.js", "React", "Tailwind"]
        },
        {
            title: "AI Development",
            desc: "Membangun AI Chatbot berbasis Machine Learning TF-IDF dengan menggunakan dataset atau API ",
            icon: <FaRobot />,
            tags: ["OpenAI", "Automation"]
        },
        {
            title: "Game Development",
            desc: "Membuat game dalam platform Roblox menggunakan bahasa pemograman Lua dan game yang menarik serta interaktif",
            icon: <FaGamepad />,
            tags: ["Roblox Studio", "Roblox", "Lua Script"]
        },
        {
            title: "UI/UX Optimization",
            desc: "Optimalisasi antarmuka pengguna untuk memastikan pengalaman navigasi yang intuitif di semua perangkat.",
            icon: <FaMobileScreen />,
            tags: ["Responsive", "UX Design"]
        }
    ];

    const faqs = [
        { q: "Berapa lama durasi pengerjaan proyek?", a: "Tergantung kompleksitas. Landing page biasanya 3-7 hari, aplikasi sistem bisa 2-4 minggu." },
        { q: "Apakah saya bisa melakukan revisi?", a: "Tentu. Saya menyediakan garansi revisi jika ada program yang BUG" },
        { q: "Teknologi apa yang digunakan?", a: "Stack utama kami menggunakan native jika website, dan program lanjutan bisa menggunakan framework Next.JS(FullStack)" },
        { q: "Berapa harga untuk pengembangan?", a: "Harga bervariasi sesuai dengan tingkat kesulitan pengerjaan. Untuk mengenai lebih lanjut bisa hubungi saya di contact."}
    ];

    const smoothTransition = { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as any 
    };

    return (
        <section className="relative min-h-screen w-full bg-[#121212] pt-32 md:pt-40 overflow-x-hidden selection:bg-[#fbbf24]/30 selection:text-[#fbbf24]">
            
            {/* BACKGROUND PARTICLES SYSTEM */}
            {init && (
                <Particles
                    id="tsparticles"
                    className="absolute inset-0 z-0"
                    options={{
                        background: { color: { value: "transparent" } },
                        fpsLimit: 120,
                        interactivity: {
                            events: { onHover: { enable: true, mode: "grab" }, resize: { enable: true } },
                            modes: { grab: { distance: 140, links: { opacity: 0.5 } } },
                        },
                        particles: {
                            color: { value: "#fbbf24" },
                            links: { color: "#fbbf24", distance: 150, enable: true, opacity: 0.2, width: 1 },
                            move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
                            number: { density: { enable: true }, value: 80 },
                            opacity: { value: 0.3 },
                            shape: { type: "circle" },
                            size: { value: { min: 1, max: 3 } },
                        },
                        detectRetina: true,
                    }}
                />
            )}

            <div className="relative z-10 max-w-6xl mx-auto space-y-24 pb-10 px-4">
                
                {/* 1. HEADER SECTION */}
                <motion.header 
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={smoothTransition}
                    viewport={{ once: true }}
                    className="text-center space-y-6"
                >
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase italic">
                            My <span className="text-[#fbbf24]">Services</span>
                        </h1>
                        <div className="h-[2px] w-24 bg-[#fbbf24] mx-auto" />
                    </div>

                    <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                        Membantu transformasi digital melalui pengembangan perangkat lunak yang presisi, efisien, dan modern.
                    </p>

                    {/* STATS PENGALAMAN */}
                    <div className="flex flex-wrap justify-center gap-6 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                            <FaClock className="text-[#fbbf24] text-sm" />
                            <span className="text-[11px] font-black text-white uppercase tracking-widest">2 Years Experience</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                            <FaRocket className="text-[#fbbf24] text-sm" />
                            <span className="text-[11px] font-black text-white uppercase tracking-widest">10 Projects Completed</span>
                        </div>
                    </div>
                </motion.header>

                {/* 2. SERVICES GRID */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isLeft ? -100 : 100 }} 
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }} 
                                transition={smoothTransition} 
                                className="group relative p-8 rounded-3xl bg-[#1e1e1f]/80 backdrop-blur-sm border border-[#383838] hover:border-[#fbbf24]/40 transition-all duration-500 shadow-2xl"
                            >
                                <div className="text-4xl text-[#fbbf24] mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tighter">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">{service.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-white/5 text-[#fbbf24] border border-[#fbbf24]/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </section>

                {/* 3. FAQ SECTION */}
                <section className="max-w-3xl mx-auto space-y-10">
                    <motion.header 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={smoothTransition}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                    >
                        <h2 className="text-2xl font-bold text-white uppercase italic border-l-4 border-[#fbbf24] pl-4">FAQ</h2>
                    </motion.header>

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={smoothTransition}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {faqs.map((faq, index) => (
                            <div 
                                key={index}
                                className="rounded-2xl bg-[#1e1e1f]/60 border border-[#383838] overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full p-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors group"
                                >
                                    <span className="text-sm font-bold text-slate-200 flex items-center gap-4">
                                        <FaCircleCheck className={`text-sm transition-colors ${openFaq === index ? 'text-[#fbbf24]' : 'text-gray-600'}`} />
                                        {faq.q}
                                    </span>
                                    <FaChevronDown className={`text-xs text-gray-500 transition-transform duration-500 ${openFaq === index ? 'rotate-180 text-[#fbbf24]' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: "circOut" }}
                                            className="px-14 pb-6 text-sm text-gray-400 leading-relaxed"
                                        >
                                            <div className="pt-2 border-t border-white/5">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </motion.div>

                    {/* NEW: CTA BUTTON SECTION */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ...smoothTransition, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex justify-center pt-8"
                    >
                        <Link 
                            href="/contact" 
                            className="group relative flex items-center gap-3 px-8 py-4 bg-[#fbbf24] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] active:scale-95"
                        >
                            <span className="relative z-10 text-black font-black uppercase tracking-[0.15em] italic text-sm md:text-base">
                                Contact Me 
                            </span>
                            <FaChevronRight className="relative z-10 text-black text-xs group-hover:translate-x-1 transition-transform duration-300" />
                            
                            {/* Overlay Shine Effect on Hover */}
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                        </Link>
                    </motion.div>
                </section>
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
      {/* MOBILE FOOTER NAV: Navigasi bawah tetap aman */}
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

// Helper Components
function SocialLink({ href, icon }: any) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#fbbf24] hover:border-[#fbbf24] transition-all">
            {icon}
        </a>
    );
}

function ContactItem({ icon, label, value, href }: any) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-[#fbbf24]/30 transition-all group">
            <div className="w-8 h-8 bg-[#fbbf24]/10 rounded-lg flex items-center justify-center text-[#fbbf24] group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div className="overflow-hidden">
                <p className="text-[9px] text-gray-500 uppercase font-bold tracking-tighter">{label}</p>
                <p className="text-white text-[11px] font-bold truncate">{value}</p>
            </div>
        </a>
    );
}