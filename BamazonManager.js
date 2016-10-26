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
        message: "Hey there Big Honcho, What would you like to do?",
        choices: [
            "View Products for Sale", 
            "View Low Inventory", 
            "Add to Inventory", 
            "Add New Product", 
        ]
    }).then(function(answer) {
      console.log(answer);
        switch(answer.action) {
            case 'View Products for Sale':
                console.log('heloooooo3')
                viewProducts();
            break;

            case 'View Low Inventory':
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
        var query = 'SELECT * FROM products'
        connection.query(query, function(err, res) {
          if(err) throw err;
             for (var i = 0; i < res.length; i++) {
                 console.log("Position: " + res[i].ID + " || Product Name: " + res[i].ProductName + " || Department Name: " + res[i].DepartmentName + " || Price: " + res[i].Price + "Stock Quanity: " + res[i].StockQuanity );
              console.log(" ")
             }

            runMenu();
        })
};


var viewLowInventory = function(){
  var query = 'SELECT * FROM Products WHERE StockQuanity < 100'
  connection.query(query, function(err, res){
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
        console.log("Position: " + res[i].ID + " || Product Name: " + res[i].ProductName + " || Department Name: " + res[i].DepartmentName + " || Price: " + res[i].Price + "Stock Quanity: " + res[i].StockQuanity );
        console.log(" ")
    }
    runMenu();
  })
};


var addToInventory = function(){
  var query = 'SELECT * FROM products'
        connection.query(query, function(err, res) {
          if(err) throw err;
             for (var i = 0; i < res.length; i++) {
                 console.log("Position: " + res[i].ID + " || Product Name: " + res[i].ProductName + " || Department Name: " + res[i].DepartmentName + " || Price: " + res[i].Price + "Stock Quanity: " + res[i].StockQuanity );
              console.log(" ")
            }
          })
        inquirer.prompt([{
        name: "ID",
        type: "input",
        message: "Enter ID for product to restock: ", 
    }, {

        name: "quantity",
        type: "input",
        message: "Enter the quantity you would like to add: ",

    }]).then(function(answer) {
        connection.query('SELECT StockQuanity FROM products WHERE ?', [{ID: answer.ID}], function(err, res){
          var productChoice = res[0].StockQuanity;
          var newInventory = parseInt(productChoice) + parseInt(answer.quantity);
        var query = 'UPDATE Products SET ? WHERE ?'
        connection.query(query, [{StockQuanity: newInventory}, {ID: answer.ID}], function(err, res) {
        console.log('inventory Updated!')
        connection.query('SELECT * FROM products', function(err, res){
        if(err) throw err;
        for (var i = 0; i < res.length; i++) {
                 console.log("Position: " + res[i].ID + " || Product Name: " + res[i].ProductName + " || Department Name: " + res[i].DepartmentName + " || Price: " + res[i].Price + "Stock Quanity: " + res[i].StockQuanity );
              console.log(" ")
            }
          })
    })
    })
})
  };

  var addNewProduct = function(){
    inquirer.prompt([{
        name: "ProductName",
        type: "input",
        message: "Enter Product Name You Wish to Add: ", 
    }, {

        name: "departmentName",
        type: "input",
        message: "Enter the department for product: ",
    }, {

        name: "price",
        type: "input",
        message: "How much will this product cost?: ",
    }, {

        name: "quantity",
        type: "input",
        message: "How many will be stocked to inventory? ",

    }]).then(function(answer) {
      connection.query('INSERT INTO Products SET ?', {
        ProductName: answer.ProductName,
        DepartmentName: answer.departmentName,
        Price: answer.price,
        StockQuanity: answer.quantity
      }, function(err, res){
          connection.query('SELECT * FROM products', function(err, res){
            if(err) throw err;
            for (var i = 0; i < res.length; i++) {
                     console.log("Position: " + res[i].ID + " || Product Name: " + res[i].ProductName + " || Department Name: " + res[i].DepartmentName + " || Price: " + res[i].Price + "Stock Quanity: " + res[i].StockQuanity );
                  console.log(" ")
                }
              })
        })
    })

  }

