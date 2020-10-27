function getWelcomeView(parent){
    let div = document.createElement('div');
    div.setAttribute('class','welcome ');

        let divTitle = document.createElement('div');
        divTitle.setAttribute('class', 'title m-b-md');
        divTitle.innerHTML='Expense Tracker';

        let divLinks = document.createElement('div');
        divLinks.setAttribute('class', 'links');

            let p = document.createElement('p');
            p.innerText='Done By: ';

            let a = document.createElement('a');
            a.setAttribute('href', 'https://www.linkedin.com/in/hassanhadi');
            a.setAttribute('target', '_blank');
            a.innerText='Hadi Hassan';
        p.appendChild(a);

        divLinks.appendChild(p);

    div.appendChild(divTitle);
    div.appendChild(divLinks);

    parent.appendChild(div);
}

function ListExpenses(parent, data, callableFunction, callEditFunction, callDeleteFunction){
    let div = document.createElement('div');

    let addExpense = document.createElement('a');
    addExpense.setAttribute('class', 'addButton');
    addExpense.setAttribute('style', 'cursor: pointer');
    addExpense.innerText='Add Expense';
    addExpense.onclick=()=>{
        callableFunction();
    };

    let tableDiv = document.createElement('div')

        let table = document.createElement('table');
        table.setAttribute('id', 't01');

            let headTr = document.createElement('tr');
                let itemIdTh = document.createElement('th');
                itemIdTh.innerText= 'Item Number';
                let itemNameTh = document.createElement('th');
                itemNameTh.innerText= 'Item Name';
                let itemAmountTh = document.createElement('th');
                itemAmountTh.innerText='Amount';
                let itemPriceTh = document.createElement('th');
                itemPriceTh.innerText='Price';
                let itemdDateTh = document.createElement('th');
                itemdDateTh.innerText='Date';
                let itemdCategoryTh = document.createElement('th');
                itemdCategoryTh.innerText='Category';
                let itemActions = document.createElement('th');
                itemActions.innerText='Actions';

                headTr.appendChild(itemIdTh);
                headTr.appendChild(itemNameTh);
                headTr.appendChild(itemAmountTh);
                headTr.appendChild(itemPriceTh);
                headTr.appendChild(itemdDateTh);
                headTr.appendChild(itemdCategoryTh);
                headTr.appendChild(itemActions);

            table.appendChild(headTr);

                data.forEach((expense)=>{
                   let dataTr = document.createElement('tr')
                        let itemIdTd = document.createElement('td');
                        itemIdTd.innerText= data.indexOf(expense);
                        let itemNameTd = document.createElement('td');
                        itemNameTd.innerText= expense['itemName'];
                        let itemAmountTd = document.createElement('td');
                        itemAmountTd.innerText= expense['amount'];
                        let itemPriceTd = document.createElement('td');
                        itemPriceTd.innerText= expense['price'];
                        let itemdDateTd = document.createElement('td');
                        itemdDateTd.innerText= expense['date'];
                        let itemdCategoryTd = document.createElement('td');
                        itemdCategoryTd.innerText= capitalizeFLetter(expense['name']);
                        let itemActionsTd = document.createElement('td');

                            let actionDiv = document.createElement('div');
                                let editButton = document.createElement('a');
                                editButton.setAttribute('class', 'actionButton');
                                editButton.setAttribute('style', 'cursor: pointer');
                                editButton.innerText='Edit';
                                editButton.onclick=()=> {
                                    callEditFunction(expense);
                                }
                                let deleteButton = document.createElement('a');
                                deleteButton.setAttribute('class', 'actionButton');
                                deleteButton.setAttribute('style', 'cursor: pointer');
                                deleteButton.innerText='Delete';
                                deleteButton.onclick=()=> {
                                    callDeleteFunction(expense['id']);
                                }
                            actionDiv.appendChild(editButton);
                            actionDiv.appendChild(deleteButton);

                        itemActionsTd.appendChild(actionDiv);

                    dataTr.appendChild(itemIdTd);
                    dataTr.appendChild(itemNameTd);
                    dataTr.appendChild(itemAmountTd);
                    dataTr.appendChild(itemPriceTd);
                    dataTr.appendChild(itemdDateTd);
                    dataTr.appendChild(itemdCategoryTd);
                    dataTr.appendChild(itemActionsTd);

                    table.appendChild(dataTr);
                });
        tableDiv.appendChild(table);
    div.appendChild(addExpense);
    div.appendChild(tableDiv);
    //Adding View To Parent
    parent.appendChild(div);
}

function headerListExpenses(parent){
    let TextDiv = document.createElement('div');
    TextDiv.setAttribute('align','center');

    let h1 = document.createElement('h1');
    h1.setAttribute('style', 'text-align:center;color:gray');
    h1.innerText='Welcome To Expense Tracker';
    let p = document.createElement('p');
    p.setAttribute('style', 'text-align:center;color:black');
    p.innerText='Here are the List of Expenses';
    TextDiv.appendChild(h1);
    TextDiv.appendChild(p);
    TextDiv.appendChild(document.createElement('br'));
    TextDiv.appendChild(document.createElement('br'));

    parent.appendChild(TextDiv);
}

function setNav(parent, callbackFunction){
    let navDiv = document.createElement('div');

        let ul = document.createElement('ul');

        for(let i = -1; i <= 6;i++){
            let li = document.createElement('li');
            li.setAttribute('style', 'float: left;');
            let a;
            switch (i) {
                case -1:
                    a = document.createElement('a');
                    a.setAttribute('style', 'cursor: pointer');
                    a.setAttribute('class', 'LOGO');
                    a.innerText='Expense Tracker';
                    a.onclick=()=>{callbackFunction('welcome')};
                    break;
                case 0:
                    a = document.createElement('a');
                    a.setAttribute('style', 'cursor: pointer');
                    a.innerText='List Expenses';
                    a.onclick=()=>{callbackFunction('listExpenses');}
                    break;
                case 1:
                    a = document.createElement('a');
                    a.setAttribute('style', 'cursor: pointer');
                    a.innerText='List Categories';
                    a.onclick=()=>{callbackFunction('listCategories');}
                    break;
                case 2:
                    a = document.createElement('a');
                    a.setAttribute('style', 'cursor: pointer');
                    a.innerText='Add Expenses';
                    a.onclick=()=>{callbackFunction('addExpense');}
                    break;
                case 3:
                    a = document.createElement('a');
                    a.setAttribute('style', 'cursor: pointer');
                    a.innerText='Add Category';
                    a.onclick=()=>{callbackFunction('addCategory');}
                    break;
                case 4:
                    a = document.createElement('a');
                    a.setAttribute('style', 'cursor: pointer');
                    a.innerText='View PieChart';
                    a.onclick=()=>{callbackFunction('pieChart');}
                    break;
                case 5:
                    li.setAttribute('style', 'float: right;');
                    a = document.createElement('a');
                    a.setAttribute('style', 'cursor: pointer');
                    a.innerText='Logout';
                    a.onclick=()=>{callbackFunction('logout');}
                    break;
                case 6:
                    li.setAttribute('style', 'float: right;');
                    a = document.createElement('a');
                    a.innerText='Welcome '.concat(User.email);
                    a.onclick=()=>{};
                    break;
            }
            li.appendChild(a);
            ul.appendChild(li);
        }

        navDiv.appendChild(ul);
    parent.appendChild(navDiv);
}


function headerAddExpense(parent){
    let TextDiv = document.createElement('div');
    TextDiv.setAttribute('align','center');

        let h1 = document.createElement('h1');
        h1.setAttribute('style', 'text-align:center;color:gray');
        h1.innerText='Welcome To Expense Tracker';
        let p = document.createElement('p');
        p.setAttribute('style', 'text-align:center;color:black');
        p.innerText='Add a new Expense to proceed';
        TextDiv.appendChild(h1);
        TextDiv.appendChild(p);
        TextDiv.appendChild(document.createElement('br'));
        TextDiv.appendChild(document.createElement('br'));

    parent.appendChild(TextDiv);
}

function addExpenseForm(parent, callableFunction){
    let div = document.createElement('div');
    div.setAttribute('align','center');
    div.setAttribute('style','font: 14px sans-serif;');

    //Creation of Form Div
    let formDiv = document.createElement('div');
    formDiv.setAttribute('class', 'wrapper');

    //Creation of Item Name Label
    let itemNameDiv = document.createElement('div');
    itemNameDiv.setAttribute('class', 'form-group');

    let itemNameLabel = document.createElement('label');
    itemNameLabel.setAttribute('style', 'float: left;');
    itemNameLabel.innerText='Item Name:';

    let itemNameInput = document.createElement('input');
    itemNameInput.setAttribute('placeholder', 'Item Name');
    itemNameInput.setAttribute('type', 'text');
    itemNameInput.setAttribute('name','itemName');
    itemNameInput.setAttribute('class','form-control wrapper');

    let itemNameSpan = document.createElement('span');
    itemNameSpan.setAttribute('class', 'help-block');

    itemNameDiv.appendChild(itemNameLabel);
    itemNameDiv.appendChild(itemNameInput);
    itemNameDiv.appendChild(itemNameSpan);

    //Creation of Category Label
    let categoryDiv = document.createElement('div');
    categoryDiv.setAttribute('class', 'form-group');

    let categoryLabel = document.createElement('label');
    categoryLabel.setAttribute('style', 'float: left;');
    categoryLabel.innerText='Category:';

    let categoryInput = document.createElement('input');
    categoryInput.setAttribute('placeholder', 'Category');
    categoryInput.setAttribute('type', 'text');
    categoryInput.setAttribute('name','category');
    categoryInput.setAttribute('class','form-control wrapper');

    let categorySpan = document.createElement('span');
    categorySpan.setAttribute('class', 'help-block');

    categoryDiv.appendChild(categoryLabel);
    categoryDiv.appendChild(categoryInput);
    categoryDiv.appendChild(categorySpan);

    //Creation of Price Label
    let priceDiv = document.createElement('div');
    priceDiv.setAttribute('class', 'form-group');

    let priceLabel = document.createElement('label');
    priceLabel.setAttribute('style', 'float: left;');
    priceLabel.innerText='Price:';

    let priceInput = document.createElement('input');
    priceInput.setAttribute('placeholder', 'Price');
    priceInput.setAttribute('type', 'number');
    priceInput.setAttribute('name','price');
    priceInput.setAttribute('class','form-control wrapper');

    let priceSpan = document.createElement('span');
    priceSpan.setAttribute('class', 'help-block');

    priceDiv.appendChild(priceLabel);
    priceDiv.appendChild(priceInput);
    priceDiv.appendChild(priceSpan);

    //Creation of Amount Label
    let amountDiv = document.createElement('div');
    amountDiv.setAttribute('class', 'form-group');

    let amountLabel = document.createElement('label');
    amountLabel.setAttribute('style', 'float: left;');
    amountLabel.innerText='Amount:';

    let amountInput = document.createElement('input');
    amountInput.setAttribute('placeholder', 'Amount');
    amountInput.setAttribute('type', 'number');
    amountInput.setAttribute('name','amount');
    amountInput.setAttribute('class','form-control wrapper');

    let amountSpan = document.createElement('span');
    amountSpan.setAttribute('class', 'help-block');

    amountDiv.appendChild(amountLabel);
    amountDiv.appendChild(amountInput);
    amountDiv.appendChild(amountSpan);

    //Creation of Date Label
    let dateDiv = document.createElement('div');
    dateDiv.setAttribute('class', 'form-group');

    let dateLabel = document.createElement('label');
    dateLabel.setAttribute('style', 'float: left;');
    dateLabel.innerText='Date:';

    let dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'datetime-local');
    dateInput.setAttribute('class','form-control wrapper');

    let dateSpan = document.createElement('span');
    dateSpan.setAttribute('class', 'help-block');

    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(dateInput);
    dateDiv.appendChild(dateSpan);

    //Creation of Button
    let buttonsDiv = document.createElement('div');
    buttonsDiv.setAttribute('class', 'form-group');

    let addExpenseButton = document.createElement('button');
    addExpenseButton.textContent='Add Expense';
    addExpenseButton.setAttribute('class', 'btn btn-primary');

    let addExpenseSpan = document.createElement('span');
    addExpenseSpan.setAttribute('style', 'text-align: center');
    addExpenseSpan.setAttribute('class', 'help-block');

    let divButtons = document.createElement('div');
    divButtons.setAttribute('class', 'wrapper btn-toolba doubleButtons');

    divButtons.appendChild(addExpenseButton);

    buttonsDiv.appendChild(addExpenseSpan);
    buttonsDiv.appendChild(divButtons);

    addExpenseButton.addEventListener('click', async (event)=>{
        //Check if data is filled.
        let itemName = itemNameInput.value.trim();
        let category = categoryInput.value.trim();
        let price = priceInput.value.trim();
        let amount = amountInput.value.trim();
        let date = dateInput.value.trim();

        if(itemName.length == 0 || category.length == 0 || price.length==0 || amount.length==0 || date.length==0){
            if(itemName.length==0)
                itemNameSpan.innerText='Please Fill In The item Name';
            if(category.length==0)
                categorySpan.innerText='Please Fill In a category';
            if(price.length==0)
                priceSpan.innerText='Please Fill In The Price';
            if(amount.length==0)
                amountSpan.innerText='Please Fill In The Amount';
            if(date.length==0)
                dateSpan.innerText='Please Provide a Specific Date';
        }
        else{
            if((message=await callableFunction(itemName,category, price, amount, date)) != true){
                addExpenseSpan.innerText=message;
            }
        }
    });


    formDiv.appendChild(itemNameDiv);
    formDiv.appendChild(categoryDiv);
    formDiv.appendChild(priceDiv);
    formDiv.appendChild(amountDiv)
    formDiv.appendChild(dateDiv);
    formDiv.appendChild(buttonsDiv);

    div.appendChild(formDiv);
    //Append Elements to Main Div
    parent.appendChild(div);
}



function headerEditExpense(parent){
    let TextDiv = document.createElement('div');
    TextDiv.setAttribute('align','center');

    let h1 = document.createElement('h1');
    h1.setAttribute('style', 'text-align:center;color:gray');
    h1.innerText='Welcome To Expense Tracker';
    let p = document.createElement('p');
    p.setAttribute('style', 'text-align:center;color:black');
    p.innerText='Edit your Expense to proceed';
    TextDiv.appendChild(h1);
    TextDiv.appendChild(p);
    TextDiv.appendChild(document.createElement('br'));
    TextDiv.appendChild(document.createElement('br'));

    parent.appendChild(TextDiv);
}

function editExpenseForm(parent, expense, callableFunction){
    let div = document.createElement('div');
    div.setAttribute('align','center');
    div.setAttribute('style','font: 14px sans-serif;');

    //Creation of Form Div
    let formDiv = document.createElement('div');
    formDiv.setAttribute('class', 'wrapper');

    //Creation of Item Name Label
    let itemNameDiv = document.createElement('div');
    itemNameDiv.setAttribute('class', 'form-group');

    let itemNameLabel = document.createElement('label');
    itemNameLabel.setAttribute('style', 'float: left;');
    itemNameLabel.innerText='Item Name:';

    let itemNameInput = document.createElement('input');
    itemNameInput.setAttribute('placeholder', 'Item Name');
    itemNameInput.setAttribute('type', 'text');
    itemNameInput.setAttribute('name','itemName');
    itemNameInput.setAttribute('value', expense['itemName']);
    itemNameInput.setAttribute('class','form-control wrapper');

    let itemNameSpan = document.createElement('span');
    itemNameSpan.setAttribute('class', 'help-block');

    itemNameDiv.appendChild(itemNameLabel);
    itemNameDiv.appendChild(itemNameInput);
    itemNameDiv.appendChild(itemNameSpan);

    //Creation of Category Label
    let categoryDiv = document.createElement('div');
    categoryDiv.setAttribute('class', 'form-group');

    let categoryLabel = document.createElement('label');
    categoryLabel.setAttribute('style', 'float: left;');
    categoryLabel.innerText='Category:';

    let categoryInput = document.createElement('input');
    categoryInput.setAttribute('placeholder', 'Category');
    categoryInput.setAttribute('type', 'text');
    categoryInput.setAttribute('name','category');
    categoryInput.setAttribute('value', expense['name']);
    categoryInput.setAttribute('class','form-control wrapper');

    let categorySpan = document.createElement('span');
    categorySpan.setAttribute('class', 'help-block');

    categoryDiv.appendChild(categoryLabel);
    categoryDiv.appendChild(categoryInput);
    categoryDiv.appendChild(categorySpan);

    //Creation of Price Label
    let priceDiv = document.createElement('div');
    priceDiv.setAttribute('class', 'form-group');

    let priceLabel = document.createElement('label');
    priceLabel.setAttribute('style', 'float: left;');
    priceLabel.innerText='Price:';

    let priceInput = document.createElement('input');
    priceInput.setAttribute('placeholder', 'Price');
    priceInput.setAttribute('type', 'number');
    priceInput.setAttribute('name','price');
    priceInput.setAttribute('value', expense['price']);
    priceInput.setAttribute('class','form-control wrapper');

    let priceSpan = document.createElement('span');
    priceSpan.setAttribute('class', 'help-block');

    priceDiv.appendChild(priceLabel);
    priceDiv.appendChild(priceInput);
    priceDiv.appendChild(priceSpan);

    //Creation of Amount Label
    let amountDiv = document.createElement('div');
    amountDiv.setAttribute('class', 'form-group');

    let amountLabel = document.createElement('label');
    amountLabel.setAttribute('style', 'float: left;');
    amountLabel.innerText='Amount:';

    let amountInput = document.createElement('input');
    amountInput.setAttribute('placeholder', 'Amount');
    amountInput.setAttribute('type', 'number');
    amountInput.setAttribute('name','amount');
    amountInput.setAttribute('value', expense['amount']);
    amountInput.setAttribute('class','form-control wrapper');

    let amountSpan = document.createElement('span');
    amountSpan.setAttribute('class', 'help-block');

    amountDiv.appendChild(amountLabel);
    amountDiv.appendChild(amountInput);
    amountDiv.appendChild(amountSpan);


    //Creation of Button
    let buttonsDiv = document.createElement('div');
    buttonsDiv.setAttribute('class', 'form-group');

    let editExpenseButton = document.createElement('button');
    editExpenseButton.textContent='Edit Expense';
    editExpenseButton.setAttribute('class', 'btn btn-primary');

    let editExpenseSpan = document.createElement('span');
    editExpenseSpan.setAttribute('style', 'text-align: center');
    editExpenseSpan.setAttribute('class', 'help-block');

    let divButtons = document.createElement('div');
    divButtons.setAttribute('class', 'wrapper btn-toolba doubleButtons');

    divButtons.appendChild(editExpenseButton);

    buttonsDiv.appendChild(editExpenseSpan);
    buttonsDiv.appendChild(divButtons);

    editExpenseButton.addEventListener('click', async (event)=>{
        //Check if data is filled.
        let itemName = itemNameInput.value.trim();
        let category = categoryInput.value.trim();
        let price = priceInput.value.trim();
        let amount = amountInput.value.trim();

        if(itemName.length == 0 || category.length == 0 || price.length==0 || amount.length==0){
            if(itemName.length==0)
                itemNameSpan.innerText='Please Fill In The item Name';
            if(category.length==0)
                categorySpan.innerText='Please Fill In a category';
            if(price.length==0)
                priceSpan.innerText='Please Fill In The Price';
            if(amount.length==0)
                amountSpan.innerText='Please Fill In The Amount';
            editExpenseSpan.innerText='';
        }
        else{
            if((message=await callableFunction(itemName,category, price, amount)) != true){
                editExpenseSpan.innerText=message;
            }
        }
    });


    formDiv.appendChild(itemNameDiv);
    formDiv.appendChild(categoryDiv);
    formDiv.appendChild(priceDiv);
    formDiv.appendChild(amountDiv)
    formDiv.appendChild(buttonsDiv);

    div.appendChild(formDiv);
    //Append Elements to Main Div
    parent.appendChild(div);
}

//-------------------------------------------------------------------------------------------------------------
//Categories:

function ListCategories(parent, data, callableFunction, callDeleteFunction){
    let div = document.createElement('div');

    let addCategory = document.createElement('a');
    addCategory.setAttribute('class', 'addButton');
    addCategory.setAttribute('style', 'cursor: pointer');
    addCategory.innerText='Add Category';
    addCategory.onclick=()=>{
        callableFunction();
    };

    let tableDiv = document.createElement('div')

    let table = document.createElement('table');
    table.setAttribute('id', 't01');

    let headTr = document.createElement('tr');
    let categoryIdTh = document.createElement('th');
    categoryIdTh.innerText= 'Category Number';
    let categoryNameTh = document.createElement('th');
    categoryNameTh.innerText= 'Category Name';
    let categoryActions = document.createElement('th');
    categoryActions.innerText='Actions';

    headTr.appendChild(categoryIdTh);
    headTr.appendChild(categoryNameTh);
    headTr.appendChild(categoryActions);

    table.appendChild(headTr);

    data.forEach((category)=>{
        let dataTr = document.createElement('tr')
        let categoryIdTd = document.createElement('td');
        categoryIdTd.innerText= data.indexOf(category);
        let categoryNameTd = document.createElement('td');
        categoryNameTd.innerText= capitalizeFLetter(category['name']);
        let categoryActionsTd = document.createElement('td');

        let actionDiv = document.createElement('div');
        // let editButton = document.createElement('a');
        // editButton.setAttribute('class', 'actionButton');
        // editButton.setAttribute('style', 'cursor: pointer');
        // editButton.innerText='Edit';
        // editButton.onclick=()=> {
        //     callEditFunction(expense);
        // }
        let deleteButton = document.createElement('a');
        deleteButton.setAttribute('class', 'actionButton');
        deleteButton.setAttribute('style', 'cursor: pointer');
        deleteButton.setAttribute('title', 'Deleting Categories will delete their Expenses.')
        deleteButton.innerText='Delete';
        deleteButton.onclick=()=> {
            callDeleteFunction(category['id']);
        }
        // actionDiv.appendChild(editButton);
        actionDiv.appendChild(deleteButton);

        categoryActionsTd.appendChild(actionDiv);

        dataTr.appendChild(categoryIdTd);
        dataTr.appendChild(categoryNameTd);
        dataTr.appendChild(categoryActionsTd);

        table.appendChild(dataTr);
    });
    tableDiv.appendChild(table);
    div.appendChild(addCategory);
    div.appendChild(tableDiv);
    //Adding View To Parent
    parent.appendChild(div);
}

function headerListCategories(parent){
    let TextDiv = document.createElement('div');
    TextDiv.setAttribute('align','center');

    let h1 = document.createElement('h1');
    h1.setAttribute('style', 'text-align:center;color:gray');
    h1.innerText='Welcome To Expense Tracker';
    let p = document.createElement('p');
    p.setAttribute('style', 'text-align:center;color:black');
    p.innerText='Here are the List of Categories';
    TextDiv.appendChild(h1);
    TextDiv.appendChild(p);
    TextDiv.appendChild(document.createElement('br'));
    TextDiv.appendChild(document.createElement('br'));

    parent.appendChild(TextDiv);
}


function headerAddCategory(parent){
    let TextDiv = document.createElement('div');
    TextDiv.setAttribute('align','center');

    let h1 = document.createElement('h1');
    h1.setAttribute('style', 'text-align:center;color:gray');
    h1.innerText='Welcome To Expense Tracker';
    let p = document.createElement('p');
    p.setAttribute('style', 'text-align:center;color:black');
    p.innerText='Add a new Category to proceed';
    TextDiv.appendChild(h1);
    TextDiv.appendChild(p);
    TextDiv.appendChild(document.createElement('br'));
    TextDiv.appendChild(document.createElement('br'));

    parent.appendChild(TextDiv);
}

function addCategoryForm(parent, callableFunction){
    let div = document.createElement('div');
    div.setAttribute('align','center');
    div.setAttribute('style','font: 14px sans-serif;');

    //Creation of Form Div
    let formDiv = document.createElement('div');
    formDiv.setAttribute('class', 'wrapper');

    //Creation of Category Name Label
    let categoryNameDiv = document.createElement('div');
    categoryNameDiv.setAttribute('class', 'form-group');

    let categoryNameLabel = document.createElement('label');
    categoryNameLabel.setAttribute('style', 'float: left;');
    categoryNameLabel.innerText='Category Name:';

    let categoryNameInput = document.createElement('input');
    categoryNameInput.setAttribute('placeholder', 'Category Name');
    categoryNameInput.setAttribute('type', 'text');
    categoryNameInput.setAttribute('name','categoryName');
    categoryNameInput.setAttribute('class','form-control wrapper');

    let categoryNameSpan = document.createElement('span');
    categoryNameSpan.setAttribute('class', 'help-block');

    categoryNameDiv.appendChild(categoryNameLabel);
    categoryNameDiv.appendChild(categoryNameInput);
    categoryNameDiv.appendChild(categoryNameSpan);

    //Creation of Button
    let buttonsDiv = document.createElement('div');
    buttonsDiv.setAttribute('class', 'form-group');

    let addCategoryButton = document.createElement('button');
    addCategoryButton.textContent='Add Category';
    addCategoryButton.setAttribute('class', 'btn btn-primary');

    let addCategorySpan = document.createElement('span');
    addCategorySpan.setAttribute('style', 'text-align: center');
    addCategorySpan.setAttribute('class', 'help-block');

    let divButtons = document.createElement('div');
    divButtons.setAttribute('class', 'wrapper btn-toolba doubleButtons');

    divButtons.appendChild(addCategoryButton);

    buttonsDiv.appendChild(addCategorySpan);
    buttonsDiv.appendChild(divButtons);

    addCategoryButton.addEventListener('click', async (event)=>{
        //Check if data is filled.
        let categoryName = categoryNameInput.value.trim();

        if(categoryName.length == 0){
            categoryNameSpan.innerText='Please Fill In The Category Name';
        }
        else{
            if((message=await callableFunction(categoryName)) != true){
                addCategorySpan.innerText=message;
            }
        }
    });


    formDiv.appendChild(categoryNameDiv);
    formDiv.appendChild(buttonsDiv);

    div.appendChild(formDiv);
    //Append Elements to Main Div
    parent.appendChild(div);
}

//----------------------------------------------------------------------------------------------------------------------
//PieChart:

function getPieChart(parent, allCategories) {
    let PieChartDiv = document.createElement('div');
    PieChartDiv.setAttribute('id', 'PieChartDiv');
    parent.appendChild(PieChartDiv);

    if(allCategories.length!=0) {
        CanvasJS.addColorSet("colorSet",
            [
                "#003f5c",
                "#2f4b7c",
                "#665191",
                "#a05195",
                "#d45087",
                "#f95d6a",
                "#ff7c43",
                "#ffa600"
            ]);

        let chart = new CanvasJS.Chart("PieChartDiv",
            {
                colorSet: "colorSet",
                theme: "light2",
                title: {
                    text: "Categories Pie Chart of All Expenses"
                },
                Y: {
                    includeZero: false  //try changing it to true
                },
                data: [
                    {
                        type: "pie",
                        showInLegend: true,
                        toolTipContent: "{indexLabel} - {y} - #percent %",
                        legendText: "{indexLabel}",
                        dataPoints: allCategories
                    }
                ]
            });

        chart.render();
    }else{
        let h1 = document.createElement('h1');
        h1.innerText='No Categories Found'
        h1.setAttribute('style', 'text-align: center');
        PieChartDiv.appendChild(h1);
    }
}