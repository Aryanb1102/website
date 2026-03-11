interface SocialButtonsProps {
  size?: 'sm' | 'md';
  showLetterboxd?: boolean;
}

const buttonSizeClasses: Record<NonNullable<SocialButtonsProps['size']>, string> = {
  sm: 'h-10 w-10',
  md: 'h-12 w-12',
};

const iconSizeClasses: Record<NonNullable<SocialButtonsProps['size']>, string> = {
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
};

export default function SocialButtons({ size = 'md', showLetterboxd = false }: SocialButtonsProps) {
  const buttonSize = buttonSizeClasses[size];
  const iconSize = iconSizeClasses[size];

  return (
    <div className="flex items-center gap-3">
      <a
        href="https://github.com/Aryanb1102"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub profile"
        className={`glass inline-flex ${buttonSize} items-center justify-center rounded-full text-white/80 transition hover:text-white`}
      >
        <svg viewBox="0 0 24 24" className={iconSize} aria-hidden="true" fill="currentColor">
          <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 0 0-1.34-1.76c-1.09-.74.08-.72.08-.72a2.53 2.53 0 0 1 1.85 1.24 2.56 2.56 0 0 0 3.5 1 2.57 2.57 0 0 1 .77-1.61c-2.67-.3-5.47-1.34-5.47-5.95a4.66 4.66 0 0 1 1.24-3.24 4.31 4.31 0 0 1 .12-3.2s1.01-.32 3.31 1.24a11.39 11.39 0 0 1 6.03 0c2.3-1.56 3.31-1.24 3.31-1.24a4.31 4.31 0 0 1 .12 3.2 4.65 4.65 0 0 1 1.24 3.24c0 4.63-2.8 5.64-5.48 5.94a2.88 2.88 0 0 1 .82 2.23v3.3c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/aryan-bhandari-504b11230/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn profile"
        className={`glass inline-flex ${buttonSize} items-center justify-center rounded-full text-white/80 transition hover:text-white`}
      >
        <svg viewBox="0 0 24 24" className={iconSize} aria-hidden="true" fill="currentColor">
          <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5 2.5 2.5 0 0 0 4.98 3.5ZM3 9h4v12H3V9Zm7 0h3.84v1.71h.05c.53-1.01 1.83-2.08 3.77-2.08 4.03 0 4.77 2.65 4.77 6.09V21h-4v-5.54c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93V21h-4V9Z" />
        </svg>
      </a>
      {showLetterboxd && (
        <a
          href="https://letterboxd.com/martymcdrive/"
          target="_blank"
          rel="noreferrer"
          aria-label="Letterboxd profile"
          className={`glass inline-flex ${buttonSize} items-center justify-center rounded-full text-white/80 transition hover:text-white`}
        >
          <svg viewBox="0 0 24 24" className={iconSize} aria-hidden="true" fill="currentColor">
            <path d="M6.25 6.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm5.75 0a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm5.75 0a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z" />
          </svg>
        </a>
      )}
    </div>
  );
}
