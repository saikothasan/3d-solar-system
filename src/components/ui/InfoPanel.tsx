import { useSolarSystemStore } from '../../store/solarSystemStore';

export default function InfoPanel() {
  const { selectedObject } = useSolarSystemStore();

  if (!selectedObject) return null;

  return (
    <div className="absolute top-4 right-4 w-80 bg-black/50 backdrop-blur-md rounded-lg p-4 pointer-events-auto">
      <h2 className="text-xl font-bold mb-2">{selectedObject.name}</h2>
      <p className="text-sm mb-4">{selectedObject.description}</p>
      
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div>Diameter: {selectedObject.diameter.toLocaleString()} km</div>
        <div>Distance: {selectedObject.distanceFromSun} AU</div>
        <div>Orbital Period: {selectedObject.orbitalPeriod} days</div>
        <div>Rotation Period: {selectedObject.rotationPeriod} days</div>
      </div>
      
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Quick Facts</h3>
        <ul className="list-disc list-inside text-sm">
          {selectedObject.facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}