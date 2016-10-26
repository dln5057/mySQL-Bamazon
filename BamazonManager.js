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
  runMenu();
});

var runMenu = function() {
    inquirer.prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
            "View Products for Sale", 
            "View Low Inventory", 
            "Add to Inventory", 
            "Add New Product", 
        ]
    }).then(function(answer) {
      console.log(answer);
        switch(answer) {
            case 'View Products for Sale':
                console.log('heloooooo3')
                viewProducts();
                console.log('heloooooo')
            break;

            case 'view Low Inventory':
                viewLowInventory();
            break;

            case 'Add to Inventory':
                addToInventory();
            break;

            case 'Add New Product':
                addNewProduct();
            break;
        }
    })
}

var viewProducts = function() {
  console.log('helpppp');
        var query = 'SELECT * FROM products ?'
        connection.query(query, function(err, res) {
          if(err) throw err;
            for (var i = 0; i < res.length; i++) {
                console.log("Position: " + res[i].ID + " || Product Name: " + res[i].productName + " || Department Name: " + res[i].departmentName + " || Price: " + res[i].price + "Stock Quanity: " + res[i].stockQuanity);
            }
            runMenu();
        })
};

