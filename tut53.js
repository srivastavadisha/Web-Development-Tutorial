console.log("This is tutorial 53");

// let name1 = "Shubham";
// let name2="Harry";
// let name3="Rohan";
// let name4="Sagar";
// console.log(name1+ " is a good boy");
// console.log(name2+" is a good boy");
// console.log(name3+" is a good boy");
// console.log(name4+" is a good boy");


// function greet(name, greetText="Greetings from JavaScript"){
//     console.log(greetText+" "+name);
//     console.log(name+" is a good boy");
// }

// let name1="Shubham";
// let name2="Harry";
// let name3="Rohan";
// let name4="Sagar";
// let greetText1 = "Good Morning";
// greet(name1,greetText1);
// greet(name2,greetText1);
// greet(name3,greetText1);
// greet(name4);


function sum(a,b,c){
    let d = a+b+c;
    return d;
    //Console.log("Function is returned");          //This line will never execute(Unreachable code) because it is written after return
}

let returnVal= sum(1,2,3);
console.log(returnVal)
