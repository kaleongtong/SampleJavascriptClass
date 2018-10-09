# classes in ES5 vs ES6

Javascript is a prototype object oriented base language. Javascript does not support class based object oriented design patterns by default.

To do so we need to utilize prototypes to create pseudo classes in javascript. 

In mammal.js I have created psuedo classes via ES5 and ES6 syntax. 

## Mammal on ES5

I set mammal to a function and set its warmblooded and leg properties. Afterward, I created getter and setter functions for the mammal object.

## marsupial on ES5

I created a marsupial object that sets warmblooded and legs field the way it does for mammal. Afterward I set its other properties just like I did with the mammal object(hasPouch, canHop). 

Aside from the fields we also need to inherit the mammal's prototype object because mamml might contains several methods that marsupial needs since marsupial is a child class of mammal.

## Mammal on ES6

ES6 introduced some syntax sugars such as class and constructor that allow us to create class objects easily.
In mammal.js we can simply write a class for mammal along with its constructor and methods. 

To create a child class of mammal we can simply create a new class that extends mammal:

```shell
class marsupial extends mammal {
   //logic here
}
```

Inside here we can also create a constructor that set the fields we inherit from the mammal properly via the super method.
And that's it! The biggest giveaway from ES6 is that classes are much easier to write comparing to ES5.


