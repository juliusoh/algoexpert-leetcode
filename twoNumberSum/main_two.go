package main

import "fmt"

func TwoNumberSum(array []int, target int) []int {
	nums := map[int]bool{}

	for _, num := range array {
		potentialMatch := target - num
		if _, found := nums[potentialMatch]; found {
			return []int{potentialMatch, num}
		}
		nums[num] = true
	}
	return []int{}
}

func main() {
	arr := []int{3, 5, -4, 8, 11, 1, -1, 6}
	result := TwoNumberSum(arr, 10)
	fmt.Println(result)
}