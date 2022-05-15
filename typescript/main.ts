class GroceryItems{
    item:string; // this is known as a property
    price:number;
    category:string;
    // isDigitalOnly:boolean; // boolean example
} 

window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addGroceryItem;
}

// ADD validation code
function isValid():boolean{
    let isDataValid = true;

    let itemBox:HTMLInputElement = <HTMLInputElement>$("item");
    let enteredItem:string = itemBox.value;
    if(enteredItem == ""){
        isDataValid = false;
        addErrorMessage("Item is required"); // insert string parameter
    }

    let priceBox:HTMLInputElement = <HTMLInputElement>$("price");
    let enteredPrice:string = priceBox.value;
    if(enteredPrice == "" || isNaN(parseFloat(enteredPrice))){
        isDataValid = false;
        addErrorMessage("Price is required and must be a number"); // insert string parameter
    }

    let categoryBox = (<HTMLOptionElement>$("category")).value;
    if(categoryBox == ""){
        isDataValid = false;
        addErrorMessage("Must choose a category");
    }
    return isDataValid;
}

function addErrorMessage(errMsg:string) {
    let errSummary = $("validation-summary"); // get validation summary off webpage
    let errItem = document.createElement("li"); // create list item 
    errItem.innerText = errMsg; // fill the error list
    errSummary.appendChild(errItem);
}

/**
 * Clears all errors in the validation summary
 */

function clearAllErrors(){
    let errSummary = $("validation-summary");
    errSummary.innerText = "";
}

function addGroceryItem(){
    console.log("Added to grocery list");
    clearAllErrors();
    if(isValid()){
        let groceryItem = getGroceryItem();
        displayGroceryItem(groceryItem);
    }
}

/**
 * Gets all grocery item data from the form
 * and returns it in a foodItem object
 * @returns 
 */
function getGroceryItem():GroceryItems{
    let foodItem = new GroceryItems(); // created grocery item

    let itemInput = <HTMLInputElement>$("item"); // Getting input element item data
    foodItem.item = itemInput.value; // populated data from the form

    let priceInput = <HTMLInputElement>$("price"); // Getting input element price
    foodItem.price = parseFloat(priceInput.value); // populated data from the form

    let categoryInput = <HTMLSelectElement>$("category"); // Getting select element from category
    foodItem.category = categoryInput.value; // populated data from the form

    return foodItem; // Returned foodItem
}

function displayGroceryItem(myItem:GroceryItems):void{
    let displayDiv = $("display");

    let itemInfo = document.createElement("p");
    
    // Create paragraph with grocery item details
    itemInfo.innerText = `Item: ${myItem.item} \n Price: $${myItem.price} \n Category: ${myItem.category}`;

    // Add h2 in the <div id="display">
    //displayDiv.appendChild(foodHeading);
    // Add <p> item info
    displayDiv.appendChild(itemInfo);
}

function $(id:string){
    return document.getElementById(id);
}


