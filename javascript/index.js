import getdata from "./getdata.js";
import redercard from "./rendercard.js";
import utils from "./utils.js";
import dropdown from "./dropdown.js";
import filter from "./filter.js";

export const recipeData = [];

fetchData((recipes) => {
  recipes.forEach((recipe) => recipeData.push(recipe));
  recipes.forEach((recipe) => createCard(recipe));
  addItemsDropdown();
});

// Bar de recherche avec filtre
const searchUser = document.querySelector("#search-input");

searchUser.addEventListener("input", (e) => {
  if (e.target.value.length >= 3) {
    const element = e.target.value.toLowerCase();
    searchRecipe(element);
  } else {
    let mainSection = document.getElementById("main");
    mainSection.innerHTML = "";
    recipeData.forEach((recipe) => createCard(recipe));
  }
});
