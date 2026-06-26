// Central site configuration for nofreeze.pro
export const SITE = {
  name: 'NoFreeze',
  brand: 'NoFreeze IPTV',
  domain: 'nofreeze.pro',
  url: 'https://nofreeze.pro',
  email: 'support@nofreeze.pro',
  emailDisplay: 'support [at] nofreeze.pro',
  // WhatsApp ordering / support number (international format, no +)
  whatsapp: '4915251741280',
  defaultLocale: 'de',
  description:
    'NoFreeze IPTV – Premium IPTV Abo für Sport, Filme & Serien in HD, 4K und 8K. Über 50.000 Live-Kanäle und 70.000 VOD-Inhalte auf allen Geräten. Stabiles Streaming ohne Buffering.',
};

export function whatsappLink(text: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

// Primary navigation (top hub pages, German labels)
export const NAV_PRIMARY = [
  { label: 'Start', path: '/' },
  { label: 'Preise', path: '/iptv-subscription-plans/' },
  { label: 'Sport', path: '/iptv-sports/' },
  { label: 'Kanäle', path: '/iptv-channels/' },
  { label: 'Geräte', path: '/devices/' },
  { label: 'Länder', path: '/countries/' },
  { label: 'Blog', path: '/blog/' },
  { label: 'FAQ', path: '/faq/' },
  { label: 'Kontakt', path: '/contact/' },
];

// Footer link groups
export const FOOTER_GROUPS: { title: string; links: { label: string; path: string }[] }[] = [
  {
    title: 'IPTV Services',
    links: [
      { label: 'Bester IPTV Service', path: '/best-iptv-service/' },
      { label: 'IPTV Abo kaufen', path: '/buy-iptv-subscription/' },
      { label: 'IPTV Abo Pakete', path: '/iptv-subscription-plans/' },
      { label: 'Günstiges IPTV', path: '/cheap-iptv/' },
      { label: '4K Streaming', path: '/iptv-4k-streaming/' },
    ],
  },
  {
    title: 'Inhalte',
    links: [
      { label: 'Sport & NFL', path: '/iptv-sports/' },
      { label: 'TV-Kanäle', path: '/iptv-channels/' },
      { label: 'Filme & Serien (VOD)', path: '/iptv-movies-vod/' },
      { label: 'Blog', path: '/blog/' },
    ],
  },
  {
    title: 'Geräte',
    links: [
      { label: 'Firestick', path: '/iptv-for-firestick/' },
      { label: 'Samsung Smart TV', path: '/iptv-for-samsung-smart-tv/' },
      { label: 'Apple TV', path: '/iptv-apple-tv/' },
      { label: 'Alle Geräte', path: '/devices/' },
    ],
  },
  {
    title: 'Länder',
    links: [
      { label: 'IPTV USA', path: '/iptv-usa/' },
      { label: 'IPTV UK', path: '/iptv-uk/' },
      { label: 'IPTV Deutschland', path: '/iptv-germany/' },
      { label: 'Alle Länder', path: '/countries/' },
    ],
  },
  {
    title: 'Hilfe & Recht',
    links: [
      { label: 'Einrichtungsanleitung', path: '/setup-guide/' },
      { label: 'Kontakt', path: '/contact/' },
      { label: 'FAQ', path: '/faq/' },
      { label: 'Datenschutz', path: '/privacy-policy/' },
      { label: 'AGB', path: '/terms-of-service/' },
    ],
  },
];
