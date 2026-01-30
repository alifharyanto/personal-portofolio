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
    <nav className="fixed top-0 w-full z-50 px-6 py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Kuning */}
        <div className="text-primary font-mono text-xl font-bold">
          Muhammad Alif<span className="text-white">();</span>
        </div>

        {/* Desktop Menu - Tengah */}
        <div className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-sm font-semibold transition-all ${
                pathname === item.path ? "text-white" : "text-gray-500 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Github Right */}
        <a href="https://github.com" target="_blank" className="text-2xl text-white hover:text-primary transition-all">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;