let hello: string = "world";

const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
};

console.log(getFullName("Aytugan", "Özgan"));

interface User {
    name: string;
    age?: number;
    getMessage(): string;
}

const user: User = {
    name: "Aytugan",
    age: 26,
    getMessage() {
        return `${this.name}'s age is ${this.age} `
    }
};

const user2: User = {
    name: "Jack",
    getMessage() {
        return `${this.name}'s age is ${this.age} `
    }

}

console.log(user.age);