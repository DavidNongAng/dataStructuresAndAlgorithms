//What is the BigO of the below function? (Hint, you may want to go line by line)

function funChallenge(input){
    let a = 10; //O(1)
    a = 50 + 3;  //O(1)

    for (let i = 0; i < input.length; i++){ //O(n) Loops are linear
        anotherFunction(); //O(n)  (Depends on how big the input is (input.length))
        let stranger = true; //O(n)
        a++; //O(n) //depends on how many times the loop runs
    }
    return a; //O(1)
}

//3 + n + n + n + n = BIG O(3 + 4n)

//------------------------------------
//What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input){ 
    let a = 5; //O(1)
    let b = 10; //O(1)
    let c = 50; //O(1)
    for(let i = 0; i < input; i++){ //O(n)
        let x = i + 1; //O(n)
        let y = i + 2; //O(n)
        let z = i + 3; //O(n)
    }
    for(let j = 0; j < input; j++){ //O(n)
        let p = j * 2; //O(n)
        let q = j * 2; //O(n)
    }
    let whoAmI = "I Don't Know!"; //O(1)
}

//BIG O(4 + 5n)
