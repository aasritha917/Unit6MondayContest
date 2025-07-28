import React, { useState } from 'react';
import SearchView from './views/SearchView';
import FavoritesView from './views/FavoritesView';

const App = () => {
  const [view, setView] = useState('search'); // 'search' or 'favorites'

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans p-4">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">🍳 Recipe Finder</h1>
          <div className="space-x-4">
            <button
              onClick={() => setView('search')}
              className={`px-4 py-2 rounded ${view === 'search' ? 'bg-blue-500 text-white' : 'bg-white border'}`}
            >
              Search
            </button>
            <button
              onClick={() => setView('favorites')}
              className={`px-4 py-2 rounded ${view === 'favorites' ? 'bg-blue-500 text-white' : 'bg-white border'}`}
            >
              Favorites
            </button>
          </div>
        </header>
        <main>{view === 'search' ? <SearchView /> : <FavoritesView />}</main>
      </div>
    </div>
  );
};

export default App;
