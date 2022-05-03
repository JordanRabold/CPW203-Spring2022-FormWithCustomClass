var GroceryItems = (function () {
    function GroceryItems() {
    }
    return GroceryItems;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addGroceryItem;
};
function isValid() {
    return true;
}
function addGroceryItem() {
    alert("Added to grocery list");
    if (isValid()) {
        var groceryItem = getGroceryItem();
        displayGroceryItem(groceryItem);
    }
}
function getGroceryItem() {
    var foodItem = new GroceryItems();
    var itemInput = $("item");
    foodItem.item = itemInput.value;
    var priceInput = $("price");
    foodItem.price = parseFloat(priceInput.value);
    var categoryInput = $("category");
    foodItem.category = categoryInput.value;
    return foodItem;
}
function displayGroceryItem(myItem) {
    var displayDiv = $("display");
    var foodHeading = document.createElement("h2");
    foodHeading.innerText = myItem.item;
    var itemInfo = document.createElement("p");
    itemInfo.innerText = "Item: ".concat(myItem.item, " \n Price: $").concat(myItem.price, " \n Category: ").concat(myItem.category);
    displayDiv.appendChild(itemInfo);
}
function $(id) {
    return document.getElementById(id);
}
