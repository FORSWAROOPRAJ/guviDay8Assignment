//Q-2  convert uml diagram into class object
class circle{
  constructor(radius=1.0,color="red"){
  this.radius=radius;
  this.color=color;
  }
getRadius(){
  console.log(`Radius of circle is ${this.radius}`)
}
setRadius(x){
  this.radius=x;
  console.log(`radius of circle is set to ${this.radius}`)
}
getColor(){
  console.log(`color of circle is ${this.color}`)
} 
setColor(aqua){
  this.color=aqua;
  console.log(`color of circle is set to ${this.color}`)
}
getArea(){
  console.log(`Area of circle is${Math.PI*(this.radius*this.radius)}`)
}
getCircumference(){
  console.log(`circumference of circle is ${Math.PI*(this.radius*this.radius*2)}`)
}
}
const circle1=new circle(2,"skyblue")
circle1.getRadius()
circle1.setRadius(3)
circle1.getColor()
circle1.setColor("aqua")
circle1.getArea()
circle1.getCircumference()