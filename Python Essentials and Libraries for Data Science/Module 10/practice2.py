x = 90
y = 0
try:
    print(x / y)
except:
    print("Oops! the divisor is a zero... error!!!!")
else:
    print("Hey you are good, there was no exception")
finally:
    print("I am finally block, I execute without fail!!!!")

print("this is rest of the program")