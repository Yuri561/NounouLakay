import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, CheckCircle2, HeartHandshake, Sparkles } from 'lucide-react';
import { Field } from '../components/ui/Field';
import { Button } from '../components/ui/Button';
import { cities } from '../data/seed';
import { useApp } from '../context/AppContext';
import { createId } from '../lib/utils';
import type { Service } from '../types';

export default function Apply() {
  const { addApplication } = useApp();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState(cities[0]);
  const [service, setService] = useState<Service>('Gadri');
  const [experience, setExperience] = useState('');
  const [notes, setNotes] = useState('');
  const [done, setDone] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addApplication({
      id: createId('application'),
      createdAt: new Date().toISOString(),
      name: name.trim(),
      phone: phone.trim(),
      city,
      service,
      experience: experience.trim(),
      notes: notes.trim(),
      status: 'Resevwa',
    });
    setDone(true);
  }

  return (
    <>
      <section className="relative overflow-hidden bg-lilac">
        <div className="container-app grid gap-9 py-16 lg:grid-cols-[1fr_.8fr] lg:items-center lg:py-20">
          <div>
            <p className="eyebrow">Pou moun k ap chèche travay</p>
            <h1 className="heading-xl mt-4">Talann ou gen valè. <span className="text-violet">Ann fè l briye.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">Si ou gen eksperyans nan gadri, netwayaj oswa antretyen — oswa ou vle aprann — nou vle kreye yon espas pou plis opòtinite rive jwenn ou.</p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs font-bold text-violet"><span className="pill bg-white"><HeartHandshake size={15} /> Rekritman (objektif)</span><span className="pill bg-white"><Sparkles size={15} /> Fòmasyon (objektif)</span></div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] bg-[#E6D8F4] p-3 shadow-soft">
            <img
              className="h-[280px] w-full rounded-[24px] object-cover sm:h-[350px]"
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
              alt="Moun k ap travay ansanm"
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-app grid items-start gap-9 lg:grid-cols-[1fr_.9fr]">
          <div>
            <p className="eyebrow">Premye etap</p>
            <h2 className="heading-lg mt-4">Prezante tèt ou.</h2>
            <p className="mt-5 max-w-xl text-sm leading-8 text-muted">Fòm sa a se yon demonstrasyon. Li pèmèt ou wè kijan aplikasyon yon travayè ta parèt sou sit la. Nou pa resevwa dosye ou sou yon sèvè.</p>
            <div className="mt-8 space-y-5">
              {[
                ['01', 'Pataje eksperyans ou', 'Di ki sèvis ou ofri ak ki kote ou disponib.'],
                ['02', 'Prepare referans ou', 'Nan sèvis reyèl la, ajans lan ta bezwen revize enfòmasyon ak referans yo.'],
                ['03', 'Devlope kapasite ou', 'Fòmasyon ak sipò fè pati vizyon pwojè a, men yo poko aktif.'],
              ].map(([number, title, description]) => (
                <div className="flex gap-4" key={number}>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-lilac text-sm font-extrabold text-violet">{number}</span>
                  <div><h3 className="font-display text-base font-extrabold">{title}</h3><p className="mt-1 text-sm leading-7 text-muted">{description}</p></div>
                </div>
              ))}
            </div>
          </div>

          {done ? (
            <div className="card p-8">
              <CheckCircle2 size={42} className="text-[#559774]" />
              <h2 className="mt-4 font-display text-2xl font-extrabold">Aplikasyon demo ou anrejistre!</h2>
              <p className="mt-3 text-sm leading-7 text-muted">Aplikasyon sa a rete sou aparèy ou. Pa gen okenn seleksyon kandida oswa rekritman reyèl ki fèt.</p>
              <Link to="/espas-travayè" className="mt-6 inline-flex items-center gap-2 font-extrabold text-violet">Gade espas travayè mwen <ArrowRight size={18} /></Link>
            </div>
          ) : (
            <form className="card grid gap-5 p-6 sm:grid-cols-2 sm:p-8" onSubmit={handleSubmit}>
              <div className="sm:col-span-2"><h3 className="font-display text-xl font-extrabold">Aplikasyon demo</h3><p className="mt-1 text-xs text-muted">Pa itilize done sansib oswa dokiman idantite reyèl.</p></div>
              <Field label="Non konplè"><input required className="field" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Non ou" /></Field>
              <Field label="Telefòn / WhatsApp"><input required type="tel" autoComplete="tel" className="field" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="+509 ..." /></Field>
              <Field label="Sèvis ou vle ofri"><select className="field" value={service} onChange={(event) => setService(event.target.value as Service)}><option>Gadri</option><option>Netwayaj</option><option>Antretyen</option></select></Field>
              <Field label="Vil / zòn"><select className="field" value={city} onChange={(event) => setCity(event.target.value)}>{cities.map((item) => <option key={item}>{item}</option>)}</select></Field>
              <div className="sm:col-span-2"><Field label="Eksperyans ou" helper="Ou kapab di tou si ou vle kòmanse aprann."><input required className="field" value={experience} onChange={(event) => setExperience(event.target.value)} placeholder="Egzanp: 2 lane oswa mwen ap kòmanse" /></Field></div>
              <div className="sm:col-span-2"><Field label="Pale nou de kapasite ou"><textarea className="field" rows={4} value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Kisa ou konn fè? Ki orè ki bon pou ou?" /></Field></div>
              <div className="sm:col-span-2"><Button className="w-full" type="submit">Anrejistre aplikasyon demo <ArrowRight size={17} /></Button></div>
            </form>
          )}
        </div>
      </section>
      <section className="bg-white py-12"><div className="container-app flex items-center gap-4 rounded-3xl bg-peach p-7"><BadgeCheck className="shrink-0 text-coral" size={28} /><p className="text-sm leading-7 text-ink/80">Nan yon vèsyon reyèl, referans, fòmasyon ak kapasite ta bezwen yon pwosesis revizyon serye. Demo sa a pa bay sètifikasyon ni garanti travay.</p></div></section>
    </>
  );
}
