package main

import (
	"fmt"
)

type Geometry interface {
	Area() float64
}

type Rectangle struct {
	Width, Height float64
	Name          string
}

func (r Rectangle) Area() float64 {
	return r.Width * r.Height
}

func Measure(g Geometry) {
	fmt.Printf("Area result: %.2f\n", g.Area())
}

func main() {
	rect := Rectangle{
		Width:  10,
		Height: 5,
		Name:   "Main Office",
	}

	scaleFactor := 2.5
	rect.Width *= scaleFactor

	fmt.Println("Shape Name:", rect.Name)
	Measure(rect)

	area := rect.Area()
	if area > 100 {
		fmt.Println("Large coverage detected.")
	} else {
		fmt.Println("Standard coverage.")
	}
}
