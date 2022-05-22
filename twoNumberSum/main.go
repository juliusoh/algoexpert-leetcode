package main

import "fmt"

func twoNumberSum(array []int, target int) []int {
	for i := 0; i < len(array); i++ {
		firstNum := array[i]
		fmt.Print(len(array))
		fmt.Println("i", i, "firstNum", firstNum)
		for j := i + 1; j < len(array); j++ {
			secondNum := array[j]
			fmt.Println("j", j, "secondNum", secondNum)
			if firstNum + secondNum == target {
				return []int{firstNum, secondNum}
			}
		}
	}
	return []int {}
}

func main() {
	 arr := []int{3, 5, -4, 8, 11, 1, -1, 6}
	 result := twoNumberSum(arr, 10)
	 fmt.Println(result)
}