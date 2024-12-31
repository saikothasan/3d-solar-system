import { useState } from 'react';
import { solarSystemData } from '../data/celestialObjects';
import { CelestialObject } from '../types/celestialObjects';

export default function ComparisonTool() {
  const [object1, setObject1] = useState<CelestialObject>(solarSystemData[0]);
  const [object2, setObject2] = useState<CelestialObject>(solarSystemData[1]);

  const formatNumber = (num: number) => {
    return num.toLocaleString(undefined, {
      maximumFractionDigits: 2
    });
  };

  return (
    <div className="absolute top-4 right-4 w-96 bg-black/50 backdrop-blur-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Compare Objects</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {[object1, object2].map((obj, index) => (
          <select
            key={index}
            value={obj.id}
            onChange={(e) => {
              const newObj = solarSystemData.find(o => o.id === e.target.value)!;
              index === 0 ? setObject1(newObj) : setObject2(newObj);
            }}
            className="bg-white/10 rounded px-2 py-1 mb-4"
          >
            {solarSystemData.map(o => (
              <option key={o.id} value={o.id}>{o.name}</option>
            ))}
          </select>
        ))}
      </div>

      <div className="space-y-2 text-sm">
        <div className="grid grid-cols-3 gap-2">
          <div>Property</div>
          <div>{object1.name}</div>
          <div>{object2.name}</div>
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          <div>Diameter</div>
          <div>{formatNumber(object1.diameter)} km</div>
          <div>{formatNumber(object2.diameter)} km</div>
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          <div>Mass</div>
          <div>{formatNumber(object1.mass)} kg</div>
          <div>{formatNumber(object2.mass)} kg</div>
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          <div>Distance</div>
          <div>{formatNumber(object1.distanceFromSun)} AU</div>
          <div>{formatNumber(object2.distanceFromSun)} AU</div>
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          <div>Orbital Period</div>
          <div>{formatNumber(object1.orbitalPeriod)} days</div>
          <div>{formatNumber(object2.orbitalPeriod)} days</div>
        </div>
      </div>
    </div>
  );
}