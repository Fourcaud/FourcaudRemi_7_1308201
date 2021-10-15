// recherche

// 1. fetchData
// 2. recherche => activeFilters si y en a ===> searchResult
// 3. searchResult ==> recherche par input search
// 4. clear main + affichage searchResult

import { recipeData } from "./index.js";

let resultInput = [];
let resultLabel = [];

function searchEngine() {
  let allDataFilter = [];

  allDataFilter = resultInput.concat(resultLabel);

  if (allDataFilter.length > 0) {
    let mainSection = document.getElementById("main");
    mainSection.innerHTML = "";
    allDataFilter.forEach((recipe) => createCard(recipe));
  } else {
    let mainSection = document.getElementById("main");
    let errorMessage = "";
    errorMessage += `Aucune recette ne correspond à votre critère… vous pouvez
              chercher « tarte aux pommes », « poisson », etc.`;
    mainSection.innerHTML = errorMessage;
  }
}

window.searchEngine = searchEngine;

function searchRecipe(element) {
  const nameFilter = recipeData.filter((search) =>
    search.name.toLowerCase().includes(element)
  );

  const applianceFilter = recipeData.filter((search) =>
    search.appliance.toLowerCase().includes(element)
  );

  const ingredientFilter = recipeData.filter((search) =>
    search.ingredients.some((searchArray) =>
      searchArray.ingredient.toLowerCase().includes(element)
    )
  );

  const ustensilFilter = recipeData.filter((search) =>
    search.ustensils.some((searchArray) =>
      searchArray.toLowerCase().includes(element)
    )
  );

  resultInput = nameFilter.concat(
    applianceFilter,
    ingredientFilter,
    ustensilFilter
  );

  searchEngine();
}

window.searchRecipe = searchRecipe;

function searchRecipeDropdown(element) {
  let dataFilterRecipe = recipeData;
  if (element.length > 0) {
    element.forEach((elem) => {
      let applianceFilter = dataFilterRecipe.filter((search) =>
        search.appliance.toLowerCase().includes(elem.name)
      );

      let ingredientFilter = dataFilterRecipe.filter((search) =>
        search.ingredients.some((searchArray) =>
          searchArray.ingredient.toLowerCase().includes(elem.name)
        )
      );

      let ustensilFilter = dataFilterRecipe.filter((search) =>
        search.ustensils.some((searchArray) =>
          searchArray.toLowerCase().includes(elem.name)
        )
      );

      resultLabel = ustensilFilter.concat(applianceFilter, ingredientFilter);
      dataFilterRecipe = resultLabel;
    });
    searchEngine();
  } else {
    let mainSection = document.getElementById("main");
    mainSection.innerHTML = "";
    recipeData.forEach((recipe) => createCard(recipe));
  }
}

window.searchRecipeDropdown = searchRecipeDropdown;
