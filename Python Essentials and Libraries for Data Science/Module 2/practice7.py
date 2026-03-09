deposit = int(input("Enter deposited amount: "))

total_loan = 0

while total_loan <= deposit:
    loan = int(input("Enter loan amount: "))
    
    total_loan = total_loan + loan
    
    if total_loan > deposit:
        print("Loan limit exceeded!")
        break
    else:
        print("Loan approved")
        print("Total loan taken:", total_loan)

print("Program ended")