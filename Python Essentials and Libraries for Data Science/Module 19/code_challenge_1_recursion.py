def staircase(n, row=0, string=""):
    if row == n:
        return
    if len(string) == n:
        print(string)
        return staircase(n, row + 1)
    if len(string) < n - row - 1:
        add = " "
    else:
        add = "#"
    staircase(n, row, string + add)
staircase(4)