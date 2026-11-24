import { ArrowRight, BookOpen, CalendarDays, HelpCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const featureLinks = [
  {
    to: '/espas-fanmi/plan',
    icon: CalendarDays,
    title: 'Planifikasyon fanmi',
    text: 'Konstwi yon orè ki adapte ak bezwen lakay ou, jou pa jou.',
    bg: 'bg-[#EDE8FA]',
  },
  {
    to: '/espas-travayè/fòmasyon',
    icon: BookOpen,
    title: 'Aprann ak grandi',
    text: 'Ti modil pou pratike kominikasyon, ijyèn ak sekirite.',
    bg: 'bg-[#FFECE5]',
  },
  {
    to: '/sekirite',
    icon: ShieldCheck,
    title: 'Sekirite an premye',
    text: 'Konsèy pou verifye referans, prepare entèvyou ak mete règ klè.',
    bg: 'bg-[#E2F2E9]',
  },
];

export function HomepageExpansion() {
  return (
    <>
      <section className="section-pad bg-[#F5F1FA]">
        <div className="container-app">
          <div className="mx-auto max-w-[700px] text-center">
            <span className="eyebrow">Plis pase yon anyè</span>
            <h2 className="heading-lg mt-4">Yon platfòm pou chak etap.</h2>
            <p className="mt-4 text-sm leading-7 text-muted">NOUNOU LAKAY ta ka ede fanmi yo òganize sèvis yo pandan travayè yo ap prepare pou nouvo opòtinite.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featureLinks.map(({ to, icon: Icon, title, text, bg }) => (
              <Link to={to} key={to} className="group card flex flex-col p-7 transition hover:-translate-y-1 hover:shadow-xl">
                <span className={`grid h-14 w-14 place-items-center rounded-2xl text-violet ${bg}`}><Icon size={25} /></span>
                <h3 className="mt-6 font-display text-xl font-extrabold">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted">{text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-violet">Dekouvri plis <ArrowRight size={17} className="transition group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-app grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="eyebrow">Yon vizyon pou Ayiti</span>
            <h2 className="heading-lg mt-4">Bonjan swen pou pitit ou. <span className="text-violet">Plis opòtinite pou moun yo.</span></h2>
            <p className="mt-5 text-sm leading-8 text-muted">Ajans lan vize konekte fanmi ak travayè nan gadri, netwayaj ak antretyen. Nou mete aksan sou bezwen fanmi yo, preparasyon kandida yo, transparans ak konfyans.</p>
            <Link to="/tarif" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet px-6 py-3 text-sm font-bold text-white">Dekouvri modèl sèvis la <ArrowRight size={17} /></Link>
          </div>
          <div className="rounded-[34px] bg-[#322B68] p-8 text-white sm:p-10">
            <Sparkles size={30} className="text-[#F3B4A4]" />
            <h3 className="mt-5 font-display text-2xl font-extrabold">Yon eksperyans ki klè.</h3>
            <div className="mt-7 space-y-5">
              {['Chèche sèvis ki reponn ak bezwen ou.', 'Prepare demann ak orè ou fasil.', 'Aprann ki verifikasyon ki nesesè.', 'Konprann etap k ap vini nan platfòm nan.'].map((item, index) => (
                <div className="flex items-start gap-4" key={item}><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/15 text-xs font-bold">0{index + 1}</span><p className="pt-1 text-sm leading-6 text-white/80">{item}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="container-app">
          <Link to="/kesyon" className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
            <span className="flex items-center gap-4"><HelpCircle className="text-violet" size={28} /><span><strong className="block font-display text-lg">Gen kesyon?</strong><span className="mt-1 block text-sm text-muted">Nou prepare yon sant èd ki eksplike klèman sa demo a ka fè.</span></span></span>
            <ArrowRight className="text-violet" size={22} />
          </Link>
        </div>
      </section>
    </>
  );
}
