students = [
    {"Name": "Alice", "Age": 20, "Course": "Biology"},
    {"Name": "Brian", "Age": 22, "Course": "Computer Science"},
    {"Name": "Cathy", "Age": 19, "Course": "Mathematics"}
]
new_student = {"Name": "David", "Age": 21, "Course": "Physics"}
students.append(new_student)
students[1]["Course"] = "Data Science"
print("Student Records:")
for student in students:
    print("Name:", student["Name"])
    print("Age:", student["Age"])
    print("Course:", student["Course"])
    print("-" * 20)
