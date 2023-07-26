interface Delveloper {
    name: string;
    skill: string;
}
class Per {
    name: string;
}

let developer: Delveloper = {name: 'lee', skill: 'html'};
let per = new Per()



// developer = per;
per = developer;

var add = function(n: number) {
    // 
}

var sum = function(a: number, b: number) {
    // 
}

sum = add;
// add = sum;

interface Empty<T> {
    data: T;
}

var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;