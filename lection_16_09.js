//1
class User {
constructor(name, email, role){
this.name = name;
this.email = email;
this.role = role;
}
login(){
console.log(`${this.name} has logged in`);
return this;
}
logout(){
console.log(`${this.name} has logged out`);
return this;
}
}


class Admin extends User {
constructor(name, email, role){
super(name, email, role);
}

deleteUser(user){
console.log(`${user.name} has been deleted by ${this.name}`);
}

}

let userOne = new User('Tom', 'test@mail.com', 'user');
let userTwo = new User('Jerry', 'ww', 'user');
let admin = new Admin('Json Statham', 'hhh', 'admin');

userOne.login().logout();
userTwo.login().logout();
admin.login().logout();
admin.deleteUser(userOne);
console.log(userOne);


// //2

// class Product {
//     constructor(name, price) {
//       this.name = name;
//       this.price = price;
//     }
//   }

// class ShoppingCart {
//   constructor() {
//     this.items = {};
//   }

//   addProduct(product, quantity) {
//     if (this.items[product.name]) {
//       this.items[product.name].quantity += quantity;
//     } else {
//       this.items[product.name] = { product: product, quantity: quantity };
//     }
//   }

//   removeProduct(product) {
//     delete this.items[product.name];
//   }

//   getTotalPrice() {
//     let total = 0;
//     for (let key in this.items) {
//       total += this.items[key].product.price * this.items[key].quantity;     }
//     return total;
//   }

//   checkout() {
//     if (Object.keys(this.items).length === 0) {
//       console.log("Корзина пуста.");
//       return;
//     }

//     console.log("Список покупок:");
//     for (let key in this.items) {
//       const item = this.items[key];
//       console.log(`Товар: ${item.product.name}, Количество: ${item.quantity}, Цена: ${item.product.price} Руб.`);
//     }
//     const totalPrice = this.getTotalPrice();
//     console.log(`Общая сумма к оплате: ${totalPrice} Руб.`);
//     this.items = {};
//   }
// }


// const product1 = new Product("Хлеб", 50);
// const product2 = new Product("Молоко", 70);
// const product3 = new Product("Яйца", 100);

// const cart = new ShoppingCart();
// cart.addProduct(product1, 2);
// cart.addProduct(product2, 1);
// cart.addProduct(product3, 10);

// console.log(`Итоговая цена: ${cart.getTotalPrice()} Руб.`);
// cart.checkout();


// //3

// class Book {
//   constructor(title, author, pages) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//   }
// }

// class Library {
//   constructor() {
//     this.books = [];
//   }

//   addBook(book) {
//     this.books.push(book);
//   }

//   findBooksByAuthor(author) {
//     return this.books.filter(book => book.author === author);
//   }

//   listAllBooks() {
//     if (this.books.length === 0) {
//       console.log("Библиотека пуста.");
//       return;
//     }
//     console.log("Список книг:");
//     this.books.forEach(book => {
//       console.log(`Название: ${book.title}, Автор: ${book.author}, Страниц: ${book.pages}`);
//     });
//   }
// }

// class LibraryUser {
//   constructor(name) {
//     this.name = name;
//     this.borrowedBooks = [];
//   }

//   borrowBook(book, library) {
//     if (this.borrowedBooks.length >= 3) {
//       console.error(`${this.name}, вы уже взяли максимальное количество книг (3).`);
//       return;
//     }
//     if (library.books.includes(book)) {
//       this.borrowedBooks.push(book);
//       library.books.splice(library.books.indexOf(book), 1); 
//       console.log(`${this.name} взял(а) книгу "${book.title}".`);
//     } else {
//       console.error(`Книги "${book.title}" нет в библиотеке.`);
//     }
//   }

//   returnBook(book, library) {
//     if (this.borrowedBooks.includes(book)) {
//       this.borrowedBooks.splice(this.borrowedBooks.indexOf(book), 1);
//       library.books.push(book); 
//       console.log(`${this.name} вернул(а) книгу "${book.title}".`);
//     } else {
//       console.error(`У вас нет книги "${book.title}".`);
//     }
//   }
// }


// const book1 = new Book("Война и мир", "Лев Толстой", 1225);
// const book2 = new Book("Преступление и наказание", "Фёдор Достоевский", 656);
// const book3 = new Book("Мастер и Маргарита", "Михаил Булгаков", 456);

// const library = new Library();
// library.addBook(book1);
// library.addBook(book2);
// library.addBook(book3);

// const user1 = new LibraryUser("Иван");
// const user2 = new LibraryUser("Мария");

// user1.borrowBook(book1, library);
// user1.borrowBook(book2, library);
// user2.borrowBook(book2, library);

// user1.returnBook(book2, library);

// library.listAllBooks();

// console.log(library.findBooksByAuthor("Лев Толстой"));
  
// //4
// class Customer {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

// class Order {
//   constructor(customer) {
//     this.customer = customer;
//     this.products = [];
//     this.total = 0;
//   }

//   addProduct(product, quantity) {
//     this.products.push({ product, quantity });
//     this.total += product.price * quantity;
//   }

//   calculateTotal() {
//     this.total = 0;
//     this.products.forEach(item => {
//       this.total += item.product.price * item.quantity;
//     });
//   }

//   printOrder() {
//     console.log(`Заказ для ${this.customer.name} (${this.customer.email})`);
//     console.log(`Товары:`);
//     this.products.forEach(item => {
//       console.log(`${item.quantity} x ${item.product.name} - ${item.product.price} руб`);
//     });
//     console.log(`Общая стоимость: ${this.total} руб`);
//     console.log('');
//   }
// }


// const customer1 = new Customer("Иван Иванов", "ivan@example.com");
// const customer2 = new Customer("Анна Петрова", "anna@example.com");


// const product_1 = new Product("Телефон", 10000);
// const product_2 = new Product("Наушники", 5000);
// const product_3 = new Product("Ноутбук", 50000);


// const order1 = new Order(customer1);
// order1.addProduct(product_1, 1);
// order1.addProduct(product_2, 2);
// order1.calculateTotal();
// order1.printOrder();

// const order2 = new Order(customer2);
// order2.addProduct(product_3, 1);
// order2.calculateTotal();
// order2.printOrder();


// //5
// class Pet {
//   eat() {
//     console.log("Животное ест");
//   }

//   makeSound() {
//     throw new Error("Метод makeSound() должен быть переопределен");
//   }
// }

// class Dog extends Pet {
//   makeSound() {
//     console.log("Собака лает");
//   }

//   sleep() {
//     console.log("Собака спит");
//   }
// }

// class Cat extends Pet {
//   makeSound() {
//     console.log("Кошка мяукает");
//   }

//   sleep() {
//     console.log("Кошка спит");
//   }
// }


// const dog = new Dog();
// const cat = new Cat();


// dog.eat(); 
// dog.makeSound(); 
// dog.sleep(); 

// cat.eat(); 
// cat.makeSound();
// cat.sleep();


// //6

// class Expression {
//   constructor(a, b, operation) {
//     this.a = a;
//     this.b = b;
//     this.operation = operation;
//   }

//   evaluate() {
//     return this.operation.calculate(this.a, this.b);
//   }

//   toString() {
//     return `${this.a} ${this.operation.symbol} ${this.b} = ${this.evaluate()}`;
//   }
// }

// class Operation {
//   constructor(symbol) {
//     this.symbol = symbol;
//   }

//   calculate(a, b) {
//     throw new Error("Метод calculate() должен быть переопределен");
//   }
// }

// class Addition extends Operation {
//   constructor() {
//     super("+");
//   }

//   calculate(a, b) {
//     return a + b;
//   }
// }

// class Subtraction extends Operation {
//   constructor() {
//     super("-");
//   }

//   calculate(a, b) {
//     return a - b;
//   }
// }

// class Multiplication extends Operation {
//   constructor() {
//     super("*");
//   }

//   calculate(a, b) {
//     return a * b;
//   }
// }

// class Division extends Operation {
//   constructor() {
//     super("/");
//   }

//   calculate(a, b) {
//     if (b === 0) {
//       throw new Error("Деление на ноль невозможно");
//     }
//     return a / b;
//   }
// }


// const expression1 = new Expression(3, 5, new Addition());
// const expression2 = new Expression(10, 2, new Subtraction());
// const expression3 = new Expression(4, 7, new Multiplication());
// const expression4 = new Expression(20, 5, new Division());


// console.log(expression1.toString()); 
// console.log(expression2.toString()); 
// console.log(expression3.toString()); 
// console.log(expression4.toString()); 

