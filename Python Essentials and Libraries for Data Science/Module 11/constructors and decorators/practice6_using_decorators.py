def my_decorator(func):
    def wrapper(data):
        print("Starting iteration...")
        func(data)
        print("Iteration completed")
    return wrapper

@my_decorator
def display(data):
    for item in data:
        print(item)

x = [8,3,7,4,9,2,34]

display(x)