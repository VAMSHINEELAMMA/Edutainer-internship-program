class account:
    acc_number = "837429374"
    __deposits = 90000
    __loans = 50000
    __password = "abc123"

    def show_deposits(self):
        p = input("Enter password : ")
        if p == "apple":
            print(self.__deposits)
        else:
            print("Access denied")

sunil = account()
sunil.show_deposits()