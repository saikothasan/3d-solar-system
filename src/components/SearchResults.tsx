import { useMemo } from 'react';
import { solarSystemData } from '../data/celestialObjects';
import { useSolarSystemStore } from '../store/solarSystemStore';

interface Props {
  searchTerm: string;
}

export default function SearchResults({ searchTerm }: Props) {
  const { setSelectedObject } = useSolarSystemStore();

  const filteredObjects = useMemo(() => {
    if (!searchTerm) return [];
    return solarSystemData.filter(obj => 
      obj.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  if (!filteredObjects.length) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-black/50 backdrop-blur-md rounded-lg overflow-hidden">
      {filteredObjects.map(obj => (
        <button
          key={obj.id}
          className="w-full px-4 py-2 text-left hover:bg-white/10 transition-colors"
          onClick={() => setSelectedObject(obj)}
        >
          <div className="font-medium">{obj.name}</div>
          <div className="text-sm text-gray-300">{obj.type}</div>
        </button>
      ))}
    </div>
  );
}