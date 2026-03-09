# Passing collections as parameters and using global variable
x = [23, 34, 42, 23, 32]
t = 0
def show_biggest_no(x):
    global t
    for i in x:
        if i > t:
            t = i
    print(t)

show_biggest_no(x)