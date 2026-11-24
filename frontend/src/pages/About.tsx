import { ArrowRight, Heart, HeartHandshake, ShieldCheck, Sprout, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#F7EFF7] py-20 sm:py-28"><div className="container-app max-w-4xl text-center"><span className="eyebrow">Sou NOUNOU LAKAY</span><h1 className="heading-xl mt-4">Yon lide senp. <span className="text-violet">Yon misyon imen.</span></h1><p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted">Nou vle ede fanmi ann Ayiti jwenn sipò yo bezwen epi kreye nouvo opòtinite pou moun ki vle travay nan gadri, netwayaj ak antretyen.</p></div></section>
      <section className="section-pad"><div className="container-app grid items-center gap-12 lg:grid-cols-2"><div className="rounded-[35px] bg-lilac p-10"><div className="grid h-20 w-20 place-items-center rounded-3xl bg-white text-violet"><HeartHandshake size={39} /></div><p className="mt-10 font-display text-3xl font-extrabold leading-tight">Bonjan swen pou pitit ou, plis opòtinite pou moun yo.</p><p className="mt-6 text-sm leading-8 text-muted">Slogan sa a se nannan pwojè a: ede fanmi yo pandan n ap bay travayè yo plis chans.</p></div><div><p className="eyebrow">Pwoblèm nou vle rezoud</p><h2 className="heading-lg mt-4">Gen moun k ap chèche èd. Gen lòt k ap chèche travay.</h2><p className="mt-6 text-sm leading-8 text-muted sm:text-base">Anpil fanmi gen difikilte pou jwenn moun serye pou okipe timoun, netwaye oswa antreteni espas yo. An menm tan, anpil moun ki ta renmen travay pa jwenn ase opòtinite.</p><p className="mt-4 text-sm leading-8 text-muted sm:text-base">NOUNOU LAKAY vle sèvi kòm yon pon dijital ant de gwoup sa yo, ak yon vizyon kote referans, fòmasyon ak responsabilite gen plas yo.</p></div></div></section>
      <section className="section-pad bg-white"><div className="container-app"><p className="eyebrow">Valè nou</p><h2 className="heading-lg mt-4">Plis pase yon sit entènèt.</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{[
        { icon: Heart, title: 'Swen', text: 'Mete bezwen fanmi ak byennèt timoun yo an premye.' },
        { icon: UsersRound, title: 'Opòtinite', text: 'Bay moun ki gen eksperyans ak moun ki vle aprann yon espas.' },
        { icon: ShieldCheck, title: 'Responsablite', text: 'Prepare yon sèvis ki pran referans, sekirite ak kominikasyon oserye.' },
      ].map(({ icon: Icon, title, text }) => <div key={title} className="card p-7"><Icon size={29} className="text-violet" /><h3 className="mt-6 font-display text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted">{text}</p></div>)}</div></div></section>
      <section className="bg-violet py-16 text-white"><div className="container-app flex flex-wrap items-center justify-between gap-7"><div><Sprout size={26} /><h2 className="mt-4 font-display text-3xl font-extrabold">Ann bati plis opòtinite ansanm.</h2></div><Link to="/pou-travayè" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-extrabold text-violet">Vin dekouvri pwogram nan <ArrowRight size={17} /></Link></div></section>
    </>
  );
}
