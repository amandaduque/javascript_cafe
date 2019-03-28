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
const itemName = document.querySelector('.itemName');
const itemPrice = document.querySelector('.itemPrice');
const itemLine = document.querySelector('.itemLine');
const iconDelete = document.querySelector('.fas.fa-times');
const icon = document.querySelector('.fa-times');
const checkOut = document.querySelector('.checkOut');
const next = document.querySelector('.next');
const submit = document.querySelector('.submit');
const submit2 = document.querySelector('.submit2');
const close = document.querySelector('.close');
const cashoutTotal = document.querySelector('.cashoutTotal');
const changeBack = document.querySelector('.changeBack');
const card = document.querySelector('.card');
const cash = document.querySelector('.cash');
const change = document.querySelector('.change');
const amount = document.querySelector('#amount')
let itemList = [];
let bevItem;
let bevPrice;
let totalCalc;



class Beverages {
    constructor(items) {
        this.items = items;
    }

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
                //declared a sep variable for the price
                bevPrice = `${bevOption[`${size.value}Price`]}`;
                bevItem = `${bevList.value} $${bevPrice}`;
                menuPrice.innerHTML = bevItem;

                if (bevOption.name === "Batch Brew") {
                    itemDescription.innerText = `Our full-bodied bean of the day.`;
                }
                if (bevOption.name === "Espresso") {
                    itemDescription.innerText = `Our signature Espresso Roast.`;
                }
                if (bevOption.name === "Americano") {
                    itemDescription.innerText = `Espresso shots topped with hot water... simply delicious.`;
                }
                if (bevOption.name === "Cappuccino") {
                    itemDescription.innerText = `Delightful espresso beneath a layer of foam.`;
                }
                if (bevOption.name === "Latte") {
                    itemDescription.innerText = `Espresso with steamed milk and light foam. For when you're feeling basic.`;
                }
                if (bevOption.name === "Mocha") {
                    itemDescription.innerText = `Espresso with bittersweet mocha sauce and steamed milk (plus your daily dose of whipped cream).`;
                }
                if (bevOption.name === "Iced Coffee") {
                    itemDescription.innerText = `Freshly brewed and served over ice.`;
                }
                if (bevOption.name === "Nitro Cold Brew") {
                    itemDescription.innerText = `Infused with nitrogen for extra oomph.`;
                }
                if (bevOption.name === "Iced Tea") {
                    itemDescription.innerText = `Lightly sweetened hibiscus tea. Sweet and sassy.`;
                }


            }
        }
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

let hotPrices = new Beverages([new Item('Batch Brew', 2.00, 2.50, 3.00), new Item('Espresso', 2.50, 3.00, 3.50), new Item('Americano', 3.50, 4.00, 4.50), new Item('Cappuccino', 3.50, 4.00, 4.50), new Item('Latte', 3.50, 4.00, 4.50), new Item('Mocha', 3.50, 4.00, 4.50)]);
let coldPrices = new Beverages([new Item('Iced Coffee', 2.50, 3.00, 3.50), new Item('Nitro Cold Brew', 3.50, 4.00, 4.50), new Item('Iced Tea', 2.50, 3.00, 2.50)]);


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


document.body.addEventListener('click', (event) => {
    if (event.target.className === 'add') {

        let itemLine = document.createElement('div');
        itemLine.classList.add('itemLine');
        itemLine.innerHTML = `<button class="delete"><i class="fas fa-times"></i></button><p class="itemName">${bevList.value}</p><p class="itemPrice">$${bevPrice}</p>`;
        cartItems.appendChild(itemLine);
        itemList.push(bevPrice);
        calculate();
        document.getElementById("form").reset();
        coldOption.removeAttribute("disabled", "");
        hotOption.removeAttribute("disabled", "");
        size.value = '';
        temp.value = '';
        itemDescription.innerText = '';
        menuPrice.innerText = '';

    }

    if (event.target.className === "delete") {
        const parentDiv = event.target.parentNode;
        const index = Array.from(parentDiv.parentNode.children).indexOf(parentDiv);
        parentDiv.remove();
        deleteIndex(index);
    }
});


function calculate() {
    const arrSum = arr => arr.reduce((a, b) => a + Number(b), 0)
    let sum = arrSum(itemList).toFixed(2);
    subPrice.innerHTML = `$${sum}`;
    let taxCalc = (sum * 0.06).toFixed(2);
    taxPrice.innerHTML = `$${taxCalc}`;
    totalCalc = Number(taxCalc) + Number(sum);
    totalPrice.innerHTML = `$${totalCalc}`;
    document.getElementById("receiptText").innerHTML = `<p>Subtotal: $${sum}</p>
                            <p>Tax: $${taxCalc}</p>
                            <p>Total: $${totalCalc}</p>`;
    document.getElementById("cashoutTotal").innerHTML = `<p>Subtotal: $${sum}</p>
                            <p>Tax: $${taxCalc}</p>
                            <p>Total: $${totalCalc}</p>`;                        

}

function calculateChange() {
    const amountReceived = amount.value;
    let giveChange = Number(amountReceived) - Number(totalCalc);
    document.getElementById("changeBack").innerHTML = `<p>Change: $${giveChange}</p>`;
}

function deleteIndex(index) {
    itemList.splice(index, 1);
    calculate();
}



checkOut.addEventListener("click", () => {
    document.getElementById("paymentOptions").style.display = "block";
    });
    
document.body.addEventListener("click", (event) => {
    if (event.target.className === "card") {
        document.getElementById("ccbox").style.display = "block";
    } 
        
    if (event.target.className === "cash"){
        document.getElementById("cashbox").style.display = "block";
    }
        
});

submit.addEventListener("click", () => {
document.getElementById("receiptbox").style.display = "block";
});
    
    submit2.addEventListener("click", () => {
    document.getElementById("receiptbox").style.display = "block";
    });
    
    close.addEventListener("click", () => {
        location.reload();
    });

    change.addEventListener("click", () => {
        calculateChange();
    });

function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);