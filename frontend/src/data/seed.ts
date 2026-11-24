import type { Service, Worker } from '../types';

export const services: Array<{
  name: Service;
  description: string;
  icon: 'baby' | 'sparkles' | 'wrench';
  tint: string;
}> = [
  {
    name: 'Gadri',
    description: 'Moun ki kapab ede fanmi yo ak swen timoun.',
    icon: 'baby',
    tint: 'bg-peach',
  },
  {
    name: 'Netwayaj',
    description: 'Sèvis netwayaj pou kay ak espas travay.',
    icon: 'sparkles',
    tint: 'bg-lilac',
  },
  {
    name: 'Antretyen',
    description: 'Ede kenbe kay, lakou ak espas yo an bon eta.',
    icon: 'wrench',
    tint: 'bg-sage',
  },
];

export const cities = [
  'Pòtoprens',
  'Petyonvil',
  'Delma',
  'Kafou',
  'Kap Ayisyen',
  'Jakmèl',
  'Okay',
  'Senmak',
];

// Entirely fictional profiles for UI demonstration. No identity or qualifications verified.
export const workers: Worker[] = [
  {
    id: 'nl-01', name: 'Marie-Louise J.', initials: 'MJ', service: 'Gadri',
    city: 'Petyonvil', experience: '4 lane', languages: ['Kreyòl', 'Fransè'],
    bio: 'Mwen renmen ede fanmi yo mete yon woutin ki kalm, òganize epi adapte ak bezwen timoun yo.',
    skills: ['Aktivite timoun', 'Woutin chak jou', 'Kominikasyon ak fanmi'],
    availability: 'Lendi – Vandredi', color: '#ECDCF7', featured: true,
  },
  {
    id: 'nl-02', name: 'Nadège P.', initials: 'NP', service: 'Netwayaj',
    city: 'Delma', experience: '3 lane', languages: ['Kreyòl'],
    bio: 'Mwen konsantre sou espas ki pwòp ak travay byen òganize selon bezwen kliyan yo.',
    skills: ['Netwayaj rezidansyèl', 'Òganizasyon espas', 'Antretyen regilye'],
    availability: 'Lendi – Samdi', color: '#DDECE8', featured: true,
  },
  {
    id: 'nl-03', name: 'Jean-Robert M.', initials: 'JM', service: 'Antretyen',
    city: 'Pòtoprens', experience: '5 lane', languages: ['Kreyòl', 'Fransè'],
    bio: 'Mwen disponib pou ede ak antretyen jeneral espas rezidansyèl yo.',
    skills: ['Antretyen lakou', 'Ti reparasyon', 'Netwayaj espas deyò'],
    availability: 'Selon randevou', color: '#FFE3CF', featured: true,
  },
  {
    id: 'nl-04', name: 'Roseline D.', initials: 'RD', service: 'Gadri',
    city: 'Kafou', experience: '2 lane', languages: ['Kreyòl'],
    bio: 'Mwen vle sipòte paran yo ak atansyon ak kominikasyon ki klè.',
    skills: ['Sipèvizyon timoun', 'Jwèt edikatif', 'Woutin fanmi'],
    availability: 'Lendi – Vandredi', color: '#FFE1E2',
  },
  {
    id: 'nl-05', name: 'Stevens L.', initials: 'SL', service: 'Antretyen',
    city: 'Kap Ayisyen', experience: '6 lane', languages: ['Kreyòl'],
    bio: 'Mwen pran swen espas andedan ak deyò pou kliyan ki bezwen asistans regilye.',
    skills: ['Jadinaj debaz', 'Antretyen lokal', 'Ti travay pratik'],
    availability: 'Lendi – Samdi', color: '#E4E7FC',
  },
  {
    id: 'nl-06', name: 'Fabienne C.', initials: 'FC', service: 'Netwayaj',
    city: 'Jakmèl', experience: '4 lane', languages: ['Kreyòl', 'Fransè'],
    bio: 'Mwen renmen ede kliyan jwenn yon espas ki fre ak byen òganize.',
    skills: ['Netwayaj pwofon', 'Antretyen biwo', 'Lave ak òganize'],
    availability: 'Selon randevou', color: '#F7E3D4',
  },
];
