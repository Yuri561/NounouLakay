import { ArrowRight, BriefcaseBusiness, CalendarClock, FileText, Lightbulb, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { shortDate } from '../lib/utils';
import { StatCard } from '../components/dashboard/StatCard';
import { EmptyState } from '../components/dashboard/EmptyState';

export default function WorkerDashboard() {
  const { data } = useApp();
  const reviewing = data.applications.filter((application) => application.status === 'An revizyon').length;

  return (
    <div className="space-y-9">
      <Link to="/espas-travayè/fòmasyon" className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-lilac p-6 text-violet transition hover:bg-[#E1D8F3]">
        <div><p className="font-display text-lg font-extrabold">Sant aprantisaj</p><p className="mt-1 text-sm text-muted">Aprann pratik fondamantal pou sèvis lakay epi suiv pwogrè demo ou.</p></div>
        <span className="rounded-xl bg-white px-5 py-3 text-sm font-bold">Dekouvri leson yo →</span>
      </Link>
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="eyebrow">Espas kandida</p>
          <h2 className="heading-lg mt-2">Talann ou merite yon chans.</h2>
          <p className="mt-3 text-sm leading-7 text-muted">Prepare aplikasyon demo ou epi suiv sa ou anrejistre sou aparèy ou.</p>
        </div>
        <Link to="/pou-travayè" className="inline-flex items-center gap-2 rounded-xl bg-violet px-5 py-3 text-sm font-bold text-white">Ranpli aplikasyon <ArrowRight size={17} /></Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Aplikasyon demo" value={data.applications.length} icon={<FileText size={21} />} caption="Pa soumèt bay ajans reyèl" />
        <StatCard label="An revizyon (demo)" value={reviewing} icon={<CalendarClock size={21} />} caption="Estati ajans demonstrasyon" accent="bg-peach text-coral" />
        <StatCard label="Kategori sèvis" value="3" icon={<BriefcaseBusiness size={21} />} caption="Gadri, netwayaj, antretyen" accent="bg-sage text-[#488B69]" />
      </div>

      <section>
        <h3 className="mb-5 font-display text-xl font-extrabold">Aplikasyon anrejistre yo</h3>
        {data.applications.length ? (
          <div className="grid gap-4 md:grid-cols-2">
            {data.applications.map((application) => (
              <div key={application.id} className="card p-6">
                <div className="flex flex-wrap items-center justify-between gap-3"><h4 className="font-display text-lg font-extrabold">{application.name}</h4><span className="pill bg-lilac text-violet">{application.status}</span></div>
                <p className="mt-2 text-sm text-muted">{application.service} · {application.city}</p>
                <p className="mt-4 line-clamp-3 text-sm leading-7 text-muted">{application.notes || 'Pa gen lòt detay.'}</p>
                <p className="mt-5 text-xs text-muted">Kreye {shortDate(application.createdAt)}</p>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState icon={<UsersRound size={26} />} title="Ou poko ranpli aplikasyon demo a." description="Fè premye pa a epi prezante eksperyans ak enterè ou." action={<Link className="font-bold text-violet" to="/pou-travayè">Kòmanse aplikasyon →</Link>} />
        )}
      </section>

      <section className="rounded-[30px] bg-lilac p-7 sm:p-9">
        <div className="flex items-center gap-3"><Lightbulb size={25} className="text-violet" /><h3 className="font-display text-xl font-extrabold">Prepare w pou pwochen opòtinite a</h3></div>
        <div className="mt-6 grid gap-4 text-sm leading-7 text-ink/80 md:grid-cols-3">
          <p className="rounded-2xl bg-white/70 p-5">Prepare lis eksperyans ou ak kote ou te travay deja.</p>
          <p className="rounded-2xl bg-white/70 p-5">Rasanble referans ki kapab pale sou travay ou.</p>
          <p className="rounded-2xl bg-white/70 p-5">Aprann prensip kominikasyon, sekirite ak responsablite.</p>
        </div>
      </section>
    </div>
  );
}
