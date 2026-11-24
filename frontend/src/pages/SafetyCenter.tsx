import { AlertTriangle, CheckCircle2, HeartHandshake, LockKeyhole, ShieldAlert, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const checklists = [
  {
    title: 'Anvan ou chwazi yon travayè',
    icon: UserCheck,
    items: [
      'Verifye pyès idantite moun nan atravè yon pwosesis serye.',
      'Pale ak referans ki ka konfime eksperyans moun nan.',
      'Fè yon entèvyou epi diskite sou orè ak responsablite yo.',
      'Pou gadri, mande enfòmasyon sou premye swen ak eksperyans ak timoun.',
    ],
  },
  {
    title: 'Lè moun nan kòmanse travay',
    icon: HeartHandshake,
    items: [
      'Ekri kondisyon travay yo, responsablite yo ak peman an.',
      'Pataje yon plan klè pou ijans ak nimewo kontak enpòtan.',
      'Eksplike règ kay la ak bezwen timoun yo.',
      'Evalye travay la epi kominike avèk respè.',
    ],
  },
  {
    title: 'Pou pwoteje enfòmasyon ou',
    icon: LockKeyhole,
    items: [
      'Pa mete done pèsonèl sansib nan demonstrasyon sa a.',
      'Pa pataje modpas, dokiman idantite oswa dosye timoun ak moun ou pa verifye.',
      'Sonje pwofil demonstrasyon yo fiktif.',
      'Pa konsidere yon ekran oswa badj kòm prèv yon moun verifye.',
    ],
  },
];

export default function SafetyCenter() {
  return (
    <div className="section-pad">
      <div className="container-app space-y-10">
        <div className="rounded-[34px] bg-[#332B68] p-8 text-white sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold"><ShieldAlert size={17} /> Konfyans ak sekirite</span>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-extrabold sm:text-5xl">Swen timoun mande <span className="text-[#F4B7A7]">plis prekosyon.</span></h1>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-white/75">Nou vle ke fanmi yo konprann etap ki enpòtan pou chwazi yon moun ki kapab travay lakay yo. Sit sa a se yon demo; li pa fè okenn verifikasyon reyèl.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {checklists.map(({ title, icon: Icon, items }) => (
            <section className="card p-7" key={title}>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-lilac text-violet"><Icon size={25} /></span>
              <h2 className="mt-5 font-display text-xl font-extrabold">{title}</h2>
              <ul className="mt-5 space-y-4">{items.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted"><CheckCircle2 size={17} className="mt-1 shrink-0 text-[#488B69]" />{item}</li>)}</ul>
            </section>
          ))}
        </div>
        <div className="flex items-start gap-4 rounded-3xl border border-coral/20 bg-peach p-6 sm:p-8">
          <AlertTriangle size={25} className="mt-1 shrink-0 text-coral" />
          <div><h3 className="font-display text-lg font-extrabold">Limit demonstrasyon an</h3><p className="mt-2 text-sm leading-7">Pa gen kont verifye, sistèm sekirite timoun, kontwòl aksè, sèvis ijans, asirans, ni plasman aktif. Si w bezwen asistans imedya pou yon timoun, sèvi ak sèvis ijans lokal ki disponib; pa itilize fòm demo sa a.</p><Link className="mt-4 inline-block text-sm font-bold text-violet underline" to="/kesyon">Li kesyon ki poze souvan</Link></div>
        </div>
      </div>
    </div>
  );
}
