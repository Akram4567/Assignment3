// 1) javascript For in loop

let obj = {
    name: 'Akram',
    age: 22,
    email: 'mdakramhossain@gmail.com',
    phone: '01700000000000'
}

function printObjectProperties(obj) {

    if(Object.keys(obj).length===0) {
        console.log('Object is empty')
        
    }else {
        for(let item in obj) {
            console.log(`${item}: ${obj[item]}`)
        }
    }
       
}

printObjectProperties(obj)

// end: 1) javascript For in loop






// 2) javascript function returns
let arr1 = [5, 12, 45, 32, 15,]
let arr2 = [8, 34, 83, 20]
let emptyArr = []


function findMaxNumber(number) {
    
    let max = 0

    if(number.length === 0) {
        return 'null'
    }else {
        for(let num of number) {
            if(num > max) {
                max = num
            }
        }

        return max

    }

}

let result = findMaxNumber(arr1)
console.log(result)

// end: 2) javascript function returns





// 3) javascript Spread Operator

let numArr1 = [1, 2, 3, 4, 5,]
let numArr2 = [6, 7, 8, 9, 10]

function mergeArrays(arr1, arr2) {
    let newArr = [...arr1, ...arr2]
    return newArr
}

let rst = mergeArrays(numArr1, numArr2)
console.log(rst)

// end 3) javascript Spread Operator





// 4) javascript arrow function
    let calculateSquare = (n) => {
        return n*n
    }

console.log(calculateSquare(5))

// end: 4) javascript arrow function




// 5) javascript es6 map
let dArr = [1, 2, 3, 4, 5]

function doubleNumbers(arr) {
    let itemArr = []

    arr.map((value) => {   
        let item = value*2
        itemArr.push(item)      
    })

    return itemArr
}

console.log(doubleNumbers(dArr))

// end: 5) javascript es6 map






// 6) javascript es6 static keyword
class MathUtility {

    static multiply(n1,n2) {
        return n1*n2
    }

}

console.log(MathUtility.multiply(5, 3))

// end: 6) javascript es6 static keyword






// 7) javascript es6 class inheritance

class Animal {

    constructor(name, sound) {
        this.name = name
        this.sound = sound
    }

    makeSound() {
        console.log(this.sound)
    }
}



class Dog extends Animal {

    constructor(name, sound) {
        super(name, sound)
    }

    fetch() {
        console.log('Fetching the ball!')
    }


}


let animal = new Animal('Loin', 'Roar')
animal.makeSound()

let dog = new Dog('Buddy', 'Woof')
dog.makeSound()

dog.fetch()

// end: 7) javascript es6 class inheritance






// 8) javascript es6 super keyword
class Person {

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and Iam ${this.age} old. `)
       
    }

}


class Student extends Person {

    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and Iam ${this.age} old. ${this.major}`)
       
    }
 
}



let person = new Person('John', 30)
person.introduce()

let student = new Student('Alice', 20, 'I am majoring in Computer Science.' )
student.introduce()

// end: 8) javascript es6 super keyword


