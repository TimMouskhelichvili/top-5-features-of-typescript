enum Type {
    cat = 'cat',
    dog = 'dog'
}

interface IFood {
    name: string;
    calories: number;
}

class Animal {

    protected name: string;
    private type: Type;

    public constructor (type: Type, name: string) {
        this.type = type;
        this.name = name;
    }

    public eat (food: IFood): void {
        console.log(`The ${this.type} ${this.name} is eating ${food.name}.`);
    }

}

class Cat extends Animal {

    public constructor(name: string) {
        super(Type.cat, name);
    }
}

class Dog extends Animal {

    public constructor(name: string) {
        super(Type.dog, name);
    }
}

const dog = new Dog('Larry');
dog.eat({ calories: 200, name: 'meat' });

const cat = new Cat('Charlie');
cat.eat({ calories: 150, name: 'yogurt' });