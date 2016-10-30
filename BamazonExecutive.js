var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "vr4turbo0923", //Your password
    database: "bamazon"
})

connection.connect(function(err) {
  if(err) throw err;
  console.log("connected as id " + connection.threadId);
  run();
});

var run = function(){
  inquirer.prompt({
    
  })
}


