export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-t-blue-500 border-blue-200 rounded-full animate-spin mb-4" />
        <p className="text-white text-lg">Loading Solar System...</p>
      </div>
    </div>
  );
}