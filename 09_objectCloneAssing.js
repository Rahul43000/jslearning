console.log('===========step1========');
console.log('create object is banksbi');
const BankSbi={
    bankName:"SBI Bank",
    bankBranch:"SBIBank Dhule",
    bankIfSCCode:"1234567890",
    banManager:"Mr Rahul"
}
const bankLocation ={
    street:"Dhule",
    city:"Dhule",
    pin:"424001",
}
const CloneBank=Object.assign(BankSbi,bankLocation);
console.table(BankSbi);
console.log(`==========step4========`);
console.log(`rate of interest with properties`);
const rateOfInterest={
    homeLoanInterast:15,
    personalLoanInterest:11,   
}
const SbiDetail=Object.assign(BankSbi,bankLocation,rateOfInterest);
console.table(SbiDetail);

console.log(`==========step6=========`);
console.log(`traverse the merge object-step 5 using for in loop`);
    
    for (const key in  SbiDetail) {
        console.log(key,SbiDetail[key]);   
    }

Bank.Prototype.openTime="9 Am IST";
console.log(`${openTime}`);
