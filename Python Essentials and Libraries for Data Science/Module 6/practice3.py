class Factory():
    def production(self):
        print("Production 20000 ton")

    def packing(self):
        print("Packing without plastic")


class UnitA(Factory):
    def production(self):
        print("Production 50000 ton")


class UnitB(Factory):
    def production(self):
        print("Production 100000 ton")

    def packing(self):
        print("Plastic allowed")


ua = UnitA()
ub = UnitB()

ua.production()
ua.packing()

ub.production()
ub.packing()