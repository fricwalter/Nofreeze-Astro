# NoFreeze IPTV – nofreeze.pro

Internationale, SEO-fokussierte IPTV-Website auf Basis von **Astro** (statischer Output),
optimiert für **Cloudflare Pages** mit der Custom-Domain **nofreeze.pro**.

Hauptsprache ist **Deutsch**, mit einem optionalen Ein-Klick-Übersetzer (Google Translate).
Die Preise und Pakete sind **1:1** aus dem bestehenden Projekt (exyuiptv.org-Struktur) übernommen.

## Tech-Stack

- Astro 5 (output: `static`)
- `@astrojs/sitemap` für `sitemap-index.xml`
- Plain CSS Design-System (dark, premium streaming look)
- Keine Runtime-Abhängigkeiten / kein JS-Framework nötig

## Lokale Entwicklung

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # erzeugt dist/
npm run preview  # statische Vorschau von dist/
node scripts/check-links.mjs   # prüft interne Links (nach Build)
```

## Projektstruktur

```
.
├─ astro.config.mjs        # site=https://nofreeze.pro, sitemap, trailingSlash
├─ functions/              # Cloudflare Pages Functions
│  └─ api/contact.ts       # Kontaktformular → E-Mail via Resend
├─ src/
│  ├─ layouts/Layout.astro # SEO-Head, OG/Twitter, JSON-LD, Translator, Header/Footer
│  ├─ components/          # Hero, Pricing, FAQ, Breadcrumbs, RelatedLinks, CtaBand …
│  ├─ data/                # site.ts, pricing.ts, faq.ts, countries.ts, devices.ts
│  ├─ content/blog/        # 10 Blog-Artikel (Markdown, Content Collection)
│  └─ pages/               # alle Seiten + [slug].astro (Länder/Geräte) + blog/[...slug]
└─ public/                 # robots.txt, favicon, images
```

## Mail-Funktion (Resend)

Das Kontaktformular unter `/contact/` sendet per `functions/api/contact.ts` eine E-Mail über
[Resend](https://resend.com). Die Function läuft als Cloudflare Pages Function (Edge).

Benötigte Environment-Variablen im Pages-Projekt (Settings → Variables):

| Variable | Pflicht | Beschreibung |
|----------|:------:|--------------|
| `RESEND_API_KEY` | ✅ | Resend API-Key (als *Secret* hinterlegen) |
| `CONTACT_TO` | – | Empfängeradresse (Default `admirfric@gmail.com`) |
| `CONTACT_FROM` | – | Absender (Default `NoFreeze Kontakt <onboarding@resend.dev>`) |

> Sobald die Domain **nofreeze.pro** in Resend verifiziert ist, `CONTACT_FROM` auf
> z. B. `NoFreeze <noreply@nofreeze.pro>` und `CONTACT_TO` auf `support@nofreeze.pro` setzen.
> Ohne verifizierte Domain erlaubt Resend nur Versand über `onboarding@resend.dev` an die
> Account-eigene Adresse.

### Preise ändern
Alle Preise/Pakete liegen zentral in `src/data/pricing.ts`. **Nicht** an anderer Stelle
hartkodieren. WhatsApp-Nummer und Marke stehen in `src/data/site.ts`.

## Deployment – GitHub + Cloudflare Pages

Dieses Repo ist mit **Cloudflare Pages (Git-Integration)** verbunden: Jeder Push auf den
`main`-Branch löst automatisch einen Build + Deploy aus.

- **GitHub-Repo:** `Nofreeze-Astro`
- **Cloudflare Pages Projekt:** `Nofreeze-Astro`
- **Produktions-Domain:** `nofreeze.pro` (+ `www.nofreeze.pro`)

### Build-Einstellungen
| Einstellung | Wert |
|-------------|------|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (Repo-Root) |
| Production branch | `main` |
| Node version | 18+ (z. B. `NODE_VERSION=20`) |

### Automatische Deploys
Push auf `main` → Cloudflare baut und deployed automatisch. Pull Requests erzeugen
Preview-Deployments.

### Custom Domain nofreeze.pro – Checkliste
- [ ] In Cloudflare Pages → Projekt → **Custom domains** → `nofreeze.pro` hinzufügen
- [ ] `www.nofreeze.pro` hinzufügen und per Weiterleitung auf die Apex-Domain leiten
- [ ] DNS: Cloudflare legt die CNAME/Apex-Records automatisch an (Domain in Cloudflare verwaltet)
- [ ] SSL/TLS auf **Full** stellen, „Always Use HTTPS" aktivieren
- [ ] In `astro.config.mjs` ist `site: 'https://nofreeze.pro'` bereits gesetzt
- [ ] Nach Deploy: `https://nofreeze.pro/sitemap-index.xml` und `/robots.txt` prüfen
- [ ] Sitemap in der Google Search Console einreichen

## SEO-Features

- Genau **ein H1** pro Seite, Title, Meta-Description, Canonical (verifiziert)
- Open Graph + Twitter Cards
- JSON-LD: Organization, WebSite, Product/AggregateOffer, FAQPage, BreadcrumbList,
  BlogPosting, HowTo (Geräteseiten)
- Breadcrumbs auf allen Unterseiten
- Interne Verlinkung: jede Seite verweist auf 2–4+ relevante Seiten
- `sitemap-index.xml` enthält nur 200er-Canonical-Seiten (404 ausgeschlossen, `noindex`)
- `robots.txt` mit Sitemap-Verweis

## Hinweis

IPTV wird als **Technologie** beschrieben. Nutzer werden darauf hingewiesen, ausschließlich
ordnungsgemäß lizenzierte Inhalte und Dienste zu verwenden. Es werden keine geschützten
Senderlogos und keine erfundenen Bewertungen verwendet.
