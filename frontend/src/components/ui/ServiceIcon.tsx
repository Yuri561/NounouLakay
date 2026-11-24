import { Baby, Sparkles, Wrench } from 'lucide-react';
import type { Service } from '../../types';

export function ServiceIcon({ service, size = 22 }: { service: Service; size?: number }) {
  if (service === 'Gadri') return <Baby size={size} />;
  if (service === 'Netwayaj') return <Sparkles size={size} />;
  return <Wrench size={size} />;
}
