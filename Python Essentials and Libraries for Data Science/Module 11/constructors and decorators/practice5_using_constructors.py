def my_generator(data):
    for item in data:
        yield item

x = [8,3,7,4,9,2,34]

gen = my_generator(x)

for item in gen:
    print(item)