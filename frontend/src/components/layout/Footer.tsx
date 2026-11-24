import { HeartHandshake, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-app grid gap-10 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="max-w-sm">
          <Link to="/" className="flex items-center gap-3 font-display text-xl font-extrabold">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10"><HeartHandshake /></span>
            NOUNOU LAKAY
          </Link>
          <p className="mt-5 text-sm leading-7 text-white/65">
            Bonjan swen pou pitit ou, plis opòtinite pou moun yo. Yon pon ant fanmi ak moun k ap chèche travay ann Ayiti.
          </p>
          <div className="mt-6 flex gap-3 text-white/70">
            <span aria-label="Facebook" className="rounded-full border border-white/20 p-2"><Facebook size={18} /></span>
            <span aria-label="Instagram" className="rounded-full border border-white/20 p-2"><Instagram size={18} /></span>
          </div>
        </div>
        <div>
          <h3 className="font-display font-bold">Eksplore</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
            <Link className="hover:text-white" to="/travayè">Jwenn pwofesyonèl</Link>
            <Link className="hover:text-white" to="/kijan-li-mache">Kijan li mache</Link>
            <Link className="hover:text-white" to="/pou-travayè">Vin travay avèk nou</Link>
            <Link className="hover:text-white" to="/sou-nou">Sou nou</Link>
            <Link className="hover:text-white" to="/sekirite">Sekirite ak konfyans</Link>
            <Link className="hover:text-white" to="/kesyon">Kesyon souvan</Link>
            <Link className="hover:text-white" to="/tarif">Modèl komisyon</Link>
            <Link className="hover:text-white" to="/kontakte">Kontak</Link>
          </div>
        </div>
        <div>
          <h3 className="font-display font-bold">Espas demo</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
            <Link className="hover:text-white" to="/espas-fanmi">Fanmi <ArrowUpRight className="inline" size={14} /></Link>
            <Link className="hover:text-white" to="/espas-travayè">Travayè <ArrowUpRight className="inline" size={14} /></Link>
            <Link className="hover:text-white" to="/espas-ajans">Ajans <ArrowUpRight className="inline" size={14} /></Link>
            <Link className="hover:text-white" to="/espas-fanmi/plan">Planifikasyon fanmi</Link>
            <Link className="hover:text-white" to="/espas-travayè/fòmasyon">Sant aprantisaj</Link>
            <Link className="hover:text-white" to="/espas-ajans/entèvyou">Entèvyou</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-app flex flex-wrap justify-between gap-3 py-5 text-xs text-white/55">
          <span>© {new Date().getFullYear()} Nounou Lakay. Konstwi pou Ayiti 🇭🇹</span>
          <span>Demonstrasyon frontend — pa gen verifikasyon, rekritman ni peman reyèl.</span>
        </div>
      </div>
    </footer>
  );
}
