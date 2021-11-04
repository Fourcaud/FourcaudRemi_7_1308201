// recherche

// 1. fetchData
// 2. recherche => activeFilters si y en a ===> searchResult
// 3. searchResult ==> recherche par input search
// 4. clear main + affichage searchResult

import { recipeData } from "./index.js";

let resultInput = [];
let resultLabel = [];

// Bar de recherche avec filtre
const searchUser = document.querySelector("#search-input");

searchUser.addEventListener("input", (e) => {
  if (e.target.value.length >= 3) {
    const element = e.target.value.toLowerCase();
    searchRecipe(element);
  } else {
    resultInput = [];

    searchEngine();
  }
});

function searchRecipe(element) {
  if (element.length > 0) {
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
    resultInput = [...new Set(resultInput)];
  } else {
    resultInput = [];
  }

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
  } else {
    resultLabel = [];
  }

  searchEngine();
}

window.searchRecipeDropdown = searchRecipeDropdown;

function searchEngine() {
  let allDataFilter = [];
  const enableDropdown = document.querySelectorAll(".container-label p").length;
  const inputLength = document.getElementById("search-input").value.length;
  if (enableDropdown > 0 && resultInput.length > 0) {
    allDataFilter = resultInput.filter((e) =>
      resultLabel.find((item) => e.id === item.id)
    );
  } else {
    allDataFilter = resultInput.concat(resultLabel);
  }
  if (enableDropdown == 0 && inputLength < 3) {
    let mainSection = document.getElementById("main");
    mainSection.innerHTML = "";
    recipeData.forEach((recipe) => createCard(recipe));
  } else {
    if (allDataFilter.length !== 0) {
      let mainSection = document.getElementById("main");
      mainSection.innerHTML = "";
      allDataFilter.forEach((recipe) => createCard(recipe));
      addItemsDropdown(allDataFilter);
    } else {
      let mainSection = document.getElementById("main");
      let errorMessage = "";
      errorMessage += `Aucune recette ne correspond à votre critère… vous pouvez
              chercher « tarte aux pommes », « poisson », etc.`;
      mainSection.innerHTML = errorMessage;
    }
  }
}

window.searchEngine = searchEngine;
