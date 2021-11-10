const menu = document.querySelector(".menu");
const btnMenuToggle = document.querySelector(".btn-menu-toggle");

btnMenuToggle.addEventListener("click", () => {
  [document.documentElement, document.body, menu, btnMenuToggle].forEach((el) =>
    el.classList.toggle("menu-visible")
  );
});

const search = document.querySelector(".search-backdrop");
const searchInput = search.querySelector('input[name="search"]');
const btnOpenSearch = document.querySelector(".btn-open-search");
const btnCloseSearch = document.querySelector(".btn-close-search");

btnOpenSearch.addEventListener("click", () => {
  search.classList.add("search-visible");
});

btnCloseSearch.addEventListener("click", closeSearch);

search.addEventListener("transitionend", (e) => {
  if (
    e.propertyName === "visibility" &&
    search.classList.contains("search-visible")
  ) {
    searchInput.focus();
  }
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSearch();
  }
});

function closeSearch() {
  searchInput.value = "";
  search.classList.remove("search-visible");
  btnOpenSearch.focus();
}
