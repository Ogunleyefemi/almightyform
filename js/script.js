// let a = parseInt(prompt( "put value for a"));
// let b = parseInt(prompt( "put value for b"));
// let c = parseInt(prompt( "put value for c"));
// function almightyform(){
//     return ((- b )+ Math.sqrt(b**2 - 4 * a * c)) / 2 * a
// }
// document.write(Math.round(almightyform()));

//question2
// let y = parseInt(prompt( "input value for y"));
// function solveM(){
//     return (y ** 2 - 32)** 2 / Math.sqrt(4 / y);
// }
// document.write(Math.round(solveM()));

//question3
// let a = parseInt(prompt( "input value for a"));
// let b = parseInt(prompt( "input value for b"));
// let c = parseInt(prompt( "input value for c"));
// let d = parseInt(prompt( "input value for d"));
// function solveEquation(){
//     return (a * c + b * d) / (c ** 2 + d ** 2) + (b * c - a * d) / (c ** 2 + d ** 2);
// }
// document.write(Math.round(solveEquation()));

//ANALYSING QUESTION 3
let a = parseInt(prompt( "input value for a"));
let b = parseInt(prompt( "input value for b"));
let c = parseInt(prompt( "input value for c"));
let d = parseInt(prompt( "input value for d"));
function solveEquation(){
    let eqn1 = (a * c) + (b * d);
    let eqn2 = (b * c) + (a * d);
    let eqn3 = (c **2 + d **2);
    return (eqn1 + eqn2) / eqn3;
}
document.write(Math.round(solveEquation()));

