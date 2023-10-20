// Code goes here!

class Department {
    // private readonly id:string;
    // private name:string; // public
    private employees:string[] = [];
    static fiscalYear = 2023;

    constructor(private readonly id:string, public name:string) {
        // this.name = n;
    }

    static createEmployee(name:string){
        return {name}
    }

    describe(this:Department){
        console.log(`Department ${this.id} : ${this.name}`);
    }

    addEmployee(employee:string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this,this.employees)
    }
}

class ITDepartment extends Department {
    admins:string[];
    constructor(id:string,admins:string[]){
        super(id,'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    private lastReport:string;
    constructor(id:string, private reports:string[]) {
        super(id,'Accounting');
        this.lastReport = this.reports[0];
    }

    get mostRecentReport()  {
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('No report found.')
    }

    set mostRecentReport(value:string) {
        if(!value) {
            throw new Error('Invalid value')
        }

        this.addReport(value);
    }

    addReport(report:string){
        this.reports.push(report);
        this.lastReport = report;
    }

}

const accounting = new Department('d1','Accounting');

console.log(accounting);

accounting.describe();

const accountingCopy = {describe: accounting.describe}

accounting.addEmployee('Maru');
accounting.addEmployee('Max');

accounting.printEmployeeInformation();

//-------------------

const it = new ITDepartment('d1',['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();
it.name='NEW NAME';
it.printEmployeeInformation();


//-------------------

const ac = new AccountingDepartment('d2',[]);


ac.mostRecentReport = 'Year End Report';
console.log(ac);
ac.addReport('Something went wrong...');
console.log(ac.mostRecentReport);

const employee1 = Department.createEmployee('John');
console.log(employee1,Department.fiscalYear);

//------------------

class singleAccountDepartment extends Department {
    private lastReport:string;
    private static instance:singleAccountDepartment;
    private constructor(id:string, private reports:string[]) {
        super(id,'Accounting');
        this.lastReport = this.reports[0];
    }

    static getInstance () {
        if(singleAccountDepartment.instance) {
            return this.instance;
        }

        this.instance = new singleAccountDepartment('d2',[]);
        return this.instance;
    }

    get mostRecentReport()  {
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('No report found.')
    }

    set mostRecentReport(value:string) {
        if(!value) {
            throw new Error('Invalid value')
        }

        this.addReport(value);
    }

    addReport(report:string){
        this.reports.push(report);
        this.lastReport = report;
    }

}

const single = singleAccountDepartment.getInstance();

//------------------


