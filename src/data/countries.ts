export interface Country {
  slug: string; // e.g. iptv-usa
  name: string; // display
  flag: string; // emoji
  h1: string;
  title: string;
  description: string;
  intro: string;
  highlights: string[];
  faq: { q: string; a: string }[];
  region?: boolean; // city/region rather than country
}

export const COUNTRIES: Country[] = [
  {
    slug: 'iptv-usa',
    name: 'USA',
    flag: '🇺🇸',
    h1: 'IPTV USA – Bester IPTV Service für die Vereinigten Staaten 2026',
    title: 'IPTV USA 2026 | Bester IPTV Service mit US-Kanälen & NFL',
    description:
      'IPTV USA mit über 50.000 Kanälen, US-Sport, NFL, lokalen Nachrichten und 4K-Streaming. Bester IPTV Service USA 2026 für Firestick, Smart TV und Apple TV.',
    intro:
      'NoFreeze IPTV bringt Ihnen das komplette US-Fernsehen nach Hause: lokale Networks wie ABC, NBC, CBS und FOX, Premium-Sport rund um NFL, NBA, MLB und NHL sowie tausende internationale Kanäle. Ideal für Sportfans, Expats und alle, die in den USA stabiles Streaming ohne Buffering suchen.',
    highlights: [
      'US-Networks, lokale Nachrichten und Premium-Sender',
      'NFL, NBA, MLB, NHL und PPV-Events live',
      'Internationale Kanäle für Latino- und Arabisch-sprachige Zuschauer',
      '4K/HDR-Streaming auf Firestick, Roku, Apple TV und Smart TV',
    ],
    faq: [
      {
        q: 'Welche US-Kanäle sind enthalten?',
        a: 'Sie erhalten Zugriff auf große US-Networks, Nachrichten-, Sport-, Film- und Kinderkanäle sowie tausende internationale Sender. Eine vollständige Übersicht zeigt Ihnen unser Support per WhatsApp.',
      },
      {
        q: 'Ist NoFreeze IPTV gut für NFL und US-Sport?',
        a: 'Ja, US-Sport inklusive NFL-Spielen, NBA, MLB und PPV-Events gehört zu den meistgenutzten Inhalten. Für ruckelfreies Streaming empfehlen wir mindestens 25 Mbit/s.',
      },
    ],
  },
  {
    slug: 'iptv-uk',
    name: 'UK',
    flag: '🇬🇧',
    h1: 'IPTV UK – Bester IPTV Service für Großbritannien 2026',
    title: 'IPTV UK 2026 | Bester IPTV Service mit Premier League & Sky',
    description:
      'IPTV UK mit britischen Sendern, Premier League, Sport und 4K-Streaming. Bester IPTV Service UK 2026 für Firestick, Smart TV und Apple TV.',
    intro:
      'Mit NoFreeze IPTV genießen Sie britisches Fernsehen in Bestqualität: BBC, ITV, Channel 4, Sky-Sender, Premier-League-Action und tausende internationale Kanäle. Perfekt für Fußballfans und Haushalte in ganz Großbritannien.',
    highlights: [
      'Britische Free-TV- und Pay-TV-Sender',
      'Premier League, EFL, Champions League und Cricket',
      'Filme, Serien und Dokumentationen als VOD',
      '4K-Streaming auf allen gängigen Geräten',
    ],
    faq: [
      {
        q: 'Kann ich die Premier League schauen?',
        a: 'Fußball gehört zu den beliebtesten Inhalten unserer UK-Nutzer. Für ein stabiles HD/4K-Erlebnis empfehlen wir eine schnelle, stabile Internetverbindung.',
      },
      {
        q: 'Funktioniert IPTV mit dem Firestick in UK?',
        a: 'Ja, der Amazon Firestick ist eines der beliebtesten Geräte. Unsere Einrichtungsanleitung zeigt die Installation in wenigen Minuten.',
      },
    ],
  },
  {
    slug: 'iptv-canada',
    name: 'Kanada',
    flag: '🇨🇦',
    h1: 'IPTV Kanada – Günstiger IPTV Service für Kanada 2026',
    title: 'IPTV Kanada 2026 | Günstiger IPTV Service mit Sport & TV',
    description:
      'IPTV Kanada mit kanadischen und internationalen Kanälen, Sport, deutschen Sendern und 4K. Günstiges IPTV Kanada 2026 für Firestick, Smart TV und Apple TV.',
    intro:
      'NoFreeze IPTV verbindet Kanada mit der Welt: kanadische Networks, NHL und internationale Sportarten, internationale Kanäle inklusive deutscher Sender für Expats sowie eine große VOD-Bibliothek – alles in stabiler 4K-Qualität.',
    highlights: [
      'Kanadische Networks und lokale Sender',
      'NHL, NBA und internationaler Sport',
      'Deutsche und internationale Kanäle für Expats',
      'Günstige Pakete mit 4K-Streaming',
    ],
    faq: [
      {
        q: 'Gibt es deutsche Kanäle für Kanada?',
        a: 'Ja, internationale Pakete enthalten deutsche und weitere europäische Sender – ideal für Expats in Kanada.',
      },
      {
        q: 'Wie günstig ist IPTV in Kanada?',
        a: 'Unsere Pakete starten bei 14,99 € pro Monat, das 12-Monats-Paket entspricht nur 7,00 € pro Monat.',
      },
    ],
  },
  {
    slug: 'iptv-australia',
    name: 'Australien',
    flag: '🇦🇺',
    h1: 'IPTV Australien – Bester IPTV Service für Australien 2026',
    title: 'IPTV Australien 2026 | Bester IPTV Service mit Sport & TV',
    description:
      'IPTV Australien mit lokalen Sendern, Sport, internationalen Kanälen und 4K-Streaming. Bester IPTV Service Australien 2026 für Firestick und Smart TV.',
    intro:
      'NoFreeze IPTV liefert australisches und internationales Fernsehen in Bestqualität: lokale Networks, AFL, NRL, Cricket und internationale Sportarten sowie tausende Kanäle für Expats – stabil und ruckelfrei.',
    highlights: [
      'Australische Free-TV- und Sportsender',
      'AFL, NRL, Cricket und internationaler Sport',
      'Internationale Kanäle für Expats',
      '4K-Streaming auf allen Geräten',
    ],
    faq: [
      {
        q: 'Funktioniert IPTV trotz der Zeitzonen-Unterschiede?',
        a: 'Ja, Live-TV und eine umfangreiche VOD-Bibliothek stehen rund um die Uhr zur Verfügung, sodass Sie Inhalte jederzeit nachholen können.',
      },
      {
        q: 'Welche Internetgeschwindigkeit brauche ich?',
        a: 'Für HD empfehlen wir mindestens 15 Mbit/s, für 4K mindestens 25 Mbit/s.',
      },
    ],
  },
  {
    slug: 'iptv-germany',
    name: 'Deutschland',
    flag: '🇩🇪',
    h1: 'Bestes IPTV Deutschland 2026 – Deutscher IPTV Service',
    title: 'Bestes IPTV Deutschland 2026 | Deutscher IPTV Service & Sport',
    description:
      'Bestes IPTV Deutschland 2026 mit deutschen Sendern, Bundesliga, Filmen und 4K-Streaming. Stabiler IPTV Service für Firestick, Smart TV und Apple TV.',
    intro:
      'NoFreeze IPTV bietet das komplette deutsche Fernsehen: öffentlich-rechtliche und private Sender, Bundesliga und internationaler Sport, eine große Auswahl an Filmen und Serien sowie internationale Kanäle – in stabiler HD- und 4K-Qualität.',
    highlights: [
      'Deutsche Free-TV- und Pay-TV-Sender',
      'Bundesliga, Champions League und internationaler Sport',
      'Filme und Serien auf Deutsch als VOD',
      '4K-Streaming auf Smart TV, Firestick und Apple TV',
    ],
    faq: [
      {
        q: 'Sind deutsche Sender in HD verfügbar?',
        a: 'Ja, die meisten deutschen Sender stehen in HD und teilweise in 4K zur Verfügung.',
      },
      {
        q: 'Kann ich die Bundesliga schauen?',
        a: 'Sport inklusive Bundesliga gehört zu den beliebtesten Inhalten. Für stabiles Streaming empfehlen wir eine schnelle Verbindung.',
      },
    ],
  },
  {
    slug: 'iptv-france',
    name: 'Frankreich',
    flag: '🇫🇷',
    h1: 'IPTV Frankreich – Abonnement IPTV France 2026',
    title: 'IPTV Frankreich 2026 | Bester IPTV Service mit Sport & TV',
    description:
      'IPTV Frankreich mit französischen Sendern, Ligue 1, Filmen und 4K-Streaming. Bestes IPTV Abonnement Frankreich 2026 für Firestick und Smart TV.',
    intro:
      'NoFreeze IPTV bringt das französische Fernsehen in Ihr Wohnzimmer: TF1, France Télévisions, Canal+, beIN Sports, RMC und mehr, dazu Ligue 1 und internationale Sportarten sowie eine umfangreiche VOD-Bibliothek.',
    highlights: [
      'Französische Sender wie TF1, France 2, Canal+, beIN Sports, RMC',
      'Ligue 1, Champions League und internationaler Sport',
      'Filme und Serien auf Französisch',
      '4K-Streaming auf allen Geräten',
    ],
    faq: [
      {
        q: 'Welche französischen Sender sind enthalten?',
        a: 'Beliebte Sender wie TF1, France 2/3, Canal+, beIN Sports, RMC Sport und Arte gehören zum Angebot. Details erhalten Sie über WhatsApp.',
      },
      {
        q: 'Ist das Abo auch für Expats geeignet?',
        a: 'Ja, internationale Pakete kombinieren französische und weitere internationale Sender – ideal für Französisch-sprachige Zuschauer im Ausland.',
      },
    ],
  },
  {
    slug: 'iptv-new-york',
    name: 'New York',
    flag: '🗽',
    region: true,
    h1: 'IPTV New York – IPTV Service für New York 2026',
    title: 'IPTV New York 2026 | IPTV Service mit lokalen Kanälen & Sport',
    description:
      'IPTV New York mit lokalen Sendern, NFL, NBA, internationalen Kanälen und 4K. Bester IPTV Service New York 2026 für Firestick und Smart TV.',
    intro:
      'NoFreeze IPTV liefert New Yorker Haushalten lokale Networks, NFL- und NBA-Action sowie tausende internationale Kanäle – perfekt für die vielfältige Bevölkerung der Stadt und stabiles 4K-Streaming.',
    highlights: [
      'Lokale New Yorker Networks und Nachrichten',
      'NFL, NBA (Giants, Jets, Knicks) und PPV-Events',
      'Internationale Kanäle für eine vielfältige Stadt',
      '4K-Streaming ohne Buffering',
    ],
    faq: [
      {
        q: 'Bekomme ich lokale New Yorker Sender?',
        a: 'Ja, lokale US-Networks und Nachrichten sind Teil des US-Angebots. Eine genaue Senderliste sendet Ihnen unser Support.',
      },
      {
        q: 'Kann ich Spiele der New Yorker Teams sehen?',
        a: 'US-Sport inklusive NFL und NBA gehört zu den beliebtesten Inhalten. Für 4K empfehlen wir mindestens 25 Mbit/s.',
      },
    ],
  },
  {
    slug: 'iptv-texas',
    name: 'Texas',
    flag: '🤠',
    region: true,
    h1: 'IPTV Texas – IPTV Provider für Texas 2026',
    title: 'IPTV Texas 2026 | IPTV Provider mit lokalen Kanälen & NFL',
    description:
      'IPTV Texas mit lokalen Sendern, NFL, College-Football, internationalen Kanälen und 4K. Bester IPTV Provider Texas 2026 für Firestick und Smart TV.',
    intro:
      'NoFreeze IPTV ist Ihr IPTV-Provider für Texas: lokale Networks, NFL und College-Football, Latino-Kanäle und tausende internationale Sender – stabil, günstig und in 4K.',
    highlights: [
      'Lokale texanische Networks und Nachrichten',
      'NFL (Cowboys, Texans) und College-Football',
      'Latino- und internationale Kanäle',
      '4K-Streaming auf allen Geräten',
    ],
    faq: [
      {
        q: 'Gibt es Latino-Kanäle für Texas?',
        a: 'Ja, internationale Pakete enthalten spanischsprachige und Latino-Kanäle – passend für die texanische Bevölkerung.',
      },
      {
        q: 'Kann ich College-Football schauen?',
        a: 'US-Sport inklusive College-Football gehört zum Angebot. Für stabiles Streaming empfehlen wir eine schnelle Verbindung.',
      },
    ],
  },
  {
    slug: 'iptv-toronto',
    name: 'Toronto',
    flag: '🍁',
    region: true,
    h1: 'IPTV Toronto – IPTV Service für Toronto 2026',
    title: 'IPTV Toronto 2026 | IPTV Service mit Sport & internationalen TV',
    description:
      'IPTV Toronto mit kanadischen Sendern, NHL, NBA, deutschen und internationalen Kanälen sowie 4K. Bester IPTV Service Toronto 2026 für Firestick und Smart TV.',
    intro:
      'NoFreeze IPTV verbindet Toronto mit Sport und internationalem Fernsehen: kanadische Networks, Maple Leafs und Raptors, deutsche und internationale Kanäle für Expats sowie eine große VOD-Bibliothek in 4K.',
    highlights: [
      'Kanadische Networks und lokale Sender',
      'NHL (Maple Leafs), NBA (Raptors) und mehr',
      'Deutsche und internationale Kanäle für Expats',
      'Günstige Pakete mit 4K-Streaming',
    ],
    faq: [
      {
        q: 'Gibt es internationale Kanäle für Toronto?',
        a: 'Ja, Toronto ist sehr international – unsere Pakete enthalten europäische, deutsche und weitere internationale Sender.',
      },
      {
        q: 'Welche Sportarten kann ich sehen?',
        a: 'NHL, NBA und internationaler Sport gehören zu den beliebtesten Inhalten unserer Nutzer in Toronto.',
      },
    ],
  },
];
