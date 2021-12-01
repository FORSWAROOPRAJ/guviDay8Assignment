//Q-4 write a class to calculate uber price.

class uber {
  constructor(distance, price ){
    this.distance = distance;
    this.price = price;
  }
  get cost(){
    return this.price*this.distance
  }
 }

let loaction1 = new uber(5 , 100)

console.log(`Price is :${loaction1.cost}`)