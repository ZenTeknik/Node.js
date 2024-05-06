class person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }


greetings(){
    console.log("My name $(this.name) and I am $(this.age)");
}
}
module.exports =person;

