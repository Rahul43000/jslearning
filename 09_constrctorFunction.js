function Bank(bankName,bankLocation,IFCCode){
    this.bankName = bankName;
    this.bankLocation = bankLocation;
    this.IFCCode = IFCCode;
}
const sbiBank = new Bank('SBI','PUNE',12345);
console.log(sbiBank);
const axisBank = new Bank('axisBank','Nashik',455789);
console.log(axisBank);
const HdfcBank = new Bank('hdfcbank','Dhule',12345);
console.log(HdfcBank);

console.log(`=======================================================`);
Bank.prototype.opentime = "9 AM IST";
console.log(`Bank opening time pleae visit:${sbiBank.opentime}`);

Bank.prototype.closetime ="6 AM IST";
console.log(`Bank closing time please visit:${axisBank.closetime}`);


