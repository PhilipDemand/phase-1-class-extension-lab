class Polygon {
    constructor (polygon) {
        this.polygon = polygon
        //console.log(this.polygon)
    }
    get countSides() {
        return this.polygon.length
    }
    get perimeter() {
        return this.polygon.reduce((a,b)=>a+b)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if ((this.polygon[0] + this.polygon[1]) > this.polygon[2] && (this.polygon[1] + this.polygon[2]) > this.polygon[0] && (this.polygon[2] + this.polygon[0] > this.polygon[1])){
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        return this.polygon.every( (val, i, arr) => val === arr[0] )
    }
    get area() {
        return this.polygon[0] * this.polygon[1]
    }
}