import {
  ArrowLeft,
  BriefcaseBusiness,
  ClipboardList,
  HeartHandshake,
  LayoutDashboard,
  Menu,
  CalendarDays,
  BookOpen,
  Settings2,
  UsersRound,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

const entries = [
  { to: '/espas-fanmi', label: 'Espas fanmi', icon: LayoutDashboard },
  { to: '/espas-travayè', label: 'Espas travayè', icon: BriefcaseBusiness },
  { to: '/espas-ajans', label: 'Espas ajans', icon: UsersRound },
  { to: '/espas-fanmi/plan', label: 'Plan fanmi', icon: CalendarDays },
  { to: '/espas-travayè/fòmasyon', label: 'Sant aprantisaj', icon: BookOpen },
  { to: '/espas-ajans/entèvyou', label: 'Entèvyou ajans', icon: ClipboardList },
];

export function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const title = entries.find((entry) => entry.to === pathname)?.label ?? 'Dashboard';

  return (
    <div className="min-h-screen bg-[#F7F6FB] lg:grid lg:grid-cols-[255px_1fr]">
      <aside className={`fixed inset-y-0 left-0 z-50 w-[255px] border-r border-line bg-white p-5 transition-transform lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 lg:overflow-y-auto ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 font-display text-base font-extrabold">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet text-white"><HeartHandshake size={23} /></span>
            NOUNOU <span className="-ml-2 text-violet">LAKAY</span>
          </Link>
          <button onClick={() => setOpen(false)} className="lg:hidden" aria-label="Fèmen meni an"><X size={22} /></button>
        </div>
        <p className="mt-8 px-3 text-[11px] font-extrabold uppercase tracking-[.22em] text-muted">Espas travay • Demo</p>
        <nav className="mt-4 space-y-1">
          {entries.map(({ to, icon: Icon, label }) => (
            <NavLink
              to={to}
              key={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition ${isActive ? 'bg-lilac text-violet' : 'text-muted hover:bg-cream hover:text-ink'}`}
            >
              <Icon size={19} /> {label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-5 border-t border-line pt-5">
          <Link to="/demann" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-muted hover:bg-cream"><ClipboardList size={19} /> Nouvo demann</Link>
          <Link to="/pou-travayè" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-muted hover:bg-cream"><Settings2 size={19} /> Aplikasyon travay</Link>
        </div>
        <div className="mt-5 rounded-2xl bg-peach p-4 text-xs leading-6 text-ink/75">
          <strong>Mod demo:</strong> Pa gen kont reyèl, jesyon aksè ni verifikasyon. Tout done rete sou aparèy ou.
        </div>
      </aside>

      {open && <button onClick={() => setOpen(false)} className="fixed inset-0 z-40 bg-ink/40 lg:hidden" aria-label="Fèmen meni" />}

      <div className="min-w-0">
        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-line bg-white/95 px-5 backdrop-blur-lg sm:px-8">
          <div className="flex items-center gap-3">
            <button onClick={() => setOpen(true)} className="rounded-lg border border-line p-2 lg:hidden" aria-label="Louvri meni"><Menu size={21} /></button>
            <div><p className="text-[11px] font-bold uppercase tracking-widest text-muted">NOUNOU LAKAY</p><h1 className="font-display text-lg font-extrabold">{title}</h1></div>
          </div>
          <Link to="/" className="flex items-center gap-1.5 text-xs font-extrabold text-violet"><ArrowLeft size={16} /> <span className="hidden sm:inline">Retounen sou sit la</span><span className="sm:hidden">Sit la</span></Link>
        </header>
        <main className="mx-auto max-w-[1300px] p-5 sm:p-8 lg:p-10"><Outlet /></main>
      </div>
    </div>
  );
}
