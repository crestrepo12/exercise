
function Vector(x, y){
    this.x = x
    this.y = y
}

Vector.prototype.minus = function (obj){
    var resultX = (this.x - obj.x);
    var resultY = (this.y - obj.y);
    return new Vector(resultX, resultY);
}

Vector.prototype.plus = function (obj) {
    var resultX = (this.x + obj.x);
    var resultY = (this.y + obj.y);
    return new Vector(resultX, resultY);
}


var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)

Vector.prototype.getLength = function(){  // doesnt need any input
   return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
}


console.log(v1.plus(v2));
// => Vector {x: 3, y: 5}
console.log(v1.minus(v2));
// => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4)
console.log(v3.getLength());
// => 5

