import { useState, type FormEvent } from 'react';
import { CheckCircle2, Mail, MessageSquare, ShieldAlert } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function Contact() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('Kesyon sou sèvis');
  const [message, setMessage] = useState('');
  const [preview, setPreview] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPreview(true);
  }

  return (
    <div className="section-pad">
      <div className="container-app grid items-start gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div><span className="eyebrow">Kontakte nou</span><h1 className="heading-xl mt-4">Ann pale sou <span className="text-violet">bezwen ou.</span></h1><p className="mt-6 max-w-lg text-base leading-8 text-muted">Fòm sa a montre kijan yon paj kontak ta ka fonksyone. Li pa voye okenn mesaj, epi NOUNOU LAKAY pa gen yon ekip sipò aktif nan demonstrasyon an.</p><div className="mt-8 space-y-4"><p className="flex items-start gap-3 text-sm"><MessageSquare size={20} className="text-violet" /> Kesyon sou travay, fanmi oswa sèvis</p><p className="flex items-start gap-3 text-sm"><Mail size={20} className="text-violet" /> Imèl ak WhatsApp reyèl ap vini pita</p><p className="flex items-start gap-3 text-sm"><ShieldAlert size={20} className="text-coral" /> Pa antre done sansib nan demo a</p></div></div>
        <div className="card p-6 sm:p-8">
          {preview ? <div role="status" className="space-y-4"><CheckCircle2 className="text-[#488B69]" size={35} /><h2 className="font-display text-2xl font-extrabold">Men mesaj ou prepare a.</h2><p className="text-sm text-muted">Sa se yon aperçu lokal sèlman. Pèsonn pa resevwa mesaj sa a.</p><div className="rounded-xl bg-cream p-5"><p className="text-xs font-bold text-violet">{subject} · {name}</p><p className="mt-3 whitespace-pre-wrap break-words text-sm leading-7">{message}</p></div><Button onClick={() => setPreview(false)} tone="outline">Modifye mesaj la</Button></div> : (
            <form className="space-y-5" onSubmit={submit}>
              <h2 className="font-display text-2xl font-extrabold">Prepare yon mesaj</h2>
              <label className="block text-sm font-semibold">Non ou<input required className="field" maxLength={80} value={name} onChange={(e) => setName(e.target.value)} placeholder="Non ou" /></label>
              <label className="block text-sm font-semibold">Sijè<select className="field" value={subject} onChange={(e) => setSubject(e.target.value)}><option>Kesyon sou sèvis</option><option>Kesyon sou travay</option><option>Kesyon sou patenarya</option><option>Lòt kesyon</option></select></label>
              <label className="block text-sm font-semibold">Mesaj<textarea required className="field min-h-[180px]" value={message} onChange={(e) => setMessage(e.target.value)} maxLength={2000} placeholder="Ekri kesyon ou a..." /></label>
              <Button type="submit" className="w-full">Gade aperçu mesaj la</Button>
              <p className="text-xs leading-6 text-muted">Fòm sa a pa konekte ak okenn API oswa sèvis imèl.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
