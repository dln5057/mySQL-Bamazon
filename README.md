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

### `BamazonCustomer.js`
  -These images show how the `BamazonCustomer.js` file works...

  -Here the customer makes a purchase by keying in the Product ID they would like.
![Customer Order](/ScreenShots/CustomerPurchase1.PNG)
  -After they have selected their product to purchase, Next you are prompted to the quanity the customer wishes to purchase. 
![Customer Order](/ScreenShots/CustomerPurchase2.PNG)
  
### `BamazonManager.js`
  -These images show how the `BamazonManager.js` file works...

  -When first running, a prompt with a list of commands will appear allowing the user to choose by keying in a number of choice they would like.
![Manager Order](/ScreenShots/ManagersChoices.PNG)
  -When choosing "View products for sale" A table will appear listing all the products that are available for sale. 
![Manager Order](/ScreenShots/ManagersChoiceRepeated.PNG)
  -After viewing the list of products for sale, The prompt will appear with the list of commands available for the manager user. 
  -Selecting "View Low Inventory" will list the products quantity less than 100 in stock. 
![Manager Order](/ScreenShots/ManagerViewLowInventory.PNG)
  -After viewing the low inventory products, the prompt menue will appear again.
  -The manager user can then select to restock more product.
  -A Prompt will show to select the product ID to restock and the quantity amount to restock.
![Manager Order](/ScreenShots/ManagerReStock.PNG)
  -The manager user can also select to "Add New Product". 
  -This brings up a list of prompts that ask the manager user a series of questions..
  *Enter Product Name You Wish to Add:
  *Enter the department for product:
  *How much will this product cost?:
  *How many will be stocked to inventory?:
![Manager Order](/ScreenShots/ManagersAdd.PNG)