"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const Particles = () => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number; moveX: number; moveY: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.8,
      duration: Math.random() * 10 + 10, 
      moveX: (Math.random() - 0.5) * 200, 
      moveY: (Math.random() - 0.5) * 200,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="particle"
          style={{ 
            left: `${p.x}%`, 
            top: `${p.y}%`, 
            width: p.size, 
            height: p.size,
            background: 'rgba(255, 255, 255, 0.5)' 
          }}
          animate={{ 
            x: [0, p.moveX, 0],
            y: [0, p.moveY, 0],
            opacity: [0.1, 0.6, 0.1],
            scale: [1, 1.5, 1] 
          }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Project", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start md:justify-center overflow-hidden px-6 bg-[#121212]">
      <Particles />
      
      {/* Container utama dengan pt-24 agar tidak bentrok dengan header logo/github */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full max-w-6xl gap-4 md:gap-20 z-10 pt-24 md:pt-0 flex-grow pb-24 md:pb-0">
        
        {/* FOTO: Diberi w-64 h-64 tetap agar tidak goyang saat loading */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="order-1 md:order-2 flex justify-center shrink-0"
        >
          <div className="relative w-64 h-64 md:w-[400px] md:h-[400px]">
            <div className="absolute inset-0 bg-primary/30 blur-[80px] rounded-full" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-[5px] border-primary/80 shadow-2xl">
              <Image 
                src="/photo-portofolio.png" 
                alt="photo-portofolio-img" 
                fill 
                className="object-cover" 
                priority 
                sizes="(max-width: 768px) 256px, 400px"
              />
            </div>
          </div>
        </motion.div>

        {/* TEKS: justify-center di mobile agar tetap di tengah */}
        <div className="order-2 md:order-1 text-center md:text-left shrink-0">
          <p className="text-primary text-sm md:text-lg mb-1 font-bold italic">Hello World, I'm</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tight">
            Alif Haryanto
          </h1>
          
          <div className="text-xl md:text-3xl font-extrabold mb-4 min-h-[40px] text-primary italic">
            <Typewriter
              options={{
                strings: ["Web Developer", "AI Engineer", "Game Developer", "Software Engineering Student"],
                autoStart: true,
                loop: true,
                cursor: "|",
                delay: 60,
              }}
            />
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 text-sm md:text-lg font-medium">
            <p>Welcome to My Portofolio website.</p>
            <span className="animate-wave text-2xl">👋</span>
          </div>
        </div>
      </div>

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