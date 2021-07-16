//declaring variable to contain array of objects (shopping list)
const shoppingList = [
    {
        id: 1,
        name: "Milk",
        price: 3.99,
        buyAt: "Aldi",
        perishable: true
    },
    {
        id: 2,
        name: "Eggs",
        price: 0.79,
        buyAt: "Aldi",
        perishable: true
    },
    {
        id: 3,
        name: "Chicken Stock",
        price: 1.09,
        buyAt: "Aldi",
        perishable: false
    },
    {
        id: 4,
        name: "Blueberries",
        price: 8.99,
        buyAt: "Costco",
        perishable: true
    },
    {
        id: 5,
        name: "Canned Peaches",
        price: 0.79,
        buyAt: "Aldi",
        perishable: false
    },
    {
        id: 6,
        name: "Sparkling Water",
        price: 2.99,
        buyAt: "Kroger",
        perishable: false
    },
]

// create new function to add to shopping list exercise

const addToShoppingList = (groceryItem) => {
    //logic below to figure out where in the array we are (last index = last id used)
    const lastIndex = shoppingList.length - 1;
    const currentLastGroceryItem = shoppingList[lastIndex];
    const maxId = currentLastGroceryItem.id;

    // adding to maxId (value we found with above logic)
    const idForNewGroceryItem = maxId + 1;

    // assigning that maxId value to our new groceryItem
    groceryItem.id = idForNewGroceryItem

    // did some research to find a way to add a datestamp to my item, came up with this.
    groceryItem.dateCreated = Date()
    
    // pushing that new groceryItem to array
    shoppingList.push(groceryItem)
}

const wine = {
    name: "Red Wine",
    price: 6.99,
    buyAt: "Trader Joe's",
    perishable: false,
}

addToShoppingList(wine);

const chocolate = {
    name: "Chocolate",
    price: 1.99,
    buyAt: "Trader Joe's"
}

addToShoppingList(chocolate);

console.log(shoppingList);