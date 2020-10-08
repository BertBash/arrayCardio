//Top Choices
favoriteNumbers = [1024, 1337, 7, 42, 12, 2.71828];
for(var i = 0; i<favoriteNumbers.length; i++) {
    if(i === 0){
        console.log(`My 1st choice is: ${favoriteNumbers[i]}.`);
    }else if(i === 1){
        console.log(`My 2nd choice is: ${favoriteNumbers[i]}.`);
    }else if(i === 2){
        console.log(`My 3rd choice is: ${favoriteNumbers[i]}.`);
    }else{
        console.log(`My ${i+1}th choice is: ${favoriteNumbers[i]}.`);
    }
}

//Daily Pay
var dogWalks = [4, 5, 2, 2, 6, 1, 3]

for(i = 0; i<dogWalks.length; i++){
    console.log(`Trisha earned $${dogWalks[i]*22} today!`);
}

//Total Pay
function totalPay(walks){
    var tot = 0;
    for(i = 0; i<walks.length; i++){
        tot += walks[i]*22;
    }
    return tot;
}

console.log(totalPay(dogWalks));

//Even or Odd
function evenOrOdd(arr){
    var odds = [];
    var evens = [];
    i = 0;

    //While loop is a little more efficent here than a for loop.
    while(odds.length < 1 || evens.length < 1){
        //Bitwise > Modulo
        if(arr[i] & 1){
            odds.push(arr[i]);
        }else{
            evens.push(arr[i]);
        }
        i++;
    }

    //Really abusing the fact that we're guaranteed only one odd number out here.
    if(odds.length == 1){
        return odds[0];
    }else{
        return evens[0];
    }
}

console.log(evenOrOdd([1, 3, 5, 6]))
console.log(evenOrOdd([10, 15, 20, 30, 40, 50]))
console.log(evenOrOdd([19, 5, 42, 1, 77]))

//Make Some Space
console.log("Program Completed! Shutting down now!");
console.log("Program Completed! Shutting down now!");
console.log("Program Completed! Shutting down now!");