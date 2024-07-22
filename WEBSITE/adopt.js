
const productData = [
  {
    id: "item1",
    h2: "Labrador Retriever",
    h4: "22,000/-",
  },

  {
    id: "item2",
    h2: "German Shephard",
    h4: "32,000/-",
  },
  {
    id: "item3",
    h2: "Poodle",
    h4: "30,000/-",
  },
  {
    id: "item4",
    h2: "Shiba Inu",
    h4: "55,000/-",
  },
  {
    id: "item5",
    h2: "Golden Retriever",
    h4: "25,000/-",
  },
  {
    id: "item6",
    h2: "Bulldog",
    h4: "25,000/-",
  },
  {
    id: "item7",
    h2: "Beagle",
    h4: "45,000/-",
  },
  {
    id: "item8",
    h2: "Yorkshire Terrier",
    h4: "90,000/-",
  },
  {
    id: "item9",
    h2: "Boxer",
    h4: "20,000/-",
  },
  {
    id: "item10",
    h2: "Siberian Husky",
    h4: "30,000/-",
  },
  {
    id: "item11",
    h2: "Dachshund",
    h4: "85,000/-",
  },
  {
    id: "item12",
    h2: "Dalmatians",
    h4: "50,000/-",
  },
  {
    id: "item13",
    h2: "Chow Chow",
    h4: "45,000/-",
  },
  {
    id: "item14",
    h2: "Saint Bernard",
    h4: "22,000/-",
  },
  {
    id: "item15",
    h2: "Dobermann",
    h4: "25,000/-",
  },
  {
    id: "item16",
    h2: "Great Dane",
    h4: "18,000/-",
  },
  {
    id: "item17",
    h2: "Pugs",
    h4: "15,000/-",
  },
  {
    id: "item18",
    h2: "Chihuahuas",
    h4: "100,000/-",
  },
];

const productArray = document.querySelectorAll(".dog-listing");

productArray.forEach((item) => {
  item.addEventListener("click", () => {
    const product = productData.find((p) => p.id === item.id);
    localStorage.setItem(
      product.id,
      JSON.stringify({ h2: product.h2, h4: product.h4 })
    );
  });
});

const productsDiv = document.querySelector(".products");
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const item = JSON.parse(localStorage.getItem(key));
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");
  productDiv.innerHTML = `
      <div class="product-info">
        <h2>${item.h2}</h2>
        <p class="price">${item.h4}</p>
      </div>
      <div class="product-actions">
        <button class="remove-btn">Remove</button>
      </div>
    `;

  productsDiv.appendChild(productDiv);

  const removeBtn = productDiv.querySelector(".remove-btn");
  removeBtn.addEventListener("click", () => {
    localStorage.removeItem(key);
    productDiv.remove();
  });
}
onLoadCartNumbers();
