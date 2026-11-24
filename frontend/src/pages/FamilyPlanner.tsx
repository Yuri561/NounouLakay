import { useState, type FormEvent } from 'react';
import { CalendarDays, Clock3, Plus, Trash2, Info } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from '../components/ui/Button';
import type { Service } from '../types';

const weekdays = ['Lendi', 'Madi', 'Mèkredi', 'Jedi', 'Vandredi', 'Samdi', 'Dimanch'];
const services: Service[] = ['Gadri', 'Netwayaj', 'Antretyen'];

export default function FamilyPlanner() {
  const { data, addCarePlan, removeCarePlan } = useApp();
  const [title, setTitle] = useState('');
  const [service, setService] = useState<Service>('Gadri');
  const [weekday, setWeekday] = useState('Lendi');
  const [start, setStart] = useState('08:00');
  const [end, setEnd] = useState('17:00');
  const [instructions, setInstructions] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (end <= start) return;

    addCarePlan({
      id: crypto.randomUUID(),
      title: title.trim(),
      service,
      weekday,
      start,
      end,
      instructions: instructions.trim(),
    });

    setTitle('');
    setInstructions('');
  }

  const sorted = [...data.carePlans].sort(
    (first, second) => weekdays.indexOf(first.weekday) - weekdays.indexOf(second.weekday),
  );

  return (
    <div className="space-y-8">
      <div>
        <p className="eyebrow">Espas fanmi • Planifikasyon</p>
        <h2 className="heading-lg mt-2">Òganize semèn lakay ou.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
          Prepare yon orè pou sèvis fanmi ou bezwen. Se sèlman yon plan pèsonèl sou navigatè sa a;
          li pa rezève okenn travayè ni voye okenn notifikasyon.
        </p>
      </div>

      <div className="grid items-start gap-6 xl:grid-cols-[390px_1fr]">
        <form onSubmit={submit} className="card space-y-4 p-6 sm:p-7">
          <div className="flex items-center gap-3">
            <span className="rounded-xl bg-lilac p-3 text-violet"><Plus size={20} /></span>
            <h3 className="font-display text-xl font-extrabold">Ajoute yon orè</h3>
          </div>
          <label className="block text-sm font-semibold">Non aktivite a
            <input className="field" required maxLength={60} placeholder="Eg. Gadri apre lekòl" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label className="block text-sm font-semibold">Sèvis
            <select className="field" value={service} onChange={(e) => setService(e.target.value as Service)}>
              {services.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="block text-sm font-semibold">Jou
            <select className="field" value={weekday} onChange={(e) => setWeekday(e.target.value)}>
              {weekdays.map((day) => <option key={day}>{day}</option>)}
            </select>
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="text-sm font-semibold">Kòmanse
              <input type="time" className="field" value={start} onChange={(e) => setStart(e.target.value)} required />
            </label>
            <label className="text-sm font-semibold">Fini
              <input type="time" className="field" value={end} onChange={(e) => setEnd(e.target.value)} required />
            </label>
          </div>
          {end <= start && <p role="alert" className="text-xs font-semibold text-red-600">Lè fen an dwe apre lè kòmansman an.</p>}
          <label className="block text-sm font-semibold">Nòt (opsyonèl)
            <textarea className="field min-h-[100px]" maxLength={500} value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Enstriksyon oswa detay..." />
          </label>
          <Button type="submit" className="w-full" disabled={!title.trim() || end <= start}>
            <Plus size={17} /> Ajoute nan plan an
          </Button>
        </form>

        <section className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-xl font-extrabold">Plan semèn nan</h3>
            <span className="pill bg-lilac text-violet">{sorted.length} aktivite</span>
          </div>
          {sorted.length === 0 ? (
            <div className="card grid min-h-[300px] place-items-center p-8 text-center">
              <div><CalendarDays className="mx-auto text-violet" size={40} /><h4 className="mt-4 font-display text-xl font-bold">Pa gen aktivite ankò.</h4><p className="mt-2 text-sm text-muted">Ajoute premye aktivite ou pou òganize semèn nan.</p></div>
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              {sorted.map((plan) => (
                <article key={plan.id} className="card relative min-w-0 p-5">
                  <button type="button" onClick={() => removeCarePlan(plan.id)} aria-label={`Retire ${plan.title}`} className="absolute right-4 top-4 rounded-lg p-2 text-muted hover:bg-red-50 hover:text-red-600"><Trash2 size={17} /></button>
                  <span className="pill bg-lilac text-violet">{plan.weekday}</span>
                  <h4 className="mt-3 pr-9 font-display text-lg font-extrabold">{plan.title}</h4>
                  <p className="mt-1 text-sm text-muted">{plan.service}</p>
                  <p className="mt-4 flex items-center gap-2 text-sm font-bold"><Clock3 size={17} className="text-violet" /> {plan.start} – {plan.end}</p>
                  {plan.instructions && <p className="mt-3 break-words text-sm leading-6 text-muted">{plan.instructions}</p>}
                </article>
              ))}
            </div>
          )}
          <p className="flex items-start gap-2 text-xs leading-6 text-muted"><Info size={16} className="mt-1 shrink-0" /> Tout done sa yo rete nan localStorage. Pa mete detay sansib sou timoun oswa fanmi reyèl nan demo sa a.</p>
        </section>
      </div>
    </div>
  );
}
