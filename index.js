var product = [
  {
    productName: "protien1",
    productPrice: "1000 L.E",
    productDesc:
      "Boost your muscle recovery and enhance your workout performance with our premium Whey Protein Powder. Packed with high-quality protein, essential amino acids, and low in carbs and sugar ",
  },
  {
    productName: "protien2",
    productPrice: "2000 L.E",
    productDesc:
      "Boost your muscle recovery and enhance your workout performance with our premium Whey Protein Powder. Packed with high-quality protein, essential amino acids, and low in carbs and sugar ",
  },
  {
    productName: "protien3",
    productPrice: "3000 L.E",
    productDesc:
      "Boost your muscle recovery and enhance your workout performance with our premium Whey Protein Powder. Packed with high-quality protein, essential amino acids, and low in carbs and sugar ",
  },
  {
    productName: "protien4",
    productPrice: "4000 L.E",
    productDesc:
      "Boost your muscle recovery and enhance your workout performance with our premium Whey Protein Powder.",
  },
  {
    productName: "protien5",
    productPrice: "5000 L.E",
    productDesc:
      "Boost your muscle recovery and enhance your workout performance with our premium Whey Protein Powder. ",
  },
  {
    productName: "protien6",
    productPrice: "6000 L.E",
    productDesc:
      "Boost your muscle recovery and enhance your workout performance with our premium Whey Protein Powder.",
  },
  {
    productName: "protien7",
    productPrice: "7000 L.E",
    productDesc:
      "Boost your muscle recovery and enhance your workout performance with our premium Whey Protein Powder.",
  },
  {
    productName: "protien8",
    productPrice: "8000 L.E",
    productDesc:
      "Boost your muscle recovery and enhance your workout performance with our premium Whey Protein Powder.",
  },
  {
    productName: "protien9",
    productPrice: "10000 L.E",
    productDesc:
      "Boost your muscle recovery and enhance your workout performance with our premium Whey Protein Powder.",
  },
];

let cardtitle = document.querySelectorAll(".card-title");
let cardtext = document.querySelectorAll(".card-text");
let carddesc = document.querySelectorAll(".desc");

for (let i = 0; i < product.length; i++) {
  cardtitle[i].innerHTML = product[i].productName;
  cardtext[i].innerHTML = product[i].productPrice;
  carddesc[i].innerHTML = product[i].productDesc;
}

let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
    setTimeout(() => {
      scrollToTopBtn.style.opacity = "1";
    }, 10);
  } else {
    scrollToTopBtn.style.opacity = "0";
    setTimeout(() => {
      scrollToTopBtn.style.display = "none";
    }, 400);
  }
};

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function fact(n) {
  if (n == 1) return 1;
  else {
    F = fact(n - 1);
    return F * n;
  }
}

console.log(fact(4));
