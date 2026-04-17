myfile = open("D:\\Edutainer_Internship-main\\Python Essentials and Libraries for Data Science\\Module 8\\customer.txt", "a")

myfile.write(input("Enter your name: "))
myfile.write("\n")

myfile.write(input("Enter your city: "))
myfile.write("\n")

myfile.write(input("Enter your subject: "))
myfile.write("\n")

myfile.close()