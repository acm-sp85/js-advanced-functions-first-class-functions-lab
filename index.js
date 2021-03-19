const returnFirstTwoDrivers = function ([a,b]) { 
    
    return [a,b];

}

const returnLastTwoDrivers = function (array){
    const newArray = array.slice(-2);
    return newArray;
}


//createFareMultiplier is a function that thakes an integer and multiplies it by a given fare
function createFareMultiplier(integer){

    return (fare)=>integer*fare;
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

// const fareDoubler = (fare)=>createFareMultiplier(2)(fare);
// const fareTripler = (fare)=>createFareMultiplier(3)(fare);

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);



function selectDifferentDrivers(array,returnFirstTwoDrivers){

    return returnFirstTwoDrivers(array);
}


//OUTPUTS
console.log(fareDoubler(10));

console.log(selectDifferentDrivers(['pepe','tom','juan','maria'],returnFirstTwoDrivers));