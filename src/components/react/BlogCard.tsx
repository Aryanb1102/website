import { motion } from 'framer-motion';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  href: string;
}

const base = import.meta.env.BASE_URL;
const withBase = (href: string) => {
  if (href.match(/^[a-z]+:/)) return href;
  const clean = href.replace(/^\//, '');
  if (!clean) return base;
  if (clean.endsWith('/')) return `${base}${clean}`;
  return `${base}${clean}/`;
};

export default function BlogCard({ title, excerpt, category, date, href }: BlogCardProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      href={withBase(href)}
      className="glass group flex h-full flex-col gap-6 rounded-2xl p-6 transition"
    >
      <div className="flex items-center justify-between text-xs text-white/60">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{category}</span>
        <span>{date}</span>
      </div>
      <div>
        <h3 className="font-heading text-xl">{title}</h3>
        <p className="mt-3 text-sm text-white/70">{excerpt}</p>
      </div>
      <span className="text-sm text-white/70">Read article →</span>
    </motion.a>
  );
}
