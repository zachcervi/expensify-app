class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello, I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor(){
      return !!this.major
  }
  getDescription(){
      let description = super.getDescription()
      if(this.hasMajor){
        description = `${description} Their major is ${this.major}.`
      }
      return description
  }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age, homeLocation)
        this.homeLocation = homeLocation
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting = `${greeting} I am visiting from ${this.homeLocation}`
        }
        return greeting
    }
}

const me = new Student("Zach Cervi", 26, "Software Engineering");
console.log(me.getGreeting())

const other = new Student();



const zach = new Traveler('Zach Cervi', 28, 'Denver, CO')
console.log(zach.getGreeting())
