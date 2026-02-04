import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Redact', href: '/redact' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div
        className={`transition duration-500 ${scrolled ? 'bg-ink/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'} `}
      >
        <div className="mx-auto flex w-full max-w-container items-center justify-between px-6 py-4">
          <a href="/" className="font-heading text-lg tracking-wide">
            Aryan | Security &amp; Systems
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/70 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:text-white md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="flex flex-col gap-1">
              <span className="h-0.5 w-5 rounded-full bg-white/80"></span>
              <span className="h-0.5 w-5 rounded-full bg-white/80"></span>
              <span className="h-0.5 w-5 rounded-full bg-white/80"></span>
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="mx-4 rounded-2xl border border-white/10 bg-graphite/95 p-6 shadow-soft backdrop-blur">
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base text-white/80 transition hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
