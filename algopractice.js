class Rectangle {
    // Setup

    constructor (width, height, color) {
        console.log('Rectangle is being created')

        this.width = width;
        this.height = height;
        this.color = color
        
    }

    getArea() {
        return this.width * this.height
    }
    
    printDescription() {
        console.log(`I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`)
    }

}

let myRectangle1 = new Rectangle(5, 4, 'blue')
let myRectangle2 = new Rectangle(6, 5, 'red')
console.log(myRectangle1.printDescription())
console.log(myRectangle2.printDescription())

