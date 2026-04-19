const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const cards = document.querySelectorAll(".card");

function filterPosts() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  cards.forEach(card => {
    const title = card.getAttribute("data-title");
    const category = card.getAttribute("data-category");

    const matchesSearch = title.includes(searchText);
    const matchesCategory =
      selectedCategory === "all" || category === selectedCategory;

    if (matchesSearch && matchesCategory) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function animateHeart(btn) {
  btn.classList.add("animate");

  setTimeout(() => {
    btn.classList.remove("animate");
  }, 300);
}

// Event Listeners
searchInput.addEventListener("input", filterPosts);
categoryFilter.addEventListener("change", filterPosts);