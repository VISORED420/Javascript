let score = 3;

// const {score} = req.body;

console.log (typeof score); //number
console.log(typeof(score));

let valueInNumber =Number(score);
console.log(typeof valueInNumber);

console.log(valueInNumber);


//"33" => 33
//"33abc" => NaN
//true => 1; flase => 0

let isLoggedIn = 1;

let booleanIsloggedIn = Boolean(isLoggedIn);
console.log(booleanIsloggedIn);