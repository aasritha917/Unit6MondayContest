// src/views/FavoritesView.jsx
import React from 'react';
import FavoritesList from '../components/FavoritesList';
import RecipeDetails from '../components/RecipeDetails';

const FavoritesView = ({
  favorites = [],      // default to empty array
  onSelect,
  selected,
  onClose,
  onRemove,
}) => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">My Favorite Recipes</h2>

      <FavoritesList
        favorites={favorites}
        onSelect={onSelect}
        onRemove={onRemove}
      />

      {selected && (
        <div className="mt-6">
          <RecipeDetails recipe={selected} onClose={onClose} />
        </div>
      )}
    </div>
  );
};

export default FavoritesView;
