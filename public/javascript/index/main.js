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

/***/ "./javascript/getdata.js":
/*!*******************************!*\
  !*** ./javascript/getdata.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet RECIPES = [];\r\n\r\n//Recuperation de la base de donnée en json\r\nfunction fetchData(callback) {\r\n  fetch(\"/public/recipes.json\")\r\n    .then((res) => res.json())\r\n    .then((data) => {\r\n      callback(data.recipes);\r\n      RECIPES = data.recipes;\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getdata);\r\n\n\n//# sourceURL=webpack://lespetitsplats/./javascript/getdata.js?");

/***/ }),

/***/ "./javascript/index.js":
/*!*****************************!*\
  !*** ./javascript/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getdata */ \"./javascript/getdata.js\");\n/* harmony import */ var _rendercard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rendercard */ \"./javascript/rendercard.js\");\n/* harmony import */ var _rendercard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rendercard__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./javascript/utils.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\nconst filtreAtif = [];\r\n\r\n//fonction pour afficher toutes les recettes - appeler au debut et a chaque modification de filtre\r\n\r\nfunction fetchRecipes(recipes) {\r\n  let recipeContainer = document.getElementById(\"container-card\");\r\n  let htmlrecipe = \"\";\r\n\r\n  const myArrayFromLocalStorage = localStorage.getItem(\"filtre\");\r\n  if (myArrayFromLocalStorage && myArrayFromLocalStorage.length) {\r\n    const myArray = JSON.parse(myArrayFromLocalStorage);\r\n    const result = [];\r\n    for (let array in myArray) {\r\n      const elements = myArray[array];\r\n\r\n      const result1 = recipes.filter((search) =>\r\n        search.name.toLowerCase().includes(elements)\r\n      );\r\n\r\n      const result2 = recipes.filter((search) =>\r\n        search.appliance.toLowerCase().includes(elements)\r\n      );\r\n\r\n      const result3 = recipes.filter((search) =>\r\n        search.ingredients.some((searchArray) =>\r\n          searchArray.ingredient.toLowerCase().includes(elements)\r\n        )\r\n      );\r\n\r\n      const result4 = recipes.filter((search) =>\r\n        search.ustensils.some((searchArray) =>\r\n          searchArray.toLowerCase().includes(elements)\r\n        )\r\n      );\r\n\r\n      function removeDuplicates(inArray) {\r\n        let arr = inArray.concat();\r\n        //foreach map\r\n        for (let i = 0; i < arr.length; ++i) {\r\n          for (let j = i + 1; j < arr.length; ++j) {\r\n            if (arr[i] === arr[j]) {\r\n              arr.splice(j, 1);\r\n            }\r\n          }\r\n        }\r\n        return arr;\r\n      }\r\n      const resultAll = result1.concat(result2, result3, result4);\r\n\r\n      const resultPush = removeDuplicates(resultAll);\r\n      result.push(resultPush);\r\n    }\r\n\r\n    const resultUnique = [];\r\n    if (result.length > 1) {\r\n      for (let i = 0; i < result.length; i++) {\r\n        for (let j = i + 1; j < result.length; j++) {\r\n          for (let array1 in result[i]) {\r\n            for (let array2 in result[j]) {\r\n              if (result[i][array1] === result[j][array2]) {\r\n                resultUnique.push(result[i][array1]);\r\n              }\r\n            }\r\n          }\r\n        }\r\n      }\r\n    } else {\r\n      for (let array1 in result[0]) {\r\n        resultUnique.push(result[0][array1]);\r\n      }\r\n    }\r\n\r\n    //  resultUnique.forEach(recipe => {\r\n    for (let recipe in resultUnique) {\r\n      htmlrecipe += `<div class=\"card\">`;\r\n      htmlrecipe += `<div class=\"card__img\"></div>`;\r\n      htmlrecipe += `<div class=\"card__recipe\"> <h2>${resultUnique[recipe].name}</h2> <i class=\"far fa-clock\"></i><h3>${resultUnique[recipe].time}min</h3></div>`;\r\n      htmlrecipe += `<div class=\"card__text\"><div class=\"card__ingredients\">`;\r\n\r\n      for (let ingredientLoop in resultUnique[recipe].ingredients) {\r\n        let unitTrue = \"\";\r\n        if (resultUnique[recipe].ingredients[ingredientLoop].unit) {\r\n          unitTrue = resultUnique[recipe].ingredients[ingredientLoop].unit;\r\n        }\r\n        htmlrecipe += `<h4>${resultUnique[recipe].ingredients[ingredientLoop].ingredient} : ${resultUnique[recipe].ingredients[ingredientLoop].quantity} ${unitTrue} </h4>`;\r\n      }\r\n      htmlrecipe += `</div>`;\r\n      htmlrecipe += `<div class=\"card__description\"><p>${resultUnique[recipe].description}</p></div>`;\r\n      htmlrecipe += `</div>`;\r\n      htmlrecipe += `</div>`;\r\n    }\r\n    recipeContainer.innerHTML = htmlrecipe;\r\n  } else {\r\n    if (recipes.length > 0) {\r\n      for (let recipe in recipes) {\r\n        htmlrecipe += `<div class=\"card\">`;\r\n        htmlrecipe += `<div class=\"card__img\"></div>`;\r\n        htmlrecipe += `<div class=\"card__recipe\"> <h2>${recipes[recipe].name}</h2> <i class=\"far fa-clock\"></i><h3>${recipes[recipe].time}min</h3></div>`;\r\n        htmlrecipe += `<div class=\"card__text\"><div class=\"card__ingredients\">`;\r\n\r\n        for (let ingredientLoop in recipes[recipe].ingredients) {\r\n          let unitTrue = \"\";\r\n          if (recipes[recipe].ingredients[ingredientLoop].unit) {\r\n            unitTrue = recipes[recipe].ingredients[ingredientLoop].unit;\r\n          }\r\n          htmlrecipe += `<h4>${recipes[recipe].ingredients[ingredientLoop].ingredient} : ${recipes[recipe].ingredients[ingredientLoop].quantity} ${unitTrue} </h4>`;\r\n        }\r\n        htmlrecipe += `</div>`;\r\n        htmlrecipe += `<div class=\"card__description\"><p>${recipes[recipe].description}</p></div>`;\r\n        htmlrecipe += `</div>`;\r\n        htmlrecipe += `</div>`;\r\n      }\r\n      recipeContainer.innerHTML = htmlrecipe;\r\n    } else {\r\n      htmlrecipe += `<div class=\"error-Search\">Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.</div>`;\r\n      recipeContainer.innerHTML = htmlrecipe;\r\n    }\r\n  }\r\n}\r\n\r\n/* ---------------------------------------------------------------------------- */\r\n\r\n//Groupe de fonction qui permet d'afficher les indgredient dans le bouton\r\n\r\nfunction showTriIngredient(recipes) {\r\n  let navFiltre = document.getElementById(\"container-ingredient\");\r\n  let htmlnavFiltre = \"\";\r\n  let allIngredient = [];\r\n\r\n  for (let i in recipes) {\r\n    for (let j in recipes[i].ingredients) {\r\n      if (\r\n        recipes[i].ingredients[j].ingredient\r\n          .toLowerCase()\r\n          .includes(recipes[recipes.length - 1].search) ||\r\n        !recipes[recipes.length - 1].search\r\n      ) {\r\n        allIngredient.push(recipes[i].ingredients[j].ingredient.toLowerCase());\r\n      }\r\n    }\r\n  }\r\n  let uniqueAllIngredients = removeDuplicates(allIngredient);\r\n\r\n  function removeDuplicates(inArray) {\r\n    let arr = inArray.concat();\r\n\r\n    for (let i = 0; i < arr.length; ++i) {\r\n      for (let j = i + 1; j < arr.length; ++j) {\r\n        if (arr[i] === arr[j]) {\r\n          arr.splice(j, 1);\r\n        }\r\n      }\r\n    }\r\n    return arr;\r\n  }\r\n\r\n  for (let l in uniqueAllIngredients) {\r\n    htmlnavFiltre += `<li onclick='clickLabel(\"${uniqueAllIngredients[l]}\")'><input  type=\"checkbox\" class=\"check\" id=\"${uniqueAllIngredients[l]}\" name=\"header__tags\" value=\"${uniqueAllIngredients[l]}\"><label class=\"labeltags\">${uniqueAllIngredients[l]}</label></li>`;\r\n  }\r\n  navFiltre.innerHTML = htmlnavFiltre;\r\n}\r\n\r\nfunction myFunctionTriIngredient() {\r\n  if (\r\n    document\r\n      .getElementById(\"myDropdown-device\")\r\n      .classList.contains(\"show-device\")\r\n  ) {\r\n    document\r\n      .getElementById(\"myDropdown-device\")\r\n      .classList.toggle(\"show-device\");\r\n  }\r\n  if (\r\n    document\r\n      .getElementById(\"myDropdown-utensils\")\r\n      .classList.contains(\"show-utensils\")\r\n  ) {\r\n    document\r\n      .getElementById(\"myDropdown-utensils\")\r\n      .classList.toggle(\"show-utensils\");\r\n  }\r\n\r\n  document\r\n    .getElementById(\"myDropdown-ingredient\")\r\n    .classList.toggle(\"show-ingredient\");\r\n}\r\nwindow.myFunctionTriIngredient = myFunctionTriIngredient;\r\n\r\nconst searchIn = document.getElementById(\"searchIngredients\");\r\n\r\nfunction ingredientFilter(recipes) {\r\n  searchIn.addEventListener(\"input\", (e) => {\r\n    const element = e.target.value.toLowerCase();\r\n    const result = recipes.filter((search) =>\r\n      search.ingredients.some((searchArray) =>\r\n        searchArray.ingredient.toLowerCase().includes(element)\r\n      )\r\n    );\r\n    showTriIngredient(result);\r\n  });\r\n}\r\nwindow.ingredientFilter = ingredientFilter;\r\n\r\nfunction clickIngredient(x) {\r\n  filtreAtif.push(x);\r\n  let uniqueTypes = filtreAtif.filter(\r\n    (value, index, self) => self.indexOf(value) === index\r\n  );\r\n  showLabelIngredient(uniqueTypes);\r\n}\r\nwindow.clickIngredient = clickIngredient;\r\n\r\n/* ---------------------------------------------------------------------------- */\r\n\r\n//Groupe de fonction qui permet d'afficher les devices dans le bouton\r\n\r\nfunction showTriDevice(recipes) {\r\n  let navFiltre = document.getElementById(\"container-device\");\r\n  let htmlnavFiltre = \"\";\r\n  let allDevice = [];\r\n  for (let i in recipes) {\r\n    for (let j in recipes[i].appliance) {\r\n      allDevice.push(recipes[i].appliance);\r\n    }\r\n  }\r\n  let uniqueTypes = allDevice.filter(\r\n    (value, index, self) => self.indexOf(value) === index\r\n  );\r\n\r\n  for (let l in uniqueTypes) {\r\n    htmlnavFiltre += `<li onclick='clickLabel(\"${uniqueTypes[l]}\")'><input  type=\"checkbox\" class=\"check\" id=\"${uniqueTypes[l]}\" name=\"header__tags\" ><label class=\"labeltags\">${uniqueTypes[l]}</label></li>`;\r\n  }\r\n\r\n  navFiltre.innerHTML = htmlnavFiltre;\r\n}\r\n\r\nfunction myFunctionTriDevice() {\r\n  if (\r\n    document\r\n      .getElementById(\"myDropdown-ingredient\")\r\n      .classList.contains(\"show-ingredient\")\r\n  ) {\r\n    document\r\n      .getElementById(\"myDropdown-ingredient\")\r\n      .classList.toggle(\"show-ingredient\");\r\n  }\r\n  if (\r\n    document\r\n      .getElementById(\"myDropdown-utensils\")\r\n      .classList.contains(\"show-utensils\")\r\n  ) {\r\n    document\r\n      .getElementById(\"myDropdown-utensils\")\r\n      .classList.toggle(\"show-utensils\");\r\n  }\r\n\r\n  document.getElementById(\"myDropdown-device\").classList.toggle(\"show-device\");\r\n}\r\nwindow.myFunctionTriDevice = myFunctionTriDevice;\r\n\r\nconst searchDe = document.getElementById(\"searchDevice\");\r\nfunction deviceFilter(recipes) {\r\n  searchDe.addEventListener(\"input\", (e) => {\r\n    const element = e.target.value.toLowerCase();\r\n    const result = recipes.filter((search) =>\r\n      search.appliance.toLowerCase().includes(element)\r\n    );\r\n    showTriDevice(result);\r\n  });\r\n}\r\nwindow.deviceFilter = deviceFilter;\r\n\r\nfunction clickDevice(x) {\r\n  filtreAtif.push(x);\r\n  let uniqueTypes = filtreAtif.filter(\r\n    (value, index, self) => self.indexOf(value) === index\r\n  );\r\n  showLabelDevice(uniqueTypes);\r\n}\r\nwindow.clickDevice = clickDevice;\r\n\r\n/* ---------------------------------------------------------------------------- */\r\n\r\n//Groupe de fonction qui permet d'afficher les ustensils dans le bouton\r\n\r\nfunction showTriUtensils(recipes) {\r\n  let navFiltre = document.getElementById(\"container-utensils\");\r\n  let htmlnavFiltre = \"\";\r\n  let allUtensils = [];\r\n  for (let i in recipes) {\r\n    for (let j in recipes[i].ustensils) {\r\n      if (\r\n        recipes[i].ustensils[j]\r\n          .toLowerCase()\r\n          .includes(recipes[recipes.length - 1].search) ||\r\n        !recipes[recipes.length - 1].search\r\n      ) {\r\n        allUtensils.push(recipes[i].ustensils[j]);\r\n      }\r\n    }\r\n  }\r\n  let uniqueTypes = allUtensils.filter(\r\n    (value, index, self) => self.indexOf(value) === index\r\n  );\r\n  for (let l in uniqueTypes) {\r\n    htmlnavFiltre += `<li onclick='clickLabel(\"${uniqueTypes[l]}\")'><input  type=\"checkbox\" class=\"check\" id=\"${uniqueTypes[l]}\" name=\"header__tags\"><label class=\"labeltags\">${uniqueTypes[l]}</label></li>`;\r\n  }\r\n  navFiltre.innerHTML = htmlnavFiltre;\r\n}\r\n\r\nfunction myFunctionTriUtensils() {\r\n  if (\r\n    document\r\n      .getElementById(\"myDropdown-ingredient\")\r\n      .classList.contains(\"show-ingredient\")\r\n  ) {\r\n    document\r\n      .getElementById(\"myDropdown-ingredient\")\r\n      .classList.toggle(\"show-ingredient\");\r\n  }\r\n  if (\r\n    document\r\n      .getElementById(\"myDropdown-device\")\r\n      .classList.contains(\"show-device\")\r\n  ) {\r\n    document\r\n      .getElementById(\"myDropdown-device\")\r\n      .classList.toggle(\"show-device\");\r\n  }\r\n\r\n  document\r\n    .getElementById(\"myDropdown-utensils\")\r\n    .classList.toggle(\"show-utensils\");\r\n}\r\nwindow.myFunctionTriUtensils = myFunctionTriUtensils;\r\n\r\nconst searchUt = document.getElementById(\"searchUtensils\");\r\nfunction utensilsFilter(recipes) {\r\n  searchUt.addEventListener(\"input\", (e) => {\r\n    const element = e.target.value.toLowerCase();\r\n    const result = recipes.filter((search) =>\r\n      search.ustensils.some((searchArray) =>\r\n        searchArray.toLowerCase().includes(element)\r\n      )\r\n    );\r\n    result.push({ search: element });\r\n    showTriUtensils(result);\r\n  });\r\n}\r\nwindow.utensilsFilter = utensilsFilter;\r\n\r\nfunction clickLabel(x) {\r\n  const myArrayFromLocalStorage = localStorage.getItem(\"filtre\");\r\n  if (myArrayFromLocalStorage && myArrayFromLocalStorage.length) {\r\n    const myArray = JSON.parse(myArrayFromLocalStorage);\r\n    for (let array in myArray) {\r\n      const elements = myArray[array];\r\n\r\n      filtreAtif.push(elements);\r\n    }\r\n  }\r\n  filtreAtif.push(x);\r\n  localStorage.setItem(\"filtre\", JSON.stringify(filtreAtif));\r\n  window.location.reload();\r\n}\r\nwindow.clickLabel = clickLabel;\r\n\r\nfunction showLabel() {\r\n  const myArrayFromLocalStorage = localStorage.getItem(\"filtre\");\r\n  if (myArrayFromLocalStorage && myArrayFromLocalStorage.length) {\r\n    const myArray = JSON.parse(myArrayFromLocalStorage);\r\n    let labelUtensil = document.getElementById(\"container-label\");\r\n    let htmllabelUtensil = \"\";\r\n    for (let array in myArray) {\r\n      const elements = myArray[array];\r\n\r\n      htmllabelUtensil += `<div class=\"label\">${elements}<i class=\"far fa-times-circle\"></i></div>`;\r\n    }\r\n    labelUtensil.innerHTML = htmllabelUtensil;\r\n  }\r\n}\r\nwindow.showLabel = showLabel;\r\n\r\n/* ---------------------------------------------------------------------------- */\r\n\r\n//Barre de recherche avec  filtres name --> appliance --> recipes --> ingredients -->\r\n\r\nconst searchUser = document.querySelector(\"#search-bar__text\");\r\n\r\nfunction barreFilter(recipes) {\r\n  searchUser.addEventListener(\"input\", (e) => {\r\n    const element = e.target.value.toLowerCase();\r\n\r\n    const result1 = recipes.filter((search) =>\r\n      search.name.toLowerCase().includes(element)\r\n    );\r\n\r\n    const result2 = recipes.filter((search) =>\r\n      search.appliance.toLowerCase().includes(element)\r\n    );\r\n\r\n    const result3 = recipes.filter((search) =>\r\n      search.ingredients.some((searchArray) =>\r\n        searchArray.ingredient.toLowerCase().includes(element)\r\n      )\r\n    );\r\n\r\n    const result4 = recipes.filter((search) =>\r\n      search.ustensils.some((searchArray) =>\r\n        searchArray.toLowerCase().includes(element)\r\n      )\r\n    );\r\n    function removeDuplicates(inArray) {\r\n      let arr = inArray.concat();\r\n\r\n      for (let i = 0; i < arr.length; ++i) {\r\n        for (let j = i + 1; j < arr.length; ++j) {\r\n          if (arr[i] === arr[j]) {\r\n            arr.splice(j, 1);\r\n          }\r\n        }\r\n      }\r\n      return arr;\r\n    }\r\n    const resultAll = result1.concat(result2, result3, result4);\r\n    const result = removeDuplicates(resultAll);\r\n\r\n    fetchRecipes(result);\r\n  });\r\n}\r\n\r\nwindow.ingredientFilter = ingredientFilter;\r\n\r\n/* ---------------------------------------------------------------------------- */\r\n\r\nfetchData((recipes) => {\r\n  fetchRecipes(recipes);\r\n  showTriIngredient(recipes);\r\n  showTriDevice(recipes);\r\n  showTriUtensils(recipes);\r\n  barreFilter(recipes);\r\n  ingredientFilter(recipes);\r\n  deviceFilter(recipes);\r\n  utensilsFilter(recipes);\r\n  showLabel();\r\n});\r\n\n\n//# sourceURL=webpack://lespetitsplats/./javascript/index.js?");

/***/ }),

/***/ "./javascript/rendercard.js":
/*!**********************************!*\
  !*** ./javascript/rendercard.js ***!
  \**********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://lespetitsplats/./javascript/rendercard.js?");

/***/ }),

/***/ "./javascript/utils.js":
/*!*****************************!*\
  !*** ./javascript/utils.js ***!
  \*****************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://lespetitsplats/./javascript/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./javascript/index.js");
/******/ 	
/******/ })()
;