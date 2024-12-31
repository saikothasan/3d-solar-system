import Scene from './components/Scene';
import { Suspense } from 'react';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="w-full h-screen bg-black text-white overflow-hidden">
        <Scene />
      </div>
    </Suspense>
  );
}

export default App;