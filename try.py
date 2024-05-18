class Circle:
    pi = 3.14
    def __init__(self,sides):
        self.sides = sides
    def area(self):
        return Circle.pi * self.sides * self.sides
circle = Circle(2)
print(circle.area())