# Program to demonstrate search operation using list and loops
numbers = []
# Accept 10 numbers from the user
print("Enter 10 numbers:")
for i in range(10):
    num = int(input("Enter number: "))
    numbers.append(num)
# Ask the user for the number to search
search = int(input("Enter the number to search: "))
# Search the number in the list
found = False
for n in numbers:
    if n == search:
        print("Number found in the list")
        found = True
        break
# If number not found
if not found:
    print("Number not found in the list")