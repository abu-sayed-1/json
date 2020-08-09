const person = {
    fistName: 'rakib',
    lestName: 'raju',
    // salary : 15000,
    getFullName : function (){
        console.log(this.fistName); 
    }

}
console.log(person.getFullName);
console.log(person.lestName);