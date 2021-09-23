
const createHTMLList = (index, title, description, targetDate) =>
`
<div class="col-lg-4">
<div class="card" style="width: 18rem;">

    <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <p class="card-text">${targetDate}</p>
    </div>
</div>
</div>

`;


class ProductsController 
{
    constructor()
    {
        this._items = [];       //create an array to store the details of product items
    }

 //POST HTTP Method
    addItem(title, description, targetDate) {

            var productController = this;   //refers to the instance that calls it

            const formData = new FormData();    //need to use this Form object to set up
            //key-value pairs to append data from form to database

            formData.append('title', title);
            formData.append('description', description);
            formData.append('targetDate', targetDate);


            // Display the key/value pairs
                for (var pair of formData.entries()) {
                   console.log(pair[0]+ ', ' + pair[1]);}

            fetch('http://localhost:8090/item/add', {
                 method: 'POST',
                 body: formData
                 })
                 .then(response => response.json())
                 .then(data => {
                     console.log('Success:', data);
                     alert("Successfully added to TODO List")
                 })
                 .catch((error) => {
                     console.error('Error:', error);
                     alert("Error adding item to List")
                 });
    }


displayItem()
    {
        var productController = this;
        productController._items = [];

        //fetch data from database using the REST API endpoint from Spring Boot
        fetch('http://127.0.0.1:8090/item/all')
            .then((resp) => resp.json())
            .then(function(data) {
                console.log("2. receive data")
                console.log(data);
                data.forEach(function (item, index) {

                    const itemObj = {
                        id: item.id,
                        title: item.title,
                        description: item.description,
                        targetDate: item.targetDate.slice(0,10),

                   };
                    productController._items.push(itemObj);
              });

              productController.renderProductPage();

            })
            .catch(function(error) {
                console.log(error);
            });
    }


renderProductPage()
        {
            var productHTMLList = [];

            for (var i=0; i<this._items.length; i++)
            {
                const item = this._items[i];            //assign the individual item to the variable

                const productHTML = createHTMLList(i, item.title, item.description, item
                .targetDate);

                productHTMLList.push(productHTML);
            }

            //Join all the elements/items in my productHTMLList array into one string, and seperate by a break
            const pHTML = productHTMLList.join('\n');
            document.querySelector('#row').innerHTML = pHTML;
        }

}   //End of ProductsController class
