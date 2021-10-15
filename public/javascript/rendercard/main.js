/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./javascript/rendercard.js":
/*!**********************************!*\
  !*** ./javascript/rendercard.js ***!
  \**********************************/
/***/ (() => {

eval("let createCard = (recipe) => {\r\n  //image\r\n  let image = create(\"div\", {\r\n    class: \"card-img-top card-img-placeholder\",\r\n    alt: \"card-image\",\r\n  });\r\n  //title\r\n  let title = create(\"h2\", { class: \"card-title w-50 card-content-title\" });\r\n\r\n  title.textContent = recipe.name;\r\n\r\n  let timeParent = create(\"div\", { class: \"d-flex font-weight-bold\" });\r\n  timeParent.innerHTML += `<span class='far fa-clock mt-2' ></span> <p class='ml-2' > ${recipe.time} min</p>`;\r\n\r\n  //regroupement des éléments d'en-tête\r\n  let headerParent = create(\"div\", {\r\n    class: \"d-flex justify-content-between mt-3 px-3\",\r\n  });\r\n  headerParent.appendChild(title);\r\n  headerParent.appendChild(timeParent);\r\n\r\n  //ingredients list\r\n  let ingredients = create(\"div\", { class: \"ingredient-container\" });\r\n\r\n  let eachIngredient = recipe.ingredients\r\n    .map(function (ingredients) {\r\n      if (ingredients.ingredient && ingredients.unit) {\r\n        return (\r\n          \"<p class='mb-0'><span class='font-weight-bold ingredient'>\" +\r\n          ingredients.ingredient +\r\n          \"</span>: \" +\r\n          ingredients.quantity +\r\n          ingredients.unit +\r\n          \"</p>\"\r\n        );\r\n      } else if (ingredients.quantity && !ingredients.unit) {\r\n        return (\r\n          \"<p class='mb-0'><span class='font-weight-bold ingredient'>\" +\r\n          ingredients.ingredient +\r\n          \"</span>: \" +\r\n          ingredients.quantity +\r\n          \"</p>\"\r\n        );\r\n      } else if (!ingredients.quantity && !ingredients.unit) {\r\n        return (\r\n          \"<p class='mb-0'><span class='font-weight-bold ingredient'>\" +\r\n          ingredients.ingredient +\r\n          \"</span></p>\"\r\n        );\r\n      }\r\n    })\r\n    .join(\"\");\r\n\r\n  ingredients.innerHTML = eachIngredient;\r\n\r\n  //cook method\r\n  let method = create(\"p\", { class: \"description w-50\" });\r\n  method.textContent = recipe.description;\r\n\r\n  //appliance section\r\n  let appliances = create(\"p\", { class: \"sr-only appliance\" });\r\n  appliances.textContent = recipe.appliance;\r\n\r\n  //utensils section\r\n  let utensils = create(\"div\", { class: \"sr-only\" });\r\n\r\n  let eachUtensils = recipe.ustensils\r\n    .map(function (utensil) {\r\n      return \"<p class='utensil'>\" + utensil + \"</p>\";\r\n    })\r\n    .join(\"\");\r\n  utensils.innerHTML = eachUtensils;\r\n\r\n  //card body\r\n  let cardBody = create(\"div\", {\r\n    class: \"card-body d-flex justify-content-between card-content\",\r\n  });\r\n\r\n  //combine in card body\r\n  cardBody.appendChild(ingredients);\r\n  cardBody.appendChild(method);\r\n  cardBody.appendChild(appliances);\r\n  cardBody.appendChild(utensils);\r\n\r\n  //card container\r\n  let cardContainer = create(\"article\", {\r\n    class: \"card recipe-card pb-3 mb-5\",\r\n  });\r\n\r\n  //combine to DOM\r\n  cardContainer.appendChild(image);\r\n  cardContainer.appendChild(headerParent);\r\n  cardContainer.appendChild(cardBody);\r\n\r\n  let mainSection = document.getElementById(\"main\");\r\n  //put into DOM\r\n  mainSection.appendChild(cardContainer);\r\n};\r\n\r\nwindow.createCard = createCard;\r\n\n\n//# sourceURL=webpack://lespetitsplats/./javascript/rendercard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./javascript/rendercard.js"]();
/******/ 	
/******/ })()
;