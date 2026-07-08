const goneExtensions = /\.(?:7z|bz2|sql|tar|tgz|gz|zst|zip)$/i;
const goneNames = new Set([
  '/.aws',
  '/.docker',
  '/.env',
  '/.git',
  '/admin',
  '/archive',
  '/backup',
  '/backup-db',
  '/backup-old',
  '/backup_daily',
  '/backup_full',
  '/build',
  '/client',
  '/config',
  '/configs',
  '/current',
  '/data',
]);

const isGoneProbe = (pathname: string) => {
  if (pathname.startsWith('/wp-content/')) return true;
  if (!goneExtensions.test(pathname)) return false;

  const withoutExtensions = pathname
    .replace(/(?:\.(?:7z|bz2|sql|tar|tgz|gz|zst|zip))+$/gi, '')
    .toLowerCase();

  return goneNames.has(withoutExtensions);
};

export const onRequest: PagesFunction = async ({ request, next }) => {
  const url = new URL(request.url);

  if (url.pathname === '/de' || url.pathname === '/de/') {
    return Response.redirect(`${url.origin}/`, 301);
  }

  if (isGoneProbe(url.pathname)) {
    return new Response('Gone', {
      status: 410,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    });
  }

  return next();
};
