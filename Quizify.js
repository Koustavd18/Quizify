let readline = require("readline-sync");
let score = 0;

const database = {
    data : [
        {
            question: `let a = {}, b = {}
console.log(a == b)
console.log(a === b)`,
            options: {
                a: "false fasle",
                b: "false true",
                c: "true false",
                d: "true true"
            },
            correctAnswer: "a"
        },
        {
            question: "Object.assign(target,source) creates which type of copy?",
            options: {
                a: "deep copy",
                b: "shallow copy",
                c: "nested copy",
                d: "new reference"
            },
            correctAnswer: "b"
        },
        {
            question: "Is method chaining possible with forEach?",
            options:{
                a : "Yes",
                b: "No"
            },
            correctAnswer: "b"
        }
    ]
}

function playGame(userAnswer, correctAnswer){
    if(userAnswer == correctAnswer){
        console.log("CORRECT ANSWER");
        score += 1;
    }else{
        console.log("INCORRECT ANSWER");
    }
}    

function showQuestionAndOptions() {
    for (let i = 0; i < database.data.length; i++) {
        console.log(`\n Q${i+1}: ` +database.data[i].question + "\n");
        for(let key in database.data[i].options){
            console.log(`${key}. ${database.data[i].options[key]}`);
        }
        let userAnswer = readline.question("Enter your option \n").toLowerCase();
        playGame(userAnswer, database.data[i].correctAnswer);
        console.log(`The correct answer is ${database.data[i].correctAnswer}`);
    }
}

showQuestionAndOptions();
console.log(`Your score is ${score}`);