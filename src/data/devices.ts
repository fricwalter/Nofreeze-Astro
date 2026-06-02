export interface Device {
  slug: string;
  name: string;
  icon: string; // emoji
  h1: string;
  title: string;
  description: string;
  intro: string;
  steps: string[];
  apps: string[];
  faq: { q: string; a: string }[];
}

export const DEVICES: Device[] = [
  {
    slug: 'iptv-for-firestick',
    name: 'Amazon Firestick',
    icon: '🔥',
    h1: 'IPTV für Firestick – Einrichtung ohne Buffering 2026',
    title: 'IPTV für Firestick 2026 | Einrichtung ohne Buffering',
    description:
      'IPTV für Amazon Firestick einrichten – Schritt-für-Schritt-Anleitung mit IPTV Smarters Pro & TiviMate. Bestes IPTV für Firestick ohne Buffering 2026.',
    intro:
      'Der Amazon Firestick ist eines der beliebtesten Geräte für IPTV. Mit Apps wie IPTV Smarters Pro oder TiviMate richten Sie NoFreeze IPTV in wenigen Minuten ein und streamen über 50.000 Kanäle in HD und 4K – ganz ohne Buffering.',
    steps: [
      'Firestick einschalten und mit dem Internet verbinden',
      'Unter Einstellungen → My Fire TV → Developer Options "Apps unbekannter Herkunft" aktivieren',
      'Die App "Downloader" aus dem Amazon App Store installieren',
      'IPTV Smarters Pro oder TiviMate über Downloader installieren',
      'Zugangsdaten von NoFreeze IPTV eingeben und Kanäle laden',
    ],
    apps: ['IPTV Smarters Pro', 'TiviMate', 'OTT Navigator'],
    faq: [
      {
        q: 'Warum buffert mein Firestick?',
        a: 'Buffering entsteht meist durch eine zu langsame oder instabile Verbindung. Nutzen Sie nach Möglichkeit ein LAN-Adapter, schließen Sie Hintergrund-Apps und wählen Sie für 4K mindestens 25 Mbit/s.',
      },
      {
        q: 'Welche App ist die beste für den Firestick?',
        a: 'IPTV Smarters Pro und TiviMate sind die beliebtesten Apps. TiviMate bietet eine besonders komfortable EPG-Oberfläche.',
      },
    ],
  },
  {
    slug: 'iptv-for-roku',
    name: 'Roku',
    icon: '📺',
    h1: 'IPTV für Roku – Streaming einrichten 2026',
    title: 'IPTV für Roku 2026 | IPTV auf Roku einrichten',
    description:
      'IPTV für Roku einrichten – Anleitung mit kompatiblen Playern für stabiles Streaming in HD und 4K. Bestes IPTV für Roku 2026.',
    intro:
      'Auch auf Roku-Geräten können Sie NoFreeze IPTV nutzen. Mit kompatiblen Playern streamen Sie Live-TV, Sport und VOD in stabiler Qualität auf Ihrem Fernseher.',
    steps: [
      'Roku-Gerät einschalten und mit dem Internet verbinden',
      'Im Roku Channel Store einen kompatiblen IPTV-Player suchen',
      'Player installieren und öffnen',
      'Zugangsdaten von NoFreeze IPTV eingeben',
      'Kanalliste laden und Streaming starten',
    ],
    apps: ['Smart IPTV', 'IPTV Smarters', 'M3U-kompatible Player'],
    faq: [
      {
        q: 'Funktioniert IPTV nativ auf Roku?',
        a: 'Roku unterstützt IPTV über kompatible Player-Apps. Bei älteren Geräten kann ein Firestick oder eine Android-Box flexibler sein.',
      },
      {
        q: 'Welche Auflösung ist möglich?',
        a: 'Je nach Roku-Modell und Internetverbindung sind HD und teilweise 4K möglich.',
      },
    ],
  },
  {
    slug: 'iptv-for-samsung-smart-tv',
    name: 'Samsung Smart TV',
    icon: '🖥️',
    h1: 'IPTV für Samsung Smart TV – Einrichtung 2026',
    title: 'IPTV für Samsung Smart TV 2026 | Einrichtung ohne Box',
    description:
      'IPTV für Samsung Smart TV einrichten – ohne zusätzliche Box, mit Smart IPTV & Tizen-Apps. Bestes IPTV für Samsung Smart TV 2026 in 4K.',
    intro:
      'Samsung Smart TVs mit Tizen-Betriebssystem unterstützen IPTV direkt über Apps wie Smart IPTV oder IBO Player – ganz ohne zusätzliche Box. So streamen Sie NoFreeze IPTV in HD und 4K direkt auf Ihrem Samsung-Fernseher.',
    steps: [
      'Samsung Smart TV mit dem Internet verbinden',
      'Im Samsung App Store einen IPTV-Player (z. B. Smart IPTV, IBO Player) installieren',
      'Die MAC-Adresse der App notieren, falls erforderlich',
      'Zugangsdaten bzw. M3U-Link von NoFreeze IPTV hinterlegen',
      'Kanalliste laden und Streaming starten',
    ],
    apps: ['Smart IPTV', 'IBO Player', 'Duplex IPTV'],
    faq: [
      {
        q: 'Brauche ich eine zusätzliche Box für meinen Samsung TV?',
        a: 'Nein, bei Tizen-Modellen genügt eine IPTV-App direkt auf dem Fernseher. Bei sehr alten Modellen kann ein Firestick sinnvoll sein.',
      },
      {
        q: 'Unterstützt Samsung 4K-IPTV?',
        a: 'Ja, aktuelle Samsung 4K-Modelle geben 4K-Streams wieder, sofern die Internetverbindung ausreicht.',
      },
    ],
  },
  {
    slug: 'iptv-apple-tv',
    name: 'Apple TV',
    icon: '🍎',
    h1: 'IPTV für Apple TV – Einrichtung mit Smarters & GSE 2026',
    title: 'IPTV für Apple TV 2026 | Einrichtung mit IPTV Smarters',
    description:
      'IPTV für Apple TV einrichten – Anleitung mit IPTV Smarters Pro & GSE Smart IPTV für 4K-Streaming. Bestes IPTV für Apple TV 2026.',
    intro:
      'Apple TV bietet dank tvOS eine besonders flüssige Oberfläche für IPTV. Mit Apps wie IPTV Smarters Pro oder GSE Smart IPTV genießen Sie NoFreeze IPTV in bester Bild- und Tonqualität.',
    steps: [
      'Apple TV einschalten und mit dem Internet verbinden',
      'Im App Store IPTV Smarters Pro oder GSE Smart IPTV installieren',
      'App öffnen und Zugangsdaten von NoFreeze IPTV eingeben',
      'Kanalliste und EPG laden',
      'Streaming in HD/4K starten',
    ],
    apps: ['IPTV Smarters Pro', 'GSE Smart IPTV', 'OTT Navigator'],
    faq: [
      {
        q: 'Welche App ist die beste für Apple TV?',
        a: 'IPTV Smarters Pro und GSE Smart IPTV sind die beliebtesten Apps für tvOS und unterstützen EPG sowie VOD.',
      },
      {
        q: 'Unterstützt Apple TV 4K-Streaming?',
        a: 'Ja, das Apple TV 4K gibt 4K-HDR-Inhalte bei ausreichender Bandbreite flüssig wieder.',
      },
    ],
  },
  {
    slug: 'iptv-android-tv-box',
    name: 'Android TV Box',
    icon: '🤖',
    h1: 'IPTV für Android TV Box – Einrichtung 2026',
    title: 'IPTV für Android TV Box 2026 | Einrichtung & beste Apps',
    description:
      'IPTV für Android TV Box einrichten – mit TiviMate, IPTV Smarters Pro & OTT Navigator. Bestes IPTV für Android TV Box 2026 in 4K.',
    intro:
      'Android TV Boxen sind extrem flexibel und ideal für IPTV. Sie installieren beliebte Apps direkt über den Play Store und streamen NoFreeze IPTV in HD und 4K mit komfortabler EPG-Steuerung.',
    steps: [
      'Android TV Box mit dem Internet verbinden',
      'Im Google Play Store TiviMate oder IPTV Smarters Pro installieren',
      'App öffnen und Zugangsdaten von NoFreeze IPTV eingeben',
      'EPG und Kanalliste laden',
      'Streaming starten und Favoriten anlegen',
    ],
    apps: ['TiviMate', 'IPTV Smarters Pro', 'OTT Navigator', 'IPTV Extreme'],
    faq: [
      {
        q: 'Welche Android-Box ist empfehlenswert?',
        a: 'Modelle mit aktueller Android-TV-Version und mindestens 2 GB RAM bieten flüssiges 4K-Streaming. Achten Sie auf eine gute WLAN- oder LAN-Verbindung.',
      },
      {
        q: 'Welche App eignet sich am besten?',
        a: 'TiviMate gilt als eine der komfortabelsten IPTV-Apps für Android TV, alternativ ist IPTV Smarters Pro sehr beliebt.',
      },
    ],
  },
  {
    slug: 'iptv-smarters-pro-setup',
    name: 'IPTV Smarters Pro',
    icon: '⚙️',
    h1: 'IPTV Smarters Pro Setup – Anleitung für Einsteiger 2026',
    title: 'IPTV Smarters Pro Setup 2026 | Einrichtung Schritt für Schritt',
    description:
      'IPTV Smarters Pro einrichten – Schritt-für-Schritt-Anleitung für Firestick, Android, Apple TV und PC. IPTV Smarters Pro Setup 2026.',
    intro:
      'IPTV Smarters Pro ist eine der beliebtesten IPTV-Apps und läuft auf nahezu allen Geräten. Diese Anleitung zeigt Einsteigern, wie sie NoFreeze IPTV in wenigen Minuten in IPTV Smarters Pro einrichten.',
    steps: [
      'IPTV Smarters Pro aus dem jeweiligen App Store installieren',
      'App öffnen und "Login mit Xtream Codes API" wählen',
      'Benutzername, Passwort und Server-URL von NoFreeze IPTV eingeben',
      'Auf "Add User" tippen und Kanalliste laden',
      'EPG abwarten und Streaming starten',
    ],
    apps: ['IPTV Smarters Pro'],
    faq: [
      {
        q: 'Auf welchen Geräten läuft IPTV Smarters Pro?',
        a: 'Die App läuft auf Firestick, Android, Android TV, iOS, Apple TV, Windows und macOS.',
      },
      {
        q: 'Was tun, wenn der Login nicht funktioniert?',
        a: 'Prüfen Sie Benutzername, Passwort und Server-URL auf Tippfehler. Bei Problemen hilft unser Support per WhatsApp weiter.',
      },
    ],
  },
  {
    slug: 'iptv-kodi-addon',
    name: 'Kodi',
    icon: '🧩',
    h1: 'IPTV Kodi Addon – Einrichtung mit PVR IPTV Simple 2026',
    title: 'IPTV Kodi Addon 2026 | Einrichtung mit PVR IPTV Simple Client',
    description:
      'IPTV in Kodi einrichten – Anleitung mit PVR IPTV Simple Client für M3U-Listen und EPG. IPTV Kodi Addon 2026.',
    intro:
      'Kodi ist eine flexible Open-Source-Mediacenter-Software. Mit dem PVR IPTV Simple Client integrieren Sie NoFreeze IPTV über Ihre M3U-Liste und EPG direkt in die Kodi-Oberfläche.',
    steps: [
      'Kodi öffnen und zu Einstellungen → Add-ons → PVR-Clients gehen',
      'PVR IPTV Simple Client auswählen und konfigurieren',
      'M3U-Playlist-URL von NoFreeze IPTV eintragen',
      'EPG-URL hinterlegen, falls vorhanden',
      'Kodi neu starten und Live-TV öffnen',
    ],
    apps: ['Kodi', 'PVR IPTV Simple Client'],
    faq: [
      {
        q: 'Welche Kodi-Version brauche ich?',
        a: 'Wir empfehlen eine aktuelle Kodi-Version (19 oder neuer) für beste Kompatibilität mit dem PVR IPTV Simple Client.',
      },
      {
        q: 'Wo finde ich meine M3U-URL?',
        a: 'Ihre persönliche M3U-URL erhalten Sie zusammen mit Ihren Zugangsdaten nach der Bestellung.',
      },
    ],
  },
  {
    slug: 'iptv-vlc-player',
    name: 'VLC Player',
    icon: '🔺',
    h1: 'IPTV mit VLC Player abspielen – Anleitung 2026',
    title: 'IPTV VLC Player 2026 | M3U-Liste in VLC abspielen',
    description:
      'IPTV mit VLC Player abspielen – M3U-Liste öffnen und Streaming testen auf Windows, Mac und Mobil. IPTV VLC Player Anleitung 2026.',
    intro:
      'Der VLC Player eignet sich hervorragend zum schnellen Testen Ihrer IPTV-Liste auf Windows, macOS, Android und iOS. Für den dauerhaften Gebrauch empfehlen wir spezialisierte Apps wie TiviMate oder IPTV Smarters Pro.',
    steps: [
      'VLC Player installieren und öffnen',
      'Menü "Medien" → "Netzwerkstream öffnen" wählen',
      'M3U-URL von NoFreeze IPTV einfügen',
      'Auf "Wiedergabe" klicken',
      'Für komfortable EPG-Nutzung zu TiviMate oder Smarters Pro wechseln',
    ],
    apps: ['VLC Media Player'],
    faq: [
      {
        q: 'Kann ich mit VLC EPG nutzen?',
        a: 'VLC zeigt kein vollständiges EPG. Zum reinen Testen ist VLC ideal, für den Alltag empfehlen wir dedizierte IPTV-Apps.',
      },
      {
        q: 'Funktioniert VLC auf dem Handy?',
        a: 'Ja, VLC ist für Android und iOS verfügbar und kann M3U-Streams abspielen.',
      },
    ],
  },
];
