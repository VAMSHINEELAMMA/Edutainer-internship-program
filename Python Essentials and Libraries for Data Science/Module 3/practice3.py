for i in range(10):
    for j in range(10):
        if j == 5:
            break
        print("j = ", j, end=" ")
    print("i = ", i)