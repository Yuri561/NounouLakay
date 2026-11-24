import { useState, type FormEvent } from 'react';
import { CalendarCheck2, ClipboardList, Clock3, UsersRound } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from '../components/ui/Button';
import type { Interview } from '../types';

export default function InterviewPlanner() {
  const { data, addInterview, updateInterview } = useApp();
  const [person, setPerson] = useState('');
  const [role, setRole] = useState<Interview['role']>('Kandida');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('09:00');
  const [channel, setChannel] = useState('Apèl telefòn');
  const [notes, setNotes] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!person.trim() || !date) return;

    addInterview({
      id: crypto.randomUUID(),
      person: person.trim(),
      role,
      date,
      time,
      channel,
      notes: notes.trim(),
      status: 'Planifye',
    });
    setPerson('');
    setNotes('');
  }

  const sorted = [...data.interviews].sort((a, b) =>
    `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`),
  );

  return (
    <div className="space-y-8">
      <div>
        <p className="eyebrow">Espas ajans • Demo</p>
        <h2 className="heading-lg mt-2">Planifye entèvyou yo.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">Kreye randevou entèvyou pou kandida oswa fanmi. Sa se yon planifikatè lokal: li pa voye SMS, imèl oswa envitasyon.</p>
      </div>
      <div className="grid gap-6 xl:grid-cols-[380px_1fr]">
        <form className="card space-y-4 p-6" onSubmit={submit}>
          <h3 className="flex items-center gap-2 font-display text-xl font-extrabold"><CalendarCheck2 className="text-violet" /> Nouvo entèvyou</h3>
          <label className="block text-sm font-semibold">Non moun nan
            <input className="field" required maxLength={80} value={person} onChange={(e) => setPerson(e.target.value)} placeholder="Non kandida oswa fanmi" />
          </label>
          <label className="block text-sm font-semibold">Tip kontak
            <select className="field" value={role} onChange={(e) => setRole(e.target.value as Interview['role'])}><option>Kandida</option><option>Fanmi</option></select>
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="text-sm font-semibold">Dat
              <input className="field" type="date" required value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
            <label className="text-sm font-semibold">Lè
              <input className="field" type="time" required value={time} onChange={(e) => setTime(e.target.value)} />
            </label>
          </div>
          <label className="block text-sm font-semibold">Fason entèvyou a ap fèt
            <select className="field" value={channel} onChange={(e) => setChannel(e.target.value)}><option>Apèl telefòn</option><option>Videyo</option><option>An pèsòn</option></select>
          </label>
          <label className="block text-sm font-semibold">Nòt (opsyonèl)
            <textarea className="field min-h-[90px]" maxLength={500} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Kesyon oswa rapèl..." />
          </label>
          <Button type="submit" className="w-full">Ajoute entèvyou a</Button>
        </form>
        <section className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="card p-5"><UsersRound className="text-violet" size={20} /><p className="mt-3 text-2xl font-extrabold">{sorted.length}</p><p className="text-xs text-muted">Total randevou</p></div>
            <div className="card p-5"><Clock3 className="text-coral" size={20} /><p className="mt-3 text-2xl font-extrabold">{sorted.filter((i) => i.status === 'Planifye').length}</p><p className="text-xs text-muted">Planifye</p></div>
            <div className="card p-5"><ClipboardList className="text-[#488B69]" size={20} /><p className="mt-3 text-2xl font-extrabold">{sorted.filter((i) => i.status === 'Fini').length}</p><p className="text-xs text-muted">Fini</p></div>
          </div>
          {sorted.length === 0 ? (
            <div className="card p-12 text-center"><CalendarCheck2 className="mx-auto text-violet" size={35} /><h3 className="mt-4 font-display text-xl font-bold">Pa gen entèvyou ankò.</h3><p className="mt-2 text-sm text-muted">Planifye premye entèvyou demo ou.</p></div>
          ) : sorted.map((interview) => (
            <article className="card p-5 sm:p-6" key={interview.id}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div><span className="pill bg-lilac text-violet">{interview.role}</span><h3 className="mt-3 font-display text-lg font-extrabold">{interview.person}</h3><p className="mt-2 text-sm text-muted">{interview.date} · {interview.time} · {interview.channel}</p></div>
                <select aria-label={`Estati entèvyou ${interview.person}`} className="field !mt-0 !w-auto" value={interview.status} onChange={(e) => updateInterview(interview.id, e.target.value as Interview['status'])}><option>Planifye</option><option>Fini</option><option>Anile</option></select>
              </div>
              {interview.notes && <p className="mt-4 break-words border-t border-line pt-4 text-sm leading-6 text-muted">{interview.notes}</p>}
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
