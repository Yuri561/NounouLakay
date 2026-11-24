import { useState } from 'react';
import { HeartHandshake, Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const links = [
  { to: '/travayè', label: 'Jwenn pwofesyonèl' },
  { to: '/kijan-li-mache', label: 'Kijan li mache' },
  { to: '/pou-travayè', label: 'Pou moun k ap travay' },
  { to: '/sekirite', label: 'Sekirite' },
  { to: '/tarif', label: 'Tarif' },
  { to: '/kesyon', label: 'FAQ' },
  { to: '/sou-nou', label: 'Sou nou' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu after navigating.
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/95 backdrop-blur-xl">
      <div className="container-app flex h-[76px] items-center justify-between gap-4">
        <Link to="/" onClick={close} className="flex shrink-0 items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-violet text-white shadow-lg shadow-violet/20">
            <HeartHandshake size={24} />
          </span>
          <span className="font-display text-[17px] font-extrabold leading-tight tracking-[-.04em] sm:text-xl">
            NOUNOU <span className="text-violet">LAKAY</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0 lg:flex" aria-label="Navigasyon prensipal">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `navlink ${isActive ? 'bg-lilac text-violet' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Link to="/espas-fanmi" className="navlink">Espas mwen</Link>
          <Link to="/demann" className="inline-flex items-center gap-2 rounded-xl bg-violet px-4 py-3 text-sm font-bold text-white transition hover:bg-[#3C347D]">
            Fè yon demann <ArrowUpRight size={16} />
          </Link>
        </div>

        <button
          aria-label={open ? 'Fèmen meni an' : 'Louvri meni an'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="rounded-xl border border-line bg-white p-2.5 lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-5 pb-6 pt-3 shadow-soft lg:hidden" aria-label="Meni mobil">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-1">
            {links.map((item) => (
              <Link key={item.to} to={item.to} onClick={close} className="navlink py-3">
                {item.label}
              </Link>
            ))}
            <Link to="/espas-fanmi" onClick={close} className="navlink py-3">Espas fanmi</Link>
            <Link to="/espas-travayè" onClick={close} className="navlink py-3">Espas travayè</Link>
            <Link to="/espas-ajans" onClick={close} className="navlink py-3">Espas ajans</Link>
            <Link to="/demann" onClick={close} className="mt-2 rounded-xl bg-violet px-5 py-3 text-center text-sm font-bold text-white">
              Fè yon demann
            </Link>
          </div>
        </nav>
      )}
      <span className="sr-only">Paj aktyèl: {location.pathname}</span>
    </header>
  );
}
