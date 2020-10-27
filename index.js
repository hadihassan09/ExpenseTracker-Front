let headDiv = document.getElementById('navBar')
let bodyDiv = document.getElementById('mainBody');
let footDiv = document.getElementById('footer');

let service = new Middleware();
let authController = new AuthController(service, headDiv, bodyDiv, footDiv);
let expenseController = new ExpenseController(service, headDiv, bodyDiv, footDiv);

let User = {
    isLoggedIn: false,
    token: '',
    email: '',
};

if(sessionStorage.getItem('session')==null) {
    sessionStorage.setItem('session', JSON.stringify(User));
}
clear = ()=>{
    headDiv.innerHTML='';
    bodyDiv.innerHTML='';
    footDiv.innerHTML='';
}
Refresh = ()=> {
    User = JSON.parse(sessionStorage.getItem('session'));
    clear();

    if (User.isLoggedIn == false) { //Redirect To LoginForm
        authController.getWelcome();
    }else
    {
        service.checkAuth();
        expenseController.getWelcome();
    }
}
Refresh();





