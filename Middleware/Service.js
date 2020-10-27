class Service{

    host = 'http://localhost:3000/index.php?action=';

    async post(url, body){
        let jsonBody = JSON.stringify(body);
        let response = await fetch(this.host.concat(url), {
            method: 'POST',
            body: jsonBody,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': User.token
            }
        });
        return response.json();
    }

    async get(url){
        let request = await fetch(this.host.concat(url), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': User.token
            }
        });
        return request.json();
    }
}


function capitalizeFLetter(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}