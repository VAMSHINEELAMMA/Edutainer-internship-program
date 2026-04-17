# in a kitchen if the temp of the oven goes beyond 400 deg F, then the exception should be raised .
def cook(temp):
    try:
        if temp > 400:
            raise Exception("Temperature too high! Oven may burn the food")
        else:
            print("Cooking at safe temperature:", temp)

    except Exception as e:
        print("Error:", e)

    finally:
        print("Cooking process checked")


# Example usage
cook(350)   # Safe
cook(450)   # Exception