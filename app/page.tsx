"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Star, Mail, CheckCircle, BookOpen, Sparkles, Users, TrendingUp, Heart, Eye, ChevronRight } from 'lucide-react';
import {
  APP_NAME,
  APP_TAGLINE,
  APP_DESCRIPTION,
  posts,
  categories,
  type Post,
  type Category,
} from "@/lib/data";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";

// ─── Inline data ────────────────────────────────────────────────────────────

const stats = [
  { label: "Articles Published", value: "240+", icon: BookOpen },
  { label: "Monthly Readers", value: "85K", icon: Users },
  { label: "Topics Covered", value: "6", icon: TrendingUp },
  { label: "Writers", value: "18", icon: Star },
];

const testimonials = [
  {
    id: 1,
    name: "Priya Nair",
    role: "Product Designer at Figma",
    avatar: "https://onplanners.com/sites/default/files/styles/template_fancy/public/template-images/printable-monthly-reading-template.png",
    quote:
      "Inkwell is the first thing I read with my morning coffee. The writing is sharp, the ideas are fresh, and it consistently makes me think differently about my work.",
  },
  {
    id: 2,
    name: "Marcus Webb",
    role: "Software Engineer",
    avatar: "https://static.www.nfl.com/image/private/t_headshot_desktop/league/aewahyauhdstskbbuq43",
    quote:
      "I've tried dozens of newsletters and blogs. Inkwell is the only one I've never unsubscribed from. Every piece feels like it was written specifically for curious people.",
  },
  {
    id: 3,
    name: "Aisha Kamara",
    role: "Founder, Meridian Studio",
    avatar: "https://media.licdn.com/dms/image/v2/C4D03AQHe0RcpMTXTOw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1650844104677?e=2147483647&v=beta&t=vTr6Jwx-e8hnXqC_jx7OMxvHF4CW1g7QX4_ONlzexhw",
    quote:
      "The depth of research here is remarkable. These aren't hot takes — they're considered, well-sourced essays that hold up over time.",
  },
];

const whyItems = [
  {
    id: 1,
    icon: BookOpen,
    title: "Long-form that respects your time",
    description:
      "Every article is edited to be as short as it needs to be and no shorter. We cut the fluff so you get the insight.",
  },
  {
    id: 2,
    icon: Star,
    title: "Curated by editors, not algorithms",
    description:
      "Our editorial team hand-picks every piece. No clickbait, no engagement farming — just ideas worth your attention.",
  },
  {
    id: 3,
    icon: Users,
    title: "A community of curious minds",
    description:
      "Join 85,000 readers — designers, engineers, writers, and thinkers — who share a love of ideas that cross disciplines.",
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Fresh perspectives, weekly",
    description:
      "New articles drop every Tuesday and Thursday. Subscribe to the newsletter and never miss a piece that matters.",
  },
];

// ─── Sub-components (inline) ─────────────────────────────────────────────────

function PostCard({ post, index }: { post: Post; index: number }) {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-shadow duration-300 flex flex-col"
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://www.rosalievillage.co/wp-content/uploads/2022/09/placeholder.png";
          }}
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full shadow">
            {post.category}
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime} min read
          </span>
          <span>·</span>
          <span>{post.date}</span>
        </div>
        <h3 className="font-playfair text-lg font-bold text-slate-900 leading-snug mb-2 group-hover:text-indigo-600 transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <img
              src={post.authorAvatar}
              alt={post.author}
              className="w-7 h-7 rounded-full object-cover bg-slate-200"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?_=20150327203541";
              }}
            />
            <span className="text-xs font-medium text-slate-600">
              {post.author}
            </span>
          </div>
          <span className="flex items-center gap-1 text-indigo-600 text-xs font-semibold group-hover:gap-2 transition-all duration-200">
            Read <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function FeaturedPost({ post }: { post: Post }) {
  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 hover:shadow-2xl hover:border-indigo-100 transition-all duration-300 md:flex"
    >
      <div className="relative md:w-1/2 overflow-hidden aspect-[4/3] md:aspect-auto">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://www.rosalievillage.co/wp-content/uploads/2022/09/placeholder.png";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full shadow">
            Featured
          </span>
          <span className="inline-block px-3 py-1 bg-white/90 text-slate-700 text-xs font-semibold rounded-full shadow">
            {post.category}
          </span>
        </div>
      </div>
      <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
        <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime} min read
          </span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            Editor's Pick
          </span>
        </div>
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-indigo-600 transition-colors duration-200">
          {post.title}
        </h2>
        <p className="text-slate-500 leading-relaxed mb-6">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={post.authorAvatar}
              alt={post.author}
              className="w-9 h-9 rounded-full object-cover bg-slate-200 ring-2 ring-indigo-100"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?_=20150327203541";
              }}
            />
            <div>
              <p className="text-sm font-semibold text-slate-800">
                {post.author}
              </p>
              <p className="text-xs text-slate-400">Author</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-full shadow hover:bg-indigo-700 transition-colors duration-200"
          >
            Read Article <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}

function CategoryPill({ cat }: { cat: Category }) {
  const colorMap: Record<string, string> = {
    technology: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
    culture: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100",
    design: "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100",
    science: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
    lifestyle: "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100",
    philosophy: "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200",
  };
  const cls =
    colorMap[cat.slug] ??
    "bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100";

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`flex items-center justify-between px-5 py-4 rounded-2xl border cursor-pointer transition-colors duration-200 ${cls}`}
    >
      <span className="font-semibold text-sm">{cat.label}</span>
      <span className="text-xs font-medium opacity-70">{cat.count} articles</span>
    </motion.div>
  );
}

// ─── Newsletter form ─────────────────────────────────────────────────────────

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section
      id="newsletter"
      className="relative py-24 overflow-hidden bg-indigo-600"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-violet-600 rounded-full opacity-30 blur-3xl pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center"
      >
        <motion.div variants={fadeInUp}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 text-white text-xs font-semibold rounded-full mb-6 backdrop-blur-sm">
            <Mail className="w-3.5 h-3.5" /> Weekly Newsletter
          </span>
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
        >
          Ideas delivered to your inbox
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-indigo-100 text-lg mb-10 leading-relaxed"
        >
          Every Tuesday and Thursday, we send our best new article straight to
          you — no spam, no noise, just writing worth reading.
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
              <CheckCircle className="w-7 h-7 text-indigo-600" />
            </div>
            <p className="text-white text-xl font-semibold">You're in!</p>
            <p className="text-indigo-100 text-sm">
              Welcome to the Inkwell community. Your first issue arrives soon.
            </p>
          </motion.div>
        ) : (
          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-3.5 rounded-full bg-white/95 text-slate-800 placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/60 shadow"
            />
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="px-7 py-3.5 bg-slate-900 text-white text-sm font-semibold rounded-full shadow hover:bg-slate-800 transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe Free
            </motion.button>
          </motion.form>
        )}

        <motion.p variants={fadeInUp} className="text-indigo-200 text-xs mt-5">
          Join 85,000+ readers. Unsubscribe anytime.
        </motion.p>
      </motion.div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const featuredPost = posts.find((p) => p.featured) ?? posts[0];
  const recentPosts = posts.filter((p) => !p.featured).slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50 rounded-full opacity-60 blur-3xl translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50 rounded-full opacity-50 blur-3xl -translate-x-1/4 translate-y-1/4" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full mb-6 border border-indigo-100">
              <Sparkles className="w-3.5 h-3.5" /> {APP_TAGLINE}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6 max-w-4xl mx-auto"
          >
            Where great{" "}
            <span className="text-indigo-600 italic">ideas</span> find
            their voice
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          >
            {APP_DESCRIPTION}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#articles"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#articles")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Start Reading <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#newsletter"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#newsletter")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-slate-700 text-sm font-semibold rounded-full shadow border border-slate-200 hover:border-indigo-200 hover:text-indigo-600 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" /> Get the Newsletter
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={staggerContainer}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm"
                >
                  <div className="w-9 h-9 bg-indigo-50 rounded-xl flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-indigo-600 w-5 h-5" />
                  </div>
                  <span className="font-playfair text-2xl font-bold text-slate-900">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 text-center leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* ── FEATURED ARTICLE ── */}
      <section id="articles" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-between mb-10"
            >
              <div>
                <span className="text-indigo-600 text-sm font-semibold uppercase tracking-widest">
                  Editor's Pick
                </span>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900 mt-1">
                  Featured Article
                </h2>
              </div>
              <motion.a
                href="#articles"
                whileHover={{ x: 4 }}
                className="hidden md:flex items-center gap-1 text-indigo-600 text-sm font-semibold hover:gap-2 transition-all duration-200"
              >
                All Articles <ChevronRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            <FeaturedPost post={featuredPost} />
          </motion.div>
        </div>
      </section>

      {/* ── RECENT ARTICLES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-between mb-10"
            >
              <div>
                <span className="text-indigo-600 text-sm font-semibold uppercase tracking-widest">
                  Latest
                </span>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900 mt-1">
                  Recent Articles
                </h2>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {recentPosts.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section id="categories" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="text-indigo-600 text-sm font-semibold uppercase tracking-widest">
                Browse
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900 mt-1 mb-3">
                Explore by Category
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                From the cutting edge of technology to the timeless questions of
                philosophy — find the topics that move you.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {categories.map((cat) => (
                <CategoryPill key={cat.slug} cat={cat} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY INKWELL ── */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div
              variants={slideInLeft}
              className="max-w-xl mb-14"
            >
              <span className="text-indigo-600 text-sm font-semibold uppercase tracking-widest">
                Why {APP_NAME}
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900 mt-1 mb-4">
                Reading that makes you think
              </h2>
              <p className="text-slate-500 leading-relaxed">
                We believe the internet deserves better writing. {APP_NAME} is
                built on the conviction that depth, nuance, and craft still
                matter — and that readers are hungry for it.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    variants={fadeInUp}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="flex gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-indigo-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
                Readers Love It
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mt-1 mb-3">
                What our community says
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Over 85,000 curious minds read Inkwell every week. Here's what
                keeps them coming back.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {testimonials.map((t) => (
                <motion.div
                  key={t.id}
                  variants={fadeInUp}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-indigo-400/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-4 h-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover bg-slate-700 ring-2 ring-indigo-500/30"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?_=20150327203541";
                      }}
                    />
                    <div>
                      <p className="text-white text-sm font-semibold">
                        {t.name}
                      </p>
                      <p className="text-slate-400 text-xs">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social proof bar */}
            <motion.div
              variants={fadeInUp}
              className="mt-14 flex flex-wrap items-center justify-center gap-8 text-slate-400 text-sm"
            >
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-400" />
                85,000+ subscribers
              </span>
              <span className="hidden md:block w-px h-4 bg-slate-700" />
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400" />
                4.9 / 5 average rating
              </span>
              <span className="hidden md:block w-px h-4 bg-slate-700" />
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                240+ articles published
              </span>
              <span className="hidden md:block w-px h-4 bg-slate-700" />
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400" />
                18 contributing writers
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <NewsletterSection />
    </main>
  );
}