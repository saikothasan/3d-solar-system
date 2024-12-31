import React, { useEffect, useState } from 'react';

interface SearchResultsProps {
  searchTerm: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchTerm }) => {
  const [results, setResults] = useState<string[]>([]);  // Assuming the results are strings
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!searchTerm) {
      setResults([]);
      return;
    }

    setLoading(true);

    // Simulate an API request or a search operation.
    setTimeout(() => {
      const dummyData = [
        'Object 1',
        'Object 2',
        'Object 3',
        'Object 4',
        'Object 5',
      ];

      const filteredResults = dummyData.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setResults(filteredResults);
      setLoading(false);
    }, 500);  // Simulating a delay for fetching data
  }, [searchTerm]);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="absolute top-full left-0 mt-2 w-full bg-white/20 rounded-md shadow-lg">
      {results.length === 0 ? (
        <div className="p-2 text-white">No results found</div>
      ) : (
        <ul className="max-h-64 overflow-auto">
          {results.map((result, index) => (
            <li
              key={index}
              className="p-2 hover:bg-blue-500 hover:text-white cursor-pointer"
            >
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
