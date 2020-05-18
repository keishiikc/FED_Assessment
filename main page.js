

var product = [ {
    "name": "iPhone 11 Pro Max",
    "brand": "apple",
"description": "The iPhone 11 Pro Max",
    "price": "1099"
},

{
    "name": "iPhone 11 Pro",
    "brand": "apple",
"description": "The iPhone 11 Pro",
    "price": "999"
},

{
    "name": "iPhone 11",
    "brand": "apple",
" description": "The iPhone 11",
    "price": "699"
},

{
    "name": "iPhone XR",
    "brand": "apple",
" description": "The iPhone XR",
    "price": "599"
},

{
    "name": "iPhone X",
    "brand": "apple",
" description": "The iPhone X",
    "price": "780"
},

{
    "name": "iPhone 7",
    "brand": "apple",
" description": "The iPhone &",
    "price": "549"
}
]


/* MODAL */

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var btn = document.getElementById("cart-icon");
var btn1 = document.getElementById("order1");
var btn2 = document.getElementById("order2");
var btn3 = document.getElementById("order3");
var btn4 = document.getElementById("order4");
var btn5 = document.getElementById("order5");
var btn6 = document.getElementById("order6");
var prev = document.getElementById("arrowleft");
var next = document.getElementById("arrow-right");



btn.onclick = function() {
    modal.style.display = "block";
}
    
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

btn1.addEventListener("click", function(){
    var cartitem = document.createElement("li");
    alert("Successfully Added to Cart");
    var cartadded = document.createTextNode(product[0].name+ " at $" + product[0].price);
    cartitem.appendChild(cartadded);
    document.getElementById("cartList").appendChild(cartitem);
}
);
btn2.addEventListener("click", function(){
    var cartitem = document.createElement("li");
    alert("Successfully Added to Cart");
    var cartadded = document.createTextNode(product[1].name+ " at $" + product[1].price);
    cartitem.appendChild(cartadded);
    document.getElementById("cartList").appendChild(cartitem);
}
);
btn3.addEventListener("click", function(){
    var cartitem = document.createElement("li");
    alert("Successfully Added to Cart");
    var cartadded = document.createTextNode(product[2].name+ " at $" + product[2].price);
    cartitem.appendChild(cartadded);
    document.getElementById("cartList").appendChild(cartitem);
}
);
btn4.addEventListener("click", function(){
    var cartitem = document.createElement("li");
    alert("Successfully Added to Cart");
    var cartadded = document.createTextNode(product[3].name+ " at $" + product[3].price);
    cartitem.appendChild(cartadded);
    document.getElementById("cartList").appendChild(cartitem);
}
);
btn5.addEventListener("click", function(){
    var cartitem = document.createElement("li");
    alert("Successfully Added to Cart");
    var cartadded = document.createTextNode(product[4].name+ " at $" + product[4].price);
    cartitem.appendChild(cartadded);
    document.getElementById("cartList").appendChild(cartitem);
}
);
btn6.addEventListener("click", function(){
    var cartitem = document.createElement("li");
    alert("Successfully Added to Cart");
    var cartadded = document.createTextNode(product[5].name+ " at $" + product[5].price);
    cartitem.appendChild(cartadded);
    document.getElementById("cartList").appendChild(cartitem);
}
);

/* CAROUSEL*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("product-display");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
