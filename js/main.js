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
    var isDataValid = true;
    var itemBox = $("item");
    var enteredItem = itemBox.value;
    if (enteredItem == "") {
        isDataValid = false;
        itemBox.nextElementSibling.innerHTML = "Item is required and must be in \"abc\" format";
    }
    var priceBox = $("price");
    var enteredPrice = priceBox.value;
    if (enteredPrice == "" || isNaN(parseFloat(enteredPrice))) {
        isDataValid = false;
        priceBox.nextElementSibling.innerHTML = "Price is required and must be a number";
    }
    return true;
}
function addGroceryItem() {
    console.log("Added to grocery list");
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
    var itemInfo = document.createElement("p");
    itemInfo.innerText = "Item: ".concat(myItem.item, " \n Price: $").concat(myItem.price, " \n Category: ").concat(myItem.category);
    displayDiv.appendChild(itemInfo);
}
function $(id) {
    return document.getElementById(id);
}
