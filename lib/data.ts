export const APP_NAME = "Inkwell";
export const APP_TAGLINE = "Ideas worth reading.";
export const APP_DESCRIPTION =
  "A modern editorial blog covering culture, technology, design, and the art of living well.";

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "#articles" },
  { label: "Categories", href: "#categories" },
  { label: "About", href: "#about" },
  { label: "Newsletter", href: "#newsletter" },
];

export const navCTA = {
  label: "Subscribe",
  href: "#newsletter",
};

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tag: string;
  author: string;
  authorAvatar: string;
  date: string;
  readingTime: number;
  image: string;
  featured?: boolean;
}

export interface Category {
  slug: string;
  label: string;
  count: number;
}

export const categories: Category[] = [
  { slug: "technology", label: "Technology", count: 12 },
  { slug: "culture", label: "Culture", count: 9 },
  { slug: "design", label: "Design", count: 7 },
  { slug: "science", label: "Science", count: 5 },
  { slug: "lifestyle", label: "Lifestyle", count: 8 },
  { slug: "philosophy", label: "Philosophy", count: 4 },
];

export const posts: Post[] = [
  {
    slug: "the-quiet-revolution-of-slow-design",
    title: "The Quiet Revolution of Slow Design",
    excerpt:
      "In a world obsessed with speed, a growing movement of designers is asking us to pause, breathe, and build things that last.",
    category: "Design",
    tag: "minimalism",
    author: "Elena Marsh",
    authorAvatar: "/images/author-elena-marsh.jpg",
    date: "2024-05-12",
    readingTime: 6,
    image: "https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2022/11/25/8f7cbd8a-6c54-4430-89c1-91f83f594e99_aafe3cec.jpg",
    featured: true,
  },
  {
    slug: "how-ai-is-rewriting-the-rules-of-creativity",
    title: "How AI Is Rewriting the Rules of Creativity",
    excerpt:
      "Artificial intelligence isn't replacing human creativity — it's forcing us to ask harder questions about what creativity actually means.",
    category: "Technology",
    tag: "ai",
    author: "James Okafor",
    authorAvatar: "/images/author-james-okafor.jpg",
    date: "2024-05-08",
    readingTime: 8,
    image: "https://m.media-amazon.com/images/I/51VBGznUtpL._AC_UF350,350_QL50_.jpg",
  },
  {
    slug: "the-lost-art-of-doing-nothing",
    title: "The Lost Art of Doing Nothing",
    excerpt:
      "Ancient philosophers called it otium. Modern science calls it default mode. Either way, we've forgotten how to rest — and it's costing us.",
    category: "Lifestyle",
    tag: "wellness",
    author: "Sofia Reyes",
    authorAvatar: "/images/author-sofia-reyes.jpg",
    date: "2024-05-03",
    readingTime: 5,
    image: "https://news.northeastern.edu/wp-content/uploads/2026/03/urban_greenery_1400.jpg?w=287&h=287&crop=1",
  },
  {
    slug: "cities-that-breathe-urban-green-spaces",
    title: "Cities That Breathe: The Rise of Urban Green Spaces",
    excerpt:
      "From Singapore's vertical gardens to Paris's urban forests, cities around the world are rethinking what it means to be liveable.",
    category: "Culture",
    tag: "urbanism",
    author: "Luca Ferretti",
    authorAvatar: "/images/author-luca-ferretti.jpg",
    date: "2024-04-28",
    readingTime: 7,
    image: "https://i5.walmartimages.com/seo/The-Philosophy-of-Enough-A-Modern-Antidote-to-Endless-Desire-and-Digital-Excess-Paperback-9789371777919_4b43930c-ecdc-4669-8174-d542852e89ae.2b0d4afdc7d4d410e17ad5f5ef0cc543.jpeg",
  },
  {
    slug: "the-philosophy-of-enough",
    title: "The Philosophy of Enough",
    excerpt:
      "Stoics, Buddhists, and modern economists all agree on one thing: knowing when you have enough is the hardest — and most important — skill of all.",
    category: "Philosophy",
    tag: "stoicism",
    author: "Elena Marsh",
    authorAvatar: "/images/author-elena-marsh.jpg",
    date: "2024-04-21",
    readingTime: 9,
    image: "https://i.ytimg.com/vi/xjWUm1JEozI/maxresdefault.jpg",
  },
  {
    slug: "the-science-of-awe",
    title: "The Science of Awe: Why Wonder Is Good for You",
    excerpt:
      "Researchers are discovering that the feeling of awe — standing before a vast mountain or a starry sky — has profound effects on our health and happiness.",
    category: "Science",
    tag: "psychology",
    author: "James Okafor",
    authorAvatar: "/images/author-james-okafor.jpg",
    date: "2024-04-15",
    readingTime: 6,
    image: "https://bloximages.chicago2.vip.townnews.com/fox13memphis.com/content/tncms/assets/v3/editorial/7/3b/73b753d6-41d6-52ba-983f-b6f04158be36/64aca47d49efa.image.jpg",
  },
  {
    slug: "typography-the-invisible-art",
    title: "Typography: The Invisible Art That Shapes Everything",
    excerpt:
      "You may not notice good typography, but you always feel it. A deep dive into the craft that quietly governs how we read the world.",
    category: "Design",
    tag: "typography",
    author: "Sofia Reyes",
    authorAvatar: "/images/author-sofia-reyes.jpg",
    date: "2024-04-09",
    readingTime: 7,
    image: "https://images.unsplash.com/photo-1655203297308-7f042d67d09e?fit=max&fm=jpg&ixid=M3wzNTY3MHwwfDF8YWxsfHx8fHx8fHx8MTc1MzMwNjQwMnw&ixlib=rb-4.1.0&q=75&w=720&utm_medium=referral&utm_source=vocal.media",
  },
  {
    slug: "the-return-of-analogue",
    title: "The Return of Analogue: Why We're Going Back to Basics",
    excerpt:
      "Vinyl records, film cameras, paper notebooks — in the age of digital everything, analogue is making a surprising and meaningful comeback.",
    category: "Culture",
    tag: "analogue",
    author: "Luca Ferretti",
    authorAvatar: "/images/author-luca-ferretti.jpg",
    date: "2024-04-02",
    readingTime: 5,
    image: "https://www.cnet.com/a/img/resize/99b4c66ae1efdd30c4ebd990306f42aafb568b1b/hub/2025/12/16/1ef1ec7c-d4b5-4f41-aa0c-48a87e04dfc9/film-photography-5.jpg?auto=webp&fit=crop&height=675&width=1200",
  },
];