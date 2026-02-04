import { motion } from 'framer-motion';

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
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">Security, Systems, Privacy</p>
          <h1 className="mt-6 font-heading text-4xl font-semibold leading-tight md:text-5xl">
            I build security-aware systems at the intersection of infrastructure, privacy, and policy.
          </h1>
          <p className="mt-6 text-lg text-white/70">
            I am interested in Linux systems, cloud security, privacy tooling, and network measurement that connects
            technical choices to real-world governance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="rounded-xl bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/20"
            >
              View Projects
            </a>
            <a
              href="/blog"
              className="rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition hover:text-white"
            >
              Read the Blog
            </a>
          </div>
        </div>
        <div className="glass-strong relative w-full max-w-md rounded-2xl p-8">
          <div className="absolute -top-10 right-6 h-24 w-24 rounded-full bg-accentBlue/25 blur-2xl" />
          <h2 className="font-heading text-xl">Current Focus</h2>
          <ul className="mt-6 space-y-4 text-sm text-white/70">
            <li>Security engineering &amp; GRC</li>
            <li>Linux systems &amp; identity</li>
            <li>Cloud / infrastructure security</li>
            <li>Privacy-by-design tooling</li>
            <li>Network measurement &amp; censorship research</li>
          </ul>
        </div>
      </div>
      <div className="relative flex justify-center pb-8">
        <div className="h-10 w-6 rounded-full border border-white/30 p-1">
          <div className="h-2 w-2 animate-float rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
