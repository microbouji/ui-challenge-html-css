const select = document.querySelector(".products select");
const radiogroup = document.querySelector('.products [role="radiogroup"]');
const productsList = document.querySelector(".products-list");
const products = Array.from(productsList.children);

select.addEventListener("change", (e) => displayProducts(e.target.value));
radiogroup.addEventListener("change", (e) => displayProducts(e.target.value));

function displayProducts(filter) {
  products.forEach((p) => p.classList.add("faded-out"));

  productsList.addEventListener(
    "transitionend",
    (e) => {
      products.forEach((p) => {
        if (filter === "All" || p.dataset.category === filter) {
          p.classList.remove("hidden");
          setTimeout(() => {
            p.classList.remove("faded-out");
          }, 0);
        } else {
          p.classList.add("hidden");
        }
      });
    },
    { once: true }
  );
}
