import chalk from "chalk"
const car = {
    name:"corola",
    color:"black",
    model:"2022",
    number:"C00387",
    powerstaring:"true",
    seater: "8 seater",
    airconditionar:"true",

}
console.log("My Car details are as following:");
console.log(car);

//  object with given types
let employee: {name:string,email:string,department:string,timings:number} = { 
    name: "maira",
    email:"mairakanwal679@gmail.com",
    department:"HR",
    timings: 9 - 5
}
console.log(employee);

// type object 
type Teachers = {
    name:string;
    age:string;
    qualifuication:any;
    depart:string
    goodTeacher:boolean;
    experience: any;
};

let teacher1 = {
    name: "MISS.ZARAH",
    age: 44,
    qualification:10,
    depart:"ARTS",
    goodTeacher:true,
    experience:"5 years",
}
let teacher2 = {
    name: "MISS.hina",
    age: 35,
    qualifuication:"BSCS",
    depart:"COMP SCI",
    goodTeacher:true,
    experience:"10 years",
}

let teacher3 = {
    name: "MISS.BUSHRA",
    age: 35,
    qualifuication:"CA",
    depart:"COMMERCE",
    goodTeacher:false,
    experience:"8 years",
}

    teacher3.qualifuication = "ICMA"
    teacher1.name = "MISS.NAZIA KHAN"

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);


//type  k andar type askti h ya type apni khud banaskte hain

type Lunch = "biryani" | "noodles" | "macroni" | "nothing" | 56 ;
let Lunch : Lunch = 56
console.log(Lunch)


type zipper = "4zipper"|"5zipper"|"6zipper"
let zipper :zipper= "5zipper"
console.log(zipper)
type bag = {
    color:string,
     zipper:string,
     fabric:string,
     type: string,
     handles:string,
};
let  bag = {
    color:"black",
     zipper:"2zipper",
     fabric:"leather",
     type: "laptop bag",
     handles: "two",

}
console.log(bag);