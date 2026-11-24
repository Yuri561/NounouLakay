import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Download, ClipboardList, Search, Settings2, ShieldAlert, UsersRound } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { StatCard } from '../components/dashboard/StatCard';
import { EmptyState } from '../components/dashboard/EmptyState';
import { shortDate } from '../lib/utils';
import type { Application, ServiceRequest } from '../types';

function saveCSV(filename: string, rows: string[][]) {
  const csv = rows
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    .join('\r\n');
  const blob = new Blob(['\uFEFF', csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export default function AgencyDashboard() {
  const { data, updateRequestStatus, updateApplicationStatus, clearDemoData } = useApp();
  const [tab, setTab] = useState<'requests' | 'applications'>('requests');
  const [search, setSearch] = useState('');

  const requests = data.requests.filter((request) => `${request.name} ${request.city} ${request.service}`.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  const applications = data.applications.filter((application) => `${application.name} ${application.city} ${application.service}`.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

  function exportCurrent() {
    if (tab === 'requests') {
      saveCSV('nounou-lakay-demo-demandes.csv', [
        ['ID', 'Dat', 'Non', 'Telefòn', 'Sèvis', 'Zòn', 'Orè', 'Detay', 'Estati'],
        ...requests.map((r) => [r.id, r.createdAt, r.name, r.phone, r.service, r.city, r.schedule, r.details, r.status]),
      ]);
    } else {
      saveCSV('nounou-lakay-demo-candidatures.csv', [
        ['ID', 'Dat', 'Non', 'Telefòn', 'Sèvis', 'Zòn', 'Eksperyans', 'Nòt', 'Estati'],
        ...applications.map((a) => [a.id, a.createdAt, a.name, a.phone, a.service, a.city, a.experience, a.notes, a.status]),
      ]);
    }
  }

  function reset() {
    if (window.confirm('Efase tout demann, aplikasyon ak favori demo sou aparèy sa a?')) {
      clearDemoData();
    }
  }

  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="eyebrow">Jesyon ajans • Demo piblik</p>
          <h2 className="heading-lg mt-2">Tout bagay nan yon sèl espas.</h2>
          <p className="mt-3 text-sm leading-7 text-muted">Yon aperçu dashboard administrasyon an. Pa gen kont admin ni pèmisyon reyèl.</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-3 text-sm font-bold" onClick={exportCurrent}><Download size={17} /> Ekspòte CSV</button>
      </div>

      <Link to="/espas-ajans/entèvyou" className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-lilac p-6 text-violet transition hover:bg-[#E1D8F3]">
        <div><p className="font-display text-lg font-extrabold">Planifikatè entèvyou</p><p className="mt-1 text-sm text-muted">Òganize entèvyou ak kandida oswa fanmi nan yon espas demo.</p></div>
        <span className="rounded-xl bg-white px-5 py-3 text-sm font-bold">Ale nan randevou yo →</span>
      </Link>
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard icon={<ClipboardList size={21} />} label="Demann sèvis" value={data.requests.length} caption="Demann demo" />
        <StatCard icon={<UsersRound size={21} />} label="Aplikasyon travay" value={data.applications.length} caption="Aplikasyon demo" accent="bg-peach text-coral" />
        <StatCard icon={<Settings2 size={21} />} label="Dosye pou revize" value={data.requests.filter((r) => r.status === 'Nouvo').length + data.applications.filter((a) => a.status === 'Resevwa').length} caption="Estati lokal sèlman" accent="bg-sage text-[#488B69]" />
      </div>

      <div className="rounded-2xl border border-coral/25 bg-peach p-5 text-sm leading-7 text-ink/80">
        <div className="flex items-start gap-3"><ShieldAlert className="mt-1 shrink-0 text-coral" size={20} /><span><strong>Pa itilize dashboard sa a ak done reyèl.</strong> Li ouvè san otantifikasyon, epi tout done yo nan localStorage. Entegrasyon backend, kontwòl aksè ak verifikasyon idantite nesesè anvan lansman.</span></div>
      </div>

      <section className="card overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line p-5 sm:p-6">
          <div className="flex rounded-xl bg-cream p-1 text-sm font-bold">
            <button onClick={() => setTab('requests')} className={`rounded-lg px-4 py-2.5 transition ${tab === 'requests' ? 'bg-white text-violet shadow-sm' : 'text-muted'}`}>Demann ({data.requests.length})</button>
            <button onClick={() => setTab('applications')} className={`rounded-lg px-4 py-2.5 transition ${tab === 'applications' ? 'bg-white text-violet shadow-sm' : 'text-muted'}`}>Kandida ({data.applications.length})</button>
          </div>
          <label className="relative block w-full max-w-xs"><Search size={17} className="absolute left-3 top-3.5 text-muted" /><input aria-label="Rechèch dosye" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Rechèch non, sèvis, zòn..." className="field !mt-0 !pl-10" /></label>
        </div>

        {tab === 'requests' ? (
          requests.length ? <div className="divide-y divide-line">{requests.map((request) => (
            <RequestRow key={request.id} request={request} onStatusChange={updateRequestStatus} />
          ))}</div> : <EmptyState icon={<ClipboardList size={26} />} title="Pa gen demann pou montre." description="Demann demo fanmi yo ap parèt isit la." />
        ) : (
          applications.length ? <div className="divide-y divide-line">{applications.map((application) => (
            <ApplicationRow key={application.id} application={application} onStatusChange={updateApplicationStatus} />
          ))}</div> : <EmptyState icon={<UsersRound size={26} />} title="Pa gen aplikasyon pou montre." description="Aplikasyon demo kandida yo ap parèt isit la." />
        )}
      </section>

      <div className="flex justify-end"><button onClick={reset} className="text-xs font-bold text-[#B45353] hover:underline">Efase tout done demo sou navigatè sa a</button></div>
    </div>
  );
}

function RequestRow({ request, onStatusChange }: {
  request: ServiceRequest;
  onStatusChange: (id: string, status: ServiceRequest['status']) => void;
}) {
  return (
    <div className="grid gap-4 p-5 sm:p-6 lg:grid-cols-[1fr_180px] lg:items-center">
      <div className="min-w-0">
        <div className="flex flex-wrap gap-x-3 gap-y-1"><h3 className="font-display font-extrabold">{request.name}</h3><span className="pill bg-lilac text-violet">{request.service}</span></div>
        <p className="mt-2 text-xs text-muted">{request.city} · {shortDate(request.createdAt)} · {request.schedule}</p>
        <p className="mt-2 text-sm leading-6 text-ink/80">{request.details}</p>
        <p className="mt-2 text-xs text-muted">Telefòn demo: {request.phone}</p>
      </div>
      <label className="text-xs font-extrabold text-muted">Estati demo
        <select value={request.status} onChange={(event) => onStatusChange(request.id, event.target.value as ServiceRequest['status'])} className="field">
          <option>Nouvo</option><option>An revizyon</option><option>Fèmen</option>
        </select>
      </label>
    </div>
  );
}

function ApplicationRow({ application, onStatusChange }: {
  application: Application;
  onStatusChange: (id: string, status: Application['status']) => void;
}) {
  return (
    <div className="grid gap-4 p-5 sm:p-6 lg:grid-cols-[1fr_180px] lg:items-center">
      <div className="min-w-0">
        <div className="flex flex-wrap gap-x-3 gap-y-1"><h3 className="font-display font-extrabold">{application.name}</h3><span className="pill bg-peach text-coral">{application.service}</span></div>
        <p className="mt-2 text-xs text-muted">{application.city} · {shortDate(application.createdAt)} · {application.experience}</p>
        <p className="mt-2 text-sm leading-6 text-ink/80">{application.notes}</p>
        <p className="mt-2 text-xs text-muted">Telefòn demo: {application.phone}</p>
      </div>
      <label className="text-xs font-extrabold text-muted">Estati demo
        <select value={application.status} onChange={(event) => onStatusChange(application.id, event.target.value as Application['status'])} className="field">
          <option>Resevwa</option><option>An revizyon</option>
        </select>
      </label>
    </div>
  );
}
