amount = int(input("Enter amount: "))
age = int(input("Enter age: "))

if amount > 10000:
    if age <= 40:
        print("Interest rate is 5 percent")
    else:
        print("Interest rate is 6 percent")
else:
    print("Interest rate is 2 percent")