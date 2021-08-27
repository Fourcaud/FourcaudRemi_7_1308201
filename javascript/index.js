//Recuperation de la base de donnée en json
function fetchData(callback) {
  fetch("/public/recipes.json")
    .then((res) => res.json())
    .then((data) => {
      callback(data.recipes);
    });
}

//fonction pour afficher toutes les recettes - appeler au debut et a chaque modification de filtre
function fetchRecipes(recipes) {
  let recipeContainer = document.getElementById("container-card");
  let htmlrecipe = "";

  if (recipes.length > 0) {
    for (let recipe in recipes) {
      htmlrecipe += `<div class="card">`;
      htmlrecipe += `<div class="card__img"></div>`;
      htmlrecipe += `<div class="card__recipe"> <h2>${recipes[recipe].name}</h2> <i class="far fa-clock"></i><h3>${recipes[recipe].time}min</h3></div>`;
      htmlrecipe += `<div class="card__text"><div class="card__ingredients">`;

      for (let ingredientLoop in recipes[recipe].ingredients) {
        let unitTrue = "";
        if (recipes[recipe].ingredients[ingredientLoop].unit) {
          unitTrue = recipes[recipe].ingredients[ingredientLoop].unit;
        }
        htmlrecipe += `<h4>${recipes[recipe].ingredients[ingredientLoop].ingredient} : ${recipes[recipe].ingredients[ingredientLoop].quantity} ${unitTrue} </h4>`;
      }
      htmlrecipe += `</div>`;
      htmlrecipe += `<div class="card__description"><p>${recipes[recipe].description}</p></div>`;
      htmlrecipe += `</div>`;
      htmlrecipe += `</div>`;
    }
    recipeContainer.innerHTML = htmlrecipe;
  } else {
    htmlrecipe += `<div class="error-Search">Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.</div>`;
    recipeContainer.innerHTML = htmlrecipe;
  }
}

/* ---------------------------------------------------------------------------- */

//Groupe de fonction qui permet d'afficher les indgredient dans le bouton

function showTriIngredient(recipes) {
  let navFiltre = document.getElementById("container-ingredient");
  let htmlnavFiltre = "";
  let allIngredient = [];

  for (let i in recipes) {
    for (let j in recipes[i].ingredients) {
      for (let k in recipes[i].ingredients[j].ingredient)
        allIngredient.push(recipes[i].ingredients[j].ingredient);
    }
  }
  let uniqueTypes = allIngredient.filter(
    (value, index, self) => self.indexOf(value) === index
  );

  for (let l in uniqueTypes) {
    htmlnavFiltre += `<li><input  type="checkbox" class="check" id="${uniqueTypes[l]}" name="header__tags" value="${uniqueTypes[l]}"><label class="labeltags">${uniqueTypes[l]}</label></li>`;
  }

  navFiltre.innerHTML = htmlnavFiltre;
}

function myFunctionTriIngredient() {
  if (
    document
      .getElementById("myDropdown-device")
      .classList.contains("show-device")
  ) {
    document
      .getElementById("myDropdown-device")
      .classList.toggle("show-device");
  }
  if (
    document
      .getElementById("myDropdown-utensils")
      .classList.contains("show-utensils")
  ) {
    document
      .getElementById("myDropdown-utensils")
      .classList.toggle("show-utensils");
  }

  document
    .getElementById("myDropdown-ingredient")
    .classList.toggle("show-ingredient");
}
window.myFunctionTriIngredient = myFunctionTriIngredient;

const searchIn = document.getElementById("searchIngredients");
function ingredientFilter(recipes) {
  searchIn.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    const result = recipes.filter((search) =>
      search.ingredients.some((searchArray) =>
        searchArray.ingredient.toLowerCase().includes(element)
      )
    );
    showTriIngredient(result);
  });
}
window.ingredientFilter = ingredientFilter;

/* ---------------------------------------------------------------------------- */

//Groupe de fonction qui permet d'afficher les devices dans le bouton

function showTriDevice(recipes) {
  let navFiltre = document.getElementById("container-device");
  let htmlnavFiltre = "";
  let allDevice = [];
  for (let i in recipes) {
    for (let j in recipes[i].appliance) {
      allDevice.push(recipes[i].appliance);
    }
  }
  let uniqueTypes = allDevice.filter(
    (value, index, self) => self.indexOf(value) === index
  );

  for (let l in uniqueTypes) {
    htmlnavFiltre += `<li><input  type="checkbox" class="check" id="${uniqueTypes[l]}" name="header__tags" ><label class="labeltags">${uniqueTypes[l]}</label></li>`;
  }

  navFiltre.innerHTML = htmlnavFiltre;
}

function myFunctionTriDevice() {
  if (
    document
      .getElementById("myDropdown-ingredient")
      .classList.contains("show-ingredient")
  ) {
    document
      .getElementById("myDropdown-ingredient")
      .classList.toggle("show-ingredient");
  }
  if (
    document
      .getElementById("myDropdown-utensils")
      .classList.contains("show-utensils")
  ) {
    document
      .getElementById("myDropdown-utensils")
      .classList.toggle("show-utensils");
  }

  document.getElementById("myDropdown-device").classList.toggle("show-device");
}
window.myFunctionTriDevice = myFunctionTriDevice;

const searchDe = document.getElementById("searchDevice");
function deviceFilter(recipes) {
  searchDe.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    const result = recipes.filter((search) =>
      search.appliance.toLowerCase().includes(element)
    );
    showTriDevice(result);
  });
}
window.deviceFilter = deviceFilter;

/* ---------------------------------------------------------------------------- */

//Groupe de fonction qui permet d'afficher les ustensils dans le bouton

function showTriUtensils(recipes) {
  let navFiltre = document.getElementById("container-utensils");
  let htmlnavFiltre = "";
  let allUtensils = [];
  for (let i in recipes) {
    for (let j in recipes[i].ustensils) {
      allUtensils.push(recipes[i].ustensils);
    }
  }
  let uniqueTypes = allUtensils.filter(
    (value, index, self) => self.indexOf(value) === index
  );

  for (let l in uniqueTypes) {
    htmlnavFiltre += `<li><input  type="checkbox" class="check" id="${uniqueTypes[l]}" name="header__tags"><label class="labeltags">${uniqueTypes[l]}</label></li>`;
  }

  navFiltre.innerHTML = htmlnavFiltre;
}

function myFunctionTriUtensils() {
  if (
    document
      .getElementById("myDropdown-ingredient")
      .classList.contains("show-ingredient")
  ) {
    document
      .getElementById("myDropdown-ingredient")
      .classList.toggle("show-ingredient");
  }
  if (
    document
      .getElementById("myDropdown-device")
      .classList.contains("show-device")
  ) {
    document
      .getElementById("myDropdown-device")
      .classList.toggle("show-device");
  }

  document
    .getElementById("myDropdown-utensils")
    .classList.toggle("show-utensils");
}

window.myFunctionTriUtensils = myFunctionTriUtensils;

const searchUt = document.getElementById("searchUtensils");
function utensilsFilter(recipes) {
  searchUt.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    const result = recipes.filter((search) =>
      search.ustensils.some((searchArray) =>
        searchArray.toLowerCase().includes(element)
      )
    );
    showTriUtensils(result);
  });
}
window.utensilsFilter = utensilsFilter;

/* ---------------------------------------------------------------------------- */

//Barre de recherche avec  filtres name --> appliance --> recipes --> ingredients -->

const searchUser = document.querySelector("#search-bar__text");

function barreFilter(recipes) {
  searchUser.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();

    const result1 = recipes.filter((search) =>
      search.name.toLowerCase().includes(element)
    );

    const result2 = recipes.filter((search) =>
      search.appliance.toLowerCase().includes(element)
    );

    const result3 = recipes.filter((search) =>
      search.ingredients.some((searchArray) =>
        searchArray.ingredient.toLowerCase().includes(element)
      )
    );

    const result4 = recipes.filter((search) =>
      search.ustensils.some((searchArray) =>
        searchArray.toLowerCase().includes(element)
      )
    );
    function removeDuplicates(inArray) {
      let arr = inArray.concat();

      for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
          if (arr[i] === arr[j]) {
            arr.splice(j, 1);
          }
        }
      }
      return arr;
    }
    const resultAll = result1.concat(result2, result3, result4);
    const result = removeDuplicates(resultAll);

    fetchRecipes(result);
  });
}

window.ingredientFilter = ingredientFilter;

/* ---------------------------------------------------------------------------- */

fetchData((recipes) => {
  fetchRecipes(recipes);
  showTriIngredient(recipes);
  showTriDevice(recipes);
  showTriUtensils(recipes);
  barreFilter(recipes);
  ingredientFilter(recipes);
  deviceFilter(recipes);
  utensilsFilter(recipes);
});
