import { useState, type FormEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ClipboardList, LockKeyhole, ShieldAlert } from 'lucide-react';
import { Field } from '../components/ui/Field';
import { Button } from '../components/ui/Button';
import { cities, workers } from '../data/seed';
import { useApp } from '../context/AppContext';
import { createId } from '../lib/utils';
import type { Service } from '../types';

export default function RequestService() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const worker = workers.find((person) => person.id === params.get('worker'));
  const { addRequest } = useApp();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState(worker?.city ?? 'Pòtoprens');
  const [service, setService] = useState<Service>(worker?.service ?? 'Gadri');
  const [schedule, setSchedule] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addRequest({
      id: createId('request'),
      createdAt: new Date().toISOString(),
      name: name.trim(),
      phone: phone.trim(),
      city,
      service,
      schedule: schedule.trim(),
      details: details.trim(),
      workerId: worker?.id,
      status: 'Nouvo',
    });
    setSubmitted(true);
  }

  return (
    <section className="section-pad">
      <div className="container-app grid items-start gap-9 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <p className="eyebrow">Demann sèvis</p>
          <h1 className="heading-lg mt-4">Di nou ki èd ou bezwen.</h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted">Ranpli fòm nan pou wè kijan yon demann fonksyone. Enfòmasyon sa yo rete nan navigatè ou, yo pa rive jwenn yon ajans.</p>

          {submitted ? (
            <div className="card mt-8 p-8">
              <CheckCircle2 size={42} className="text-[#559774]" />
              <h2 className="mt-4 font-display text-2xl font-extrabold">Demann demo a anrejistre!</h2>
              <p className="mt-3 text-sm leading-7 text-muted">Pa gen moun ki resevwa demann lan. Ou ka wè li nan espas fanmi demo a.</p>
              <Button className="mt-6" onClick={() => navigate('/espas-fanmi')}>Gade demann mwen yo <ArrowRight size={17} /></Button>
            </div>
          ) : (
            <form className="card mt-8 grid gap-5 p-6 sm:grid-cols-2 sm:p-8" onSubmit={handleSubmit}>
              <Field label="Non konplè"><input required autoComplete="name" className="field" value={name} onChange={(event) => setName(event.target.value)} placeholder="Non ou" /></Field>
              <Field label="Telefòn / WhatsApp"><input required autoComplete="tel" type="tel" className="field" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="+509 ..." /></Field>
              <Field label="Sèvis ou bezwen">
                <select className="field" value={service} onChange={(event) => setService(event.target.value as Service)}>
                  <option value="Gadri">Gadri</option>
                  <option value="Netwayaj">Netwayaj</option>
                  <option value="Antretyen">Antretyen</option>
                </select>
              </Field>
              <Field label="Vil / zòn"><select className="field" value={city} onChange={(event) => setCity(event.target.value)}>{cities.map((item) => <option key={item}>{item}</option>)}</select></Field>
              <div className="sm:col-span-2"><Field label="Kilè ou bezwen sèvis la?" helper="Egzanp: Chak lendi, 8è maten pou 3è aprèmidi"><input required className="field" value={schedule} onChange={(event) => setSchedule(event.target.value)} placeholder="Lendi rive vandredi ..." /></Field></div>
              <div className="sm:col-span-2"><Field label="Pale nou de bezwen ou"><textarea required rows={5} className="field" value={details} onChange={(event) => setDetails(event.target.value)} placeholder="Ki kalite èd ou bezwen? Ki kondisyon oswa preferans ou genyen?" /></Field></div>
              {worker && <div className="rounded-xl bg-lilac px-4 py-3 text-xs font-bold text-violet sm:col-span-2">Pwofil demo chwazi: {worker.name} — {worker.service}</div>}
              <div className="sm:col-span-2"><Button type="submit" className="w-full">Anrejistre demann demo a <ArrowRight size={17} /></Button></div>
            </form>
          )}
        </div>
        <aside className="rounded-[30px] bg-ink p-7 text-white lg:sticky lg:top-28 sm:p-9">
          <ClipboardList size={33} className="text-[#E7B3A5]" />
          <h2 className="mt-6 font-display text-2xl font-extrabold">Yon pwosesis ki pi klè.</h2>
          <p className="mt-4 text-sm leading-8 text-white/70">Yon bon demann ede fanmi ak ajans lan byen konprann kondisyon travay la avan nenpòt angajman.</p>
          <div className="mt-7 space-y-5">
            {['Dekri bezwen ak orè ou', 'Konpare pwofil ki adapte', 'Verifye referans ak detay anvan angajman'].map((item, index) => (
              <div className="flex items-start gap-3" key={item}>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/10 text-xs font-bold">0{index + 1}</span>
                <span className="pt-1.5 text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-3 rounded-2xl bg-white/10 p-5 text-xs leading-6 text-white/75">
            <div className="flex gap-2"><LockKeyhole size={17} className="shrink-0" /> Pa gen kont ni done sekirize sou sèvè nan demo a.</div>
            <div className="flex gap-2"><ShieldAlert size={17} className="shrink-0" /> Pa gen okenn verifikasyon oswa sèvis gadri reyèl k ap fèt.</div>
          </div>
        </aside>
      </div>
    </section>
  );
}
