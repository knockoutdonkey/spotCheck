## Buy and Sell Stock Once

### Design an algorithm that determines the maximum profit
that could have been made by buying and selling a single
share over a given day range, subject to the constraint
that the buy and sell have to take place at the start
of the day.

This problem touches on the following skills:

- Ability to rigorously formulate real-world problems.
- Skills to solve problems and design algorithms.
- Tools to go from an algorithm to a tested program.
- Analytical techniques required to determine the computational complexity of your solution.

### The interviewee should first clarify the problem.

What is the input format?

For this question, let's say the input consists of three arrays: L, H, and S, of non-negative floating point numbers, representing the low, high, and starting prices for each day.

The constraint that the purchase and sale have to take place at the start of the day means that it suffices to consider only the S array.

### The interviewee may be tempted to simply return the difference of the minimum and maximum elements of S.

If you try a few test cases, you'll see the minimum can occur after the maximum, which violates the requirement that you must buy before you can sell.

### The interviewee may try a brute-force algorithm.

For each pair of indices *i* and *j*, if S[j] - S[i] is greater than the largest difference seen so far, update the largest difference to S[j] - S[i].

This algorithm should be easily coded using a pair of nested for loops.

The interviewee should note that the time complexity of this algorithm is O(n^2).

### Improving on brute force: Divide and Conquer

The interviewee may try to improve upon the brute force solution by using a divide and conquer approach.

Split S into two subarrays, S[0:n/2] and S[n/2+1:n-1], compute the best result for the first and second subarrays, combine these results.

In the combine step, we take the better of the results for the two subarrays. However, we also need to consider the case where the optimum buy and sell take place in separate subarrays.

When this is the case, the buy must be in the first subarray, and the sell in the second subarray, since the buy must happen before the sell.

We can compute these prices in O(n) time with a single pass over each subarray. Therefore, the time complexity T(n) for the divide and conquer algorithm satisfies the recurrence relation T(n) = 2T(n/2) + O(n), which solves to O(n log n).

### The optimal solution

Looking carefully at the divide and conquer algorithm, you may have a stroke of insight. You may notice the maximum profit that can be made by selling on a specific day is determined by the minimum of the stock prices over the previous days.

Since the maximum profit corresponds to selling on some day, the following algorithm correctly computes the maximum profit.

Iterate through S, keeping track of the minimum element *m* seen so far. If the difference of the current element and *m* is greater than the maximum profit recorded so far, update the maximum profit.

This algorithm performs a constanc amount of work per array element, leading to an O(n) time complexity.

It is considerably simpler to implement than the divide-and-conquer algorithm.

