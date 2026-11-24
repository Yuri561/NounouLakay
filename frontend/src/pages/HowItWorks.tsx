import { ArrowRight, ClipboardList, HeartHandshake, Search, ShieldCheck, Sparkles, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';

const familySteps = [
  { icon: Search, title: 'Eksplore sèvis yo', description: 'Chwazi gadri, netwayaj oswa antretyen, selon bezwen fanmi ou.' },
  { icon: UsersRound, title: 'Konpare pwofil yo', description: 'Gade enfòmasyon, zòn ak konpetans ki prezante sou chak pwofil.' },
  { icon: ClipboardList, title: 'Prepare demann ou', description: 'Ekri detay, orè ak kondisyon ki enpòtan pou ou.' },
];

const workerSteps = [
  { icon: HeartHandshake, title: 'Prezante tèt ou', description: 'Dekri kapasite ou, eksperyans ou ak sèvis ou kapab ofri.' },
  { icon: ShieldCheck, title: 'Referans ak verifikasyon', description: 'Nan pwochen faz yo, ajans lan ta dwe verifye referans ak kondisyon yo.' },
  { icon: Sparkles, title: 'Fòmasyon ak opòtinite', description: 'Vizyon an se ede moun prepare tèt yo epi jwenn plis chans travay.' },
];

export default function HowItWorks() {
  return (
    <>
      <section className="bg-lilac py-16 sm:py-20">
        <div className="container-app max-w-4xl text-center"><p className="eyebrow">Kijan li mache</p><h1 className="heading-xl mt-4">Senp pou fanmi. Pi aksesib pou travayè.</h1><p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted sm:text-base">NOUNOU LAKAY vle rann koneksyon ant bezwen ak opòtinite pi klè. Men fason eksperyans lan fèt nan pwototip sa a.</p></div>
      </section>
      <section className="section-pad"><div className="container-app"><p className="eyebrow">Pou fanmi yo</p><h2 className="heading-lg mt-3">Twa etap pou kòmanse.</h2><div className="mt-9 grid gap-5 md:grid-cols-3">{familySteps.map(({ icon: Icon, title, description }, index) => <Step key={title} icon={<Icon size={25} />} index={index} title={title} description={description} />)}</div><Link to="/demann" className="mt-8 inline-flex items-center gap-2 font-bold text-violet">Kreye demann demo <ArrowRight size={18} /></Link></div></section>
      <section className="section-pad bg-white"><div className="container-app"><p className="eyebrow">Pou kandida yo</p><h2 className="heading-lg mt-3">Nou vle kreye plis opòtinite.</h2><div className="mt-9 grid gap-5 md:grid-cols-3">{workerSteps.map(({ icon: Icon, title, description }, index) => (
            <Step
              key={title}
              icon={<Icon size={25} />}
              index={index}
              title={title}
              description={description}
            />
          ))}</div><Link to="/pou-travayè" className="mt-8 inline-flex items-center gap-2 font-bold text-violet">Ranpli aplikasyon demo <ArrowRight size={18} /></Link></div></section>
      <section className="bg-ink py-14 text-white"><div className="container-app max-w-3xl text-center"><h2 className="font-display text-2xl font-extrabold sm:text-3xl">Konfyans mande aksyon, pa sèlman pawòl.</h2><p className="mt-4 text-sm leading-7 text-white/70">Nan sèvis reyèl la, verifikasyon referans, règ sou pwoteksyon timoun, pwosesis plent ak kontwòl aksè pou done pèsonèl yo ta dwe priyorite. Tout sa poko aktif nan frontend sa a.</p></div></section>
    </>
  );
}

function Step({ icon, index, title, description }: { icon: React.ReactNode; index: number; title: string; description: string }) {
  return <div className="card p-7"><div className="flex items-start justify-between"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-lilac text-violet">{icon}</span><span className="font-display text-3xl font-extrabold text-[#DFD9EE]">0{index + 1}</span></div><h3 className="mt-7 font-display text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted">{description}</p></div>;
}
