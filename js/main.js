var GroceryItems = (function () {
    function GroceryItems() {
    }
    return GroceryItems;
}());
function $(id) {
    return document.getElementById(id);
}
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addGroceryItem;
};
function addGroceryItem() {
    alert("Added to grocery list");
    if (isValid()) {
        var groceryItem = getGroceryItem();
        displayItem(groceryItem);
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
}
function isValid() {
    return true;
}
