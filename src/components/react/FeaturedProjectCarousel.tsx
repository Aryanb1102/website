import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const base = import.meta.env.BASE_URL;
const withBase = (href: string) => (href.match(/^[a-z]+:/) ? href : `${base}${href.replace(/^\//, '')}`);

const featuredProjects = [
  {
    title: 'Censorship Detector (India)',
    description:
      'Mapping digital borders through network measurements that reveal DNS tampering, HTTP interference, and regional filtering patterns.',
    href: '/projects/censorship-detector-india',
  },
  {
    title: 'Cluless Context-Aware Digital Closet',
    description:
      'Mobile-first wardrobe assistant that generates outfit recommendations using weather context and user feedback to reduce daily decision fatigue.',
    href: '/projects/cluless-context-aware-digital-closet',
  },
];

export default function FeaturedProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [paused]);

  const activeProject = featuredProjects[activeIndex];

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <p className="text-sm uppercase tracking-[0.35em] text-white/50">Featured Project</p>
      <div className="mt-4 min-h-[10rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
          >
            <h2 className="font-heading text-3xl">{activeProject.title}</h2>
            <p className="mt-4 max-w-3xl text-white/70">{activeProject.description}</p>
            <a href={withBase(activeProject.href)} className="mt-6 inline-flex text-sm text-white/70 transition hover:text-white">
              View project →
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-4 flex items-center gap-2" aria-label="Featured project indicators">
        {featuredProjects.map((project, index) => (
          <button
            key={project.title}
            type="button"
            aria-label={`Show ${project.title}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 w-2.5 rounded-full border border-white/20 transition ${index === activeIndex ? 'bg-white/60' : 'bg-white/20 hover:bg-white/35'}`}
          />
        ))}
      </div>
    </div>
  );
}
