//Encapsulation
let baseSalary=30_000;
let overtime=10;
let rate=20;
function getWage(baseSalary,overtime,rate){ //so many parameters
    return baseSalary+(overTime*rate);
}
//OOp way
let employee={
    baseSalary:30_000,
    overtime:10,
    rate:20,
    getwage:function(){
        return this.baseSalary+(this.overtime*this.rate);
    }
};
console.log(employee.getwage());