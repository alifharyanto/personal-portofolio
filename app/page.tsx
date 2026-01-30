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
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 20 + 10,
      // Jarak gerak partikel (pixel)
      moveX: (Math.random() - 0.5) * 100, 
      moveY: (Math.random() - 0.5) * 100,
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
            height: p.size 
          }}
          animate={{ 
            // Gerakan melayang acak
            x: [0, p.moveX, 0],
            y: [0, p.moveY, 0],
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.8, 1] 
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            ease: "linear" // Pakai linear agar gerakannya mulus terus menerus
          }}
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
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 bg-[#121212]">
      <Particles />
      
      {/* pt-24 di mobile agar tidak menabrak header atas */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full max-w-6xl gap-8 md:gap-20 z-10 pt-24 md:pt-0">
        
        {/* FOTO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
            <div className="relative w-58 h-58 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-[5px] border-primary/50 shadow-2xl">
              <Image src="/photo-portofolio.png" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
        </motion.div>

        {/* TEKS */}
        <div className="order-2 md:order-1 text-center md:text-left pb-10 md:pb-0">
          <p className="text-primary text-sm md:text-lg mb-2 font-medium">Hello World, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Alif Haryanto
          </h1>
          
          <div className="text-xl md:text-3xl font-bold mb-6 min-h-[40px] text-primary italic">
            <Typewriter
              options={{
                strings: ["Web Developer", "AI Engineer", "Game Developer", "Software Student"],
                autoStart: true,
                loop: true,
                cursor: "|",
                delay: 60,
              }}
            />
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 text-sm md:text-lg">
            <p>Welcome to My personal website.</p>
            <span className="animate-wave text-xl">👋</span>
          </div>
        </div>
      </div>

      {/* MOBILE FOOTER NAV */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50">
        <div className="nav-glass flex justify-around items-center h-20 px-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-[10px] font-bold uppercase tracking-widest transition-all ${
                pathname === item.path ? "text-primary nav-underline" : "text-gray-500"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}