//USE THIS FILE TO CODE YOUR ANSWERS TO THE QUESTIONS

//Test data for the problems
let items = [
  {
    itemName: "Effective Programming Habits",
    type: "book",
    price: 13.99
  },
  {
    itemName: "Creation 3005",
    type: "computer",
    price: 299.99
  },
  {
    itemName: "Finding Your Center",
    type: "book",
    price: 15.00
  }
]

// Prompt 1 : cartPrice

function cartPrice(arr=items){
 return arr.reduce((a,{price})=>price+a,0)
}

// Prompt 2 : mostExpensiveItemName
function mostExpensiveItemName(arr=items){
 result = arr.reduce((a,{price})=>price>a?price:a,0)
 item = arr[arr.findIndex(obj=>obj.price===result)]
 return item.itemName
}

// Prompt 3 : priceLookup
function priceLookup(arr,name){
  item = arr[arr.findIndex(obj=>obj.itemName===name)]
  if(item) return item.price
  return "No item found with that name"
}

//This is to run the tests. You can ignore it but don't delete it!
require('./index.test.js');(void 0);
