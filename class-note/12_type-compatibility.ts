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