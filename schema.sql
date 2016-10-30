CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    ID INT AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(45) NOT NULL,
    DepartmentName VARCHAR(45) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    StockQuantity INT(10) NOT NULL,
    primary key(ItemID)
);

select * from products;

INSERT INTO products(ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Tooth Paste","Hygiene",2.99,80),
    ("Duct Tape","Hardware",3.58,60),
    ("Paintball Gun","Outdoor",21.45,40),
    ("DVD Player","Entertainment",50.00,30),
    ("Pumpkin Candles","Home",6.00,85),
    ("Preperation H","Hygiene",3.49,105),
    ("Puppy Chow","Pets",21.99,100),
    ("Penn State Jersey","Sportswear",45.89,280),
    ("TubberWare","Home",34.99,178),
    ("Fishing Line","Outdoor",4.59,165)