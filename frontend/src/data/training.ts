import type { Service } from '../types';

export interface Lesson {
  id: string;
  service: Service | 'Tout moun';
  title: string;
  duration: string;
  summary: string;
  steps: string[];
}

export const lessons: Lesson[] = [
  {
    id: 'communication',
    service: 'Tout moun',
    title: 'Bon kominikasyon ak fanmi',
    duration: '8 min',
    summary: 'Kijan pou klarifye atant, orè ak responsablite.',
    steps: [
      'Mande fanmi an ekri sa yo atann nan travay la.',
      'Konfime orè, peman ak kondisyon anvan premye jou a.',
      'Pale ak respè epi rapòte pwoblèm byen bonè.',
    ],
  },
  {
    id: 'child-safety',
    service: 'Gadri',
    title: 'Sekirite timoun nan kay',
    duration: '12 min',
    summary: 'Idantifye danje epi prepare pou sitiyasyon ijan.',
    steps: [
      'Konfime kontak ijans ak otorizasyon paran an.',
      'Pa janm kite timoun piti poukont yo.',
      'Kenbe medikaman ak pwodwi netwayaj lwen timoun.',
    ],
  },
  {
    id: 'routine',
    service: 'Gadri',
    title: 'Yon bon woutin pou timoun',
    duration: '10 min',
    summary: 'Manje, repo, aktivite ak kominikasyon ak paran.',
    steps: [
      'Swiv enstriksyon paran yo pou manje ak repo.',
      'Chwazi aktivite ki adapte ak laj timoun nan.',
      'Fè paran yo konnen kijan jounen an pase.',
    ],
  },
  {
    id: 'cleaning',
    service: 'Netwayaj',
    title: 'Netwayaj avèk prekosyon',
    duration: '9 min',
    summary: 'Pwodwi, materyèl ak bon pratik ijyèn.',
    steps: [
      'Li etikèt pwodwi netwayaj yo anvan itilize yo.',
      'Pa melanje klowòks ak lòt pwodwi chimik.',
      'Mande kliyan an ki sifas ki mande swen espesyal.',
    ],
  },
  {
    id: 'maintenance',
    service: 'Antretyen',
    title: 'Antretyen san pran risk',
    duration: '10 min',
    summary: 'Preparasyon zouti, limit konpetans ak sekirite.',
    steps: [
      'Verifye zouti yo avan kòmanse travay.',
      'Pa fè travay elektrik oswa lòt travay riske san kalifikasyon.',
      'Rapòte danje ak materyèl ki domaje yo.',
    ],
  },
  {
    id: 'privacy',
    service: 'Tout moun',
    title: 'Konfidansyalite ak respè',
    duration: '6 min',
    summary: 'Respekte vi prive fanmi yo ak enfòmasyon pèsonèl.',
    steps: [
      'Pa pataje foto kay oswa timoun san otorizasyon.',
      'Kenbe nimewo ak enfòmasyon fanmi yo konfidansyèl.',
      'Respekte règ kay la ak limit pwofesyonèl yo.',
    ],
  },
];
