import { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { useSolarSystemStore } from '../store/solarSystemStore';
import { solarSystemData } from '../data/celestialObjects';

export default function GuidedTour() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const { setSelectedObject } = useSolarSystemStore();

  const tourSteps = solarSystemData.map(object => ({
    title: object.name,
    description: object.description,
    action: () => setSelectedObject(object)
  }));

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      tourSteps[currentStep + 1].action();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="absolute top-4 left-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg px-4 py-2 text-sm"
      >
        Start Guided Tour
      </button>
    );
  }

  return (
    <div className="absolute top-4 left-4 w-80 bg-black/50 backdrop-blur-md rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">
          {tourSteps[currentStep].title}
        </h3>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 hover:bg-white/10 rounded"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <p className="text-sm mb-4">
        {tourSteps[currentStep].description}
      </p>
      
      <div className="flex justify-between items-center">
        <div className="text-sm">
          Step {currentStep + 1} of {tourSteps.length}
        </div>
        {currentStep < tourSteps.length - 1 && (
          <button
            onClick={handleNext}
            className="flex items-center gap-1 bg-white/10 hover:bg-white/20 rounded px-3 py-1"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}