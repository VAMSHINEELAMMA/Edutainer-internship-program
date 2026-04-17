import tkinter as tk
from tkinter import END, Listbox, Entry, Button, Label

def add_task():
    task = task_entry.get()
    if task != "":
        task_listbox.insert(END, task)
        task_entry.delete(0, END)

def delete_task():
    selected_task = task_listbox.curselection()
    if selected_task:
        task_listbox.delete(selected_task)


root = tk.Tk()
root.title("To-Do List")
root.geometry("400x300")


label = Label(root, text="Enter task")
label.pack(pady=5)


task_entry = Entry(root, width=30)
task_entry.pack(pady=5)


add_button = Button(root, text="Add Task", width=20, command=add_task)
add_button.pack(pady=5)


delete_button = Button(root, text="Delete Task", width=20, command=delete_task)
delete_button.pack(pady=5)


task_listbox = Listbox(root, width=30, height=10)
task_listbox.pack(pady=10)


root.mainloop()