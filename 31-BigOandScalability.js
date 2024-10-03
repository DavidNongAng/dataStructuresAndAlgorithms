const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100).fill('nemo');

function findNemo(array){
    let tZero = performance.now();
    for (let i = 0; i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log('Found Nemo!');
        }
    }
    let tOne = performance.now();
    console.log('Call to function took: ' + (tOne-tZero) + ' milliseconds');
}

findNemo(nemo);
findNemo(everyone);
findNemo(large);

//When we grow bigger and bigger with our input, how much does the algorithm or function slow down?

