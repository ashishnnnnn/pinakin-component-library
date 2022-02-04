const all_ratings = document.querySelectorAll(".rating");

for (let i = 0; i < all_ratings.length; i++) {
  all_ratings[i].addEventListener("click", () => {
    for (let j = 0; j <= i; j++) {
      remove_class(all_ratings[j].querySelectorAll("a")[0], "display-none");
      add_class(all_ratings[j].querySelectorAll("a")[1], "display-none");
    }
    for (let j = i + 1; j < all_ratings.length; j++) {
      add_class(all_ratings[j].querySelectorAll("a")[0], "display-none");
      remove_class(all_ratings[j].querySelectorAll("a")[1], "display-none");
    }
  });
}

function remove_class(element, class_name) {
  if (element.classList.contains(class_name)) {
    element.classList.remove(class_name);
  }
}

function add_class(element, class_name) {
  if (!element.classList.contains(class_name)) {
    element.classList.add(class_name);
  }
}
