df_student_extra = pd.read_csv('student_extra.csv')

print("Student Extra DataFrame:")
display(df_student_extra.head())

multi_col_join_df = pd.merge(df_students, df_student_extra, on=['student_id', 'department'], how='inner')

print("\nJoin results (Name, Marks, Attendance):")
display(multi_col_join_df[['name', 'marks', 'attendance']].head())

students_high_attendance = multi_col_join_df[multi_col_join_df['attendance'] > 80]

print("\nStudents with attendance > 80:")
display(students_high_attendance[['name', 'marks', 'attendance']])
