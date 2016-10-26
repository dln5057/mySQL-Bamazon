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

  //show message from the user
  //create a table out of console.logs



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
          console.log("heeeeeeeeeeee " + newQuanity);

          connection.query('UPDATE products SET ? WHERE ?', [{StockQuanity: newQuanity}, {ID: customerIdPick}],function(err, res){
                console.log(res);
              });
        } else{
          connection.end();
          };
        }
        });
      });
    });
});

    // Show quantity selected
     

      // Once the customer has placed the order, check if store has enough of the product to meet the request
      
        // Error Handler
        // Check if the item Id was valid (i.e. something was returned from mySQL)
         // end the script/connection
        
        // Valid Item ID, so compare Bamazon Inventory with user quantity 
        
          // Sufficient inventory
          