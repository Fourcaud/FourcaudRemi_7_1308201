import getdata from "./getdata.js";
import redercard from "./rendercard.js";
import utils from "./utils.js";
import dropdown from "./dropdown.js";
import filter from "./filter.js";

export const recipeData = [];

fetchData((recipes) => {
  recipes.forEach((recipe) => recipeData.push(recipe));
  recipes.forEach((recipe) => createCard(recipe));
  addItemsDropdown(recipeData);
});
