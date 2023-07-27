const tooltips = document.querySelectorAll(".all-tooltip .tooltip");
const container = document.querySelector(".container");
let timeoutId;
window.addEventListener("resize", contentPosition);
window.addEventListener("DOMContentLoaded", contentPosition);

function contentPosition() {
  tooltips.forEach((tooltip) => {
    const pin = tooltip.querySelector(".pin");
    const content = tooltip.querySelector(".tooltip-content");
    const arrow = tooltip.querySelector(".arrow");
    const pinLeft = pin.offsetLeft;


    content.style.left = pinLeft - content.offsetWidth / 2 + "px";
    content.style.top = pin.offsetTop + 30 + "px";
    // if (pinLeft + content.offsetWidth / 2 > container.offsetWidth) {
    //   const extraLeft =
    //     container.offsetWidth - (pinLeft + content.offsetWidth / 2);
    //   // console.log('right-conflict', tooltip)
    //   content.style.left =
    //     pinLeft - content.offsetWidth / 2 + "px";
    //   content.style.top = pin.offsetTop +30 + "px";
    // } else if (
    //   pin.offsetLeft + container.offsetLeft <
    //   content.offsetWidth / 2
    // ) {
    //   // console.log('left conflict', pin.offsetLeft)
    //   content.style.left = -container.offsetLeft + "px";
    //   content.style.top = pin.offsetTop + 30 + "px";
    // } else {
    //   content.style.left = pinLeft - content.offsetWidth / 2 + "px";
    //   content.style.top = pin.offsetTop + 30 + "px";
    // }
    // arrow.style.left =
    //   pinLeft - content.offsetLeft + pin.offsetWidth / 2 + "px";
  });
}
tooltips.forEach((tooltip) => {
  const pin = tooltip.querySelector(".pin");
  const content = tooltip.querySelector(".tooltip-content");
  pin.addEventListener("mouseover", () => {
    tooltip.classList.add("active");
  });
  pin.addEventListener("mouseleave", () => {
    timeoutId = setTimeout(() => {
      tooltip.classList.remove("active");
    }, 2000);
  });
  content.addEventListener("mouseover", () => {
    clearTimeout(timeoutId);
    tooltip.classList.add("active");
    
  });
  content.addEventListener("mouseleave", () => {
    timeoutId = setTimeout(() => {
      tooltip.classList.remove("active");
      
    }, 5000);
  });
});

class Products {
    constructor(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = img;
    }
}
const products= [
    new Products('Ramp','$200','https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80'),
    new Products('Couch','$500','./img/couch.webp'),
    new Products('Plant','$50','./img/roomplant.webp'),
    new Products('White Door','$300','./img/door.webp'),

]
products.forEach(function(product,i){
    document.querySelectorAll('.content h1')[i].innerHTML=product.name;
    document.querySelectorAll('.content p')[i].innerHTML=product.price;
    document.querySelectorAll('.tooltip-content img')[i].src=product.img;
});


const cart = [];

// Function to add items to cart
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
    return
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Function to update cart contents
function updateCart() {
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = ""; // Clear the list of products in the cart

  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const listItem = document.createElement("div");
    listItem.className = "cart-item";
    listItem.innerHTML = `
        <img src="" alt="">
        <h3>${cartItem.name}</h3>
        <p>$${cartItem.price}</p>
        <button onclick="removeFromCart(${i})">Remove</button>
    `;
    cartList.appendChild(listItem); // Add to the list of products in your cart

    totalPrice += parseFloat(cartItem.price); // Convert prices to floating point numbers and add to total
  }
//   let i = 0;

// while (i < cart.length) {
//   const cartItem = cart[i];
//   const listItem = document.createElement("div");
//   listItem.className = "cart-item";
//   listItem.innerHTML = `
//     <img src="" alt="">
//     <h3>${cartItem.name}</h3>
//     <p>$${cartItem.price}</p>
//     <button onclick="removeFromCart(${i})">Remove</button>
//   `;
//   cartList.appendChild(listItem); // add the items to cart

//   totalPrice += parseFloat(cartItem.price); // change the price to float and sum total

//   i++;
// }

  // 合計金額を表示
  const totalPriceElement = document.createElement("p");
  totalPriceElement.classList.add('total-price');
  totalPriceElement.textContent = "Total Price: $" + totalPrice.toFixed(2); // 2桁まで表示するように設定
  cartList.appendChild(totalPriceElement);
}