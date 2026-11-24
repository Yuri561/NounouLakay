import { ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container-app grid min-h-[60vh] place-items-center py-20 text-center">
      <div><Home className="mx-auto text-violet" size={42} /><p className="mt-5 font-display text-7xl font-extrabold text-lilac">404</p><h1 className="mt-4 font-display text-2xl font-extrabold">Paj sa a pa disponib.</h1><p className="mt-3 text-sm text-muted">Ann retounen kote tout bagay kòmanse.</p><Link to="/" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-violet px-5 py-3 text-sm font-bold text-white"><ArrowLeft size={17} /> Paj dakèy</Link></div>
    </div>
  );
}
