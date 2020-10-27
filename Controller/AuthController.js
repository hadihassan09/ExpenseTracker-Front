class AuthController{

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

    getNav(){
        setBeforeLoginNav(this.head, (action)=>{
            if(action=='welcome'){
                clear();
                this.getWelcome();
            }
            if(action=='login'){
                clear();
                this.loginForm();
            }
            if(action=='signup'){
                clear();
                this.createForm();
            }
        });
    }

     loginForm(){
        this.getNav();
        headerLoginText(this.body);
       getLoginForm(this.body,async (email, password)=>{
           let response = await this.service.post('login', {email, password});
            if(response['success']==true){
                User.isLoggedIn = true;
                User.email = response['email'];
                User.token = response['token'];
                sessionStorage.setItem('session', JSON.stringify(User));
                Refresh();
            }else{
                return response['message'];
            }
       }, ()=>{
           this.createForm();
       });
    }

    createForm(){
        this.getNav();
        headerSigUupText(this.body);
        getRegisterForm(this.body, async(email, password)=>{
            let response = await this.service.post('createUser', {email, password});
            if(response['success']==true){
                Refresh();
            }else{
                return response['message'];
            }
        });
    }
}