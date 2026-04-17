def staircase(n):
    for row in range(n):   # loop1
        mystr = ""
        for col in range(n):   # loop2
            # print(f'row {row} col {col}')
            if col <= row:
                mystr = mystr + "#"
            else:
                mystr = ' ' + mystr
        print(mystr)

staircase(4)