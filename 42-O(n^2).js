//Log all pairs of array
const boxes = ['a','b','c','d','e'];

function logAllPairsOfArray(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            console.log(array[i], array[j]);
        }
    }
}

logAllPairsOfArray(boxes);

//When you see loops that are nested, you use multiplication.
//O(n * n ) ==> O(n^2) (Quadratic time)


function printAllNumbersThenAllPairsSums(numbers){

    console.log('\nthese are the numbers: ');
    numbers.forEach(function(number) {
        console.log(number);
    });

    console.log('and these are their sums: ');
    numbers.forEach(function(firstNumber) {
        numbers.forEach(function(secondNumber){
            console.log(firstNumber + secondNumber);
        });
    });
}

printAllNumbersThenAllPairsSums([1,2,3,4,5]);