function cadastrar(){
    var login = document.getElementById("");
    fetch('http://localhost:3333/test', {
        method:' POST', 
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            login:login
        })
    })
}