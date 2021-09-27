let RECIPES = [];

//Recuperation de la base de donnée en json
function fetchData(callback) {
  fetch("/public/recipes.json")
    .then((res) => res.json())
    .then((data) => {
      callback(data.recipes);
      RECIPES = data.recipes;
    });
}

export default getdata;
