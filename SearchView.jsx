import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import RecipeDetails from '../components/RecipeDetails';

const SearchView = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const fetchRecipes = async (searchTerm) => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error('Failed to fetch recipes:', error);
      setRecipes([]);
    }
  };

  useEffect(() => {
    if (query.trim() !== '') {
      fetchRecipes(query);
    } else {
      setRecipes([]);
    }
  }, [query]);

  const handleSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseDetails = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="text-center p-4">
      <SearchBar onSearch={setQuery} />
      {recipes.length === 0 && query && <p className="text-gray-500 mt-4">No recipes found for "{query}"</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} onSelect={handleSelect} />
        ))}
      </div>
      {selectedRecipe && (
        <RecipeDetails recipe={selectedRecipe} onClose={handleCloseDetails} />
      )}
    </div>
  );
};

export default SearchView;
