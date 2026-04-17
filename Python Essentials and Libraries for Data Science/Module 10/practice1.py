try:
    a = 10
    b = 0

    if b == 0:
        raise Exception("Division by zero error")

    print(a / b)

except Exception as msg:
    print(msg)