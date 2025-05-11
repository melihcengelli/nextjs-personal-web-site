import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { MobileMenu } from "../components/MobileMenu";
import "../globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Melih Çengelli - Full Stack Developer",
  description: "Full Stack Developer olarak kişisel web sitem",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className={outfit.className}>
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm z-50 border-b">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between relative">
            <a href={`/${lang}`} className="font-bold text-2xl tracking-tight">
              <span className="text-[#2563EB] font-extrabold">MC</span>
              <span className="text-gray-800 dark:text-gray-200">.dev</span>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex gap-6">
                <a href={`/${lang}#about`} className="hover:text-gray-600 dark:hover:text-gray-300">
                  {lang === 'tr' ? 'Hakkımda' : 'About'}
                </a>
                <a href={`/${lang}#experience`} className="hover:text-gray-600 dark:hover:text-gray-300">
                  {lang === 'tr' ? 'Deneyim' : 'Experience'}
                </a>
                <a href={`/${lang}#courses`} className="hover:text-gray-600 dark:hover:text-gray-300">
                  {lang === 'tr' ? 'Kurslar' : 'Courses'}
                </a>
                <a href={`/${lang}#projects`} className="hover:text-gray-600 dark:hover:text-gray-300">
                  {lang === 'tr' ? 'Projeler' : 'Projects'}
                </a>
                <a href={`/${lang}#contact`} className="hover:text-gray-600 dark:hover:text-gray-300">
                  {lang === 'tr' ? 'İletişim' : 'Contact'}
                </a>
              </div>
              <div className="relative">
                <LanguageSwitcher />
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center gap-4">
              <div className="relative">
                <LanguageSwitcher />
              </div>
              <MobileMenu lang={lang} />
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
} 