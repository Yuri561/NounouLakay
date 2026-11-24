import { ArrowLeft, ArrowRight, Bookmark, CalendarDays, Languages, MapPin, ShieldAlert } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { workers } from '../data/seed';
import { useApp } from '../context/AppContext';
import { ServiceIcon } from '../components/ui/ServiceIcon';

export default function WorkerProfile() {
  const { id } = useParams();
  const worker = workers.find((person) => person.id === id);
  const { data, toggleSaved } = useApp();

  if (!worker) {
    return (
      <div className="container-app section-pad text-center">
        <h1 className="heading-lg">Pwofil sa a pa egziste.</h1>
        <Link className="mt-6 inline-block font-bold text-violet" to="/travayè">Retounen nan anyè a</Link>
      </div>
    );
  }

  const saved = data.savedIds.includes(worker.id);

  return (
    <section className="section-pad">
      <div className="container-app">
        <Link to="/travayè" className="inline-flex items-center gap-2 text-sm font-bold text-violet"><ArrowLeft size={17} /> Tout pwofil yo</Link>
        <div className="mt-8 grid items-start gap-7 lg:grid-cols-[1.25fr_.75fr]">
          <div className="card p-7 sm:p-10">
            <div className="flex flex-wrap items-start gap-5">
              <div className="grid h-24 w-24 place-items-center rounded-[28px] font-display text-3xl font-extrabold" style={{ backgroundColor: worker.color }}>
                {worker.initials}
              </div>
              <div className="flex-1">
                <span className="pill bg-lilac text-violet"><ServiceIcon service={worker.service} size={14} /> {worker.service}</span>
                <h1 className="mt-3 font-display text-3xl font-extrabold">{worker.name}</h1>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-muted"><MapPin size={16} /> {worker.city}</p>
              </div>
              <button
                onClick={() => toggleSaved(worker.id)}
                aria-pressed={saved}
                className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-bold ${saved ? 'border-violet bg-lilac text-violet' : 'border-line bg-white text-ink'}`}
              >
                <Bookmark size={16} fill={saved ? 'currentColor' : 'none'} /> {saved ? 'Sove' : 'Sove pwofil'}
              </button>
            </div>
            <div className="mt-9 grid gap-4 border-y border-line py-6 sm:grid-cols-3">
              <Info icon={<CalendarDays size={19} />} label="Eksperyans deklare" value={worker.experience} />
              <Info icon={<MapPin size={19} />} label="Zòn" value={worker.city} />
              <Info icon={<Languages size={19} />} label="Lang" value={worker.languages.join(', ')} />
            </div>
            <h2 className="mt-9 font-display text-xl font-extrabold">Kèk mo sou mwen</h2>
            <p className="mt-3 max-w-2xl text-sm leading-8 text-muted">{worker.bio}</p>
            <h2 className="mt-9 font-display text-xl font-extrabold">Konpetans deklare</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {worker.skills.map((skill) => <span key={skill} className="rounded-xl bg-cream px-4 py-2 text-xs font-bold">{skill}</span>)}
            </div>
            <h2 className="mt-9 font-display text-xl font-extrabold">Disponibilite deklare</h2>
            <p className="mt-3 text-sm text-muted">{worker.availability}</p>
          </div>
          <aside className="lg:sticky lg:top-28">
            <div className="rounded-[28px] bg-violet p-8 text-white shadow-soft">
              <h2 className="font-display text-2xl font-extrabold">Bezwen èd lakay ou?</h2>
              <p className="mt-4 text-sm leading-7 text-white/75">Prepare yon demann ak bezwen ou yo. Nan demo a, demann lan ap anrejistre sèlman nan navigatè ou.</p>
              <Link to={`/demann?worker=${worker.id}`} className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-extrabold text-violet">
                Fè yon demann demo <ArrowRight size={18} />
              </Link>
            </div>
            <div className="mt-5 flex gap-3 rounded-2xl border border-coral/25 bg-peach p-5 text-xs leading-6 text-ink/80">
              <ShieldAlert className="mt-0.5 shrink-0 text-coral" size={20} />
              <p>Pwofil demonstrasyon. Idantite, referans, antecedan ak konpetans pa verifye. Pa itilize enfòmasyon sa yo pou pran yon desizyon swen timoun reyèl.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lilac text-violet">{icon}</span>
      <div><p className="text-[11px] font-bold text-muted">{label}</p><p className="mt-1 text-sm font-extrabold">{value}</p></div>
    </div>
  );
}
