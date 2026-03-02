import { motion } from 'framer-motion';

const base = import.meta.env.BASE_URL;
const withBase = (href: string) => (href.match(/^[a-z]+:/) ? href : `${base}${href.replace(/^\//, '')}`);

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-hero-gradient bg-[length:200%_200%] opacity-80"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex w-full max-w-container flex-col gap-10 px-6 pb-24 pt-24 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">Security, Systems, Product</p>
          <div className="mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <img
              src={`${base}images/portrait.jpg`}
              alt="Aryan Bhandari portrait"
              className="h-52 w-52 rounded-full border border-white/10 object-cover shadow-soft"
            />
            <h1 className="font-heading text-4xl font-semibold leading-tight md:text-5xl">
              Aryan Bhandari
            </h1>
          </div>
          <p className="mt-6 text-lg text-white/70">
            Final-year Computer Science &amp; Entrepreneurship student at Ashoka University building secure systems and
            privacy-focused products. I specialize in product development, cybersecurity GRC, and product security
            architecture.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={withBase('/projects')}
              className="rounded-xl bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/20"
            >
              View Projects
            </a>
            <a
              href={withBase('/blog')}
              className="rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition hover:text-white"
            >
              Read the Blog
            </a>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>
      <div className="relative flex justify-center pb-8">
        <div className="h-10 w-6 rounded-full border border-white/30 p-1">
          <div className="h-2 w-2 animate-float rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
