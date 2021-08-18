function fetchData(callback) {
  fetch("/public/recipes.json")
    .then((res) => res.json())
    .then((data) => {
      callback(data.recipes);
    });
}

function fetchRecipes(recipes) {
  let recipeContainer = document.getElementById("container-card");
  let htmlrecipe = "";
  let allRecipes = [];

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
}

function showTriIngredient(recipes) {
  let navFiltre = document.getElementById("dropdown-ingredient");
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
  htmlnavFiltre += `<button onclick="myFunctionTriIngredient();" class="dropbtn-ingredient" aria-expanded="true" aria-controls="id_about_menu" tabindex="0">Ingredients<i class="fas fa-chevron-down"></i></button>`;
  htmlnavFiltre += `<div id="myDropdown-ingredient" class="dropdown-content-ingredient" id="id_about_menu" >`;
  htmlnavFiltre += `<a tabindex="0">on ecrit<i class="fas fa-chevron-up"></i></a>`;
  htmlnavFiltre += `<div class="container-ingredient">`;
  for (let l in uniqueTypes) {
    htmlnavFiltre += `<li><input  type="checkbox" class="check" id="${uniqueTypes[l]}" name="header__tags" value="${uniqueTypes[l]}"><label class="labeltags">${uniqueTypes[l]}</label></li>`;
  }
  htmlnavFiltre += `</div>`;
  htmlnavFiltre += `</div>`;
  navFiltre.innerHTML = htmlnavFiltre;
}

function myFunctionTriIngredient() {
  document
    .getElementById("myDropdown-ingredient")
    .classList.toggle("show-ingredient");
}
window.myFunctionTriIngredient = myFunctionTriIngredient;

/* ---------------------------------------------------------------------------- */
function showTriDevice(recipes) {
  let navFiltre = document.getElementById("dropdown-device");
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
  htmlnavFiltre += `<button onclick="myFunctionTriDevice();" class="dropbtn-device" aria-expanded="true" aria-controls="id_about_menu" tabindex="0">Appareil<i class="fas fa-chevron-down"></i></button>`;
  htmlnavFiltre += `<div id="myDropdown-device" class="dropdown-content-device" id="id_about_menu" >`;
  htmlnavFiltre += `<a   tabindex="0"><i class="fas fa-chevron-up"></i></a>`;
  htmlnavFiltre += `<div class="container-device">`;
  for (let l in uniqueTypes) {
    htmlnavFiltre += `<li><input  type="checkbox" class="check" id="${uniqueTypes[l]}" name="header__tags" ><label class="labeltags">${uniqueTypes[l]}</label></li>`;
  }
  htmlnavFiltre += `</div>`;
  htmlnavFiltre += `</div>`;

  navFiltre.innerHTML = htmlnavFiltre;
}

function myFunctionTriDevice() {
  document.getElementById("myDropdown-device").classList.toggle("show-device");
}
window.myFunctionTriDevice = myFunctionTriDevice;

/* ---------------------------------------------------------------------------- */
function showTriUtensils(recipes) {
  let navFiltre = document.getElementById("dropdown-utensils");
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
  htmlnavFiltre += `<button onclick="myFunctionTriUtensils();" class="dropbtn-utensils" aria-expanded="true" aria-controls="id_about_menu" tabindex="0">Ustensils<i class="fas fa-chevron-down"></i></button>`;
  htmlnavFiltre += `<div id="myDropdown-utensils" class="dropdown-content-utensils" id="id_about_menu" >`;
  htmlnavFiltre += `<a tabindex="0"><i class="fas fa-chevron-up"></i></a>`;
  htmlnavFiltre += `<div class="container-utensils">`;
  for (let l in uniqueTypes) {
    htmlnavFiltre += `<li><input  type="checkbox" class="check" id="${uniqueTypes[l]}" name="header__tags"><label class="labeltags">${uniqueTypes[l]}</label></li>`;
  }
  htmlnavFiltre += `</div>`;
  htmlnavFiltre += `</div>`;
  navFiltre.innerHTML = htmlnavFiltre;
}

function myFunctionTriUtensils() {
  document
    .getElementById("myDropdown-utensils")
    .classList.toggle("show-utensils");
}
window.myFunctionTriUtensils = myFunctionTriUtensils;

window.onclick = function (event) {
  if (event.target.matches(".dropbtn-ingredient")) {
    let dropdownsIngredient = document.getElementsByClassName(
      "dropdown-content-ingredient"
    );

    for (let i1 = 0; i1 < dropdownsIngredient.length; i1++) {
      let openDropdownIngredient = dropdownsIngredient[i1];
      if (openDropdownIngredient.classList.contains("show-ingredient")) {
        openDropdownIngredient.classList.remove("show-ingredient");
      }
    }
  } else if (event.target.matches(".dropbtn-device")) {
    let dropdownsDevice = document.getElementsByClassName(
      "dropdown-content-device"
    );

    for (let i2 = 0; i2 < dropdownsDevice.length; i2++) {
      let openDropdownDevice = dropdownsDevice[i2];
      if (openDropdownDevice.classList.contains("show-device")) {
        openDropdownDevice.classList.remove("show-device");
      }
    }
  } else if (event.target.matches(".dropbtn-utensils")) {
    let dropdownsUtensils = document.getElementsByClassName(
      "dropdown-content-utensils"
    );

    for (let i3 = 0; i3 < dropdownsUtensils.length; i3++) {
      let openDropdownUtensils = dropdownsUtensils[i3];
      if (openDropdownUtensils.classList.contains("show-utensils")) {
        openDropdownUtensils.classList.remove("show-utensils");
      }
    }
  }
};
const searchUser = document.querySelector("#search-bar__text");
function filterByRecipe(recipes) {
  searchUser.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    const result = recipes.filter((search) =>
      search.name.toLowerCase().includes(element)
    );
    fetchRecipes(result);
  });
}
function filterByIngredient(recipes) {
  searchUser.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    const result = recipes.filter((search) =>
      search.ingredients.toLowerCase().includes(element)
    );

    fetchRecipes(result);
  });
}
function filterByDevice(recipes) {
  searchUser.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    const result = recipes.filter((search) =>
      search.appliance.toLowerCase().includes(element)
    );

    fetchRecipes(result);
  });
}
function filterByUtensils(recipes) {
  searchUser.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    const result = recipes.filter((search) =>
      search.ustensils.toLowerCase().includes(element)
    );

    fetchRecipes(result);
  });
}

fetchData((recipes) => {
  fetchRecipes(recipes);
  showTriIngredient(recipes);
  showTriDevice(recipes);
  showTriUtensils(recipes);
  filterByRecipe(recipes);
});
