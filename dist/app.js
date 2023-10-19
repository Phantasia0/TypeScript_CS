"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name };
    }
    describe() {
        console.log(`Department ${this.id} : ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this, this.employees);
    }
}
Department.fiscalYear = 2023;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = this.reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Invalid value');
        }
        this.addReport(value);
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
}
const accounting = new Department('d1', 'Accounting');
console.log(accounting);
accounting.describe();
const accountingCopy = { describe: accounting.describe };
accounting.addEmployee('Maru');
accounting.addEmployee('Max');
accounting.printEmployeeInformation();
const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
const ac = new AccountingDepartment('d2', []);
ac.mostRecentReport = 'Year End Report';
console.log(ac);
ac.addReport('Something went wrong...');
console.log(ac.mostRecentReport);
const employee1 = Department.createEmployee('John');
console.log(employee1, Department.fiscalYear);
class singleAccountDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = this.reports[0];
    }
    static getInstance() {
        if (singleAccountDepartment.instance) {
            return this.instance;
        }
        this.instance = new singleAccountDepartment('d2', []);
        return this.instance;
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Invalid value');
        }
        this.addReport(value);
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
}
const single = singleAccountDepartment.getInstance();
//# sourceMappingURL=app.js.map