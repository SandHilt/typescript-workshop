interface Namewise {
    name: string;
}

class Generic<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }

    static sayMyName<T extends Namewise>(nameObj: T): string {
        return nameObj.name;
    }
}

const generic = new Generic(1);
const generic2 = new Generic<string>("foo");
console.log(generic, generic2);

const myName = Generic.sayMyName({ name: "guarda", surname: "chuva" });
console.log(myName); // guarda