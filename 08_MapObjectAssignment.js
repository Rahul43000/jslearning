class Bank{ 

        constructor(bankName,aacountNo,Location,IFCCode){
    this.bankName = bankName;
    this.aacountNo=aacountNo;
    this.Location =Location;
    this.IFCCode = IFCCode;

    }
 }
const sbiBank = new Bank('SBIBank','123456','pune',12345);

const axisBank = new Bank('axisBank','567455','Nashik',455789);

const HdfcBank = new Bank('hdfcbank','879089','Dhule',12345);


const bankMap= new Map();
bankMap.set(123456,sbiBank);
bankMap.set(567455,axisBank);
bankMap.set(879089,HdfcBank);
console.log(bankMap);
let bankKeys =bankMap.keys();
for (const keys of bankKeys) {
    let element = bankMap.get(keys);
    console.log(`Bank name ==>${element.bankName},Account Number==>${element.aacountNo}`);
}


