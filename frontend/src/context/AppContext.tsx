import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { AppData, Application, ServiceRequest, CarePlan, Interview } from '../types';

const STORAGE_KEY = 'nounou-lakay-demo-v1';
const initialData: AppData = {
  requests: [],
  applications: [],
  savedIds: [],
  interviews: [],
  carePlans: [],
  trainingDone: [],
};

interface AppContextValue {
  data: AppData;
  addRequest: (request: ServiceRequest) => void;
  updateRequestStatus: (id: string, status: ServiceRequest['status']) => void;
  addApplication: (application: Application) => void;
  updateApplicationStatus: (id: string, status: Application['status']) => void;
  toggleSaved: (id: string) => void;
  clearDemoData: () => void;
  addInterview: (interview: Interview) => void;
  updateInterview: (id: string, status: Interview['status']) => void;
  addCarePlan: (plan: CarePlan) => void;
  removeCarePlan: (id: string) => void;
  toggleLesson: (id: string) => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

function getInitialData(): AppData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return initialData;
    const parsed: Partial<AppData> = JSON.parse(stored);
    return {
      requests: Array.isArray(parsed.requests) ? parsed.requests : [],
      applications: Array.isArray(parsed.applications) ? parsed.applications : [],
      savedIds: Array.isArray(parsed.savedIds) ? parsed.savedIds : [],
      interviews: Array.isArray(parsed.interviews) ? parsed.interviews : [],
      carePlans: Array.isArray(parsed.carePlans) ? parsed.carePlans : [],
      trainingDone: Array.isArray(parsed.trainingDone) ? parsed.trainingDone : [],
    };
  } catch {
    return initialData;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AppData>(getInitialData);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const addRequest = useCallback((request: ServiceRequest) => {
    setData((previous) => ({ ...previous, requests: [request, ...previous.requests] }));
  }, []);

  const updateRequestStatus = useCallback((id: string, status: ServiceRequest['status']) => {
    setData((previous) => ({
      ...previous,
      requests: previous.requests.map((request) => request.id === id ? { ...request, status } : request),
    }));
  }, []);

  const addApplication = useCallback((application: Application) => {
    setData((previous) => ({ ...previous, applications: [application, ...previous.applications] }));
  }, []);

  const updateApplicationStatus = useCallback((id: string, status: Application['status']) => {
    setData((previous) => ({
      ...previous,
      applications: previous.applications.map((application) => application.id === id ? { ...application, status } : application),
    }));
  }, []);

  const toggleSaved = useCallback((id: string) => {
    setData((previous) => ({
      ...previous,
      savedIds: previous.savedIds.includes(id)
        ? previous.savedIds.filter((saved) => saved !== id)
        : [...previous.savedIds, id],
    }));
  }, []);

  const addInterview = useCallback((interview: Interview) => {
    setData((previous) => ({
      ...previous,
      interviews: [interview, ...previous.interviews],
    }));
  }, []);

  const updateInterview = useCallback((id: string, status: Interview['status']) => {
    setData((previous) => ({
      ...previous,
      interviews: previous.interviews.map((interview) =>
        interview.id === id ? { ...interview, status } : interview,
      ),
    }));
  }, []);

  const addCarePlan = useCallback((plan: CarePlan) => {
    setData((previous) => ({ ...previous, carePlans: [plan, ...previous.carePlans] }));
  }, []);

  const removeCarePlan = useCallback((id: string) => {
    setData((previous) => ({
      ...previous,
      carePlans: previous.carePlans.filter((plan) => plan.id !== id),
    }));
  }, []);

  const toggleLesson = useCallback((id: string) => {
    setData((previous) => ({
      ...previous,
      trainingDone: previous.trainingDone.includes(id)
        ? previous.trainingDone.filter((lesson) => lesson !== id)
        : [...previous.trainingDone, id],
    }));
  }, []);

  const clearDemoData = useCallback(() => setData(initialData), []);

  const value = useMemo(() => ({
    data,
    addRequest,
    updateRequestStatus,
    addApplication,
    updateApplicationStatus,
    toggleSaved,
    clearDemoData,
    addInterview,
    updateInterview,
    addCarePlan,
    removeCarePlan,
    toggleLesson,
  }), [data, addRequest, updateRequestStatus, addApplication, updateApplicationStatus,
    toggleSaved, clearDemoData, addInterview, updateInterview, addCarePlan,
    removeCarePlan, toggleLesson]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used inside AppProvider');
  return context;
}
