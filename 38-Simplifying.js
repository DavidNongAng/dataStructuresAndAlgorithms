//Rule 1: Worse Case
    //Rule 2: Remove Constants
        //Rule 3: Different terms for inputs
            //Rule 4: Drop Non Dominants


const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(1000).fill('nemo');

function findNemo(array){
    for (let i = 0; i < array.length; i++){
        console.log('running');
        if(array[i] === 'nemo'){
            console.log('Found Nemo!');
            break;
        }
    }
}

findNemo(everyone); //O(n)

//Think of what the worse case scenario is. In this case, the worse case scenario is if 'nemo' is at the end of the array.


function printFirstItemThenFirstHalfThenSayHi100Times(items){
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while(index < middleIndex){
        console.log(items[index]);
        index++;
    }

    for(var i = 0; i < 100; i++){
        console.log('hi!');
    }
} //O(n)


function compressBoxesTwice(boxes, boxesTwo){
    boxes.forEach(function(boxes){
        console.log(boxes);
    });

    boxesTwo.forEach(function(boxes){
        console.log(boxes);
    });
} //O(a + b)   a is for the first input, and b is for the second input. 

