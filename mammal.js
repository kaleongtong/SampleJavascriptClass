//ES5
const mammal = function(warmblooded, legs){
    this.warmblooded = warmblooded;
    this.legs = legs;
}

mammal.prototype.isWarmBlooded = function(){
    return this.warmblooded;
}

mammal.prototype.hasLegs = function(){
    return this.legs > 0;
}

mammal.prototype.getLegs = function(){
    return this.legs;
}

const marsupial = function(canHop, hasPouch, warmblooded, legs){
   mammal.call(this, warmblooded, legs);
   this.hasPouch = hasPouch;
   this.canHop = canHop;
}

marsupial.prototype = Object.create(mammal.prototype);

marsupial.prototype.doesHop = function(){
    return this.canHop;
}

const kangaroo = new marsupial(true, true, true, 2);
console.log(kangaroo.isWarmBlooded());//true
console.log(kangaroo.hasLegs());//true;
console.log(kangaroo.getLegs());//2;


//ES6
class mammal {
    constructor(warmblooded, legs){
       this.warmblooded = warmblooded;
       this.legs = legs;
    }

    isWarmBlooded(){
       return this.warmblooded;
    }

    hasLegs(){
       return this.legs > 0;
    }

    getLegs(){
      return this.legs;
    }
}

class marsupial extends mammal{
    constructor(hasPouch, hasHop, warmblooded, legs){
       super(warmblooded, legs);
       this.hasPouch = hasPouch;
       this.hasHop = hasHop;
    }

    doesHop(){
       return this.hasHop;
    }
}

const kangaroo = new marsupial(true, true, true, 2);

console.log(kangaroo.isWarmBlooded());//true
console.log(kangaroo.hasLegs());//true
console.log(kangaroo.getLegs());//2

console.log(kangaroo.doesHop());//true
