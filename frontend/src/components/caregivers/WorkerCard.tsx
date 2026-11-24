import { ArrowUpRight, Bookmark, MapPin, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Worker } from '../../types';
import { useApp } from '../../context/AppContext';
import { ServiceIcon } from '../ui/ServiceIcon';

interface WorkerCardProps {
  worker: Worker;
}

export function WorkerCard({ worker }: WorkerCardProps) {
  const { data, toggleSaved } = useApp();
  const isSaved = data.savedIds.includes(worker.id);

  return (
    <article className="card group overflow-hidden p-5 transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl font-display text-lg font-extrabold text-ink"
            style={{ backgroundColor: worker.color }}
          >
            {worker.initials}
          </div>
          <div>
            <h3 className="font-display text-base font-extrabold">{worker.name}</h3>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-muted"><MapPin size={13} /> {worker.city}</p>
          </div>
        </div>
        <button
          onClick={() => toggleSaved(worker.id)}
          aria-label={isSaved ? `Retire ${worker.name} nan favori` : `Sove ${worker.name}`}
          aria-pressed={isSaved}
          className={`rounded-xl p-2 transition ${isSaved ? 'bg-lilac text-violet' : 'bg-cream text-muted hover:bg-lilac'}`}
        >
          <Bookmark size={19} fill={isSaved ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="pill bg-lilac text-violet"><ServiceIcon service={worker.service} size={14} /> {worker.service}</span>
        <span className="pill bg-cream text-muted"><Clock3 size={13} /> {worker.experience}</span>
      </div>
      <p className="mt-4 line-clamp-2 min-h-[44px] text-sm leading-6 text-muted">{worker.bio}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {worker.skills.slice(0, 2).map((skill) => (
          <span key={skill} className="rounded-lg border border-line px-2.5 py-1 text-[11px] font-semibold text-muted">{skill}</span>
        ))}
      </div>
      <div className="mt-6 border-t border-line pt-5">
        <Link to={`/travayè/${worker.id}`} className="flex items-center justify-between text-sm font-extrabold text-violet">
          Gade pwofil demo <ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </article>
  );
}
