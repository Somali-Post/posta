import { siteConfig } from '@/lib/site';

const iconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  x: XIcon,
  tiktok: TikTokIcon,
};

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {siteConfig.socialLinks.map((link) => {
        const Icon = iconMap[link.key];

        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/20 transition hover:text-gold-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 8.6V7.1c0-.7.5-1.1 1.2-1.1h1.7V3.2c-.8-.1-1.7-.2-2.5-.2-2.6 0-4.3 1.6-4.3 4.5v1.1H7.3v3.1h2.8V21h3.4v-9.3h2.8l.5-3.1H14Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="16.8" cy="7.2" r="1" fill="currentColor" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="m13.8 10.5 6.9-7.5h-1.8l-5.9 6.4L8.2 3H3l7.3 9.7L3 21h1.8l6.4-7 5.2 7h5.2l-7.8-10.5Zm-2.1 2.3-.8-1L5 4.4h2.4l4.6 5.9.8 1 6.2 8.2h-2.4l-4.9-6.7Z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.8 3h3.1c.2 1.4 1 2.7 2.1 3.5.7.5 1.5.8 2.3.9v3.1a7.3 7.3 0 0 1-4.2-1.3v5.9A6 6 0 1 1 12 9.2c.4 0 .7 0 1.1.1v3.2a3 3 0 1 0 2.1 2.9V3Z" />
    </svg>
  );
}
