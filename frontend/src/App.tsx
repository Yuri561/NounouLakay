import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PublicLayout } from './components/layout/PublicLayout';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import Home from './pages/Home';
import Workers from './pages/Workers';
import WorkerProfile from './pages/WorkerProfile';
import RequestService from './pages/RequestService';
import Apply from './pages/Apply';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import FamilyDashboard from './pages/FamilyDashboard';
import WorkerDashboard from './pages/WorkerDashboard';
import AgencyDashboard from './pages/AgencyDashboard';
import NotFound from './pages/NotFound';
import FAQ from './pages/FAQ';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import SafetyCenter from './pages/SafetyCenter';
import FamilyPlanner from './pages/FamilyPlanner';
import TrainingCenter from './pages/TrainingCenter';
import InterviewPlanner from './pages/InterviewPlanner';

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/travayè', element: <Workers /> },
      { path: '/travayè/:id', element: <WorkerProfile /> },
      { path: '/demann', element: <RequestService /> },
      { path: '/pou-travayè', element: <Apply /> },
      { path: '/kijan-li-mache', element: <HowItWorks /> },
      { path: '/sou-nou', element: <About /> },
      { path: '/kesyon', element: <FAQ /> },
      { path: '/tarif', element: <Pricing /> },
      { path: '/kontakte', element: <Contact /> },
      { path: '/sekirite', element: <SafetyCenter /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      { path: '/espas-fanmi', element: <FamilyDashboard /> },
      { path: '/espas-travayè', element: <WorkerDashboard /> },
      { path: '/espas-ajans', element: <AgencyDashboard /> },
      { path: '/espas-fanmi/plan', element: <FamilyPlanner /> },
      { path: '/espas-travayè/fòmasyon', element: <TrainingCenter /> },
      { path: '/espas-ajans/entèvyou', element: <InterviewPlanner /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
