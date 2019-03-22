const temp = document.querySelector("#temp");
const bevList = document.querySelector("#bevList");
const size = document.querySelector("#size");
const form = document.querySelector("form");
const main = document.querySelector(".menu");
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
        }
    }

    displayCart() {

       

    }




}



class Item {
    constructor(name, sPrice, mPrice, lPrice) {
        this.name = name;
        this.sPrice = sPrice;
        this.mPrice = mPrice;
        this.lPrice = lPrice;
    }
}

let hotPrices = new Beverages([new Item('coffee', 1.50, 2.00, 2.50), new Item('cappucino', 3.50, 4.00, 4.50), new Item('mocha', 3.50, 4.00, 4.50), new Item('espresso', 2, 2.50, 3.50)]);
let coldPrices = new Beverages([new Item('iced coffee', 1.50, 2.00, 2.50), new Item('cold brew', 3.50, 4.00, 4.50), new Item('iced tea', 1.50, 2.00, 2.50), new Item('iced latte', 3.50, 4.00, 4.50)]);


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