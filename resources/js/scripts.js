const itemsContainer = document.getElementById('items')

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

function addItem(name, price) {
    const item = {name: name, price: price, qty: 1}
    cart.push(item) 
}

function showItems() {
    console.log(`you have ${cart.length} items in your cart`)
}