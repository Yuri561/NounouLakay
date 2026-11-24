import { ArrowRight, Bookmark, CalendarDays, ClipboardList, Clock3, Heart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { workers } from '../data/seed';
import { shortDate } from '../lib/utils';
import { StatCard } from '../components/dashboard/StatCard';
import { EmptyState } from '../components/dashboard/EmptyState';
import { WorkerCard } from '../components/caregivers/WorkerCard';

export default function FamilyDashboard() {
  const { data } = useApp();
  const favorites = workers.filter((worker) => data.savedIds.includes(worker.id));
  const openRequests = data.requests.filter((request) => request.status !== 'Fèmen').length;

  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="eyebrow">Byenveni nan espas fanmi</p>
          <h2 className="heading-lg mt-2">Ann òganize bezwen lakay ou.</h2>
          <p className="mt-3 text-sm text-muted">Swiv demann demo ou yo ak pwofil ou mete sou kote.</p>
        </div>
        <Link to="/demann" className="inline-flex items-center gap-2 rounded-xl bg-violet px-5 py-3 text-sm font-bold text-white">Nouvo demann <ArrowRight size={17} /></Link>
      </div>

      <Link to="/espas-fanmi/plan" className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-[#EAE4F7] p-6 transition hover:bg-[#E1D8F3]">
        <div className="flex items-center gap-4"><span className="rounded-xl bg-white p-3 text-violet"><CalendarDays size={23} /></span><div><p className="font-display text-lg font-extrabold">Planifye semèn fanmi ou</p><p className="mt-1 text-sm text-muted">Prepare orè pou gadri, netwayaj ak antretyen.</p></div></div>
        <ArrowRight className="text-violet" size={20} />
      </Link>
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard icon={<ClipboardList size={21} />} label="Total demann" value={data.requests.length} caption="Anrejistre nan navigatè ou" />
        <StatCard icon={<Clock3 size={21} />} label="Demann ouvè" value={openRequests} caption="Pa gen tretman reyèl" accent="bg-peach text-coral" />
        <StatCard icon={<Heart size={21} />} label="Pwofil sove" value={favorites.length} caption="Pwofil fiktif pou demo" accent="bg-sage text-[#488B69]" />
      </div>

      <section>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-xl font-extrabold">Demann mwen yo</h3>
          <span className="text-xs text-muted">Dènye demann yo an premye</span>
        </div>
        {data.requests.length ? (
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[660px] text-left text-sm">
                <thead className="bg-cream text-xs text-muted"><tr><th className="px-6 py-4">Sèvis</th><th className="px-6 py-4">Zòn</th><th className="px-6 py-4">Dat</th><th className="px-6 py-4">Estati</th></tr></thead>
                <tbody>{data.requests.map((request) => (
                  <tr key={request.id} className="border-t border-line"><td className="px-6 py-4 font-bold">{request.service}<p className="mt-1 max-w-[280px] truncate text-xs font-normal text-muted">{request.details}</p></td><td className="px-6 py-4">{request.city}</td><td className="px-6 py-4 text-muted">{shortDate(request.createdAt)}</td><td className="px-6 py-4"><span className="pill bg-lilac text-violet">{request.status}</span></td></tr>
                ))}</tbody>
              </table>
            </div>
          </div>
        ) : (
          <EmptyState icon={<ClipboardList size={26} />} title="Ou poko gen demann." description="Kreye premye demann demo ou pou wè kijan espas fanmi an mache." action={<Link className="font-bold text-violet" to="/demann">Kreye yon demann →</Link>} />
        )}
      </section>

      <section>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-xl font-extrabold">Pwofil mwen sove</h3>
          <Link to="/travayè" className="flex items-center gap-1.5 text-sm font-bold text-violet">Chèche plis <Search size={16} /></Link>
        </div>
        {favorites.length ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{favorites.map((worker) => <WorkerCard key={worker.id} worker={worker} />)}</div>
        ) : (
          <EmptyState icon={<Bookmark size={26} />} title="Pa gen pwofil sove." description="Ale nan anyè a epi sove kèk pwofil demo pou jwenn yo fasil pita." action={<Link className="font-bold text-violet" to="/travayè">Dekouvri pwofil yo →</Link>} />
        )}
      </section>
    </div>
  );
}
