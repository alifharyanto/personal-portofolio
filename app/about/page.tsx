"use client";
import { useState, useEffect, useCallback } from "react";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
  FaXmark, FaInstagram, FaThreads, FaXTwitter, FaTiktok, FaEnvelope,
  FaGithub, FaLinkedinIn, FaCopyright, FaChevronRight, FaWhatsapp, FaBriefcase
} from "react-icons/fa6";
import { h1 } from "framer-motion/client";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [isImgFull, setIsImgFull] = useState(false);
  const [showSocials, setShowSocials] = useState(false);
  const [init, setInit] = useState(false);
  const pathname = usePathname();

  // Partikel Initialization
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

  const languages = [
    { name: 'HTML', img: '/icon/html.svg', status: 'Reasonable' },
    { name: 'CSS', img: '/icon/css.svg', status: 'Reasonable' },
    { name: 'Javascript', img: '/icon/js.svg', status: 'Reasonable' },
    { name: 'TypeScript', img: '/icon/typescript.svg', status: 'Beginner' },
    { name: 'Python', img: '/icon/python.svg', status: 'Reasonable' },
    { name: 'Lua', img: '/icon/lua.svg', status: 'Advanced' },
    { name: 'PHP', img: '/icon/php.svg', status: 'Beginner' },
  ];

  const frameworks = [
    { name: 'Next JS', img: '/icon/nextjs.png', status: 'FullStack' },
    { name: 'React JS', img: '/icon/react.svg', status: 'FrontEnd' },
    { name: 'Tailwind', img: '/icon/tailwind.svg', status: 'FrontEnd' },
    { name: 'Bootstrap', img: '/icon/bootstrap.svg', status: 'FrontEnd' },
    { name: 'MediaPipe', img: '/icon/mediapipe.png', status: 'Vision' },
    { name: 'SckitLearn', img: '/icon/sckitlearn.svg', status: 'Machine Learning' },
    { name: 'Pandas', img: '/icon/pandas.svg', status: 'Data Analysis' },
    { name: 'PyTorch', img: '/icon/pytorch.png', status: 'DeepLearning' },
    { name: 'Django', img: '/icon/django.svg', status: 'API' },
    { name: 'Flask', img: '/icon/flask.png', status: 'API' },
  ];

  const tools = [
    { name: 'VS Code', img: '/icon/vscode.svg', status: 'Code Editor' },
    { name: 'Antigravity', img: '/icon/antigravity.png', status: 'Code Editor' },
    { name: 'Roblox Studio', img: '/icon/robloxstudio.png', status: 'Game Engine' },
    { name: 'Git', img: '/icon/git.svg', status: 'Version Control' },
    { name: 'GitHub', img: '/icon/github.svg', status: 'Git Hosting' },
    { name: 'Vercel', img: '/icon/vercel.svg', status: 'Website Hosting' },
    { name: 'Netlify', img: '/icon/netlify.svg', status: 'Website Hosting' },
    { name: 'Xampp', img: '/icon/xampp.svg', status: 'Server' },
    { name: 'NPM', img: '/icon/npm.svg', status: 'PKG Manager' },
    { name: 'PIP', img: '/icon/pip.svg', status: 'PKG Manager' },
    { name: 'Gemini', img: '/icon/gemini.png', status: 'Chatbot AI' },
    { name: 'ChatGPT', img: '/icon/chatgpt.svg', status: 'Chatbot AI' },
  ];

  const certificates = [
    {
      id: 1,
      title: "Dasar Penggunaan Generatif AI",
      provider: "Ruang AI",
      providerUrl: "https://ruangai.id",
      date: "20 Mei 2024",
      image: "/img/certificate-ruangai.png",
      desc: "Saya di kelas online ini belajar tentang pengenalan AI, strategi unggul di era AI, teknik Prompt Engineering yang efektif, Produktivitas dengan AI, Responsible AI",
      tags: ["Artificial Intelligence", "Prompt Engineering"]
    },
    {
      id: 2,
      title: "Belajar Dasar AI",
      provider: "Dicoding",
      providerUrl: "https://dicoding.com",
      date: "02 Oktober 2025",
      image: "/img/dicoding-belajar-dasar-ai.png",
      desc: "Saya di kelas online ini belajar tentang pengenalan AI, Memahami AI memaparkan konsep dasar tentang serta pemanfaatannya dalam pengembangan, Memahami konsep dasar Machine Learning, serta Memahami konsep dasar Deep Learning.",
      tags: ["Artificial Intelligence", "Machine Learning", "Deep Learning"]
    },
    {
      id: 3,
      title: " Memulai Pemrograman dengan Python",
      provider: "Dicoding",
      providerUrl: "https://dicoding.com",
      date: "17 Desember 2025",
      image: "/img/dicoding-pemograman-python.png",
      desc: "Saya di kelas online ini belajar tentang pengenalan Python, Mempelajari Array, Matriks dan library populer pada Python yang meliputi pemrosesan teks, matematika, parser, pengolahan data, file management, web scraping, machine learning, hingga web development",
      tags: ["Python", "Programming", "Data Analysis", "Web Development"]
    },
    {
      id: 4,
      title: "Belajar Machine Learning untuk Pemula",
      provider: "Dicoding",
      providerUrl: "https://dicoding.com",
      date: "17 Desember 2025",
      image: "/img/dicoding-belajar-machine-learning.png",
      desc: "Saya di kelas online ini belajar tentang pengenalan Machine Learning, Mempelajari dasar-dasar machine learning, sejarah, aplikasinya di berbagai bidang, alur kerja dalam proyek machine learning, mulai dari pengumpulan data hingga evaluasi model dan penerapan, Memahami konsep klasifikasi dalam supervised learning, serta algoritma yang umum digunakan seperti KNN dan Decision Tree, dan Mempelajari Unsurpevised Learning",
      tags: ["Machine Learning", "Data Science", "AI Engineering", "Python"]
    },
    {
      id: 5,
      title: "Mengenal Pemograman Komputer",
      provider: "CodePolitan",
      providerUrl: "https://codepolitan.com",
      date: "17 Desember 2025",
      image: "/img/codepolitan-pemograman-komputer.png",
      desc: "Saya di kelas online ini belajar tentang pengenalan pemrograman komputer, dasar-dasar algoritma, serta konsep dasar dalam pengembangan perangkat lunak.",
      tags: ["Programming", "Algorithms", "Software Development"]
    },
    {
      id: 6,
      title: "Belajar Dasar HTML dan CSS",
      provider: "CodePolitan",
      providerUrl: "https://codepolitan.com",
      date: "17 Desember 2025",
      image: "/img/codepolitan-belajar-dasar-html&css.png",
      desc: "Saya di kelas online ini belajar tentang pengenalan HTML dan CSS, dasar-dasar struktur halaman web, serta konsep dasar dalam pengembangan antarmuka pengguna.",
      tags: ["Programming", "Algorithms", "Web Development"]
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#121212] pt-24 overflow-x-hidden selection:bg-[#fbbf24]/30 selection:text-[#fbbf24]">

      {/* BACKGROUND PARTICLES SYSTEM */}
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

      <div className="relative z-10 max-w-6xl mx-auto space-y-24 pb-10">

        {/* 1. SECTION: ABOUT ME */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#1e1e1f]/80 backdrop-blur-sm border border-[#383838] rounded-3xl p-8 md:p-12 shadow-2xl mx-4 md:mx-0"
        >
          <header className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-white">About Me</h2>
            <div className="h-[1px] w-24 md:w-96 bg-[#fbbf24] opacity-50" />
          </header>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* FOTO: Efek Abu-abu ke Warna & Slide dari Kiri */}
            <motion.div
              initial={{ opacity: 0, x: -50, filter: "grayscale(100%)" }}
              whileInView={{ opacity: 1, x: 0, filter: "grayscale(0%)" }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-40 h-40 md:w-52 md:h-52 rounded-full border-2 border-[#fbbf24] p-1 flex-shrink-0 mx-auto md:mx-0 overflow-hidden shadow-[0_0_20px_rgba(251,191,36,0.1)]"
            >
              <img
                src="/photo-portofolio.png"
                className="w-full h-full object-cover rounded-full"
                alt="Alif"
              />
            </motion.div>

            {/* TEKS: Slide dari Kanan & Terbagi jadi Paragraf */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-1 space-y-6"
            >
              <div className="text-gray-300 text-sm md:text-base leading-relaxed text-justify space-y-4">
                <p>
                  Hello, my name is <strong>Muhammad Alif Haryanto</strong>, usually called Alif. I am 16 years old and currently an active student at Wirabuana Vocational High School (SMK), majoring in Software Engineering. I have a strong interest in information technology, especially software development, coding, and artificial intelligence (AI).
                </p>

                <p>
                  My interest in coding began when I was in 9th grade at Citayam Plus Junior High School. Even though programming was not part of the school curriculum, I started learning independently through articles, documentation, and various online resources. This experience strengthened my passion for technology and motivated me to continue my education in the Software Engineering field.
                </p>

                <p>
                  During my studies, I have continued to develop my technical skills through school and personal exploration. I enjoy understanding how systems work, from program logic to real-world technology implementation. In my free time, I enjoy reading about AI and playing games like Valorant and Roblox.
                </p>

                <p className="text-[#fbbf24] font-medium italic">
                  "Through this portfolio website, I aim to showcase my learning journey, projects, and skills, as well as take an early step toward building a career in technology."
                </p>
              </div>

              {/* SOCIAL MEDIA SECTION */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500"
                >
                  Follow Social Media:
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <SocialLink href="https://www.instagram.com/44mhmdaliff_/?utm_source=ig_web_button_share_sheet" icon={<FaInstagram />} />
                  <SocialLink href="https://www.threads.com/@44mhmdaliff_" icon={<FaThreads />} />
                  <SocialLink href="https://x.com/alifxfluxy" icon={<FaXTwitter />} />
                  <SocialLink href="https://tiktok.com/@hahahahahahabruhh" icon={<FaTiktok />} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 2. SECTION: CERTIFICATES */}
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-10 px-4">
          <h2 className="text-2xl font-bold text-white border-l-4 border-[#fbbf24] pl-4 uppercase italic">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div key={cert.id} className="bg-[#1e1e1f]/80 backdrop-blur-sm border border-[#383838] rounded-2xl overflow-hidden group">
                <div className="p-5">
                  <div className="h-44 overflow-hidden rounded-xl bg-[#1e1e1f] flex items-center justify-center border border-white/5 shadow-inner">
                    <img src={cert.image} className="w-full h-full object-contain p-2" alt={cert.title} />
                  </div>
                </div>
                <div className="px-6 pb-6 pt-0 space-y-3">
                  <h3 className="text-[#fbbf24] font-bold text-lg uppercase tracking-tighter">{cert.provider}</h3>
                  <p className="text-white text-sm font-medium">{cert.title}</p>
                  <button onClick={() => setSelectedCert(cert)} className="w-full mt-4 py-2.5 border border-[#fbbf24]/30 rounded-lg text-[10px] font-black tracking-[0.2em] text-[#fbbf24] hover:bg-[#fbbf24] hover:text-[#121212] transition-all">VIEW MORE</button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3. SECTION: SKILLS (TIRUAN ANIMASI BAGAS RAKHA) */}
        <div className="px-4 space-y-10">
          <header className="flex items-center gap-4">
            <div className="h-[1px] w-10 md:w-20 bg-[#fbbf24]" />
            <h2 className="text-2xl font-bold text-white">Skills</h2>
          </header>

          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar border-b border-white/5">
            {["Language Programming", "Framework", "Tools"].map((tab, idx) => (
              <button key={tab} onClick={() => setActiveTab(idx + 1)} className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === idx + 1 ? 'text-[#fbbf24] bg-[#fbbf24]/10' : 'text-gray-500 hover:text-white'}`}>
                {tab}
              </button>
            ))}
          </div>
          {/* SKILLS GRID */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 xl:grid-cols-4 pt-4">
            {(activeTab === 1 ? languages : activeTab === 2 ? frameworks : tools).map((item) => (
              <div
                key={item.name}
                className="group relative flex cursor-pointer items-center gap-2 rounded-xl border border-[#fbbf24]/20 px-3 py-2 bg-[#1e1e1f]/40 backdrop-blur-md hover:bg-[#fbbf24]/10 hover:border-[#fbbf24] transition-all duration-300 h-16 md:h-20 overflow-hidden"
              >
                {/* ICON CONTAINER: Default kecil, Hover besar */}
                <div className="flex h-12 w-12 items-center justify-center flex-shrink-0 lg:h-16 lg:w-16 transition-transform duration-300 transform scale-80 group-hover:scale-110">
                  {item.img ? (
                    <img
                      src={item.img}
                      alt={item.name}
                      /* Ukuran gambar di dalam container */
                      className="h-[80%] w-[80%] object-contain drop-shadow-2xl transition-all duration-300"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-white/5 rounded-md" />
                  )}
                </div>

                {/* TEXT CONTAINER */}
                <div className="relative flex flex-col justify-center overflow-visible">
                  {/* Skill Name: Naik ke atas saat hover */}
                  <div className="text-[13px] md:text-base lg:text-lg font-semibold text-white transition-all duration-300 transform group-hover:-translate-y-2 md:group-hover:-translate-y-3 whitespace-nowrap">
                    {item.name}
                  </div>

                  {/* Status Skill: Muncul dari bawah saat hover */}
                  <div className="absolute left-0 top-[65%] text-[9px] md:text-xs text-[#fbbf24] opacity-0 transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap font-medium tracking-tight">
                    {item.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
              <img src="/photo-portofolio.png" className="w-14 h-14 rounded-full border border-[#fbbf24] object-cover" />
              <div>
                <h3 className="text-white font-bold text-xl uppercase italic">Muhammad Alif</h3>
                <p className="text-gray-500 text-xs font-medium">Software Engineering Student</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Creating programs is not just a job, but also an art that has aesthetic value. Let's build something amazing.
            </p>
            <div className="flex gap-4 pt-2">
              <SocialLink href="https://www.instagram.com/44mhmdaliff_/?utm_source=ig_web_button_share_sheet" icon={<FaInstagram />} />
              <SocialLink href="https://www.threads.com/@44mhmdaliff_" icon={<FaThreads />} />
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
              <a href="mailto:alifharyanto201012@gmail.com" className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-[#fbbf24]/30 transition-all group">
                <div className="w-8 h-8 bg-[#fbbf24]/10 rounded-lg flex items-center justify-center text-[#fbbf24] group-hover:scale-110 transition-transform">
                  <FaEnvelope size={14} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[9px] text-gray-500 uppercase font-bold tracking-tighter">Email Me</p>
                  <p className="text-white text-[11px] font-bold truncate">alifharyanto201012@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/62895404209300" target="_blank" className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-[#fbbf24]/30 transition-all group">
                <div className="w-8 h-8 bg-[#fbbf24]/10 rounded-lg flex items-center justify-center text-[#fbbf24] group-hover:scale-110 transition-transform">
                  <FaWhatsapp size={14} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[9px] text-gray-500 uppercase font-bold tracking-tighter">WhatsApp</p>
                  <p className="text-white text-[11px] font-bold truncate">+62 895-4042-09300</p>
                </div>
              </a>

              <a href="https://github.com/alifharyanto" target="_blank" className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-[#fbbf24]/30 transition-all group">
                <div className="w-8 h-8 bg-[#fbbf24]/10 rounded-lg flex items-center justify-center text-[#fbbf24] group-hover:scale-110 transition-transform">
                  <FaGithub size={14} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[9px] text-gray-500 uppercase font-bold tracking-tighter">GitHub</p>
                  <p className="text-white text-[11px] font-bold truncate">alifharyanto</p>
                </div>
              </a>
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

      {/* MODAL SYSTEM */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => { setSelectedCert(null); setIsImgFull(false); }} />
            <AnimatePresence>
              {isImgFull ? (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative z-[250] max-w-5xl w-full flex flex-col items-center">
                  <button onClick={() => setIsImgFull(false)} className="fixed top-8 right-8 text-white hover:text-[#fbbf24] p-3 bg-white/10 rounded-full transition-all">
                    <FaXmark size={28} />
                  </button>
                  <img src={selectedCert.image} className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl" alt="Full View" />
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="relative bg-[#1e1e1f] border border-[#383838] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl z-[210]">
                  <button onClick={() => setSelectedCert(null)} className="absolute -top-12 md:top-6 -right-2 md:-right-16 text-white hover:text-[#fbbf24] p-2 transition-transform hover:rotate-90">
                    <FaXmark size={30} />
                  </button>
                  <div className="bg-transparent p-6 flex justify-center border-b border-white/5 cursor-pointer group relative overflow-hidden" onClick={() => setIsImgFull(true)}>
                    <img src={selectedCert.image} className="max-h-[350px] object-contain transition-transform group-hover:scale-105 duration-500 rounded-lg" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="bg-[#fbbf24] text-[#121212] px-4 py-2 rounded-full font-black text-[10px] tracking-widest uppercase">Click to Preview</span>
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    <h3 className="text-xl font-bold text-[#fbbf24] uppercase tracking-tighter">{selectedCert.title}</h3>
                    <p className="text-gray-400 text-sm italic leading-relaxed">"{selectedCert.desc}"</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.tags?.map((tag: string) => (
                        <span key={tag} className="border border-[#fbbf24]/30 px-3 py-1 rounded-full text-[#fbbf24] text-[9px] font-bold uppercase">{tag}</span>
                      ))}
                    </div>
                    <div className="flex justify-between items-end text-[9px] font-bold text-gray-500 uppercase tracking-widest pt-4 border-t border-white/5">
                      <div>Issued by <a href={selectedCert.providerUrl} target="_blank" className="text-[#fbbf24] hover:underline">{selectedCert.provider}</a></div>
                      <div>{selectedCert.date}</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function SocialLink({ href, icon }: any) {
  return (
    <a href={href} target="_blank" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#fbbf24] hover:border-[#fbbf24] transition-all">
      {icon}
    </a>
  );
}