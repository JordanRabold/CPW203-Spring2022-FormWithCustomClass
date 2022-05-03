class GroceryItems{
    item:string; // this is known as a property
    price:number;
    category:string;
    // isDigitalOnly:boolean; // boolean example
} 

function $(id:string){
    return document.getElementById(id);
}

window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addGroceryItem;
}

function addGroceryItem(){
    alert("Added to grocery list");
    if(isValid()){
        let groceryItem = getGroceryItem();
        displayItem(groceryItem);
    }
}

/**
 * Gets all grocery item data from the form
 * and returns it in a foodItem object
 * @returns 
 */
function getGroceryItem():GroceryItems{
    // TODO: Create grocery item
    // TODO: populate data from the form
    // TODO: Return groceryItem
    let foodItem = new GroceryItems(); // created grocery item

    let itemInput = <HTMLInputElement>$("item"); // Getting input element item data
    foodItem.item = itemInput.value; // populated data from the form

    let priceInput = <HTMLInputElement>$("price"); // Getting input element price
    foodItem.price = parseFloat(priceInput.value); // populated data from the form

    let categoryInput = <HTMLSelectElement>$("category"); // Getting select element from category
    foodItem.category = categoryInput.value; // populated data from the form

    return foodItem;
}

function displayGroceryItem(myItem:GroceryItems):void{
    // TODO: Display video game below the form
}

// ADD validation code
function isValid(){
    return true;
}

