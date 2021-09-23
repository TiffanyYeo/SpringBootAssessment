
//Create an instance object of ProductsController
const productsControl = new ProductsController();


//When user clicks on 'Save Item', calls API to add items to the database
//Add an 'onsubmit' event listener for productform to add a product
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();
    // Select the inputs
    const newItemTitleInput = document.querySelector('#newItemTitleInput');
    const newItemDescription = document.querySelector('#newItemDescription');
    const newItemTargetDate = document.querySelector('#newItemTargetDate');

    /*
        Do the Validation code here
    */



    // Get the values of the inputs - variable names to be same as MySQL columns
    const title = newItemTitleInput.value;
    const description = newItemDescription.value;
    const targetDate = newItemTargetDate.value.replaceAll("-","/"); // reformat e.g. 2019/09/23



    // Clear the form
    newItemTitleInput.value = '';
    newItemDescription.value = '';
    newItemTargetDate.value = '';


    // Add the task to the task manager
    productsControl.addItem(title, description, targetDate);

});

