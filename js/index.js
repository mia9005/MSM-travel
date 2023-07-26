const tooltips = document.querySelectorAll(".all-tooltip .tooltip");
const fullDiv = document.querySelector("section");
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
    if (pinLeft + content.offsetWidth / 2 > fullDiv.offsetWidth) {
      const extraLeft =
        fullDiv.offsetWidth - (pinLeft + content.offsetWidth / 2);
      // console.log('right-conflict', tooltip)
      content.style.left =
        pinLeft - content.offsetWidth / 2 + extraLeft - 30 + "px";
      content.style.top = pin.offsetTop + 30 + "px";
    } else if (
      pin.offsetLeft + container.offsetLeft <
      content.offsetWidth / 2
    ) {
      // console.log('left conflict', pin.offsetLeft)
      content.style.left = -container.offsetLeft + "px";
      content.style.top = pin.offsetTop + 30 + "px";
    } else {
      content.style.left = pinLeft - content.offsetWidth / 2 + "px";
      content.style.top = pin.offsetTop + 30 + "px";
    }
    arrow.style.left =
      pinLeft - content.offsetLeft + pin.offsetWidth / 2 + "px";
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
      if (!tooltip.classList.contains("content-hover")) {
        tooltip.classList.remove("active");
      }
    }, 2000);
  });
  content.addEventListener("mouseover", () => {
    clearTimeout(timeoutId);
    tooltip.classList.add("active");
    tooltip.classList.add("content-hover");
  });
  content.addEventListener("mouseleave", () => {
    timeoutId = setTimeout(() => {
      tooltip.classList.remove("active");
      tooltip.classList.remove("content-hover");
    }, 2000);
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
    new Products('product1','$20','https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80'),
    new Products('product2','$30','https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80'),
    new Products('product3','$40','https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80'),
    new Products('product4','$40','https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80'),

]
products.forEach(function(product,i){
    document.querySelectorAll('.content h1')[i].innerHTML=product.name;
    document.querySelectorAll('.content p')[i].innerHTML=product.price;
    document.querySelectorAll('.tooltip-content img')[i].src=product.img;
});
for(let i=0; i<4; i++){
    document.querySelectorAll('.btn')[i].addEventListener('click',function(e){
        var title = e.target.previousElementSibling.previousElementSibling;
        var price = e.target.previousElementSibling;
        if(localStorage.getItem('name') != null){
            var inLocal = JSON.parse(localStorage.name);
            inLocal.push(title);
            localStorage.setItem('name',JSON.stringify(inLocal));            
        }
        localStorage.setItem('name',JSON.stringify([title]));
    });
}

// MAYA Part
const cart = [];

// カートに商品を追加する関数
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

// カートから商品を削除する関数
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// カートの内容を更新する関数
function updateCart() {
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = ""; // カート内の商品一覧をクリア

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
        cartList.appendChild(listItem); // カート内の商品一覧に追加

        totalPrice += parseFloat(cartItem.price); // 値段を浮動小数点数に変換して合計に追加
    }

    // 合計金額を表示
    const totalPriceElement = document.createElement("p");
    totalPriceElement.textContent = "Total Price: $" + totalPrice.toFixed(2); // 2桁まで表示するように設定
    cartList.appendChild(totalPriceElement);
}