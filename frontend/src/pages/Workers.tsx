import { Search, SlidersHorizontal, UsersRound, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { WorkerCard } from '../components/caregivers/WorkerCard';
import { cities, workers } from '../data/seed';
import type { Service } from '../types';

export default function Workers() {
  const [params, setParams] = useSearchParams();
  const initialService = params.get('service') || 'Tout sèvis';
  const [query, setQuery] = useState('');
  const [service, setService] = useState(initialService);
  const [city, setCity] = useState('Tout zòn');

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    return workers.filter((worker) => {
      const matchesService = service === 'Tout sèvis' || worker.service === service;
      const matchesCity = city === 'Tout zòn' || worker.city === city;
      const searchable = `${worker.name} ${worker.city} ${worker.service} ${worker.skills.join(' ')}`;
      return matchesService && matchesCity && searchable.toLocaleLowerCase().includes(normalized);
    });
  }, [query, service, city]);

  function chooseService(value: string) {
    setService(value);
    setParams(value === 'Tout sèvis' ? {} : { service: value });
  }

  function clear() {
    setQuery('');
    setCity('Tout zòn');
    chooseService('Tout sèvis');
  }

  return (
    <section className="section-pad min-h-[70vh]">
      <div className="container-app">
        <div className="max-w-3xl">
          <p className="eyebrow">Anyè pwofesyonèl • Demo</p>
          <h1 className="heading-xl mt-4">Jwenn moun ki adapte ak bezwen ou.</h1>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-muted sm:text-base">
            Eksplore pwofil egzanp pou gadri, netwayaj ak antretyen. Pa gen okenn moun ki verifye oswa rekrute atravè demonstrasyon an.
          </p>
        </div>

        <div className="card mt-10 grid gap-4 p-5 lg:grid-cols-[1.4fr_1fr_1fr] lg:p-6">
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-xs font-extrabold text-ink"><Search size={15} /> Rechèch</span>
            <input className="field !mt-0" placeholder="Non, espesyalite, zòn..." value={query} onChange={(event) => setQuery(event.target.value)} />
          </label>
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-xs font-extrabold text-ink"><SlidersHorizontal size={15} /> Kalite sèvis</span>
            <select className="field !mt-0" value={service} onChange={(event) => chooseService(event.target.value)}>
              {['Tout sèvis', 'Gadri', 'Netwayaj', 'Antretyen'].map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="mb-2 text-xs font-extrabold text-ink">Zòn</span>
            <select className="field !mt-0" value={city} onChange={(event) => setCity(event.target.value)}>
              {['Tout zòn', ...cities].map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>

        <div className="mb-6 mt-9 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-bold text-muted">{filtered.length} pwofil demo jwenn</p>
          {(query || city !== 'Tout zòn' || service !== 'Tout sèvis') && (
            <button className="inline-flex items-center gap-1.5 text-xs font-extrabold text-violet" onClick={clear}>
              <X size={14} /> Efase filtè yo
            </button>
          )}
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((worker) => <WorkerCard key={worker.id} worker={worker} />)}
          </div>
        ) : (
          <div className="card grid min-h-72 place-items-center p-10 text-center">
            <div>
              <UsersRound size={36} className="mx-auto text-violet" />
              <h2 className="mt-4 font-display text-xl font-extrabold">Nou pa jwenn rezilta.</h2>
              <p className="mt-2 text-sm text-muted">Eseye chanje zòn nan oswa kalite sèvis la.</p>
              <button onClick={clear} className="mt-5 text-sm font-extrabold text-violet">Rekòmanse rechèch la</button>
            </div>
          </div>
        )}
        <p className="mt-8 rounded-2xl border border-coral/20 bg-peach p-4 text-xs leading-6 text-ink/80">
          Enpòtan: Sa yo se pwofil fiktif pou prezantasyon frontend. Pa konsidere yo kòm moun ki gen referans, fòmasyon oswa idantite verifye.
        </p>
      </div>
    </section>
  );
}

export function isService(value: string): value is Service {
  return value === 'Gadri' || value === 'Netwayaj' || value === 'Antretyen';
}
