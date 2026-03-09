x=30
def greatest():
    x=70#local variable
    print(x)

def smallest():
    global x
    print(x)

def test():
    print(x)

#calling a function
greatest()
smallest()
test()