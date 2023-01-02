#!/usr/bin/env node 
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";


// Global Variables
let numbered:number;
let answer:any;
let count:number =0;
// function for pause of 3 seconds
async function waiting (){
    return new Promise((res)=>{
     setTimeout(res,2000);
    })
}
// welcome for displaying welcome message
async function starter(){
    let title = chalkAnimation.rainbow(
   `   ********                                      **   **                ****     **                     **                    
   **//////**                                    /**  /**               /**/**   /**                    /**                    
  **      //  **   **  *****   ******  ******   ******/**       *****   /**//**  /** **   ** ********** /**       *****  ******
 /**         /**  /** **///** **////  **////   ///**/ /******  **///**  /** //** /**/**  /**//**//**//**/******  **///**//**//*
 /**    *****/**  /**/*******//***** //*****     /**  /**///**/*******  /**  //**/**/**  /** /** /** /**/**///**/******* /** / 
 //**  ////**/**  /**/**////  /////** /////**    /**  /**  /**/**////   /**   //****/**  /** /** /** /**/**  /**/**////  /**   
  //******** //******//****** ******  ******     //** /**  /**//******  /**    //***//****** *** /** /**/****** //******/***   
   ////////   //////  ////// //////  //////       //  //   //  //////   //      ///  ////// ///  //  // /////    ////// ///    `)
     await waiting();
     title.stop();
     let another = chalkAnimation.rainbow(`All you need is to guess the number from 0 to 50`);
     await waiting();
     another.stop();
     numbered = Math.floor(Math.random()*50+1);
}

async function handler(){
    return inquirer.prompt([
        {
            type : "number",
            name : "val",
            message : "Kindly Enter number and let Zohaib do the rest"
         },
    ]);
    //   answer = prompt("Enter the number");
}

async function functionality(){
     do{
            answer = await handler();
            count = count+1;
            
        if(answer.val>numbered){
            console.log(chalk.red(`Get a bit lower number`));
        }
        else if(answer.val<numbered){
            console.log(chalk.red(`Get a bit higher number`));
        }

        
     }
     while(answer.val !== numbered)

     let final = chalkAnimation.rainbow(`This is the right answer.Your total number of guesses were ${count}`);
     await waiting();
     final.stop();

}

async function repeater(){
    await inquirer.prompt([
        {
            name:"more",
            type: "input",
            message: "Do you want to play another time? y|n"
        }
    ]).then((data)=>{
         do{
            functionality();
            count = 0;
            numbered = 0;
         }
         while(data.input==="y" || data.input==="yes" || data.input==="Y" || data.input==="Yes")
    })
}
// Calling the welcome message
await starter();
await functionality();
repeater();
