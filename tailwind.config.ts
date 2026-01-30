import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warna diambil dari referensi gambar
        dark: "#222222", // Background utama
        primary: "#fbbf24", // Kuning emas untuk aksen
        secondary: "#1f1f1f", // Abu-abu gelap untuk card/elemen
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'monospace'], // Untuk logo code style
      }
    },
  },
  plugins: [],
};
export default config;