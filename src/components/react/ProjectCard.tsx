import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

const base = import.meta.env.BASE_URL;
const withBase = (href: string) => (href.match(/^[a-z]+:/) ? href : `${base}${href.replace(/^\//, '')}`);

export default function ProjectCard({ title, description, tags, href }: ProjectCardProps) {
  if (href) {
    return (
      <motion.a
        href={withBase(href)}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="glass group block h-full rounded-2xl p-6 transition"
      >
        <div className="flex h-full flex-col gap-6">
          <div className="min-w-0">
            <h3 className="font-heading text-xl">{title}</h3>
            <p className="mt-3 text-sm text-white/70">{description}</p>
          </div>
          <div className="mt-auto flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="glass group h-full rounded-2xl p-6 transition"
    >
      <div className="flex h-full flex-col gap-6">
        <div className="min-w-0">
          <h3 className="font-heading text-xl">{title}</h3>
          <p className="mt-3 text-sm text-white/70">{description}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
