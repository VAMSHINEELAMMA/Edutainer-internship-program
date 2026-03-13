class Cake:
    def __init__(self, name, shape, flavour):
        self.name = name
        self.shape = shape
        self.flavour = flavour

    def display(self):
        print("Cake Name:", self.name)
        print("Shape:", self.shape)
        print("Flavour:", self.flavour)
        print()

# creating multiple objects
cake1 = Cake("Black forest", "Round", "Choco")
cake2 = Cake("Kings delight", "Square", "Pineapple")
cake3 = Cake("Red Velvet", "Rectangle", "Venilla")

cake1.display()
cake2.display()
cake3.display()