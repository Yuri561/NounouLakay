export type Service = 'Gadri' | 'Netwayaj' | 'Antretyen';
export type RequestStatus = 'Nouvo' | 'An revizyon' | 'Fèmen';

export interface Worker {
  id: string;
  name: string;
  initials: string;
  service: Service;
  city: string;
  experience: string;
  languages: string[];
  bio: string;
  skills: string[];
  availability: string;
  color: string;
  featured?: boolean;
}

export interface ServiceRequest {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  city: string;
  service: Service;
  schedule: string;
  details: string;
  workerId?: string;
  status: RequestStatus;
}

export interface Application {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  city: string;
  service: Service;
  experience: string;
  notes: string;
  status: 'Resevwa' | 'An revizyon';
}

export interface Interview {
  id: string;
  person: string;
  role: 'Kandida' | 'Fanmi';
  date: string;
  time: string;
  channel: string;
  notes: string;
  status: 'Planifye' | 'Fini' | 'Anile';
}

export interface CarePlan {
  id: string;
  title: string;
  service: Service;
  weekday: string;
  start: string;
  end: string;
  instructions: string;
}

export interface AppData {
  requests: ServiceRequest[];
  applications: Application[];
  savedIds: string[];
  interviews: Interview[];
  carePlans: CarePlan[];
  trainingDone: string[];
}
