import { Info } from 'lucide-react';
import { useSolarSystemStore } from '../store/solarSystemStore';
import TimeControls from './controls/TimeControls';
import SearchBar from './ui/SearchBar';
import InfoPanel from './ui/InfoPanel';

export default function UI() {
  const { toggleOrbits } = useSolarSystemStore();

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md rounded-lg p-4 flex gap-4 items-center pointer-events-auto">
        <TimeControls />
        
        <div className="w-px h-6 bg-white/20" />
        
        <button
          onClick={toggleOrbits}
          className="p-2 hover:bg-white/10 rounded-full"
          title="Toggle Orbits"
        >
          <Info className="w-6 h-6" />
        </button>
        
        <SearchBar />
      </div>

      <InfoPanel />
    </div>
  );
}