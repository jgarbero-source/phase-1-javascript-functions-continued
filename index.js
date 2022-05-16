// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

// //function wrapAdjective(name) {
//     const part1 = "You are";
//     return function (part2 = "*") {
//         return function (part3 = "a hard worker") {
//         }
//         return `${part1} ${part2} ${part3} ${part2}`
//     } 
// }

// function wrapAdjective(flare = "*", adjective = "hard worker") {
//     return `You are ${flare} ${adjective} ${flare}`;
// }

// function wrapAdjective(flare, adjective){
//     function flare(flare = "*"){
//     } function adjective(adjective = "hard worker"){
//     } return `You are ${flare} ${adjective} ${flare}`
// }

function wrapAdjective(flare = "*") {
    return function(adjective = "hard worker") {
        return `You are ${flare}${adjective}${flare}!`
    }
}