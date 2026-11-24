import { ArrowRight, CircleHelp, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const stages = [
  {
    icon: HeartHandshake,
    title: 'Pou fanmi yo',
    description: 'Dekouvri pwofil ak sèvis yo, prepare bezwen ou epi konpare opsyon san angajman nan demonstrasyon an.',
    note: 'Pa gen frè aktyèl nan demo a',
  },
  {
    icon: Sparkles,
    title: 'Pou kandida yo',
    description: 'Dekouvri opòtinite ki ta ka egziste, prepare aplikasyon ak swiv pwogrè nan ti leson entwodiksyon yo.',
    note: 'Pa gen peman pou aplikasyon demo',
  },
  {
    icon: ShieldCheck,
    title: 'Pou ajans lan',
    description: 'Yon modèl komisyon ka soutni rekritman ak operasyon ajans lan, men règ ak pri yo poko valide.',
    note: 'Komisyon reyèl poko fikse',
  },
];

export default function Pricing() {
  return (
    <div className="section-pad">
      <div className="container-app">
        <div className="mx-auto max-w-[730px] text-center">
          <span className="eyebrow">Kijan sèvis la ka mache</span>
          <h1 className="heading-xl mt-4">Yon modèl ki chita sou <span className="text-violet">transparans.</span></h1>
          <p className="mt-5 text-base leading-8 text-muted">NOUNOU LAKAY prevwa yon modèl komisyon. Depi pa gen tarif oswa règleman ki konfime, nou pa envante pri sou sit la.</p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {stages.map(({ icon: Icon, title, description, note }) => (
            <article className="card flex flex-col p-7" key={title}>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-lilac text-violet"><Icon size={26} /></span>
              <h2 className="mt-6 font-display text-2xl font-extrabold">{title}</h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted">{description}</p>
              <p className="mt-7 rounded-xl bg-cream px-4 py-3 text-xs font-bold text-violet">{note}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#332B68] p-8 text-white sm:flex-row sm:items-center sm:p-10">
          <div><h2 className="flex items-center gap-2 font-display text-2xl font-extrabold"><CircleHelp size={25} /> Kisa k ap vini apre?</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">Anvan nenpòt operasyon reyèl, ajans lan ap bezwen defini kontra, komisyon, règleman anilasyon ak pwosedi pou pwoteje timoun ak enfòmasyon moun.</p></div>
          <Link to="/kijan-li-mache" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-violet">Kijan li mache <ArrowRight size={17} /></Link>
        </div>
      </div>
    </div>
  );
}
