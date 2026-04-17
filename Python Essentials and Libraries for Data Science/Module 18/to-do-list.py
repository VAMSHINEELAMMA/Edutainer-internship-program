tasks = []

while True:
    print("\n--- To-Do List Menu ---")
    print("1. Add Task")
    print("2. View Tasks")
    print("3. Mark Task as Completed")
    print("4. Exit")

    choice = input("Enter your choice: ")

    if choice == '1':
        task = input("Enter the task: ")
        tasks.append(task)
        print("Task added successfully.")

    elif choice == '2':
        if len(tasks) == 0:
            print("No tasks available.")
        else:
            print("\nCurrent Tasks:")
            for i, task in enumerate(tasks, start=1):
                print(f"{i}. {task}")

    elif choice == '3':
        if len(tasks) == 0:
            print("No tasks to mark as completed.")
        else:
            print("\nCurrent Tasks:")
            for i, task in enumerate(tasks, start=1):
                print(f"{i}. {task}")
            
            task_num = int(input("Enter task number to mark as completed: "))
            
            if 1 <= task_num <= len(tasks):
                completed_task = tasks.pop(task_num - 1)
                print(f"Task '{completed_task}' marked as completed.")
            else:
                print("Invalid task number.")

    elif choice == '4':
        print("Exiting the application.")
        break

    else:
        print("Invalid choice. Please try again.")