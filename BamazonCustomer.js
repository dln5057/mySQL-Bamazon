var mysql = require('mysql');
var prompt = require('prompt');

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
})

connection.query('SELECT * FROM products', function(err, res){
  if(err) throw err;
  var query = 'SELECT * FROM products'
    connection.query(query, function(err, res) {
      if(err) throw err;
      for (var i = 0; i < res.length; i++) {
        console.log("Position: " + res[i].ID + " || Product Name: " + res[i].ProductName + " || Department Name: " + res[i].DepartmentName + " || Price: " + res[i].Price + "Stock Quanity: " + res[i].StockQuanity );
        console.log(" ")
      }
    })

  prompt.start();

  console.log("Select the product ID you wish to purchase.");
  
      prompt.get(['purchaseID'], function (err, res) {

        var customerIdPick = res.purchaseID;
        //show selected ID

        //ask for quanity
        console.log("Select quanity you wish to purchase");
        prompt.get(['quanity'], function(err, res){

          var customerQuanity = res.quanity;
          console.log("You wished to purchase " + customerQuanity + " of these Items");

          connection.query('SELECT StockQuanity FROM products WHERE ?', [{ID: customerIdPick}], function(err, res){
            if(err) throw err;

            if(res[0] == undefined){
              console.log('Insufficient quantity!');
              connection.end();
            }else{
              var productQuanity = res[0].StockQuanity;
              if(productQuanity >= customerQuanity){
                var newQuanity = parseInt(productQuanity) - parseInt(customerQuanity);
                connection.query('UPDATE products SET ? WHERE ?', [{StockQuanity: newQuanity}, {ID: customerIdPick}],function(err, res){
                  var query = 'SELECT * FROM products'
                  connection.query(query, function(err, res) {
                    if(err) throw err;
                    for (var i = 0; i < res.length; i++) {
                      console.log("Position: " + res[i].ID + " || Product Name: " + res[i].ProductName + " || Department Name: " + res[i].DepartmentName + " || Price: " + res[i].Price + "Stock Quanity: " + res[i].StockQuanity );
                      console.log(" ")
                    }
                  });
                })
              }else{
                  connection.end();
              };
            }
          });
        });
      });
    });