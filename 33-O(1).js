//O(1) is constant time.  In terms of scalability, it doesn't matter how big our inputs are, we are doing a constant amount of opeartions on a function.

function compressFirstBox(boxes){ //No matter how many boxes is increased, it has the same number of operation.
    console.log(boxes[0]);
}

const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes){
    console.log(boxes[0]); //O(1)
    console.log(boxes[1]); //O(1)
}

logFirstTwoBoxes(boxes); //O(2)