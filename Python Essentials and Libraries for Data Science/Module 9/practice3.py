from tkinter import *
from tkinter import ttk
from tkinter import messagebox

def save():
    messagebox.askquestion("Confirm","Are you sure?")

def clear():
    messagebox.askquestion("Are you sure you want to clear?")

def quit():
    pass


mywindow = Tk()
mywindow.title("My python video sessions")
mywindow.geometry("800x400")

# Entry fields
e1 = Entry(mywindow)
e2 = Entry(mywindow)

# Labels
Label(mywindow, text="Name").place(x=300, y=100)
e1.place(x=400, y=100)
e1.focus()

Label(mywindow, text="Phone").place(x=300, y=150)
e2.place(x=400, y=150)

# Functions
def save():
    print("Saved:", e1.get(), e2.get())

def clear():
    e1.delete(0, END)
    e2.delete(0, END)

def exit_app():
    mywindow.destroy()

# Buttons
btnSave = Button(mywindow, text="Submit", width=25, command=save)
btnSave.place(width=60, height=30, x=400, y=200)

btnClear = Button(mywindow, text="Clear", width=25, command=clear)
btnClear.place(width=60, height=30, x=500, y=200)

btnQuit = Button(mywindow, text="Quit", width=25, command=exit_app)
btnQuit.place(width=60, height=30, x=600, y=200)

mywindow.mainloop()