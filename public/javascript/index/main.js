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

/***/ "./javascript/dropdown.js":
/*!********************************!*\
  !*** ./javascript/dropdown.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./javascript/index.js\");\n\r\n\r\nlet activeFilters = [];\r\n\r\nconst clickItem = (name, type) => {\r\n  if (!activeFilters.find((filter) => filter.name === name)) {\r\n    activeFilters.push({ name: name.toLowerCase(), type: type });\r\n  }\r\n  liveFilter(activeFilters);\r\n};\r\nwindow.clickItem = clickItem;\r\n\r\nfunction liveFilter(element) {\r\n  let label = document.getElementById(\"container-label\");\r\n  let htmllabel = \"\";\r\n  element.forEach((results) => {\r\n    if (results.type === \"ingredient\") {\r\n      //creer label ingredient\r\n      htmllabel += `<p class=\"labelIngredient\">${results.name}<i class=\"far fa-times-circle\" onclick='deleteItem(\"${results.name}\")'></i></p>`;\r\n    } else if (results.type === \"device\") {\r\n      //creer label device\r\n      htmllabel += `<p class=\"labelDevice\">${results.name}<i class=\"far fa-times-circle\" onclick='deleteItem(\"${results.name}\")'></i></p>`;\r\n    } else if (results.type === \"utensils\") {\r\n      //creer label ustensils\r\n      htmllabel += `<p class=\"labelUtensil\">${results.name}<i class=\"far fa-times-circle\" onclick='deleteItem(\"${results.name}\")'></i></p>`;\r\n    }\r\n  });\r\n  label.innerHTML = htmllabel;\r\n  searchRecipeDropdown(element);\r\n}\r\n\r\nconst deleteItem = (name) => {\r\n  let filtersNoDelete = activeFilters.filter((active) => active.name !== name);\r\n  activeFilters = filtersNoDelete;\r\n\r\n  liveFilter(activeFilters);\r\n};\r\nwindow.deleteItem = deleteItem;\r\n\r\nfunction addItemsDropdown(Data) {\r\n  let navFiltreIngredient = document.getElementById(\"container-ingredient\");\r\n  let htmlnavFiltreIngredient = \"\";\r\n  let allIngredient = [];\r\n  Data.forEach((recipe) => {\r\n    recipe.ingredients.forEach((element) => {\r\n      if (\r\n        !allIngredient.find((item) => item.ingredient === element.ingredient)\r\n      ) {\r\n        allIngredient.push(element.ingredient);\r\n      }\r\n    });\r\n  });\r\n  const allIngredientUnique = [...new Set(allIngredient)];\r\n\r\n  for (let l in allIngredientUnique) {\r\n    htmlnavFiltreIngredient += `<li onclick='clickItem(\"${allIngredientUnique[l]}\" , \"ingredient\")'>${allIngredientUnique[l]}</li>`;\r\n  }\r\n  navFiltreIngredient.innerHTML = htmlnavFiltreIngredient;\r\n  /*-------------------------------------------------------------------------------------------------------------------------------------------*/\r\n  let navFiltreUtensils = document.getElementById(\"container-utensils\");\r\n  let htmlnavFiltreUtensils = \"\";\r\n  let allUtensils = [];\r\n  Data.forEach((recipe) => {\r\n    recipe.ustensils.forEach((element) => {\r\n      if (!allUtensils.find((item) => item === element)) {\r\n        allUtensils.push(element);\r\n      }\r\n    });\r\n  });\r\n\r\n  for (let l in allUtensils) {\r\n    htmlnavFiltreUtensils += `<li onclick='clickItem(\"${allUtensils[l]}\" , \"utensils\")'>${allUtensils[l]}</li>`;\r\n  }\r\n  navFiltreUtensils.innerHTML = htmlnavFiltreUtensils;\r\n  /*-------------------------------------------------------------------------------------------------------------------------------------------*/\r\n  let navFiltreDevice = document.getElementById(\"container-device\");\r\n  let htmlnavFiltreDevice = \"\";\r\n  let allDevice = [];\r\n  Data.forEach((recipe) => {\r\n    if (!allDevice.find((element) => element === recipe.appliance)) {\r\n      allDevice.push(recipe.appliance);\r\n    }\r\n  });\r\n\r\n  for (let l in allDevice) {\r\n    htmlnavFiltreDevice += `<li onclick='clickItem(\"${allDevice[l]}\" , \"device\")'>${allDevice[l]}</li>`;\r\n  }\r\n  navFiltreDevice.innerHTML = htmlnavFiltreDevice;\r\n}\r\nwindow.addItemsDropdown = addItemsDropdown;\r\n\r\nconst searchIn = document.getElementById(\"searchIngredients\");\r\n\r\nsearchIn.addEventListener(\"input\", (e) => {\r\n  if (e.target.value.length >= 3) {\r\n    const elem = e.target.value.toLowerCase();\r\n    let navFiltreIngredient = document.getElementById(\"container-ingredient\");\r\n    let htmlnavFiltreIngredient = \"\";\r\n    let allIngredient = [];\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.recipeData.forEach((recipe) => {\r\n      recipe.ingredients.forEach((element) => {\r\n        if (element.ingredient.toLowerCase().includes(elem)) {\r\n          allIngredient.push(element.ingredient.toLowerCase());\r\n        }\r\n      });\r\n    });\r\n    let uniqueAllIngredients = [];\r\n    allIngredient.forEach((element) => {\r\n      if (!uniqueAllIngredients.find((item) => item === element)) {\r\n        uniqueAllIngredients.push(element);\r\n      }\r\n    });\r\n\r\n    for (let l in uniqueAllIngredients) {\r\n      htmlnavFiltreIngredient += `<li onclick='clickItem(\"${uniqueAllIngredients[l]}\" , \"ingredient\")'>${uniqueAllIngredients[l]}</li>`;\r\n    }\r\n    navFiltreIngredient.innerHTML = htmlnavFiltreIngredient;\r\n  } else {\r\n    addItemsDropdown();\r\n  }\r\n});\r\n\r\nconst searchDe = document.getElementById(\"searchDevice\");\r\n\r\nsearchDe.addEventListener(\"input\", (e) => {\r\n  if (e.target.value.length >= 3) {\r\n    const elem = e.target.value.toLowerCase();\r\n    let navFiltreDevice = document.getElementById(\"container-device\");\r\n    let htmlnavFiltreDevice = \"\";\r\n    let allDevice = [];\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.recipeData.forEach((element) => {\r\n      if (element.appliance.toLowerCase().includes(elem)) {\r\n        allDevice.push(element.appliance.toLowerCase());\r\n      }\r\n    });\r\n    let uniqueAllDevice = [];\r\n    allDevice.forEach((element) => {\r\n      if (!uniqueAllDevice.find((item) => item === element)) {\r\n        uniqueAllDevice.push(element);\r\n      }\r\n    });\r\n    for (let l in uniqueAllDevice) {\r\n      htmlnavFiltreDevice += `<li onclick='clickItem(\"${uniqueAllDevice[l]}\" , \"device\")'>${uniqueAllDevice[l]}</li>`;\r\n    }\r\n    navFiltreDevice.innerHTML = htmlnavFiltreDevice;\r\n  } else {\r\n    addItemsDropdown();\r\n  }\r\n});\r\n\r\nconst searchUt = document.getElementById(\"searchUtensils\");\r\n\r\nsearchUt.addEventListener(\"input\", (e) => {\r\n  if (e.target.value.length >= 3) {\r\n    const elem = e.target.value.toLowerCase();\r\n    let navFiltreUtensils = document.getElementById(\"container-utensils\");\r\n    let htmlnavFiltreUtensils = \"\";\r\n    let allUtensils = [];\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.recipeData.forEach((recipe) => {\r\n      recipe.ustensils.forEach((element) => {\r\n        if (element.toLowerCase().includes(elem)) {\r\n          allUtensils.push(element.toLowerCase());\r\n        }\r\n      });\r\n    });\r\n    let uniqueAllUtensils = [];\r\n    allUtensils.forEach((element) => {\r\n      if (!uniqueAllUtensils.find((item) => item === element)) {\r\n        uniqueAllUtensils.push(element);\r\n      }\r\n    });\r\n    for (let l in uniqueAllUtensils) {\r\n      htmlnavFiltreUtensils += `<li onclick='clickItem(\"${uniqueAllUtensils[l]}\" , \"utensils\")'>${uniqueAllUtensils[l]}</li>`;\r\n    }\r\n    navFiltreUtensils.innerHTML = htmlnavFiltreUtensils;\r\n  } else {\r\n    addItemsDropdown();\r\n  }\r\n});\r\n\r\nfunction openAndCloseDropdown(classToToggle, elem, event) {\r\n  const classes = [\r\n    { name: \"myDropdown-device\", type: \"show-device\" },\r\n    { name: \"myDropdown-utensils\", type: \"show-utensils\" },\r\n    { name: \"myDropdown-ingredient\", type: \"show-ingredient\" },\r\n  ];\r\n\r\n  classes.forEach((classe) => {\r\n    if (classe.name !== classToToggle || event === \"close\") {\r\n      if (\r\n        document.getElementById(classe.name).classList.contains(classe.type)\r\n      ) {\r\n        document.getElementById(classe.name).classList.remove(classe.type);\r\n      }\r\n    } else {\r\n      document.getElementById(classToToggle).classList.add(elem);\r\n    }\r\n  });\r\n}\r\nwindow.openAndCloseDropdown = openAndCloseDropdown;\r\n\n\n//# sourceURL=webpack://lespetitsplats/./javascript/dropdown.js?");

/***/ }),

/***/ "./javascript/filter.js":
/*!******************************!*\
  !*** ./javascript/filter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./javascript/index.js\");\n// recherche\r\n\r\n// 1. fetchData\r\n// 2. recherche => activeFilters si y en a ===> searchResult\r\n// 3. searchResult ==> recherche par input search\r\n// 4. clear main + affichage searchResult\r\n\r\n\r\n\r\nlet resultInput = [];\r\nlet resultLabel = [];\r\n\r\n// Bar de recherche avec filtre\r\nconst searchUser = document.querySelector(\"#search-input\");\r\n\r\nsearchUser.addEventListener(\"input\", (e) => {\r\n  if (e.target.value.length >= 3) {\r\n    const element = e.target.value.toLowerCase();\r\n    searchRecipe(element);\r\n  } else {\r\n    resultInput = [];\r\n    searchEngine();\r\n  }\r\n});\r\n\r\nfunction searchRecipe(element) {\r\n  if (element.length > 0) {\r\n    const nameFilter = _index_js__WEBPACK_IMPORTED_MODULE_0__.recipeData.filter((search) =>\r\n      search.name.toLowerCase().includes(element)\r\n    );\r\n\r\n    const applianceFilter = _index_js__WEBPACK_IMPORTED_MODULE_0__.recipeData.filter((search) =>\r\n      search.appliance.toLowerCase().includes(element)\r\n    );\r\n\r\n    const ingredientFilter = _index_js__WEBPACK_IMPORTED_MODULE_0__.recipeData.filter((search) =>\r\n      search.ingredients.some((searchArray) =>\r\n        searchArray.ingredient.toLowerCase().includes(element)\r\n      )\r\n    );\r\n\r\n    const ustensilFilter = _index_js__WEBPACK_IMPORTED_MODULE_0__.recipeData.filter((search) =>\r\n      search.ustensils.some((searchArray) =>\r\n        searchArray.toLowerCase().includes(element)\r\n      )\r\n    );\r\n\r\n    resultInput = nameFilter.concat(\r\n      applianceFilter,\r\n      ingredientFilter,\r\n      ustensilFilter\r\n    );\r\n    resultInput = [...new Set(resultInput)];\r\n  } else {\r\n    resultInput = [];\r\n  }\r\n\r\n  searchEngine();\r\n}\r\n\r\nwindow.searchRecipe = searchRecipe;\r\n\r\nfunction searchRecipeDropdown(element) {\r\n  let dataFilterRecipe = _index_js__WEBPACK_IMPORTED_MODULE_0__.recipeData;\r\n  if (element.length > 0) {\r\n    element.forEach((elem) => {\r\n      let applianceFilter = dataFilterRecipe.filter((search) =>\r\n        search.appliance.toLowerCase().includes(elem.name)\r\n      );\r\n\r\n      let ingredientFilter = dataFilterRecipe.filter((search) =>\r\n        search.ingredients.some((searchArray) =>\r\n          searchArray.ingredient.toLowerCase().includes(elem.name)\r\n        )\r\n      );\r\n\r\n      let ustensilFilter = dataFilterRecipe.filter((search) =>\r\n        search.ustensils.some((searchArray) =>\r\n          searchArray.toLowerCase().includes(elem.name)\r\n        )\r\n      );\r\n\r\n      resultLabel = ustensilFilter.concat(applianceFilter, ingredientFilter);\r\n      dataFilterRecipe = resultLabel;\r\n    });\r\n  } else {\r\n    resultLabel = [];\r\n  }\r\n\r\n  searchEngine();\r\n}\r\n\r\nwindow.searchRecipeDropdown = searchRecipeDropdown;\r\n\r\nfunction searchEngine() {\r\n  let allDataFilter = [];\r\n  const enableDropdown = document.querySelectorAll(\".container-label p\").length;\r\n  const inputLength = document.getElementById(\"search-input\").value.length;\r\n  if (enableDropdown > 0 && resultInput.length > 0) {\r\n    allDataFilter = resultInput.filter((e) =>\r\n      resultLabel.find((item) => e.id === item.id)\r\n    );\r\n  } else {\r\n    allDataFilter = resultInput.concat(resultLabel);\r\n  }\r\n  if (enableDropdown == 0 && inputLength == 0) {\r\n    let mainSection = document.getElementById(\"main\");\r\n    mainSection.innerHTML = \"\";\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.recipeData.forEach((recipe) => createCard(recipe));\r\n  } else {\r\n    if (allDataFilter.length !== 0) {\r\n      let mainSection = document.getElementById(\"main\");\r\n      mainSection.innerHTML = \"\";\r\n      allDataFilter.forEach((recipe) => createCard(recipe));\r\n      addItemsDropdown(allDataFilter);\r\n    } else {\r\n      let mainSection = document.getElementById(\"main\");\r\n      let errorMessage = \"\";\r\n      errorMessage += `Aucune recette ne correspond à votre critère… vous pouvez\r\n              chercher « tarte aux pommes », « poisson », etc.`;\r\n      mainSection.innerHTML = errorMessage;\r\n    }\r\n  }\r\n}\r\n\r\nwindow.searchEngine = searchEngine;\r\n\n\n//# sourceURL=webpack://lespetitsplats/./javascript/filter.js?");

/***/ }),

/***/ "./javascript/getdata.js":
/*!*******************************!*\
  !*** ./javascript/getdata.js ***!
  \*******************************/
/***/ (() => {

eval("function fetchData(callback) {\r\n  fetch(\"./recipes.json\")\r\n    .then((res) => res.json())\r\n    .then((data) => {\r\n      callback(data.recipes);\r\n    });\r\n}\r\nwindow.fetchData = fetchData;\r\n\n\n//# sourceURL=webpack://lespetitsplats/./javascript/getdata.js?");

/***/ }),

/***/ "./javascript/index.js":
/*!*****************************!*\
  !*** ./javascript/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"recipeData\": () => (/* binding */ recipeData)\n/* harmony export */ });\n/* harmony import */ var _getdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getdata.js */ \"./javascript/getdata.js\");\n/* harmony import */ var _getdata_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_getdata_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rendercard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rendercard.js */ \"./javascript/rendercard.js\");\n/* harmony import */ var _rendercard_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rendercard_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ \"./javascript/utils.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown.js */ \"./javascript/dropdown.js\");\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter.js */ \"./javascript/filter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst recipeData = [];\r\n\r\nfetchData((recipes) => {\r\n  recipes.forEach((recipe) => recipeData.push(recipe));\r\n  recipes.forEach((recipe) => createCard(recipe));\r\n  addItemsDropdown(recipeData);\r\n});\r\n\n\n//# sourceURL=webpack://lespetitsplats/./javascript/index.js?");

/***/ }),

/***/ "./javascript/rendercard.js":
/*!**********************************!*\
  !*** ./javascript/rendercard.js ***!
  \**********************************/
/***/ (() => {

eval("let createCard = (recipe) => {\r\n  //image\r\n  let image = create(\"div\", {\r\n    class: \"card-img-top card-img-placeholder\",\r\n    alt: \"card-image\",\r\n  });\r\n  //title\r\n  let title = create(\"h2\", { class: \"card-title w-50 card-content-title\" });\r\n\r\n  title.textContent = recipe.name;\r\n\r\n  let timeParent = create(\"div\", { class: \"d-flex font-weight-bold\" });\r\n  timeParent.innerHTML += `<span class='far fa-clock mt-2' ></span> <p class='ml-2' > ${recipe.time} min</p>`;\r\n\r\n  //regroupement des éléments d'en-tête\r\n  let headerParent = create(\"div\", {\r\n    class: \"d-flex justify-content-between mt-3 px-3\",\r\n  });\r\n  headerParent.appendChild(title);\r\n  headerParent.appendChild(timeParent);\r\n\r\n  //ingredients list\r\n  let ingredients = create(\"div\", { class: \"ingredient-container\" });\r\n\r\n  let eachIngredient = recipe.ingredients\r\n    .map(function (ingredients) {\r\n      if (ingredients.ingredient && ingredients.unit) {\r\n        return (\r\n          \"<p class='mb-0'><span class='font-weight-bold ingredient'>\" +\r\n          ingredients.ingredient +\r\n          \"</span>: \" +\r\n          ingredients.quantity +\r\n          ingredients.unit +\r\n          \"</p>\"\r\n        );\r\n      } else if (ingredients.quantity && !ingredients.unit) {\r\n        return (\r\n          \"<p class='mb-0'><span class='font-weight-bold ingredient'>\" +\r\n          ingredients.ingredient +\r\n          \"</span>: \" +\r\n          ingredients.quantity +\r\n          \"</p>\"\r\n        );\r\n      } else if (!ingredients.quantity && !ingredients.unit) {\r\n        return (\r\n          \"<p class='mb-0'><span class='font-weight-bold ingredient'>\" +\r\n          ingredients.ingredient +\r\n          \"</span></p>\"\r\n        );\r\n      }\r\n    })\r\n    .join(\"\");\r\n\r\n  ingredients.innerHTML = eachIngredient;\r\n\r\n  //cook method\r\n  let method = create(\"p\", { class: \"description w-50\" });\r\n  method.textContent = recipe.description;\r\n\r\n  //appliance section\r\n  let appliances = create(\"p\", { class: \"sr-only appliance\" });\r\n  appliances.textContent = recipe.appliance;\r\n\r\n  //utensils section\r\n  let utensils = create(\"div\", { class: \"sr-only\" });\r\n\r\n  let eachUtensils = recipe.ustensils\r\n    .map(function (utensil) {\r\n      return \"<p class='utensil'>\" + utensil + \"</p>\";\r\n    })\r\n    .join(\"\");\r\n  utensils.innerHTML = eachUtensils;\r\n\r\n  //card body\r\n  let cardBody = create(\"div\", {\r\n    class: \"card-body d-flex justify-content-between card-content\",\r\n  });\r\n\r\n  //combine in card body\r\n  cardBody.appendChild(ingredients);\r\n  cardBody.appendChild(method);\r\n  cardBody.appendChild(appliances);\r\n  cardBody.appendChild(utensils);\r\n\r\n  //card container\r\n  let cardContainer = create(\"article\", {\r\n    class: \"card recipe-card pb-3 \",\r\n  });\r\n\r\n  //combine to DOM\r\n  cardContainer.appendChild(image);\r\n  cardContainer.appendChild(headerParent);\r\n  cardContainer.appendChild(cardBody);\r\n\r\n  let mainSection = document.getElementById(\"main\");\r\n  //put into DOM\r\n  mainSection.appendChild(cardContainer);\r\n};\r\n\r\nwindow.createCard = createCard;\r\n\n\n//# sourceURL=webpack://lespetitsplats/./javascript/rendercard.js?");

/***/ }),

/***/ "./javascript/utils.js":
/*!*****************************!*\
  !*** ./javascript/utils.js ***!
  \*****************************/
/***/ (() => {

eval("const create = (elm, attributes) => {\r\n  const element = document.createElement(elm);\r\n  for (let key in attributes) {\r\n    element.setAttribute(key, attributes[key]);\r\n  }\r\n\r\n  return element;\r\n};\r\n\r\nwindow.create = create;\r\n\n\n//# sourceURL=webpack://lespetitsplats/./javascript/utils.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./javascript/index.js");
/******/ 	
/******/ })()
;