# Program to demonstrate continue keyword

count = 0
while count < 5:
    num = int(input("Enter a number: "))
    if num < 0:
        print("Negative number entered. Skipping...")
        continue
    cube = num ** 3
    print("Cube of", num, "is", cube)
    count += 1