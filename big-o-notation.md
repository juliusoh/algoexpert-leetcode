big-o-notation
==============

The basics of worst-case algorithmic complexity.

Before You Begin
----------------

Be sure to check out a new branch from `main` for this exercise. Detailed instructions can be found [**here**](/code-guides/Learning-Fuze/curriculum/starting-an-exercise).

### Time Complexity

Time complexity is NOT the amount of time it takes for an algorithm to complete. Using a stopwatch to measure the speed of software is actually called "benchmarking". That's a separate metric that is dependent on the hardware that the software is run on. Faster computer hardware `==` shorter execution time.

Time complexity is estimated by counting the number of "simple" operations performed by an algorithm. Thus, it is possible to compare two algorithms without actually timing either of them.

A "simple" operations is a single "step" in the algorithm. These types of operations are usually described as "constant time". No matter how large the values involved may be, they're fast!

Here are some examples of "simple" operations in JavaScript.

    // declaring or assigning a variable
    var i = 0;
    
    // single-step expressions
    i + 420000000;
    i > 200;
    
    // array index access or assignment
    arr[56];
    arr[24] = 'woot';
    
    // object property access or assignment
    dog.breed;
    dog.breath = 'stinky';
    
    // a truth test
    if (someCondition) {
    
    }

> Notice how loops and function calls are missing from the above examples!

### What is Big O Notation?

Time complexity is expressed as a mathematical function of an algorithm's input size `n`. Big O notation is a way of writing this function to show how an algorithm **scales** with the size of its input.

Consider an algorithm that can process an array of 10 values. If you use the algorithm to process 100 times more values, how many more instructions does it end up executing? Well, it depends on the time complexity of the algorithm. It could end up executing anywhere from just 6 more instructions to 1,000,000 more (and beyond)!

### The Good, The Bad, and the Horrible

Below you'll find a comparison chart of time complexities. The `x` axis shows the number of input elements from zero to infinity and the `y` axis shows the number of operations required.

The sharpness of each curve illustrates how fast the required number of operations (`y`) increases with the number of elements in the input (`x`).

![big o curves](https://s3.us-west-1.amazonaws.com/lfz-lms/exercise-instructions-assets/Learning-Fuze/curriculum/f893b9dc8ed360946f02de41bb76aeb38c324a7b/assets/big-o-chart.jpg)

Some commonly seen Big O functions are (fastest-to-slowest):

*   `O(1)` - Constant time. As fast as possible. Number of operations never grows with input size `n`.
    *   _Examples: getting a variable's value, assignment, arithmetic, comparisons of numbers & booleans, property/index resolution, conditional branching, `where`\-ing a database row by primary id column_
*   `O(log_2(n))` - Logarithmic time. Extremely fast for any input size. Number of operations increases by `1` each time the input size `n` doubles.
    *   _Examples: searching pre-sorted inputs for a value (binary search), appending elements onto the back of an `Array` (on average), `where`\-ing a database row by indexed column other than primary id_
*   `O(n)` - Linear time. Normal when every input value is operated on once. Number of operations grows at the same rate of input size `n`. Won't complete within a few seconds for any input size `n` greater than around `1 million` to `1 billion` (depending on exact steps and hardware).
    *   _Examples: iterating once over every every element / key / character in an `Array` / `Object` / `String`, inserting or removing an element from an arbitrary `Array` index, string comparison, searching un-sorted inputs for a value (linear search), `where`\-ing a database row by a non-indexed column, `select`\-ing all rows from a database table_
*   `O(n*log_2(n))` - Log-linear time. Slower than linear time, but often the best case when inputs must be compared to one another. Won't complete within a few seconds for any input size `n` greater than around `50 thousand` to `30 million`.
    *   _Examples: fastest comparison sorts (divide-and-conquer), finding pitches in sound waves (fast fourier transform)_
*   `O(n^2)` - Quadratic time. Slow for most tasks. Number of operations multiplied by `4` for each doubling of the input size `n`. Won't complete within a few seconds for any input size `n` greater than around `1 thousand` to `30 thousand`.
    *   _Examples: simplest comparison sorts (insertion, selection, bubble), comparing every combination of elements in two lists w/out optimization_
*   `O(2^n)` - Exponential time. Extremely slow. Won't complete within a few seconds for any input size `n` greater than around `20` to `30`. Number of operations doubles for each additional input, and it becomes **astronomical** very quickly: any input size `n` greater than around `57` won't finish before the earth is [engulfed by the sun](https://en.wikipedia.org/wiki/Future_of_Earth#Red_giant_stage).
    *   _Examples: finding every possible combination of states (such as on/off) for each input, naive recursive fibonnaci sequence, brute-force password search_
*   `O(n!)` - Factorial time. Beyond extremely slow. Won't complete within a few seconds for any input size `n` greater than around `10` to `13`. Number of operations multiplies by a progressively larger number for each additional input, and it becomes **astronomical** extremely quickly: any input size `n` greater than around `18` won't finish before the earth is [engulfed by the sun](https://en.wikipedia.org/wiki/Future_of_Earth#Red_giant_stage).
    *   _Examples: finding every possible order of input values_

### Figuring Out O Notation

Now we're going to go over how to figure out an algorithm's O notation by looking at source code. Specifically, we'll be figuring out worst-case (or close to worst-case), because it's useful and relatively easy. Best-case is done more-or-less the same way. Calculating average cases usually requires being comfortable with probabilities, and changes with the distribution of real data sets being used, so it's more the domain of math people.

To figure out the Big O Notation for a function, we have to follow a series of steps.

1.  For each statement in the function:
    1.  If this statement were to run once, how many simple calculations would it take in terms of the size of the data sets being used.
    2.  How many times will this statement run worst-case, within the context of this function, in terms of the size `n` of the data sets being used?
    3.  Take the answers from steps `i` and `ii`, and multiply them together. Drop all coefficients, so `2n` becomes `n` or `3(n^2)` becomes `n^2`. **That is the Big O notation for this statement.**
2.  After finding the Big O Notation for every line, find the statement(s) with the **worst** Big O notation. **That is the Big O notation for the function.**

#### Example

Given a `numbers` array of length `n`, return their sum.

    function sumAll(numbers) {
      let sum = 0;          // 1 * 1 = O(1)
      for (
        let i = 0;          // 1 * 1 = O(1)
        i < numbers.length; // 2 * n = O(2n) ~= O(n)
        i++                 // 2 * n = O(2n) ~= O(n)
      ) {
        sum += numbers[i];  // 3 * n = O(3n) ~= O(n)
      }
      return sum;           // 1 * 1 = O(1)
    } // Big O notation for sumAll(numbers): O(n)

Exercise
--------

1.  Finish reading this write-up if you have not already 😉. Then watch [this presentation on algorithmic complexity](https://www.youtube.com/watch?v=bwA9i6wjfhw) and its real-world implications.
2.  Open the provided `big-o.js` in your code editor and read each function. Both functions compute the same result, but one has a better time complexity.
3.  Add the Big O notation for each statement in the code like in the above example.
4.  Find the time complexity of each function.

Submitting Your Solution
------------------------

When your solution is complete, submit a Pull Request on GitHub. Detailed instructions can be found [**here**](/code-guides/Learning-Fuze/curriculum/submitting-your-solution).
