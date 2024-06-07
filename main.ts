#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

console.log(chalk.blue.bold("\n\t Welcome to Ali Akbar Brohi Adventure Game"));




class Player{
    name:string;
    fuel:number=100;

    constructor(name:string){

        this.name=name;

    }

fuelDecrease(){

    let fuel=this.fuel-25
this.fuel=fuel


}

fuelIncrease(){
    this.fuel=100
}



}
class Enemy{
    name:string;
    fuel:number=100;

    constructor(name:string){

        this.name=name;

    }


    
fuelDecrease(){

    let fuel=this.fuel-25
this.fuel=fuel


}


}
let player=await inquirer.prompt([{


    name:"Player",
    type:"input",
    message:'Enter player Name'


}])


let enemy=await inquirer.prompt([{

name:"select",
type:"list",
message:"Select your Enemy",
choices:["Alien","Skeleton","Zombie"]

}])

let p1=new Player(player.Player)

let E1=new Enemy(enemy.select)


do{

if (enemy.select==="Alien"){

    let ask =await inquirer.prompt([{

name:"enm",
type:"list",
message:"What would you like to do",
 choices:["Attack","Drink portion","Run for your life..."]


    }]);
    if (ask.enm==="Attack"){

let num= Math.floor(Math.random()*2)
if (num>0){

p1.fuelDecrease()
console.log(`${p1.name} fuel is ${p1.fuel}`);
console.log(`${E1.name} fuel is ${E1.fuel}`);

if (p1.fuel<=0){

    console.log(chalk.red.bold("You loose Better luck next time"));
    process.exit()
    
}


}

if (num<=0){

    E1.fuelDecrease()
    console.log(`${p1.name} fuel is ${p1.fuel}`);
    console.log(`${E1.name} fuel is ${E1.fuel}`);
    if (E1.fuel<=0){

        console.log(chalk.green.bold(" Congratulations! You  Win"));
        process.exit()
        
    }
}   }

if (ask.enm==="Drink portion"){

p1.fuelIncrease();
console.log(chalk.green.bold(`you drink health portion your fuel is ${p1.fuel}`));



}

if (ask.enm==="Run for your life..."){

console.log(chalk.red.bold('you loose ,Better luck next time'));
process.exit()


}

}


// skeleton

if (enemy.select==="Skeleton"){

    let ask =await inquirer.prompt([{

name:"enm",
type:"list",
message:"What would you like to do",
 choices:["Attack","Drink portion","Run for your life..."]


    }]);
    if (ask.enm==="Attack"){

let num= Math.floor(Math.random()*2)
if (num>0){

p1.fuelDecrease()
console.log(`${p1.name} fuel is ${p1.fuel}`);
console.log(`${E1.name} fuel is ${E1.fuel}`);

if (p1.fuel<=0){

    console.log(chalk.red.bold("You loose Better luck next time"));
    process.exit()
    
}
}

if (num<=0){

    E1.fuelDecrease()
    console.log(`${p1.name} fuel is ${p1.fuel}`);
    console.log(`${E1.name} fuel is ${E1.fuel}`);
    if (E1.fuel<=0){

        console.log(chalk.green.bold(" Congratulations! You  Win"));
        process.exit()
        
    }
}    }

if (ask.enm==="Drink portion"){

p1.fuelIncrease();
console.log(chalk.green.bold(`you drink health portion your fuel is ${p1.fuel}`));



}

if (ask.enm==="Run for your life..."){

console.log(chalk.red.bold('you loose ,Better luck next time'));
process.exit()


}

}

// zombi


if (enemy.select==="Zombie"){

    let ask =await inquirer.prompt([{

name:"enm",
type:"list",
message:"What would you like to do",
 choices:["Attack","Drink portion","Run for your life..."]


    }]);
    if (ask.enm==="Attack"){

let num= Math.floor(Math.random()*2)
if (num>0){

p1.fuelDecrease()
console.log(`${p1.name} fuel is ${p1.fuel}`);
console.log(`${E1.name} fuel is ${E1.fuel}`);

if (p1.fuel<=0){

    console.log(chalk.red.bold("You loose Better luck next time"));
    process.exit()
    
}
}

if (num<=0){

    E1.fuelDecrease()
    console.log(`${p1.name} fuel is ${p1.fuel}`);
    console.log(`${E1.name} fuel is ${E1.fuel}`);
    if (E1.fuel<=0){

        console.log(chalk.green.bold(" Congratulations! You  Win"));
        process.exit()
        
    }
}

    }

if (ask.enm==="Drink portion"){

p1.fuelIncrease();
console.log(chalk.green.bold(`you drink health portion your fuel is ${p1.fuel}`));

}

if (ask.enm==="Run for your life..."){

console.log(chalk.red.bold('you loose ,Better luck next time'));
process.exit()


}

}


}while(true)
