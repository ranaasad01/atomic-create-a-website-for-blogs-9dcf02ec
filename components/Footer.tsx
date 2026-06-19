"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle as Twitter, Code2 as Github, Briefcase as Linkedin, Mail, ArrowUp } from 'lucide-react';
import { navLinks, APP_NAME, APP_TAGLINE, APP_DESCRIPTION } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const footerCategories = [
  { label: "Technology", href: "#categories" },
  { label: "Design", href: "#categories" },
  { label: "Culture", href: "#categories" },
  { label: "Science", href: "#categories" },
  { label: "Lifestyle", href: "#categories" },
  { label: "Philosophy", href: "#categories" },
];

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Email", href: "mailto:hello@inkwell.blog", icon: Mail },
];

export default function Footer() {
  const pathname = usePathname();

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }

  function getHref(href: string) {
    if (href.startsWith("#") && pathname !== "/") {
      return "/" + href;
    }
    return href;
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main footer content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 group mb-4"
              aria-label={`${APP_NAME} home`}
            >
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-playfair text-xl font-bold text-white tracking-tight">
                {APP_NAME}
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-2">
              {APP_DESCRIPTION}
            </p>
            <p className="text-indigo-400 text-sm font-medium italic mb-6">
              "{APP_TAGLINE}"
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 bg-slate-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation column */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Navigate
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getHref(link.href)}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories column */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Categories
            </h3>
            <ul className="space-y-3">
              {footerCategories.map((cat) => (
                <li key={cat.label}>
                  <Link
                    href={getHref(cat.href)}
                    onClick={(e) => handleNavClick(e, cat.href)}
                    className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-200"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} {APP_NAME}. Crafted with care.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-slate-500 hover:text-slate-300 text-xs transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-slate-500 hover:text-slate-300 text-xs transition-colors duration-200"
            >
              Terms of Use
            </Link>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
              className="w-8 h-8 bg-slate-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors duration-200 ml-2"
            >
              <ArrowUp className="w-3.5 h-3.5 text-slate-400" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}