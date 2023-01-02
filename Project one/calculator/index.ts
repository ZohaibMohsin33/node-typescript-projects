#!/usr/bin/env node 
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

let stopper = ()=>{
    return new Promise((res)=>{
        setTimeout(res,3000);
    })
}
async function wrapper(){
    let title = chalkAnimation.rainbow('Welcome to my calculator');
    await stopper();
    title.stop();
    console.log(chalk.red(`    _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`));
    
}
//   calling function 
await wrapper();
repeater();
async function showData(){
    return inquirer
    .prompt([
     {
      type : "list",
      name : "operator",
      message: "What actions do you want to perform more \n",
      choices : ["addition","subtraction","division","multiplication"]
     },
     {
        type : "number",
        name : "num1",
        message : "Kindly Enter number 1"
     },
     {
        type : "number",
        name : "num2",
        message : "Kindly Enter number 2"
     }
   
    ]).then((answers) => {
        //Action for the calculator
        if(answers.operator === "addition"){
            console.log(`${answers.num1} + ${answers.num2} =`,answers.num1 + answers.num2)
        }
        else if(answers.operator === "subtraction"){
            console.log(`${answers.num1} - ${answers.num2} =`,answers.num1 - answers.num2)
        }
        else if(answers.operator === "division"){
            console.log(`${answers.num1} / ${answers.num2} =`,answers.num1 / answers.num2)
        }
        else if(answers.operator === "multiplication"){
            console.log(`${answers.num1} * ${answers.num2} =`,answers.num1 * answers.num2)
        }
    })
  }
  async function repeater(){
    do{
        await showData();
        var repeater_variable = await inquirer.prompt([
      {
        type : "input",
        name : "repeat",
        message : "If you to calculate again press Y/n"
      }
        ])
    }
    while(repeater_variable.repeat === "Yes" || repeater_variable.repeat === "Y" || repeater_variable.repeat === "yes" || repeater_variable.repeat === "y")
  }


