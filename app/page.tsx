"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
    <main className="relative h-screen w-full flex flex-col items-center justify-center bg-dark overflow-hidden px-6">
      
      {/* Container Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10 md:gap-20">
        
        {/* FOTO (Atas di mobile, Kanan di desktop) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Glow Kuning Halus */}
            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full" />
            <div className="relative w-64 h-64 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-[1px] border-primary/50">
              <Image 
                src="/me.png" 
                alt="Profile" 
                fill 
                className="object-cover"
                priority 
              />
            </div>
          </div>
        </motion.div>

        {/* TEKS (Bawah di mobile, Kiri di desktop) */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <p className="text-primary text-sm md:text-lg mb-2 font-medium">Hello World, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Alif Haryanto
          </h1>
          
          {/* Typing Writing dengan Cursor | */}
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
            <span className="animate-bounce">👋</span>
          </div>
        </div>
      </div>

      {/* MOBILE FOOTER NAV (Hanya muncul di mobile, posisi paling bawah) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50">
        <div className="nav-glass flex justify-around items-center h-20 px-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-[10px] font-bold uppercase tracking-widest transition-all ${
                pathname === item.path ? "text-white" : "text-gray-500"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

    </main>
  );
}