function fetchData(callback) {
  fetch("./recipes.json")
    .then((res) => res.json())
    .then((data) => {
      callback(data.recipes);
    });
}
window.fetchData = fetchData;
