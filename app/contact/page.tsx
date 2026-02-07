"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
    FaInstagram, FaTiktok, FaCopyright, FaChevronRight,
    FaEnvelope, FaWhatsapp, FaGithub, FaXTwitter,
    FaPaperPlane, FaLocationDot
} from "react-icons/fa6";

export default function ContactPage() {
    const [init, setInit] = useState(false);
    const pathname = usePathname();
    const [status, setStatus] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

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

const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("SENDING...");

        try {
            // PERBAIKAN: Ganti "/api/contact" menjadi "/api/messages"
            const response = await fetch("/api/messages", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("MESSAGE SENT!");
                // Reset form setelah sukses
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                const errorData = await response.json();
                console.error("Server Error:", errorData);
                setStatus("ERROR! TRY AGAIN.");
            }
        } catch (err) {
            console.error("Fetch Error:", err);
            setStatus("SERVER ERROR.");
        }

        // Hilangkan status setelah 3 detik
        setTimeout(() => setStatus(null), 3000);
    };

    const smoothTransition = {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any
    };

    return (
        <section className="relative min-h-screen w-full bg-[#121212] pt-32 md:pt-40 overflow-x-hidden selection:bg-[#fbbf24]/30 selection:text-[#fbbf24]">

            {/* NAVBAR */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4 md:py-6 bg-[#121212]/70 backdrop-blur-md border-b border-white/5 transition-all duration-300">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="text-[#fbbf24] font-mono text-xl md:text-2xl font-black tracking-tighter">
                        Portofolio<span className="text-white">.</span>
                    </div>
                    <div className="hidden md:flex gap-10">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`text-sm font-bold uppercase tracking-tight transition-all relative ${pathname === item.path ? "text-white" : "text-gray-500 hover:text-white"
                                    }`}
                            >
                                {item.name}
                                {pathname === item.path && (
                                    <motion.div layoutId="underline" className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#fbbf24]" />
                                )}
                            </Link>
                        ))}
                    </div>
                    <a href="https://github.com/alifharyanto" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl text-white hover:text-[#fbbf24] transition-all active:scale-90">
                        <FaGithub />
                    </a>
                </div>
            </nav>

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
                                onClick: { enable: true, mode: "push" },
                                onHover: { enable: true, mode: "grab", parallax: { enable: true, force: 60, smooth: 10 } },
                                resize: { enable: true },
                            },
                            modes: { grab: { distance: 200, links: { opacity: 0.5 } } },
                        },
                        particles: {
                            color: { value: "#fbbf24" },
                            links: { color: "#fbbf24", distance: 150, enable: true, opacity: 0.2, width: 1 },
                            move: { enable: true, speed: 1.2, direction: "none", outModes: { default: "bounce" } },
                            number: { value: 80, density: { enable: true } },
                            opacity: { value: 0.3 },
                            size: { value: { min: 1, max: 3 } },
                        },
                        detectRetina: true,
                    }}
                />
            )}

            <div className="relative z-10 max-w-6xl mx-auto space-y-16 pb-20 px-4">

                {/* HEADER */}
                <motion.header
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={smoothTransition}
                    viewport={{ once: true }}
                    className="text-center space-y-6"
                >
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase italic">
                            Get In <span className="text-[#fbbf24]">Touch</span>
                        </h1>
                        <div className="h-[2px] w-24 bg-[#fbbf24] mx-auto" />
                    </div>
                    <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed italic px-4">
                        Punya proyek menarik? Mari berdiskusi dan buat sesuatu yang luar biasa bersama.
                    </p>
                </motion.header>

                {/* CONTENT GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

                    {/* FORM SECTION */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={smoothTransition}
                        viewport={{ once: true }}
                        className="lg:col-span-3 order-1 lg:order-2 bg-[#1e1e1f]/80 backdrop-blur-sm border border-[#383838] p-8 md:p-10 rounded-[2.5rem] shadow-2xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-2 italic">Full Name</label>
                                    <input required type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#fbbf24] transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-2 italic">Email Address</label>
                                    <input required type="email" placeholder="example@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#fbbf24] transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-2 italic">Phone Number</label>
                                <input type="text" placeholder="+62 8..." value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#fbbf24] transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-2 italic">Message</label>
                                <textarea required rows={5} placeholder="Pesan Anda..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#fbbf24] transition-all resize-none" />
                            </div>
                            <button disabled={status !== null} className="w-full py-5 bg-[#fbbf24] text-black font-black uppercase tracking-[0.2em] text-xs rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all active:scale-95 disabled:opacity-50">
                                {status || "Send Message"} <FaPaperPlane size={14} />
                            </button>
                        </form>
                    </motion.div>

                    {/* CONTACT INFO */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={smoothTransition}
                        viewport={{ once: true }}
                        className="lg:col-span-2 order-2 lg:order-1 space-y-12"
                    >
                        <div className="space-y-6">
                            <h3 className="text-[#fbbf24] font-black uppercase tracking-widest text-xs italic border-l-2 border-[#fbbf24] pl-3">Contact Info</h3>
                            <div className="space-y-4">
                                <BigContactCard icon={<FaEnvelope />} label="Email" value="alifharyanto201012@gmail.com" href="mailto:alifharyanto201012@gmail.com" />
                                <BigContactCard icon={<FaWhatsapp />} label="WhatsApp" value="+62 895-4042-09300" href="https://wa.me/62895404209300" />
                                <BigContactCard icon={<FaLocationDot />} label="Location" value="Depok, West Java" href="#" />
                            </div>
                        </div>

                        {/* FOLLOW ME SECTION */}
                        <div className="flex flex-col items-center lg:items-start space-y-6">
                            <h3 className="text-white/30 font-black uppercase tracking-widest text-xs italic">Follow Me</h3>
                            <div className="flex gap-4">
                                <SocialLink href="https://github.com/alifharyanto" icon={<FaGithub />} />
                                <SocialLink href="https://www.instagram.com/44mhmdaliff_/" icon={<FaInstagram />} />
                                <SocialLink href="https://x.com/alifxfluxy" icon={<FaXTwitter />} />
                                <SocialLink href="https://tiktok.com/@hahahahahahabruhh" icon={<FaTiktok />} />
                            </div>
                        </div>
                    </motion.div>
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

                <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center opacity-40">
                    <p className="text-[10px] text-white font-bold uppercase tracking-widest">© 2026 Muhammad Alif Haryanto • All Rights Reserved</p>
                    <p className="text-[10px] text-white font-bold uppercase tracking-widest italic tracking-tighter">Handcrafted with Style</p>
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

// HELPER COMPONENTS
function SocialLink({ href, icon }: any) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-black hover:bg-[#fbbf24] hover:border-[#fbbf24] transition-all duration-300">
            {icon}
        </a>
    );
}

function BigContactCard({ icon, label, value, href }: any) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-5 bg-[#1e1e1f]/60 border border-[#383838] rounded-3xl hover:border-[#fbbf24]/40 transition-all group">
            <div className="w-12 h-12 bg-[#fbbf24] text-black rounded-xl flex items-center justify-center text-xl shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                {icon}
            </div>
            <div>
                <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest">{label}</p>
                <p className="text-white text-sm font-bold">{value}</p>
            </div>
        </a>
    );
}

// PERBAIKAN: Komponen ContactItem untuk tampilan kartu di Footer
function ContactItem({ icon, label, value, href }: any) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-[#252526] border border-[#383838] rounded-2xl hover:border-[#fbbf24]/30 transition-all group">
            <div className="w-10 h-10 bg-[#1e1e1f] border border-[#383838] text-[#fbbf24] rounded-xl flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <p className="text-[8px] text-gray-500 uppercase font-black tracking-widest">{label}</p>
                <p className="text-gray-300 text-[11px] font-bold group-hover:text-white transition-colors">{value}</p>
            </div>
        </a>
    );
}