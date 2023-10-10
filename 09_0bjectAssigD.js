let professor = {
    name: "Ganesh Shintre",
    Education: "BE",
    Domain: " Mechanical Engeeniring ",
    expertise:["HTML", "CSS", "JS",],
    TeachingMode: "Hybrid",
    degrees: {
        engineering: " Mechanical ",
        PHD: " Design "
    },
    certificates: [
        "Hacker Rank",
        "Participation",
        "Certificate in IFE Course",
        "Certificate in Adv Programming"
    ]
}
console.log(professor)
console.log(`========= Added new property in the above object ===========`);
professor.totalExperience = "14 years";
console.log(professor)
console.log(`========= Modified existing property in the above array engineering: cse --> ITE ===========`);
professor.degrees.engineering = "ITE"
console.log(professor)
console.log(`========= Pushed one another certificate in the array at the end 'Oracle Certified'===========`);
professor.certificates.push("Oracle Certified");
console.log(professor);
console.log(`========= logged the last element of array certificate ===========`);
let lastElement = professor.certificates[professor.certificates.length-1];
console.log(`The last element of array certificate is: "${lastElement}".`);
console.log(`========= logged the whole object ===========`);
console.log(professor)
console.log(`========= Traversed certificates array using forOf loop ===========`);
for (const key of professor.certificates) {
    console.log(key);
}

   // count no.4 RAHUL