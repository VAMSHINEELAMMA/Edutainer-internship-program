import matplotlib.pyplot as plt

# 1. Data Preparation
students = ['Arjun', 'Sneha', 'Rahul', 'Anita', 'Kiran']
marks = [85, 92, 78, 88, 95]

# Create a figure with 3 subplots (1 row, 3 columns)
plt.figure(figsize=(15, 5))

# --- Line Chart ---
plt.subplot(1, 3, 1)
plt.plot(students, marks, marker='o', color='b', label='Marks Trend')
plt.title('Student Marks: Line Chart')
plt.xlabel('Students')
plt.ylabel('Marks')
plt.legend()
plt.grid(True, linestyle='--', alpha=0.6)

# --- Bar Chart ---
plt.subplot(1, 3, 2)
plt.bar(students, marks, color='skyblue', label='Student Scores')
plt.title('Student Marks: Bar Chart')
plt.xlabel('Students')
plt.ylabel('Marks')
plt.legend()

# --- Pie Chart ---
plt.subplot(1, 3, 3)
plt.pie(marks, labels=students, autopct='%1.1f%%', startangle=140, colors=['#ff9999','#66b3ff','#99ff99','#ffcc99','#c2c2f0'])
plt.title('Marks Distribution: Pie Chart')

# 2. Chart Customization (Adjust layout so titles don't overlap)
plt.tight_layout()

# 3. Save the visualization as an image file
plt.savefig('student_marks_visualization.png')

# Display the plots
print("Visualization saved as 'student_marks_visualization.png'")
plt.show()