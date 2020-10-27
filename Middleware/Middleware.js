class Middleware{

    constructor() {
        this.service = new Service();
    }

    async post(url, body){
        let response = await this.service.post(url, body);
        if(typeof response['Auth'] == 'undefined'){
            return response;
        }
        else{
            this.redirectToLogin();
        }
    }

    async get(url){
        let response = await this.service.get(url);
        if(typeof response['Auth'] == 'undefined'){
            return response;
        }
        else{
            this.redirectToLogin();
        }
    }

    async checkAuth(){
        let response = await this.service.get('checkToken');
        if(typeof response['Auth'] == 'undefined'){
            return response;
        }
        else{
            this.redirectToLogin();
        }
    }

    redirectToLogin(){
        let User={
            isLoggedIn: false,
            token:'',
            email:'',
        };
        localStorage.setItem('session', JSON.stringify(User));
        location.reload();
    }
}