const multiplier = {
    numbers: [85,5,6533321],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((num) => num * this.multiplyBy)
    }
}

console.log(multiplier.multiply())