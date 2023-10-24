class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monica =  new Employee(77, "Monica", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
 
const arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];
 const newArr=arrayEmployee.sort((emp1,emp2 )=>{
       return emp1.emp_id > emp2.emp_id ? -1: 1;
 });
 console.log(`======================DESENDING ORDER================================`);
 console.log(`Employee details:`);
 newArr.forEach((currentvalue,index,array)=>{
    console.log(`Employee id: ${currentvalue.emp_id},Employee Name:${currentvalue.emp_name},Employee Dept:${currentvalue.emp_dept}`);
 });
 console.log(`====================ASECENDING ORDER================================================`);
 const newArr1 =arrayEmployee.sort((emp1,emp2 )=>{
    return emp1.emp_dept > emp2.emp_dept ? 1: -1;
});
console.log(`Employee details:`);
newArr.forEach((currentvalue,index,array)=>{
    console.log(`Employee id: ${currentvalue.emp_dept},Employee Name:${currentvalue.emp_id},Employee Dept:${currentvalue.emp_company}`);
 });
 const newArr2 =arrayEmployee.sort((emp1,emp2 )=>{
    return emp1.emp_salary > emp2.emp_salary ? -1: 1;
});
console.log(`===============DESENDING ORDER================================`);
console.log(`Employee details:`);
newArr.forEach((currentvalue,index,array)=>{
    console.log(`Employee id: ${currentvalue.emp_salary},Employee Name:${currentvalue.emp_name},Employee Dept:${currentvalue.emp_company}`);
 });
console.log(`==============================END=================================================`);