class Emp:
    emp_name = ""
    empcode = ""
    salary = 0

    def accept_data(self):
        self.emp_name = input("Enter emp name: ")
        self.empcode = input("Enter emp code: ")
        self.salary = int(input("Enter salary: "))

    def show_data(self):
        print("Emp name :", self.emp_name)
        print("Emp emp code :", self.empcode)
        print("Salary :", self.salary)


class perm_emp(Emp):
    mgrid = ""
    deptid = ""

    def accept_data(self):
        Emp.accept_data(self)
        self.mgrid = input("Enter mgr id: ")
        self.deptid = input("Enter dept id: ")

    def show_data(self):
        Emp.show_data(self)
        print("Mgr id :", self.mgrid)
        print("Dept id :", self.deptid)


class contr_emp(Emp):
    pass


# create object of the permanent employee
employee1 = perm_emp()

employee1.accept_data()
employee1.show_data()