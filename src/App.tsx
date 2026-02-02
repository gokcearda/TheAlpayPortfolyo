import { useState } from 'react';
import Home from './components/Home';
import CaseStudy from './components/CaseStudy';
import About from './components/About';
import Navigation from './components/Navigation';
import { caseStudies } from './data/caseStudies';

type View = 'home' | 'about' | 'case-study';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedCaseId, setSelectedCaseId] = useState<string>('');

  const handleViewCase = (id: string) => {
    setSelectedCaseId(id);
    setCurrentView('case-study');
  };

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    if (view === 'home') setSelectedCaseId('');
  };

  const selectedCase = caseStudies.find(c => c.id === selectedCaseId);

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentView={currentView} onNavigate={handleNavigate} />

      <main>
        {currentView === 'home' && <Home onViewCase={handleViewCase} />}
        {currentView === 'about' && <About />}
        {currentView === 'case-study' && selectedCase && (
          <CaseStudy study={selectedCase} />
        )}
      </main>

      <footer className="border-t border-gray-200 mt-24">
        <div className="max-w-3xl mx-auto px-6 py-12 text-sm text-gray-500">
          <p>Available for full-time roles and consulting engagements</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
