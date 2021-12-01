//Write a “person” class to hold all the details.
class Person {
  constructor(firstName , lastName , Age , emailId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Age = Age;
    this.emailId = emailId;
  }   
}

let person1 = new Person("John" ,"Doe", "25" ,"johndoe@123");
let person2 = new Person("Johney" ,"Dae", "35" ,"johneydae@123");
let person3 = new Person("jim" ,"parson", "45" ,"jimparson@123");
console.log(person1);
console.log(person2);
console.log(person3);