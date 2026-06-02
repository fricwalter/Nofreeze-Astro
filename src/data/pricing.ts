// Pricing copied 1:1 from the existing project (exyuiptv.org structure).
// Prices, durations and package logic MUST NOT be changed.
export interface Plan {
  duration: string; // German label
  months: number;
  price: string; // EUR, exact
  cartId: string;
  planLabel: string;
  popular?: boolean;
  savings?: string;
  perMonth?: string;
  whatsappText: string;
}

export const PLANS: Plan[] = [
  {
    duration: '1 Monat',
    months: 1,
    price: '14.99',
    cartId: '580',
    planLabel: 'Starter',
    whatsappText:
      'Hallo, ich möchte das 1-Monats-Paket (14,99 €) bestellen. Bitte senden Sie mir die Zahlungsdetails.',
  },
  {
    duration: '3 Monate',
    months: 3,
    price: '39.99',
    cartId: '582',
    popular: true,
    planLabel: 'Standard',
    whatsappText:
      'Hallo, ich möchte das 3-Monats-Paket (39,99 €) bestellen. Bitte senden Sie mir die Zahlungsdetails.',
  },
  {
    duration: '6 Monate',
    months: 6,
    price: '59.99',
    cartId: '585',
    planLabel: 'Premium',
    whatsappText:
      'Hallo, ich möchte das 6-Monats-Paket (59,99 €) bestellen. Bitte senden Sie mir die Zahlungsdetails.',
  },
  {
    duration: '12 Monate',
    months: 12,
    price: '83.99',
    cartId: '587',
    savings: '50% sparen',
    planLabel: 'Pro Annual',
    perMonth: 'nur 7,00 €/Monat',
    whatsappText:
      'Hallo, ich möchte das 12-Monats-Paket (83,99 €) bestellen. Bitte senden Sie mir die Zahlungsdetails.',
  },
];

export const PLAN_FEATURES: string[] = [
  'HD / FHD / 4K / 8K Qualität',
  '+50.000 Live- & Sportkanäle',
  '+70.000 Filme & Serien (VOD)',
  'Technischer Support 7 Tage/Woche',
  '30 Tage Geld-zurück-Garantie',
];
