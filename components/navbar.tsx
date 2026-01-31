"use client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Project", path: "/project" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    /* MODIFIKASI: Ditambahkan bg-dark/70, backdrop-blur, dan border-b tipis agar transparan & sticky */
    <nav className="fixed top-0 w-full z-50 px-6 py-4 md:py-6 bg-[#121212]/70 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo: Font Black tetap sangat bold sesuai instruksimu */}
        <div className="text-primary font-mono text-xl md:text-2xl font-black tracking-tighter">
          Portofolio<span className="text-white">.</span>
        </div>

        {/* Desktop Menu: font-bold dan uppercase agar tegas */}
        <div className="hidden md:flex gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-bold uppercase tracking-tight transition-all relative ${
                  isActive ? "text-white nav-underline" : "text-gray-500 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Github Right: Scale animation saat diklik */}
        <a 
          href="https://github.com/alifharyanto" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl md:text-3xl text-white hover:text-primary transition-all active:scale-90"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;