//O(n) is a linear rate as our number of inputs increase, the number of operations increase as well. 


const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(1000).fill('nemo');

function findNemo(array){
    for (let i = 0; i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log('Found Nemo!');
        }
    }
}

findNemo(nemo); //O(1) --Constant time
findNemo(large); // O(n) -- Linear time

//ES5 - javascript versions of other ways of doing FOR LOOPS
function compressAllBoxes(boxes){  //As the input increases, the number of operations increases. O(n) - Linear time.
    boxes.forEach(function(item){
        console.log(item);
    });
}

//ES6 - javascript versions of other ways of doing FOR LOOPS
const acompressAllBoxes = boxes => {
    boxes.forEach(box => console.log(box));
}

