items_ordered = []
print("Enter item names ordered")

for i in range(5):
    items_ordered.append(input())

print(items_ordered)

lap_qty = items_ordered.count("laptop")

print("Laptop was ordered", lap_qty, "times")