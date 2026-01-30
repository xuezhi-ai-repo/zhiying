import { useEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Sidebar from './sections/Sidebar';
import { usePathname } from './hooks/usePathname';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import CommunityPage from './pages/CommunityPage';
import TemplatesPage from './pages/TemplatesPage';
import WorksPage from './pages/WorksPage';
import SubjectsPage from './pages/SubjectsPage';
import FavoritesPage from './pages/FavoritesPage';
import MembershipPage from './pages/MembershipPage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';

gsap.registerPlugin(ScrollTrigger);

const routeMap = {
  '/': CreatePage,
  '/home': HomePage,
  '/create': CreatePage,
  '/community': CommunityPage,
  '/templates': TemplatesPage,
  '/works': WorksPage,
  '/subjects': SubjectsPage,
  '/favorites': FavoritesPage,
  '/membership': MembershipPage,
  '/settings': SettingsPage,
} as const;

function App() {
  const { path, navigate } = usePathname();

  useEffect(() => {
    // Initialize ScrollTrigger
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const CurrentPage = useMemo(() => {
    const normalized = path === '/' ? '/create' : path;
    return routeMap[normalized as keyof typeof routeMap] ?? NotFoundPage;
  }, [path]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Sidebar activePath={path} onNavigate={navigate} />
      <div className="lg:pl-72">
        <CurrentPage />
      </div>
    </div>
  );
}

export default App;
