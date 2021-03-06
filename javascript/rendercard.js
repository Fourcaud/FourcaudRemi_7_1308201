let createCard = (recipe) => {
  //image
  let image = create("div", {
    class: "card-img-top card-img-placeholder",
    alt: "card-image",
  });
  //title
  let title = create("h2", { class: "card-title w-50 card-content-title" });

  title.textContent = recipe.name;

  let timeParent = create("div", { class: "d-flex font-weight-bold" });
  timeParent.innerHTML += `<span class='far fa-clock mt-2' ></span> <p class='ml-2' > ${recipe.time} min</p>`;

  //regroupement des éléments d'en-tête
  let headerParent = create("div", {
    class: "d-flex justify-content-between mt-3 px-3",
  });
  headerParent.appendChild(title);
  headerParent.appendChild(timeParent);

  //ingredients list
  let ingredients = create("div", { class: "ingredient-container" });

  let eachIngredient = recipe.ingredients
    .map(function (ingredients) {
      if (ingredients.ingredient && ingredients.unit) {
        return (
          "<p class='mb-0'><span class='font-weight-bold ingredient'>" +
          ingredients.ingredient +
          "</span>: " +
          ingredients.quantity +
          ingredients.unit +
          "</p>"
        );
      } else if (ingredients.quantity && !ingredients.unit) {
        return (
          "<p class='mb-0'><span class='font-weight-bold ingredient'>" +
          ingredients.ingredient +
          "</span>: " +
          ingredients.quantity +
          "</p>"
        );
      } else if (!ingredients.quantity && !ingredients.unit) {
        return (
          "<p class='mb-0'><span class='font-weight-bold ingredient'>" +
          ingredients.ingredient +
          "</span></p>"
        );
      }
    })
    .join("");

  ingredients.innerHTML = eachIngredient;

  //cook method
  let method = create("p", { class: "description w-50" });
  method.textContent = recipe.description;

  //appliance section
  let appliances = create("p", { class: "sr-only appliance" });
  appliances.textContent = recipe.appliance;

  //utensils section
  let utensils = create("div", { class: "sr-only" });

  let eachUtensils = recipe.ustensils
    .map(function (utensil) {
      return "<p class='utensil'>" + utensil + "</p>";
    })
    .join("");
  utensils.innerHTML = eachUtensils;

  //card body
  let cardBody = create("div", {
    class: "card-body d-flex justify-content-between card-content",
  });

  //combine in card body
  cardBody.appendChild(ingredients);
  cardBody.appendChild(method);
  cardBody.appendChild(appliances);
  cardBody.appendChild(utensils);

  //card container
  let cardContainer = create("article", {
    class: "card recipe-card pb-3 ",
  });

  //combine to DOM
  cardContainer.appendChild(image);
  cardContainer.appendChild(headerParent);
  cardContainer.appendChild(cardBody);

  let mainSection = document.getElementById("main");
  //put into DOM
  mainSection.appendChild(cardContainer);
};

window.createCard = createCard;
