interface Person {
    name: string;
    skill: string;
}

interface Developer {
    skill: string;
    age: number;
}

var tony: Person | Developer;
tony = {name: 'tony', age: 18, skill: 'typeScript'};

if ((tony as Person).skill) {
    var skill: string = (tony as Person).skill;
    console.log(skill);
}else if ((tony as Developer).age) {
    var age: number = (tony as Developer).age;
    console.log(age);
}

function isDeveloper(target: Person | Developer): target is Developer{
    return (target as Developer).skill != undefined;
}

if (isDeveloper(tony)) {
    console.log(tony.skill);
}else {
    console.log(tony.name);
}