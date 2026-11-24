import { useState } from 'react';
import { BookOpen, CheckCircle2, Clock3, GraduationCap, ShieldAlert } from 'lucide-react';
import { lessons } from '../data/training';
import { useApp } from '../context/AppContext';

export default function TrainingCenter() {
  const { data, toggleLesson } = useApp();
  const [filter, setFilter] = useState('Tout');
  const [expanded, setExpanded] = useState<string | null>(null);
  const visible = lessons.filter((lesson) => filter === 'Tout' || lesson.service === filter || lesson.service === 'Tout moun');
  const percentage = Math.round((data.trainingDone.length / lessons.length) * 100);

  return (
    <div className="space-y-8">
      <div className="rounded-[30px] bg-[#332B68] p-7 text-white sm:p-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold"><GraduationCap size={17} /> Sant aprantisaj demo</span>
        <h2 className="mt-5 max-w-xl font-display text-3xl font-extrabold sm:text-4xl">Aprann. Prepare tèt ou. Grandi.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">Ti modil entwodiksyon pou pwofesyonèl sèvis lakay. Kontni sa yo pa fòmasyon sètifye, ni yo pa ranplase verifikasyon, fòmasyon pratik oswa premye swen.</p>
        <div className="mt-7 max-w-lg rounded-2xl bg-white/10 p-5">
          <div className="mb-3 flex justify-between text-sm font-bold"><span>Pwogrè mwen</span><span>{data.trainingDone.length}/{lessons.length} leson</span></div>
          <div className="h-2.5 overflow-hidden rounded-full bg-white/20"><div className="h-full rounded-full bg-[#F5B19F] transition-all" style={{ width: `${percentage}%` }} /></div>
          <p className="mt-2 text-xs text-white/70">{percentage}% konplete lokalman</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {['Tout', 'Gadri', 'Netwayaj', 'Antretyen'].map((item) => (
          <button key={item} onClick={() => setFilter(item)} className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${filter === item ? 'bg-violet text-white' : 'border border-line bg-white text-muted hover:text-violet'}`}>{item}</button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {visible.map((lesson) => {
          const done = data.trainingDone.includes(lesson.id);
          const open = expanded === lesson.id;
          return (
            <article key={lesson.id} className="card p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-2xl bg-lilac p-3 text-violet"><BookOpen size={23} /></span>
                {done && <span className="pill bg-sage text-[#387B59]"><CheckCircle2 size={15} /> Fini</span>}
              </div>
              <p className="eyebrow mt-5">{lesson.service}</p>
              <h3 className="mt-2 font-display text-xl font-extrabold">{lesson.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{lesson.summary}</p>
              <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-muted"><Clock3 size={15} /> {lesson.duration} • Lekti kout</p>
              {open && <ol className="mt-5 space-y-3 border-t border-line pt-5">{lesson.steps.map((step, index) => <li className="flex gap-3 text-sm leading-6" key={step}><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-lilac text-xs font-bold text-violet">{index + 1}</span>{step}</li>)}</ol>}
              <div className="mt-6 flex flex-wrap gap-2">
                <button onClick={() => setExpanded(open ? null : lesson.id)} className="rounded-xl bg-violet px-4 py-3 text-xs font-bold text-white">{open ? 'Fèmen leson an' : 'Li leson an'}</button>
                <button onClick={() => toggleLesson(lesson.id)} className="rounded-xl border border-line px-4 py-3 text-xs font-bold text-violet">{done ? 'Retire mak fini' : 'Make kòm fini'}</button>
              </div>
            </article>
          );
        })}
      </div>
      <p className="flex gap-2 rounded-2xl bg-peach p-5 text-sm leading-7"><ShieldAlert className="mt-1 shrink-0 text-coral" size={19} /> Done pwogrè yo rete nan navigatè sa a. Fini leson pa vle di yon moun verifye, fòme, sètifye oswa kalifye pou gadri.</p>
    </div>
  );
}
