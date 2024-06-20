class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
}

class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || salary < 0 || !position || !department) {
            throw new Error("Invalid input!");
        }

        if (!this.departments[department]) {
            this.departments[department] = [new Employee(name, salary, position, department)];
            }
        else {
            this.departments[department].push(new Employee(name, salary, position, department));
        }
    }

    bestDepartment() {
        var maxSalary = 0;
        var bestDepartment = {};

        for (const department in this.departments) {
            const departmentObject = this.departments[department];
            let totalSalary = departmentObject.reduce((sum, employee) => sum + employee.salary, 0)
            let avgSalary = totalSalary / departmentObject.length;

            if (avgSalary > maxSalary) {
                maxSalary = avgSalary;
                bestDepartment = departmentObject;
            }
        }

        bestDepartment.sort((a, b) => {
            if (b.salary !== a. salary) {
                return b.salary - a.salary;
            }
            else {
                return a.name.localeCompare(b.name);
            }
        });

        let result = `Best Department is: ${bestDepartment[0].department}\n`;
        result += `Average salary: ${maxSalary.toFixed(2)}\n`;
        bestDepartment.forEach(employee => {
            result += `${employee.name} ${employee.salary} ${employee.position}\n`;
        });

        return result.trim();
    }
}

let c = new Company();
c.addEmployee("Stamat", 2000, "engineer", "Construction");
c.addEmployee("Peter", 1500, "electrical engineer", "Construction");
c.addEmployee("Martin", 500, "support", "Construction");
c.addEmployee("Stanley", 2000, "architect", "Construction");
c.addEmployee("Stamat", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Peter", 1000, "graphical designer", "Marketing");
c.addEmployee("George", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
