interface Person {
    firstName: string;
    lastName: string;
}

class Student implements Person {
    fullName: string;
    // constructorの引数にpublicつけると勝手にプロパティになる
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}


function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

// let user = { firstName: "Jane", lastName: "User"};
const user = new Student("Jane", "M.", "User")

document.body.innerHTML = greeter(user);