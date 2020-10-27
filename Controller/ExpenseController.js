class ExpenseController{

    constructor(service, head, body, foot) {
        this.service = service;
        this.head = head;
        this.body = body;
        this.foot = foot;
    }

    getWelcome(){
        this.getNav();
        getWelcomeView(this.body);
    }

    async getExpensesList(){
        let userExpenses = await this.service.get('getExpenses');
        this.getNav();
        headerListExpenses(this.head);
        ListExpenses(this.body, userExpenses, ()=>{
            clear();
            this.addExpense();
        },(expense)=>{
            clear();
            this.editExpense(expense);
        },async (expenseId)=>{
            let response = await this.service.post('deleteExpense', {
                'expenseId': expenseId,
            });
            if(response['success']==true){
                Refresh();
            }
        });
    }

    addExpense(){
        this.getNav();
        headerAddExpense(this.head);
        addExpenseForm(this.body,async (itemName,category, price, amount, date)=>{
            let response = await this.service.post('addExpense',
                {
                    itemName,
                    'category': category.toLowerCase(),
                    price,
                    amount,
                    date,
                }
            );
            if(response['success']==true){
                clear();
                this.getExpensesList();
            }else{
                return 'Failed To Add Expense, Category Does Not Exist.';
            }
        });
    }

    editExpense(expense){
        this.getNav();
        headerEditExpense(this.head);
        editExpenseForm(this.body, expense, async (itemName,category, price, amount)=>{
            console.log(                {
                'expenseId': expense['id'],
                itemName,
                category,
                price,
                amount,
            });
            let response = await this.service.post('editExpense',
                {
                    'expenseId': expense['id'],
                    itemName,
                    category,
                    price,
                    amount,
                }
            );
            if(response['success']==true){
                clear();
                this.getExpensesList();
            }else{
                return 'Failed To Edit Expense.';
            }
        });
    }

    async getCategoryList(){
        let categories = await this.service.get('getCategories');
        this.getNav();
        headerListCategories(this.head);
        ListCategories(this.body, categories, ()=>{
            clear();
            this.addCategory();
        }, async (categoryId)=>{
            let response = await this.service.post('deleteCategory', {
                'categoryId': categoryId,
            });
            if(response['success']==true){
                clear();
                this.getCategoryList();
            }
        });
    }

    addCategory(){
        this.getNav();
        headerAddCategory(this.head);
        addCategoryForm(this.body,async (categoryName)=>{
            let response = await this.service.post('addCategory',
                {
                    'categoryName': categoryName.toLowerCase(),
                }
            );
            if(response['success']==true){
                clear();
                this.getCategoryList();
            }else{
                return 'Failed To Add Category.';
            }
        });
    }

    async getPieChart(){
        let allCategories = await this.service.get('getAllCategoriesCount');
        let categories = [];
        allCategories.forEach((category)=>{
            let indexLabel = category['name'];
            let y = parseInt(category['count']);
            categories.push({
                'y': y,
                'indexLabel': capitalizeFLetter(indexLabel)
            });
        });
        this.getNav();
        getPieChart(this.body, categories);
    }


    getNav(){
        setNav(this.head, (type)=>{
            if(type=='logout'){
                let UseData = {
                    isLoggedIn: false,
                    token: '',
                    email: '',
                };
                localStorage.setItem('session' , JSON.stringify(UseData));
                Refresh();
            }
            if(type=='welcome'){
                clear();
                this.getWelcome();
            }
            if(type=='listExpenses'){
                clear();
                this.getExpensesList();
            }
            if(type=='listCategories'){
                clear();
                this.getCategoryList();
            }
            if(type=='addExpense'){
                clear();
                this.addExpense();
            }
            if(type=='addCategory'){
                clear();
                this.addCategory();
            }
            if(type=='pieChart'){
                clear();
                this.getPieChart();
            }
        });
    }




}