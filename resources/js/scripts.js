const itemsContainer = document.getElementById('items')
const itemList = document.getElementById('item-list')
const cartQty = document.getElementById('cart-qty')
const cartTotal = document.getElementById('cart-total')

import data from './data.js'

// the length of our data determines how many times this loop goes around
for (let i = 0; i < data.length; ++i) {
    // create a new div element and give it a class name
    let newDiv = document.createElement('div');
    newDiv.className = 'item'

    // create an image element
    let img = document.createElement('img');
    // this will change each time we go through the loop. Can you explain why?
    img.src = data[i].image
    img.width = 300
    img.height = 300

    // Add the image to the div
    newDiv.appendChild(img)
    itemsContainer.appendChild(newDiv)

    // Add Description
    let descript = document.createElement('P')
    descript.innerText = data[i].desc
    newDiv.appendChild(descript)

    // Add Price
    let price = document.createElement('P')
    price.innerText = data[i].price
    newDiv.appendChild(price)

    // Add Button
    let button = document.createElement('button')
    button.id = data[i].name

    // Custom Data Attributes

    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    button.style.backgroundColor = "Aqua"
    button.style.padding = "10px"
    button.style.borderRadius = "25px"
    button.style.borderColor = "blue"
    button.style.fontFamily = "comic sans"
    newDiv.appendChild(button)

}

const cart = []

//Add Item
function addItem(name, price) {
    for(let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            cart[i].qty += 1
            return
        }
    }

    const item = {name, price, qty: 1}
    cart.push(item) 
}


addItem('Apple',0.69)
addItem('car',0.35)
addItem('orange',0.89)
addItem('Apple',0.69)

//Show Items
function showItems() { 
 
     cartQty.innerHTML = `you have ${getQty()} items in your cart`

    let itemStr = ''

    for (let i = 0; i < cart.length; i += 1){
        //console.log(`- ${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
        const name = cart[i].name
        const price = cart[i].price
        const qty = cart[i].qty
        
        itemStr += `<li> ${name} 
        $${price} x ${qty}
        = ${price * qty}</li>`
    }

    itemList.innerHTML = itemStr
    //console.log(`Your total is $${getTotal()}`)
    cartTotal.innerHTML = `Your total is $${getTotal()}`;
}


// Get Qty
function getQty() {
     let qty = 0;
     for (let i = 0; i < cart.length; i += 1) {
       qty += cart[i].qty;
     }
     return qty
}
// Get total
function getTotal() {
    let total = 0
    for(let i = 0; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].qty
    }
    return total.toFixed(2)
}

//Remove Items

function removeItem (name, qty = 0) {
    for(let i = 0; i < cart.length; i += 1){
        if (cart[i].name === name) {
            if (qty > 0) {
                cart[i].qty -= qty
            }
            if (cart[i].qty < 1 || qty === 0) {
                cart.splice(i, 1)
            }
            return
        }
    }
}