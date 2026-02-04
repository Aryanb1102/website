import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sent');
  };

  return (
    <form onSubmit={onSubmit} className="glass-strong rounded-2xl p-8">
      <div className="grid gap-6">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm text-white/70">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-accentBlue/60 focus:ring-2 focus:ring-accentBlue/30"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm text-white/70">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-accentBlue/60 focus:ring-2 focus:ring-accentBlue/30"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm text-white/70">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-accentBlue/60 focus:ring-2 focus:ring-accentBlue/30"
          />
        </div>
        <button
          type="submit"
          className="rounded-xl bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/20"
        >
          {status === 'sent' ? 'Message queued' : 'Send message'}
        </button>
        {status === 'sent' && (
          <p className="text-sm text-white/60">
            Thanks for reaching out. This demo form does not send email, but it records your intent.
          </p>
        )}
      </div>
    </form>
  );
}
