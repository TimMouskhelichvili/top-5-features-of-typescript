const Type = {
    cat: 'cat',
    dog: 'dog'
};

class Animal {

    name;
    type;

    constructor(name, type) {
        this.type = type;
        this.name = name;
    }

    eat(food) {
        console.log(`The ${this.type} ${this.name} is eating ${food.name}.`);
    }

}

class Cat extends Animal {

    constructor(name) {
        super(Type.cat, name);
    }
}

class Dog extends Animal {

    constructor(name) {
        super(Type.dog, name);
    }
}

const dog = new Dog('Larry');
dog.eat({ calories: 200, name: 'meat' });

const cat = new Cat('Charlie');
cat.eat({ calories: 150, name: 'yogurt' });