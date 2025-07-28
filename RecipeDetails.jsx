import React from 'react';

const RecipeCard = ({ recipe, onSelect, onFavorite, isFavorite }) => {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4 w-72">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="rounded w-full" />
      <h3 className="text-lg font-semibold my-2">{recipe.strMeal}</h3>
      <div className="flex justify-between items-center">
        <button onClick={() => onSelect(recipe)} className="text-blue-500 hover:underline">
          View Details
        </button>
        <button onClick={() => onFavorite(recipe)} className="text-red-500">
          {isFavorite ? '💖' : '🤍'}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;