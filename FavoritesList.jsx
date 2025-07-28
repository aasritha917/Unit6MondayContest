import React from 'react';
import RecipeCard from './RecipeCard';

const FavoritesList = ({ favorites, onSelect, onRemove }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {favorites.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          onSelect={onSelect}
          onFavorite={onRemove}
          isFavorite={true}
        />
      ))}
    </div>
  );
};

export default FavoritesList;
