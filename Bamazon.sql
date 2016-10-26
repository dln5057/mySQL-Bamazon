CREATE database bamazon; 

USE bamazon;

CREATE TABLE Products(
    ID int NOT NULL AUTO_INCREMENT,
    ProductName VARCHAR(100) NOT NULL,
    DepartmentName VARCHAR(100) NOT NULL,
    Price decimal(10,2) NOT NULL,
    StockQuanity INT(50) NOT NULL,
    PRIMARY KEY (ID)
    );

    SELECT * FROM Products;

INSERT INTO Products (ProductName,DepartmentName,Price, StockQuanity)
VALUES ('Tooth Paste','Hygiene', 2.99, 100);