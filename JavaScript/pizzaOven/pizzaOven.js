function pizzaOven(crustType,sausageType,chesses,toppings){
    var pizza={};
    pizza.crustType=crustType;
    pizza.sauseType=sausageType;
    pizza.chesses=chesses;
    pizza.toppings=toppings;
    return pizza;
}
var p1=pizzaOven("deep dish","traditional","mozzarella",["pepperoni","sausage"]);
var p2=pizzaOven("hand tossed","mariana",["mozarella","feta"],["mushrooms","olives","onions"]);
var p3=pizzaOven("Thin Crust","Smoky Polish ","Goat","Onion");
var p4=pizzaOven("Cheese Crust","Italian","Ricotta","Black olives");
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);