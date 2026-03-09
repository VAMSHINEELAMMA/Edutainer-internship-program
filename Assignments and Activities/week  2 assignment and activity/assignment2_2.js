const employee = {
  name: "Vamshi",
  id: 101,
  department: "IT",
  salary: 40000,
  experience: 3,

  showEmployee: function () {
    console.log("Employee Name:", this.name);
    console.log("Employee ID:", this.id);
    console.log("Department:", this.department);
  },

  yearlySalary: function () {
    console.log("Yearly Salary:", this.salary * 12);
  }
};

employee.showEmployee();
employee.yearlySalary();