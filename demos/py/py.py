import math


class Shape:
    def __init__(self, name: str):
        self.name = name

    def area(self) -> float:
        return 0.0


class Circle(Shape):
    def __init__(self, name: str, radius: float):
        super().__init__(name)
        self.radius = radius

    def area(self) -> float:
        return math.pi * (self.radius**2)


def print_shape_info(shape: Shape):
    print(f"Shape: {shape.name}")
    print(f"Area: {shape.area():.2f}")


def main():
    shapes = [Circle("Large Circle", 10.5), Circle("Small Circle", 2.0)]

    threshold = 50.0
    for s in shapes:
        if s.area() > threshold:
            print_shape_info(s)


if __name__ == "__main__":
    main()
