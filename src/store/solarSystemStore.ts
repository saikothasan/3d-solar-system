import { create } from 'zustand';
import { CelestialObject } from '../types/celestialObjects';

interface SolarSystemState {
  selectedObject: CelestialObject | null;
  timeScale: number;
  showOrbits: boolean;
  isLoading: boolean;
  setSelectedObject: (object: CelestialObject | null) => void;
  setTimeScale: (scale: number) => void;
  toggleOrbits: () => void;
  setLoading: (loading: boolean) => void;
}

export const useSolarSystemStore = create<SolarSystemState>((set) => ({
  selectedObject: null,
  timeScale: 1,
  showOrbits: true,
  isLoading: true,
  setSelectedObject: (object) => set({ selectedObject: object }),
  setTimeScale: (scale) => set({ timeScale: scale }),
  toggleOrbits: () => set((state) => ({ showOrbits: !state.showOrbits })),
  setLoading: (loading) => set({ isLoading: loading }),
}));