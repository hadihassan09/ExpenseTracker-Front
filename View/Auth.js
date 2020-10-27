function setBeforeLoginNav(parent, callbackFunction){
    let navDiv = document.createElement('div');

    let ul = document.createElement('ul');

    for(let i = 0; i <= 2;i++){
        let li = document.createElement('li');
        li.setAttribute('style', 'float: left;');
        let a;
        switch (i) {
            case 0:
                a = document.createElement('a');
                a.setAttribute('style', 'cursor: pointer');
                a.setAttribute('class', 'LOGO');
                a.innerText='Expense Tracker';
                a.onclick=()=>{callbackFunction('welcome')};
                break;
            case 1:
                li.setAttribute('style', 'float: right;');
                a = document.createElement('a');
                a.setAttribute('style', 'cursor: pointer');
                a.innerText='SignUp';
                a.onclick=()=>{callbackFunction('signup')};
                break;
            case 2:
                li.setAttribute('style', 'float: right;');
                a = document.createElement('a');
                a.setAttribute('style', 'cursor: pointer');
                a.innerText='Login';
                a.onclick=()=>{callbackFunction('login');}
                break;
        }
        li.appendChild(a);
        ul.appendChild(li);
    }

    navDiv.appendChild(ul);
    parent.appendChild(navDiv);
}


function headerLoginText(parent){
    let h1 = document.createElement('h1');
    h1.setAttribute('style', 'text-align:center;color:gray');
    h1.innerText='Welcome To Expense Tracker';
    let p = document.createElement('p');
    p.setAttribute('style', 'text-align:center;color:black');
    p.innerText='Please Log In To Proceed';
    parent.appendChild(h1);
    parent.appendChild(p);
    parent.appendChild(document.createElement('br'));
    parent.appendChild(document.createElement('br'));
}

function getLoginForm(parent, callbackFunction, callableFunction){
    let div = document.createElement('div');
    div.setAttribute('align','center');
    div.setAttribute('style','font: 14px sans-serif;');

        //Creation of Form Div
        let formDiv = document.createElement('div');
        formDiv.setAttribute('class', 'wrapper')

            //Creation of Email Label
            let emailDiv = document.createElement('div');
            emailDiv.setAttribute('class', 'form-group');

                let emailLabel = document.createElement('label');
                emailLabel.setAttribute('style','float: left');
                emailLabel.innerText='Email:';

                let emailInput = document.createElement('input');
                emailInput.setAttribute('placeholder', 'Email');
                emailInput.setAttribute('type', 'text');
                emailInput.setAttribute('name','email');
                emailInput.setAttribute('class','form-control wrapper');

                let emailSpan = document.createElement('span');
                emailSpan.setAttribute('class', 'help-block');

                emailDiv.appendChild(emailLabel);
                emailDiv.appendChild(emailInput);
                emailDiv.appendChild(emailSpan);

            //Creation of Password Label
            let passwordDiv = document.createElement('div');
            passwordDiv.setAttribute('class', 'form-group');

                let passwordLabel = document.createElement('label');
                passwordLabel.setAttribute('style','float: left');
                passwordLabel.innerText='Password:';

                let passwordInput = document.createElement('input');
                    passwordInput.setAttribute('placeholder', 'Password');
                    passwordInput.setAttribute('type', 'password');
                    passwordInput.setAttribute('name','password');
                    passwordInput.setAttribute('class','form-control wrapper');

                let passwordSpan = document.createElement('span');
                passwordSpan.setAttribute('class', 'help-block');

                passwordDiv.appendChild(passwordLabel);
                passwordDiv.appendChild(passwordInput);
                passwordDiv.appendChild(passwordSpan);

            //Creation of Button
            let buttonsDiv = document.createElement('div');

                let buttonLogin = document.createElement('button');
                buttonLogin.textContent='LogIn';
                buttonLogin.setAttribute('class', 'btn btn-primary');

                let loginSpan = document.createElement('span');
                loginSpan.setAttribute('class', 'help-block');

                let divButtons = document.createElement('div');
                divButtons.setAttribute('class', 'wrapper btn-toolba doubleButtons');

                divButtons.appendChild(buttonLogin);

                buttonsDiv.appendChild(loginSpan);
                buttonsDiv.appendChild(divButtons);

                buttonLogin.addEventListener('click', async (event)=>{
                   //Check if data is filled.
                    let email = emailInput.value.trim();
                    let password = passwordInput.value.trim();

                    if(email.length == 0 || password.length == 0){
                        if(email.length==0)
                            emailSpan.innerText='Please Fill In The Email';
                        if(password.length==0)
                            passwordSpan.innerText='Please Fill In a Password';
                    }
                    else{
                        if((message=await callbackFunction(email,password)) != true){
                            loginSpan.innerText=message;
                        }
                    }
                });

                let registerDiv = document.createElement('div');
                registerDiv.setAttribute('class', 'wrapper registerDiv ');
                registerDiv.textContent='Dont have an account yet, ';

                let resiterLink = document.createElement('a');
                resiterLink.setAttribute('style', 'cursor: pointer');
                resiterLink.innerText='SignUp';
                resiterLink.onclick=()=>{
                    clear();
                    callableFunction();
                };

                registerDiv.appendChild(resiterLink);


        formDiv.appendChild(emailDiv);
        formDiv.appendChild(passwordDiv);
        formDiv.appendChild(buttonsDiv);
        formDiv.appendChild(registerDiv);

    div.appendChild(formDiv);
    //Append Elements to Main Div
    parent.appendChild(div);
}


function headerSigUupText(parent){
    let h1Title = document.createElement('h1');
    h1Title.setAttribute('style', 'text-align:center;color:gray');
    h1Title.innerText='Welcome To Expense Tracker';

    let p = document.createElement('p');
    p.setAttribute('style', 'text-align:center;color:black');
    p.innerText='Please Create an Account To Proceed';
    parent.appendChild(h1Title);
    parent.appendChild(p);
    parent.appendChild(document.createElement('br'));
    parent.appendChild(document.createElement('br'));
}

function getRegisterForm(parent, callbackFunction){
    let div = document.createElement('div');
    div.setAttribute('align','center');
    div.setAttribute('style','font: 14px sans-serif;');

    //Creation of Form Div
        let formDiv = document.createElement('div');
        formDiv.setAttribute('class', 'wrapper');
        //Creation of Email Label
            let emailDiv = document.createElement('div');
            emailDiv.setAttribute('class', 'form-group');

                let emailLabel = document.createElement('label');
                emailLabel.setAttribute('style','float: left');
                emailLabel.innerText='Email:';

                let emailInput = document.createElement('input');
                emailInput.setAttribute('placeholder', 'Email');
                emailInput.setAttribute('type', 'text');
                emailInput.setAttribute('name','email');
                emailInput.setAttribute('class','form-control wrapper');
                emailInput.required = true;

                let emailSpan = document.createElement('span');
                emailSpan.setAttribute('class', 'help-block');

                emailDiv.appendChild(emailLabel);
                emailDiv.appendChild(emailInput);
                emailDiv.appendChild(emailSpan);

        //Creation of Password Label
            let passwordDiv = document.createElement('div');
            passwordDiv.setAttribute('class', 'form-group');

                let passwordLabel = document.createElement('label');
                passwordLabel.setAttribute('style','float: left');
                passwordLabel.innerText='Password:';

                let passwordInput = document.createElement('input');
                passwordInput.setAttribute('placeholder', 'Password');
                passwordInput.setAttribute('type', 'password');
                passwordInput.setAttribute('name','password');
                passwordInput.setAttribute('class','form-control wrapper');

                let passwordSpan = document.createElement('span');
                passwordSpan.setAttribute('class', 'help-block');

                passwordDiv.appendChild(passwordLabel);
                passwordDiv.appendChild(passwordInput);
                passwordDiv.appendChild(passwordSpan);

            //Creation of Button
            let buttonDiv = document.createElement('div');
            buttonDiv.setAttribute('class', 'form-group');

                let buttonSignUp = document.createElement('button');
                buttonSignUp.textContent='Sign Up';
                buttonSignUp.setAttribute('class', 'btn btn-primary');

                let registerSpan = document.createElement('span');
                registerSpan.setAttribute('class', 'help-block');

                let divButtons = document.createElement('div');
                divButtons.setAttribute('class', 'wrapper btn-toolba doubleButtons');

                divButtons.appendChild(buttonSignUp);

                buttonDiv.appendChild(divButtons);
                buttonDiv.appendChild(registerSpan);


                buttonSignUp.addEventListener('click', async (event)=>{
                    //Check if data is filled.
                    let email = emailInput.value.trim();
                    let password = passwordInput.value.trim();

                    if(email.length == 0 || password.length == 0){
                        if(email.length==0)
                            emailSpan.innerText='Please Fill In an Email';
                        if(password.length==0)
                            passwordSpan.innerText='Please Fill In a Password';
                    }
                    else{

                        if(await callbackFunction(email,password) != true){
                            registerSpan.innerText='Email Already Exists';
                        }
                    }
                });

        formDiv.appendChild(emailDiv);
        formDiv.appendChild(passwordDiv);
        formDiv.appendChild(buttonDiv);

    div.appendChild(formDiv);
    //Append Elements to Main Div
    parent.appendChild(div);
}