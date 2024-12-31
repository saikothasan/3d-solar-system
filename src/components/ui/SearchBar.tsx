import { Search } from 'lucide-react';
import { useState } from 'react';
import SearchResults from './SearchResults';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="relative">
      <Search className="w-6 h-6 absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
      <input
        type="text"
        placeholder="Search objects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-white/10 rounded-full pl-12 pr-4 py-2 outline-none focus:ring-2 ring-blue-500 w-64"
      />
      <SearchResults searchTerm={searchTerm} />
    </div>
  );
}