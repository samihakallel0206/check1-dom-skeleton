// alert("Hello!!");
//declaration de variable ou initialisation de var
const Plus = Array.from(document.querySelectorAll(".fa-plus-circle"));
// console.log(Plus)
const Minus = Array.from(document.getElementsByClassName("fa-minus-circle"));
const Bin = Array.from(document.getElementsByClassName("fa-trash-alt"));
const Like = Array.from(document.querySelectorAll(".fa-heart"));
const Card = Array.from(document.querySelectorAll(".card"));
//process
//btn plus
for (const incr of Plus) {
  incr.addEventListener("click", function () {
    incr.nextElementSibling.innerHTML++;
    totalPrice();
  });
}
//btn minus
for (const decr of Minus) {
  decr.addEventListener("click", function () {
    if (decr.previousElementSibling.innerHTML > 1)
      decr.previousElementSibling.innerHTML--;
    totalPrice();
  });
}
//btn trash
for (const i in Bin) {
  Bin[i].addEventListener("click", function () {
    Card[i].remove();
    totalPrice();
  });
}

//btn heart
for (const heart of Like) {
  heart.addEventListener("click", function () {
    if (heart.style.color === "red") {
      heart.style.color = "black";
    } else {
      heart.style.color = "red";
    }
  });
}

function totalPrice() {
  const Price = Array.from(document.querySelectorAll(".unit-price"));
  const Qte = Array.from(document.querySelectorAll(".quantity"));
  //   console.log(Price);
  var totalP = 0;
  for (const i in Price) {
    totalP += Price[i].innerHTML * Qte[i].innerHTML;
    // console.log(Price[i].innerHTML);
    // console.log(Qte[i].innerHTML);
    // console.log(t);
  }
  document.querySelector(".total").innerHTML = totalP + "$";
}

// totalPrice();
