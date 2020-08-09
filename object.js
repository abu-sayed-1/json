// Module No 26 -----------------------------
//  video No 02 ---------------------------

// const person = {
//     fistName: 'rakib',
//     lestName: 'raju',
//     // salary : 15000,
//     getFullName : function (){
//         console.log(this.fistName); 
//     }

// }
// console.log(person.getFullName);
// console.log(person.lestName);

//------aita dye salary amount ke minus kore dila------------------

// const person = {
//     fistName: 'rakib',
//     lestName: 'raju',
//     salary : 15000,
//     getFullName : function (){
//         console.log(this.fistName); 
//     },
//     chargeBill:function (amount){
//         this.salary = this.salary - amount;
//         return this.salary 
//     }

// } 

// person.chargeBill(1000);
// console.log (person.salary);

// person.chargeBill(3000);
// console.log (person.salary);



//  video No 03 ----object use bind to borrow method from another object---------------------------


// const person = {
//     fistName: 'rakib',
//     lestName: 'raju',
//     salary : 15000,
//     getFullName : function (){
//         console.log(this.fistName); 
//     },
//     chargeBill:function (amount){
//         console.log(this)
//         this.salary = this.salary - amount;
//         return this.salary 
//     }

// } 


// const method = {
//     fistName:'plosh',
//     lestName:'alamin',
//     salary:20000

// }
// // person.chargeBill();


//  const hero = person.chargeBill.bind(method);

// hero(1000);
// hero(1000);
// hero(5000);
// console.log(hero.salary);



// ----------------------------------------------
// const person = {
//     fistName: 'rakib',
//     lestName: 'raju',
//     salary : 15000,
//     getFullName : function (){
//         console.log(this.fistName); 
//     },
//     chargeBill:function (amount){
//         console.log(this)
//         this.salary = this.salary - amount;
//         return this.salary 
//     }

// } 


// const method = {
//     fistName:'plosh',
//     lestName:'alamin',
//     salary:20000

// }
// // person.chargeBill();


//  const hero = person.chargeBill.bind(method);

// hero(1000);
// hero(1000);
// hero(5000);
// console.log(method.salary); 




//  video No 04 ----------difference between bind, call and apply------------------------------------

// const person = {
//         fistName: 'rakib',
//         lestName: 'raju',
//         salary : 15000,
//         getFullName : function (){
//             console.log(this.fistName); 
//         },
//         chargeBill:function (amount,tips,tex){
//             console.log(this)
//             this.salary = this.salary - amount - tips - tex;
//             return this.salary 
//         }
    
//     } 


// const method = {
//     fistName:'plosh',
//     lestName:'alamin',
//     salary:20000

// }

// person.chargeBill.call(method,1000,100,10);
// person.chargeBill.call(method,2000,100,30);
// person.chargeBill.call(method,3000,200,50);

// console.log (method.salary);

//------------------------------------------------



// const person = {
//     fistName: 'rakib',
//     lestName: 'raju',
//     salary : 15000,
//     getFullName : function (){
//         console.log(this.fistName); 
//     },
//     chargeBill:function (amount,tips,tex){
//         console.log(this)
//         this.salary = this.salary - amount - tips - tex;
//         return this.salary 
//     }

// } 


// const method = {
// fistName:'plosh',
// lestName:'alamin',
// salary:20000

// }

// person.chargeBill.apply(method,[1000,100,10]);
// person.chargeBill.apply(method,[2000,100,30]);
// person.chargeBill.apply(method,[3000,200,50]);

// console.log (method.salary);



//   video No 05 ---window, global variable, global scope-----------------


function add (num1,num2){

let result = num1 + num2 ;
return result;
}

let sum = add(12,99);
console.log(sum);