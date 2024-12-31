import { FastForward, Pause, Play, Rewind } from 'lucide-react';
import { useSolarSystemStore } from '../../store/solarSystemStore';

export default function TimeControls() {
  const { timeScale, setTimeScale } = useSolarSystemStore();

  const speeds = [0, 0.5, 1, 2, 5];
  const currentSpeedIndex = speeds.indexOf(timeScale);

  const handleSpeedChange = (direction: 'slower' | 'faster') => {
    const newIndex = direction === 'faster'
      ? Math.min(currentSpeedIndex + 1, speeds.length - 1)
      : Math.max(currentSpeedIndex - 1, 0);
    setTimeScale(speeds[newIndex]);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleSpeedChange('slower')}
        className="p-2 hover:bg-white/10 rounded-full disabled:opacity-50"
        disabled={currentSpeedIndex === 0}
        title="Slow down"
      >
        <Rewind className="w-6 h-6" />
      </button>
      
      <button
        onClick={() => setTimeScale(timeScale === 0 ? 1 : 0)}
        className="p-2 hover:bg-white/10 rounded-full"
        title={timeScale === 0 ? "Play" : "Pause"}
      >
        {timeScale === 0 ? <Play className="w-6 h-6" /> : <Pause className="w-6 h-6" />}
      </button>
      
      <button
        onClick={() => handleSpeedChange('faster')}
        className="p-2 hover:bg-white/10 rounded-full disabled:opacity-50"
        disabled={currentSpeedIndex === speeds.length - 1}
        title="Speed up"
      >
        <FastForward className="w-6 h-6" />
      </button>
      
      <div className="text-sm ml-2">
        {timeScale}x Speed
      </div>
    </div>
  );
}