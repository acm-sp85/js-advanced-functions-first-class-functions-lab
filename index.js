const returnFirstTwoDrivers = function ([a,b]) { 
    
    return [a,b];

}

const returnLastTwoDrivers = function (array){
    const newArray = array.slice(-2);
    return newArray;
}


//createFareMultiplier is a function that thakes an integer and multiplies it by a given fare
function createFareMultiplier(integer){

    return function fareMultiplier (fare){
        return integer*fare;
    }
}




const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];



//fareDoubler is a function that takes a fare and multiplies it by 2 using math stated in 
//the createFareMultiplier function. To use that math I've called the function passing it
//the Argument Integrer (in our case 2) and then I've also passed the argument Fare (by adding
//it right after- what I understand to be one level down).

function fareDoubler(fare){


    const mult = createFareMultiplier(2)(fare);

    return mult;


}


//fareTripler uses the same concept as the previous exercise, but changing the Integrer value to 3
function fareTripler(fare){


    const mult = createFareMultiplier(3)(fare);

    return mult;


}


function selectDifferentDrivers(array,returnFirstTwoDrivers){

    return returnFirstTwoDrivers(array);
}






//OUTPUTS
console.log(fareDoubler(10));

console.log(selectDifferentDrivers(['pepe','tom','juan','maria'],returnFirstTwoDrivers));