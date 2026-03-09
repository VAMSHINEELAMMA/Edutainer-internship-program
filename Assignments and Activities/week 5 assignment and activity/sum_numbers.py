def sum_numbers(N):
    total = 0
    for i in range(1, N + 1):
        if i > 50:
            print("Number exceeded 50. Loop stopped.")
            break
        total = total + i
    return total

num = int(input("Enter a number: "))
result = sum_numbers(num)
print("Sum =", result)