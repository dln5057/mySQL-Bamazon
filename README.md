# mySQL-Bamazon

### About
This Program mimics an online Store.

### Created using Node.JS, Javascript, MySQL, and NPM packages. 

## Node.js
Three javascript files are created to mimic the chain of command in a retail store. 
- `BamazonCustomer.js`
  - recieves orders from the customer through the command line prompts. When customer purchases an order/s, the inventory will decrease.

- `BamazonManager.js`
  - Can monitor the inventory flow. Functions to display current inventory, what products are low in inventory, add more to the inventory, or can input a new product for sale. 

- `BamazonExecutive.js`
  -Can view product sales by departments and create a new department. 

## MySQL
The three javascript files query to a MySQL database hosted on my personal computer.
  -The `schema.sql` file shows how the database was created using SQL queries. 

## NPM (Node Package manager)
-When using Bamazon on your local machine, the program has two npm dependencies.
  -Before firing the js file you wish to run, run `npm install prompt` and 'npm install mysql' to install the packages locally on your machine. 

## Screen shots of application in action.

![Customer Order](/ScreenShots/CustomerPurchase1.PNG)
