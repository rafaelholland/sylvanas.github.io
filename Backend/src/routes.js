const express = require("express")
const routes = express.Router()
const database = require("./database/config")

routes.post('/test',(request, response) => {
    var login = request.body.login
    var senha = request.body.senha
    var sql = `insert into cadastro values ('${login}','${senha}');`
    database.query(sql, function(err,result){
        if (err) throw err; })
    response.json({Site:'SiteIndividual'})
})

module.exports = routes
