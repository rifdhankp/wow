console.log("hello world");
console.log('234');
console.log(typeof false);
//var name ='solana';
//let name ='workshop';
//const name ='crypto'; //const is constant
 
 const a=10;
 const b=15;
 if(a>b){
     console.log("a is greater");
 }else{
     console.log("b is greater");
 }
 
 //datatypes in js
 //complex/compound
 //JSON
 
 //1
 const n=20;
 const a=[456,"ftfj",true,[8765,"g"]];
 console.log(a[3][0]);
 
 //2
 //const jsob={
     //name:"ayush",
    // age:"24"
 }
 try {
     const a=10;
     a=12;
 }catch(err){
     console.log(err);
     
 }
 //Function
 function square(x){
     return x*x;
 }
 console.log(square(2));