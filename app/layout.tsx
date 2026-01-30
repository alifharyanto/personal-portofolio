import Header from "@/components/navbar"; // Ganti nama importnya
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-dark text-white antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}