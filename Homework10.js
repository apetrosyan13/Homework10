Ex.1.
class Author {
  constructor (name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.toString = function () {
      return `Name:${this._name}\nEmail:${this._email}\nAge:${this._age}`
    }
    
  }
  get name () {
      return this._name;
    }
  set name (value) {
    if (typeof value !== "string") {
      alert("invalid name")
    } else if (value.length < 4) {
      alert("The name must  contain more than 3 symbols")
    } else {
      this._name = value;
    }
  }
  get email () {
    return this._email;
  }
  set email (value) {
    if (typeof value !== "string") {
      alert("invalid type of email")
    } else if (value.length < 4) {
      alert("Too short email address")
    } else {
      this._email = value;
    }
  }
  get age () {
    return this._age;
  }
  set age (value) {
    if (typeof value !== "number" || value < 1 || value > 99) {
      alert("for age please enter a number from 1 to 99")
    } else {
      this._age = value;
    }
  }
}
class Book {
  constructor (title, price, author, quantity) {
    this.title = title;
    this.price = price;
    this.quantity = quantity;
    this.author = author;
    this.toString = function () {
      return `Title: ${this._title}\nPrice: ${this._price}\n Quantity: ${this._quantity}\n Current profit: ${this.profit()}`;
    }
    this.profit = function () {
      return this._price * this._quantity;
    }
  }
  get title() {
    return this._title;
  }
  set title(value) {
    (typeof value === "string")? this._title = value: alert("invalid title");
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(value) {
    this._quantity = value;
  }
  get author() {
    return this._author;
  }
  set author(name) {
    if (name instanceof Author) {
      this._author = name;
    } else {
      alert("such author desn`t exist");
    }
  }
}
Ex.2.
class Account {
  constructor(id, name) {
    if (typeof id !== "number" || id.toString().length !== 8) {
      alert("id must be a number with 8 digits");
    } else {
      this._id = id;
    }
    this.name = name;
    this.balance = 0;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get balance() {
    return this._balance;
  }
  set balance(num) {
    this._balance = num;
  }
  credit(num) {
    this._balance +=num;
    return this._balance;
  }
  debit(num) {
    if (num > this._balance) {
      alert("amaunt axceeded balance")
    } else {
      this._balance -= num;
      return this._balance;
    }
  }
  transfereTo(obj, num) {
   if (obj) {
      if (num > this._balance) {
        alert("amaunt axceeded balance")
      } else {
        this._balance -= num;
        obj._balance += num;
        return this._balance;
      }
  } else {
    alert("such account doesn`t exist")
  }
 }
  toString() {
    return `Name: ${this._name}\nBalance:${this._balance}`;
  }
  static identifyAccaunts (obj1, obj2) {
    if (!(obj1 instanceof Account) || !(obj2 instanceof Account)) return "invalid arguments";
    for (let key of Object.keys(obj1)) {
      console.log(`${obj1[key]}, ${obj2[key]}`)
      if (obj1[key] !== obj2[key]) return false;
    }
    return true;
  }
}
Ex.3
class Person {
  constructor(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.toString = function() {
      return `FullName: ${this._firstName} ${this._lastName}\nGender: ${this._gender}\nAge: ${this._age}`;
    }
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if(typeof value !== "string" && typeof value !== "undefined") {
      alert("please insert correct name");
    } else {
      this._firstName = value;
    }
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if(typeof value !== "string" && typeof value !== "undefined") {
      alert("please insert correct last name");
    } else {
      this._lastName = value;
    }
  }
  get gender() {
    return this._gender;
  }
  set gender(value) {
    if (value !== "male" && value !== "female" && typeof value !== "undefined") {
      alert("i`m not tolerant and i dont accept such gender!!!")
    } else {
      this._gender = value;
    }
  }
  get age() {
    return this._age;
  }
  set age(value) {
    if (typeof value !== "number" && typeof value !== "undefined" || value < 0 || value > 100) {
      alert("incorrect age");
    } else {
      this._age = value;
    }
  }
}
class Student extends Person{
  constructor(program, year, fee) {
    super();
    this.program = program;
    this.year = year;
    this.fee = fee;
    this.data = {};
    this.toString = function() {
      return `Program: ${this._program}\nYear: ${this.year}`;
    }
  }
  get program() {
    return this._program;
  }
  set program(arr) {
    this._program = arr;
  }
  get year() {
    return this._year;
  }
  set year(num) {
    this._year = num;
  }
  get fee() {
    return this._fee;
  }
  set fee(num) {
    this._fee = num;
  }
  passExam(program, grade) {
    for(let key in this._program) {
      this.data[this._program[key]] = grade;
    }
    if (grade >= 50) {
      this._year++;
    }
  }
}
class Teacher extends Person {
  constructor(program, pay) {
    super();
    this.program = program;
    this.pay = pay;
    this.toString = function() {
      return `Program: ${this.program}\nPay: ${this.pay}`
    }
  }
  get program() {
    return this._program;
  }
  set program(str) {
    if (typeof str !== "string") {
      alert("for program, please, enter a string type");
    } else {
      this._program = str;
    }
    }
  get pay() {
      return this._pay;
    }
  set pay(num) {
    if (typeof num !== "number" || num > 150000 || num < 63580) {
      alert("enter real pay");
    } else {
      this._pay = num;
    }
  }
}
