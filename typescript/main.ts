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
    let isDataValid:boolean = true;

    let itemBox:HTMLInputElement = <HTMLInputElement>$("item");
    let enteredItem:string = itemBox.value;
    if(enteredItem == ""){
        isDataValid = false;
        itemBox.nextElementSibling.innerHTML = `Item is required and must be in "abc" format`
    }

    let priceBox:HTMLInputElement = <HTMLInputElement>$("price");
    let enteredPrice:string = priceBox.value;
    if(enteredPrice == "" || isNaN(parseFloat(enteredPrice))){
        isDataValid = false;
        priceBox.nextElementSibling.innerHTML = `Price is required and must be a number`
    }
    return true;
}


function addGroceryItem(){
    console.log("Added to grocery list");
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
    // TODO: Create grocery item
    // TODO: populate data from the form
    // TODO: Return foodItem
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
    // TODO: Display video game below the form
    let displayDiv = $("display");

    // Create h2 with food title
    let foodHeading = document.createElement("h2");
    foodHeading.innerText = myItem.item;

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


