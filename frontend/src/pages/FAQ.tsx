import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircleQuestion } from 'lucide-react';
import { Link } from 'react-router-dom';

const questions = [
  {
    q: 'Èske pwofil moun ki sou sit la deja verifye?',
    a: 'Non. Pwofil ki nan vèsyon sa a se pwofil fiktif pou prezantasyon sèlman. Nou poko mete sèvis verifikasyon idantite, referans oswa eksperyans an plas.',
  },
  {
    q: 'Èske mwen ka rezève yon nounou?',
    a: 'Ou kapab ranpli yon demann demo pou wè kijan sèvis la ta mache. Pa gen okenn rezèvasyon oswa plasman reyèl k ap fèt nan vèsyon sa a.',
  },
  {
    q: 'Ki sèvis NOUNOU LAKAY vize?',
    a: 'Platfòm nan konsantre sou gadri, netwayaj ak antretyen kay. Objektif la se mete fanmi ki bezwen sipò an kontak ak moun k ap chèche opòtinite travay.',
  },
  {
    q: 'Kijan komisyon ajans lan ap mache?',
    a: 'Modèl komisyon an fè pati plan biznis la, men tarif yo poko defini. Nou pa mande okenn peman nan vèsyon demo a.',
  },
  {
    q: 'Èske NOUNOU LAKAY bay fòmasyon?',
    a: 'Gen kèk ti leson enfòmatif sou sit demo a, men se pa yon fòmasyon sètifye. Fòmasyon pratik ak verifikasyon yo ta bezwen patnè ak pwosesis serye avan lansman.',
  },
  {
    q: 'Kijan mwen ka pwoteje fanmi mwen lè m ap chèche swen timoun?',
    a: 'Verifye idantite ak referans moun nan dirèkteman, fè yon entèvyou, mande sou eksperyans ak premye swen, epi defini kondisyon travay yo alekri. Pa konte sou yon badj demo kòm prèv kalifikasyon.',
  },
  {
    q: 'Èske mwen bezwen kreye yon kont?',
    a: 'Non, nan pwototip sa a. Ou kapab eksplore paj yo san koneksyon. Nan yon vèsyon reyèl, nou ta bezwen kont separe ak pwoteksyon done pou fanmi, travayè ak administratè.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="section-pad">
      <section className="container-app max-w-[950px]">
        <div className="text-center">
          <span className="eyebrow">Sant èd</span>
          <h1 className="heading-xl mt-4">Kesyon ou yo, <span className="text-violet">repons klè.</span></h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted">Tout sa ou bezwen konnen sou objektif NOUNOU LAKAY ak limit vèsyon demonstrasyon an.</p>
        </div>
        <div className="mt-12 space-y-3">
          {questions.map(({ q, a }, index) => (
            <article key={q} className="card overflow-hidden">
              <button className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold sm:p-6" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}>
                <span className="flex items-center gap-3"><HelpCircle size={19} className="shrink-0 text-violet" />{q}</span><ChevronDown size={20} className={`shrink-0 text-muted transition-transform ${open === index ? 'rotate-180' : ''}`} />
              </button>
              {open === index && <p className="border-t border-line px-5 pb-6 pt-4 text-sm leading-7 text-muted sm:px-6">{a}</p>}
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-3xl bg-lilac p-7 text-center sm:p-10">
          <MessageCircleQuestion className="mx-auto text-violet" size={34} />
          <h2 className="mt-4 font-display text-2xl font-extrabold">Ou gen yon lòt kesyon?</h2>
          <p className="mt-2 text-sm text-muted">Ou ka prepare yon mesaj atravè paj kontak demonstrasyon an.</p>
          <Link to="/kontakte" className="mt-5 inline-flex rounded-xl bg-violet px-6 py-3 text-sm font-bold text-white">Ale nan kontak</Link>
        </div>
      </section>
    </div>
  );
}
