import numpy as np
student_marks = [
    [85, 90, 78],
    [88, 76, 92],
    [95, 89, 84]
]
marks_array = np.array(student_marks)
average_marks = np.mean(marks_array)
maximum_marks = np.max(marks_array)
minimum_marks = np.min(marks_array)
print("Student Marks Dataset:")
print(marks_array)
print("\nAverage Marks:", average_marks)
print("Maximum Marks:", maximum_marks)
print("Minimum Marks:", minimum_marks)
