import { recipeData } from "./index.js";

let activeFilters = [];

const clickItem = (name, type) => {
  if (!activeFilters.find((filter) => filter.name === name)) {
    activeFilters.push({ name: name.toLowerCase(), type: type });
  }
  liveFilter(activeFilters);
};
window.clickItem = clickItem;

function liveFilter(element) {
  let label = document.getElementById("container-label");
  let htmllabel = "";
  element.forEach((results) => {
    if (results.type === "ingredient") {
      //creer label ingredient
      htmllabel += `<p class="labelIngredient">${results.name}<i class="far fa-times-circle" onclick='deleteItem("${results.name}")'></i></p>`;
    } else if (results.type === "device") {
      //creer label device
      htmllabel += `<p class="labelDevice">${results.name}<i class="far fa-times-circle" onclick='deleteItem("${results.name}")'></i></p>`;
    } else if (results.type === "utensils") {
      //creer label ustensils
      htmllabel += `<p class="labelUtensil">${results.name}<i class="far fa-times-circle" onclick='deleteItem("${results.name}")'></i></p>`;
    }
  });
  label.innerHTML = htmllabel;
  searchRecipeDropdown(element);
}

const deleteItem = (name) => {
  let filtersNoDelete = activeFilters.filter((active) => active.name !== name);
  activeFilters = filtersNoDelete;

  liveFilter(activeFilters);
};
window.deleteItem = deleteItem;

function addItemsDropdown(Data) {
  let navFiltreIngredient = document.getElementById("container-ingredient");
  let htmlnavFiltreIngredient = "";
  let allIngredient = [];
  Data.forEach((recipe) => {
    recipe.ingredients.forEach((element) => {
      if (
        !allIngredient.find((item) => item.ingredient === element.ingredient)
      ) {
        allIngredient.push(element.ingredient);
      }
    });
  });
  const allIngredientUnique = [...new Set(allIngredient)];

  for (let l in allIngredientUnique) {
    htmlnavFiltreIngredient += `<li onclick='clickItem("${allIngredientUnique[l]}" , "ingredient")'>${allIngredientUnique[l]}</li>`;
  }
  navFiltreIngredient.innerHTML = htmlnavFiltreIngredient;
  /*-------------------------------------------------------------------------------------------------------------------------------------------*/
  let navFiltreUtensils = document.getElementById("container-utensils");
  let htmlnavFiltreUtensils = "";
  let allUtensils = [];
  Data.forEach((recipe) => {
    recipe.ustensils.forEach((element) => {
      if (!allUtensils.find((item) => item === element)) {
        allUtensils.push(element);
      }
    });
  });

  for (let l in allUtensils) {
    htmlnavFiltreUtensils += `<li onclick='clickItem("${allUtensils[l]}" , "utensils")'>${allUtensils[l]}</li>`;
  }
  navFiltreUtensils.innerHTML = htmlnavFiltreUtensils;
  /*-------------------------------------------------------------------------------------------------------------------------------------------*/
  let navFiltreDevice = document.getElementById("container-device");
  let htmlnavFiltreDevice = "";
  let allDevice = [];
  Data.forEach((recipe) => {
    if (!allDevice.find((element) => element === recipe.appliance)) {
      allDevice.push(recipe.appliance);
    }
  });

  for (let l in allDevice) {
    htmlnavFiltreDevice += `<li onclick='clickItem("${allDevice[l]}" , "device")'>${allDevice[l]}</li>`;
  }
  navFiltreDevice.innerHTML = htmlnavFiltreDevice;
}
window.addItemsDropdown = addItemsDropdown;

const searchIn = document.getElementById("searchIngredients");

searchIn.addEventListener("input", (e) => {
  if (e.target.value.length >= 3) {
    const elem = e.target.value.toLowerCase();
    let navFiltreIngredient = document.getElementById("container-ingredient");
    let htmlnavFiltreIngredient = "";
    let allIngredient = [];
    recipeData.forEach((recipe) => {
      recipe.ingredients.forEach((element) => {
        if (element.ingredient.toLowerCase().includes(elem)) {
          allIngredient.push(element.ingredient.toLowerCase());
        }
      });
    });
    let uniqueAllIngredients = [];
    allIngredient.forEach((element) => {
      if (!uniqueAllIngredients.find((item) => item === element)) {
        uniqueAllIngredients.push(element);
      }
    });

    for (let l in uniqueAllIngredients) {
      htmlnavFiltreIngredient += `<li onclick='clickItem("${uniqueAllIngredients[l]}" , "ingredient")'>${uniqueAllIngredients[l]}</li>`;
    }
    navFiltreIngredient.innerHTML = htmlnavFiltreIngredient;
  } else {
    addItemsDropdown();
  }
});

const searchDe = document.getElementById("searchDevice");

searchDe.addEventListener("input", (e) => {
  if (e.target.value.length >= 3) {
    const elem = e.target.value.toLowerCase();
    let navFiltreDevice = document.getElementById("container-device");
    let htmlnavFiltreDevice = "";
    let allDevice = [];
    recipeData.forEach((element) => {
      if (element.appliance.toLowerCase().includes(elem)) {
        allDevice.push(element.appliance.toLowerCase());
      }
    });
    let uniqueAllDevice = [];
    allDevice.forEach((element) => {
      if (!uniqueAllDevice.find((item) => item === element)) {
        uniqueAllDevice.push(element);
      }
    });
    for (let l in uniqueAllDevice) {
      htmlnavFiltreDevice += `<li onclick='clickItem("${uniqueAllDevice[l]}" , "device")'>${uniqueAllDevice[l]}</li>`;
    }
    navFiltreDevice.innerHTML = htmlnavFiltreDevice;
  } else {
    addItemsDropdown();
  }
});

const searchUt = document.getElementById("searchUtensils");

searchUt.addEventListener("input", (e) => {
  if (e.target.value.length >= 3) {
    const elem = e.target.value.toLowerCase();
    let navFiltreUtensils = document.getElementById("container-utensils");
    let htmlnavFiltreUtensils = "";
    let allUtensils = [];
    recipeData.forEach((recipe) => {
      recipe.ustensils.forEach((element) => {
        if (element.toLowerCase().includes(elem)) {
          allUtensils.push(element.toLowerCase());
        }
      });
    });
    let uniqueAllUtensils = [];
    allUtensils.forEach((element) => {
      if (!uniqueAllUtensils.find((item) => item === element)) {
        uniqueAllUtensils.push(element);
      }
    });
    for (let l in uniqueAllUtensils) {
      htmlnavFiltreUtensils += `<li onclick='clickItem("${uniqueAllUtensils[l]}" , "utensils")'>${uniqueAllUtensils[l]}</li>`;
    }
    navFiltreUtensils.innerHTML = htmlnavFiltreUtensils;
  } else {
    addItemsDropdown();
  }
});

function openAndCloseDropdown(classToToggle, elem, event) {
  const classes = [
    { name: "myDropdown-device", type: "show-device" },
    { name: "myDropdown-utensils", type: "show-utensils" },
    { name: "myDropdown-ingredient", type: "show-ingredient" },
  ];

  classes.forEach((classe) => {
    if (classe.name !== classToToggle || event === "close") {
      if (
        document.getElementById(classe.name).classList.contains(classe.type)
      ) {
        document.getElementById(classe.name).classList.remove(classe.type);
      }
    } else {
      document.getElementById(classToToggle).classList.add(elem);
    }
  });
}
window.openAndCloseDropdown = openAndCloseDropdown;
