let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

console.log("Original cart: ",shoppingCart)

console.log("Adding Meat to the start")
shoppingCart.indexOf('Meat') != -1
?console.log("Meat is already in the cart")
:shoppingCart.unshift('Meat')

console.log("Cart: ",shoppingCart)

console.log("Adding Sugar to the end")
shoppingCart.indexOf('Sugar') != -1
?console.log("Sugar is already in the cart")
:shoppingCart.push('Sugar')

console.log("Cart: ",shoppingCart)

console.log("Remove honey")
shoppingCart.splice(shoppingCart.indexOf('Honey'),1)

console.log("Cart: ",shoppingCart)

console.log("modify Tea to 'Green Tea'")

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'

console.log("Cart: ",shoppingCart)
