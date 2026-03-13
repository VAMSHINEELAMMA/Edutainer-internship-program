r = [2,1,5,7,2,3]   # iterator

def sq(x):
    return x * x

y = map(sq, r)
print(list(y))