
class Employee {
    constructor (emp_id,emp_name,emp_dept,emp_salary,emp_compani){
        this.emp_id = emp_id;
        this.emp_name =emp_name;
        this.emp_dept =emp_dept;
        this.emp_salary =emp_salary;
        this.emp_compani =emp_compani;
    }
}
const emp_anill = new Employee (22,"Anill","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radha","HR",74000,"wipro");
const emp_rishi = new Employee (55,"Rishi","Finance",47000,"TCS");
const emp_Sonali = new Employee(66,"Sonali","FIanance",45000,"Infy");
const emp_monika = new Employee (77,"Monica","IT",40000,"wipro");
const emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");

console.log(`=========step1============================`);

const arrayEmploees=[emp_anill,emp_radha,emp_rishi,emp_Sonali,emp_monika,emp_viny,emp_mahi];
const empsalary= arrayEmploees.map((Employee)=>{
    return emp.emp_salary;

});
 console.log(`Employee Salary-${empsalary}`);
console.log(`=======step2===========================================`);
 const empDept=arrayEmploees.map((emp)=>{
    return emp.emp_dept;

 

 });
 console.log(`Employee Department-${empDept}`);
console.log(`========step3=========================================`);
 const empid=arrayEmploees.map((emp)=>{
    return emp.emp_id;

 

});
console.log(`Employee Id :-${empid}`);
console.log(`===================================================`);
 