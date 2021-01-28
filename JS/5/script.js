/*

1. Assignment Operator [=] 
2. Arithmatic Operator  [+ - * / %]
3. Short hand math Operator [ += -= *= /= ]
4. Conditional Operator   [< , > , <= ,>= , !==]
5. Unary Operator  [++, --]
6. Logical Operator [&&, || , ^]
7. Ternary Operator [ ?:]
8. Equality Operator [== , ===]

*/

console.log("Assignment Operator [=] ");

let mname;
mname = "vasu";
console.log(mname);

console.log("Arithmatic Operator  [+ - * / %]");

let num1 = 50;
let num2 = 5;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);

console.log("Short hand math Operator [ += -= *= /= ]");

let num = 20;

 //num = num+1;

 num += 1
 console.log(num);

 //num = num-10;
 num -=10;
 console.log(num);

//num = num*10;
 num *=10;
 console.log(num);

//num = num/11;
 num /=11;
 console.log(num);

//num = num%3;
 num %= 3;
 console.log(num);

 console.log("Unary Operator  [++, --]");

 num++;
 console.log(num);

 num--;
 console.log(num);

 console.log("Conditional Operator   [< , > , <= ,>= , !==]");
 console.log(num1 !== num2);

 console.log("Logical Operator [&&, || , ^]");


 /*
     A    B    A&&B
     T    T     T
     T    F     F
     F    T     F
     F    F     F   

     A    B    A||B
     T    T     T
     T    F     T
     F    T     T
     F    F     F  
     
     A    B    A^B
     T    T     F
     T    F     T
     F    T     T
     F    F     F 
  
 */

 let natonality = "American";
 let age = 12;

 if( (natonality=="Indian" ) && age>=18)
 {
     console.log("eligible");
 }
 else{
    console.log("not eligible");
 }

 console.log("Ternary Operator [ ?:]");

let vote = "";

vote  = age >= 18 ? "eligible" : "Not eligible";

console.log(vote);


console.log("Equality Operator [== , ===]");

let a = 10;

let b = 10;

let c = "10";

console.log(a === c);


