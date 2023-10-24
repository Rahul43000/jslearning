function isPrimeNumber (num){
    if (num<=2) {
        return false
        
    }
    for (let index = 2; index < num; index++) {
        if (num% index==0){
            return false
            
        }
        
    }
    return true;
}
const array = [11,3,6,10,43,29,50];
for ( const num of array){  
const result= isPrimeNumber(num);
console.log(`given Array is ==>${num}`);
console.log(`given number "${num}" is prime number==>${result}`);
}


console.log(`================================================================================`);

const array2 =[11,3,6,10,43,29,50];
const result= array2.filter((num)=>{   
       return runingvalue= num%2==0;
    
});
console.log(result);
