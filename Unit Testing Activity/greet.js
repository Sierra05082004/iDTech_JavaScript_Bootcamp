function greet(name){
    let greeting = "Hello, "+ name;
    let nullandArrayCheck = 0;
    if (name === null){
        greeting = 'Hello There!'
        nullandArrayCheck = 1;
    }
    function add(name1){
        greeting = greeting + ", " + name1;
    }
    if (Array.isArray(name)){
        greeting = "Hello"
        name.forEach(add);
        nullandArrayCheck = 1
    }
    if (nullandArrayCheck == 0){
        if ((name.toUpperCase()) == name){
            greeting = "HELLO " + name.toUpperCase();
        }
    }
    return greeting;
}

console.log(greet('Emiliano'));
console.log(greet(null));
console.log(greet('EMILIANO'));
console.log(greet(['Emiliano','Jorge','Amaya']));
