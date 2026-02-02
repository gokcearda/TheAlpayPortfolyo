type View = 'home' | 'about' | 'case-study';

interface NavigationProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export default function Navigation({ currentView, onNavigate }: NavigationProps) {
  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="max-w-3xl mx-auto px-6 py-6 flex justify-between items-center">
        <button
          onClick={() => onNavigate('home')}
          className="font-semibold text-gray-900 hover:text-gray-600 transition-colors"
        >
          Sarah Chen
        </button>
        <div className="flex gap-8 text-sm">
          <button
            onClick={() => onNavigate('home')}
            className={`transition-colors ${
              currentView === 'home' || currentView === 'case-study'
                ? 'text-teal-600 font-medium'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Work
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`transition-colors ${
              currentView === 'about'
                ? 'text-teal-600 font-medium'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Thinking
          </button>
        </div>
      </div>
    </nav>
  );
}
