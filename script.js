const temp = document.querySelector("#temp");
const bevList = document.querySelector("#bevList");
const size = document.querySelector("#size");
const form = document.querySelector("form");
const main = document.querySelector(".menu");
const itemDescription = document.querySelector(".itemDescription");
const menuPrice = document.querySelector(".menuPrice");
const priceBox = document.querySelector(".priceBox");
const add = document.querySelector(".add");
const prices = document.querySelector('.prices');
const hotOption = document.querySelector('.hotOption');
const coldOption = document.querySelector('.coldOption');
const cartItems = document.querySelector('.cartItems');
const cart = document.querySelector('.cart');
const subTotal = document.querySelector('.subtotal');
const subText = document.querySelector('.subText');
const subPrice = document.querySelector('.subPrice');
const tax = document.querySelector('.tax');
const taxText = document.querySelector('.taxText');
const taxPrice = document.querySelector('.taxPrice');
const total = document.querySelector('.total');
const totalText = document.querySelector('.totalText');
const totalPrice = document.querySelector('.totalPrice');
let bevItem;


class Beverages {
    constructor(items) {
        this.items = items;
    }

    // findPrice(name) {
    //     this.items.indexOf(name);
    // }

    displayList() {
     
        const first = bevList.children[0];
        bevList.innerHTML = '';
        bevList.appendChild(first);
        for (let i = 0; i < this.items.length; i++) {
            const bev = this.items[i];
            const bevSelect = document.createElement('option');
            bevSelect.classList.add('bevSelect');
            bevSelect.innerHTML = bev.name;
            bevList.appendChild(bevSelect);
        }
    }

    priceDisplay() {
        for (let i = 0; i < this.items.length; i++) {
            const bevOption = this.items[i];

            if (bevList.value === bevOption.name) {
                bevItem = `${bevList.value} $${bevOption[`${size.value}Price`]}`;
                menuPrice.innerHTML = bevItem;
            }
            if (bevOption.name === "Batch Brew") {
                itemDescription.innerText = `Batch Brew: Our full-bodied bean of the day.`;
            }
            if (bevOption.name === "Espresso") {
                itemDescription.innerText = `Espresso: Our signature Espresso Roast.`;
            }
            if (bevOption.name === "Americano") {
                itemDescription.innerText = `Americano: Espresso shots topped with hot water... simply delicious.`;
            }
            if (bevOption.name === "Cappuccino") {
                itemDescription.innerText = `Cappuccino: Delightful espresso beneath a layer of foam.`;
            }
            if (bevOption.name === "Latte") {
                itemDescription.innerText = `Latte: Espresso with steamed milk and light foam. For when you're feeling basic.`;
            }
            if (bevOption.name === "Mocha") {
                itemDescription.innerText = `Mocha: Espresso with bittersweet mocha sauce and steamed milk (plus your daily dose of whipped cream).`;
            }
            if (bevOption.name === "Iced Coffee") {
                itemDescription.innerText = `Iced Coffee: Freshly brewed and served over ice.`;
            }
            if (bevOption.name === "Nitro Cold Brew") {
                itemDescription.innerText = `Nitro Cold Brew: Infused with nitrogen for extra oomph.`;
            }
            if (bevOption.name === "Iced Tea") {
                itemDescription.innerText = `Iced Tea: Lightly sweetened hibiscus tea. Sweet and sassy.`;
            }
        }
    }

    displayCart() {

       

    }




}



class Item {
    constructor(name, sPrice, mPrice, lPrice) {
        this.name = name;
        this.sPrice = sPrice.toFixed(2);
        this.mPrice = mPrice.toFixed(2);
        this.lPrice = lPrice.toFixed(2);
    }
}

let hotPrices = new Shop([new Item('Batch Brew', 2.00, 2.50, 3.00), new Item('Espresso', 2.50, 3.00, 3.50), new Item('Americano', 3.50, 4.00, 4.50), new Item('Cappuccino', 3.50, 4.00, 4.50), new Item('Latte', 3.50, 4.00, 4.50), new Item('Mocha', 3.50, 4.00, 4.50)]);
let coldPrices = new Shop([new Item('Iced Coffee', 2.50, 3.00, 3.50), new Item('Nitro Cold brew', 3.50, 4.00, 4.50), new Item('Iced Tea', 2.50, 3.00, 2.50)]);


temp.addEventListener("change", () => {

    if (temp.value === 'hot') {
        hotPrices.displayList();
        coldOption.setAttribute("disabled", "");
    }

    if (temp.value === 'cold') {
        coldPrices.displayList();
        hotOption.setAttribute("disabled", "");
    }

});


size.addEventListener("change", () => {

    if (temp.value === 'hot') {
        hotPrices.priceDisplay();
    }

    if (temp.value === 'cold') {
        coldPrices.priceDisplay();
    }
});


add.addEventListener('click', () => {
    let itemLine = document.createElement('div');
    itemLine.classList.add('itemLine');
    itemLine.innerHTML = `<p class="itemName">${bevItem}</p><p`;
    cartItems.appendChild(itemLine);
    document.getElementById("form").reset();
    coldOption.removeAttribute("disabled", "");
    hotOption.removeAttribute("disabled", "");
    size.value = '';
    temp.value = '';
});









//  menuPrice.innerHTML =  `${bevList.value} $${bevOption[`${size.value}Price`]}`;

 //above is the same as the below if statements

                // if (size.value === 's') {
                //     menuPrice.innerHTML = `${bevList.value} $${bevOption.sPrice}`;

                // }

                // if (size.value === 'm') {
                //     menuPrice.innerHTML = `${bevList.value} $${bevOption.mPrice}`;
                // }

                // if (size.value === 'l') {
                //     menuPrice.innerHTML = `${bevList.value} $${bevOption.lPrice}`;
                // }
                // }