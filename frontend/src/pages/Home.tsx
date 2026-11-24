import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Heart,
  HeartHandshake,
  MessageSquareText,
  ShieldAlert,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, workers } from '../data/seed';
import { WorkerCard } from '../components/caregivers/WorkerCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ServiceIcon } from '../components/ui/ServiceIcon';
import { HomepageExpansion } from '../components/home/HomepageExpansion';

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#F6F1FA]">
        <div className="pointer-events-none absolute -right-28 top-0 h-[520px] w-[520px] rounded-full bg-[#E8DDF4] blur-3xl" />
        <div className="container-app relative grid items-center gap-12 py-16 lg:grid-cols-[1.02fr_.98fr] lg:py-24">
          <div className="max-w-[620px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet/10 bg-white px-4 py-2 text-xs font-extrabold text-violet shadow-sm">
              <Heart size={14} /> Pi bon koneksyon, plis opòtinite
            </span>
            <h1 className="heading-xl mt-8">
              Yon ti kout men pou <span className="text-violet">fanmi ou.</span><br />
              Yon gwo chans pou <span className="text-coral">lòt moun.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-muted">
              Jwenn moun ki ofri sèvis gadri, netwayaj ak antretyen ann Ayiti.
              NOUNOU LAKAY se yon espas pou fanmi ak moun k ap chèche opòtinite travay rankontre.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/travayè" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-violet px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-violet/20 transition hover:-translate-y-0.5 hover:bg-[#40367F]">
                Jwenn yon pwofesyonèl <ArrowRight size={18} />
              </Link>
              <Link to="/pou-travayè" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-violet/20 bg-white px-6 py-3 text-sm font-extrabold text-violet transition hover:bg-lilac">
                Mwen bezwen travay <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-4 text-xs font-semibold text-muted">
              <span className="flex items-center gap-2"><BadgeCheck size={16} className="text-violet" /> Fasil pou itilize</span>
              <span className="flex items-center gap-2"><UsersRound size={16} className="text-violet" /> Fanmi ak travayè</span>
              <span className="flex items-center gap-2"><HeartHandshake size={16} className="text-violet" /> Pou Ayiti</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px] lg:mx-0">
            <div className="relative overflow-hidden rounded-[44px] bg-[#CFC0E8] p-3 shadow-[0_35px_95px_rgba(80,69,130,.16)] sm:p-5">
              <div className="relative h-[350px] overflow-hidden rounded-[34px] bg-[#DCCFEB] sm:h-[470px]">
                <img
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1000&q=85"
                  alt="Yon fanmi k ap pase yon moman ansanm"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20243F]/45 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/40 bg-white/90 p-4 shadow-soft backdrop-blur sm:bottom-7 sm:left-7 sm:right-auto sm:w-[260px]">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-peach text-coral"><HeartHandshake size={23} /></span>
                    <div>
                      <p className="text-xs font-bold text-muted">Yon misyon ki konte</p>
                      <p className="font-display text-sm font-extrabold">Swen • Konfyans • Travay</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -left-4 top-12 hidden rounded-2xl bg-white p-4 shadow-soft sm:block lg:-left-12">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-sage text-[#488B69]"><Sparkles size={20} /></span>
                <div><p className="text-xs text-muted">Sèvis pou kay</p><p className="text-sm font-extrabold">3 kategori</p></div>
              </div>
            </div>
            <div className="absolute -right-4 bottom-12 hidden rounded-2xl bg-white p-4 shadow-soft sm:block lg:-right-9">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-lilac text-violet"><MessageSquareText size={20} /></span>
                <div><p className="text-xs text-muted">Yon premye etap</p><p className="text-sm font-extrabold">Fè yon demann</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white py-7">
        <div className="container-app flex flex-wrap items-center justify-center gap-4 text-center text-xs font-bold text-muted sm:justify-between sm:text-sm">
          <span>Yon platfòm ki fèt pou Ayiti 🇭🇹</span>
          <span className="hidden h-1 w-1 rounded-full bg-coral sm:block" />
          <span>Gadri ak sipò fanmi</span>
          <span className="hidden h-1 w-1 rounded-full bg-coral sm:block" />
          <span>Netwayaj ak antretyen</span>
          <span className="hidden h-1 w-1 rounded-full bg-coral sm:block" />
          <span>Nouvo opòtinite travay</span>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-app">
          <SectionHeading
            eyebrow="Sa nou ofri"
            title="Èd ou bezwen, nan yon sèl espas."
            description="Chwazi yon kategori, dekouvri pwofil demo yo epi prepare yon demann selon sa fanmi ou bezwen."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service, index) => (
              <Link
                to={`/travayè?service=${encodeURIComponent(service.name)}`}
                key={service.name}
                className="group card relative overflow-hidden p-7 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <span className={`grid h-16 w-16 place-items-center rounded-[22px] text-violet ${service.tint}`}>
                  <ServiceIcon service={service.name} size={29} />
                </span>
                <p className="mt-8 text-xs font-extrabold tracking-[.2em] text-coral">0{index + 1}</p>
                <h3 className="mt-2 font-display text-xl font-extrabold">{service.name}</h3>
                <p className="mt-3 max-w-xs text-sm leading-7 text-muted">{service.description}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-violet">
                  Dekouvri sèvis la <ArrowUpRight size={17} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-app">
          <SectionHeading
            eyebrow="Pwofil demonstrasyon"
            title="Fè konesans ak pwofil yo."
            description="Pwofil sa yo se egzanp pou montre kijan platfòm nan pral fonksyone. Yo pa reprezante moun ki verifye oswa ki disponib reyèlman."
            action={<Link to="/travayè" className="inline-flex items-center gap-2 text-sm font-extrabold text-violet">Gade tout pwofil yo <ArrowRight size={17} /></Link>}
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {workers.filter((worker) => worker.featured).map((worker) => (
              <WorkerCard key={worker.id} worker={worker} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-app grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[34px] bg-lilac p-8 sm:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-peach text-coral"><UsersRound size={25} /></span>
                <p className="mt-8 font-display text-2xl font-extrabold">Fanmi</p>
                <p className="mt-2 text-sm leading-6 text-muted">Jwenn sipò nan lavi chak jou.</p>
              </div>
              <div className="rounded-3xl bg-violet p-6 text-white shadow-card sm:translate-y-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15"><HeartHandshake size={25} /></span>
                <p className="mt-8 font-display text-2xl font-extrabold">Travayè</p>
                <p className="mt-2 text-sm leading-6 text-white/70">Dekouvri nouvo opòtinite.</p>
              </div>
            </div>
            <div className="mt-11 rounded-2xl bg-white/70 p-5 text-sm font-semibold leading-6 text-ink/80">
              Nou kwè yon bon koneksyon kapab fè lavi yon fanmi vin pi fasil epi ouvri yon nouvo pòt pou yon travayè.
            </div>
          </div>
          <div>
            <p className="eyebrow">Yon vizyon ki gen sans</p>
            <h2 className="heading-lg mt-4">Nou vle bay fanmi yo plis trankilite, epi bay moun yo plis chans.</h2>
            <p className="mt-6 text-sm leading-8 text-muted sm:text-base">
              NOUNOU LAKAY baze sou yon lide senp: anpil fanmi bezwen èd, pandan anpil lòt moun bezwen travay. Platfòm nan vle kreye yon espas kote de bezwen sa yo kapab rankontre.
            </p>
            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-coral/20 bg-peach p-4 text-sm leading-6 text-ink/80">
              <ShieldAlert className="mt-0.5 shrink-0 text-coral" size={20} />
              <span>Verifikasyon referans, fòmasyon ak sekirite se objektif pou sèvis reyèl la. Yo poko fèt nan demonstrasyon sa a.</span>
            </div>
            <Link to="/sou-nou" className="mt-8 inline-flex items-center gap-2 font-extrabold text-violet">Konnen misyon nou <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="bg-violet py-16 text-white sm:py-20">
        <div className="container-app flex flex-wrap items-center justify-between gap-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.24em] text-white/65">NOUNOU LAKAY</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Bonjan swen pou pitit ou, plis opòtinite pou moun yo.</h2>
          </div>
          <Link to="/demann" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-extrabold text-violet hover:bg-lilac">
            Kòmanse yon demann <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <HomepageExpansion />
    </>
  );
}
