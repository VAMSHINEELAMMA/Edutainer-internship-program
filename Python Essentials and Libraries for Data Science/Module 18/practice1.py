import turtle

# Create a turtle screen
screen = turtle.Screen()

# Create a turtle named 'my_turtle'
my_turtle = turtle.Turtle()

# Draw a square
for _ in range(4):
    my_turtle.forward(100)
    my_turtle.left(90)

# Close the turtle graphics window when clicked
screen.exitonclick()