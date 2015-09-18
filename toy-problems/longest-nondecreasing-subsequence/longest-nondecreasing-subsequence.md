# Find the Longest Nondecreasing Subsequence

Given an array A of n numbers, find the longest subsequence [i[0], ..., i[k-1]] such that i[j] < i[j+1] and A[i[j]] <= A[i[j+1]] for any j (= [0, k-2].

*Hint:* Express the longest nondecreasing subsequence ending at A[i] in terms of the longest nondecreasing subsequence in A[0: i - 1].

An array whose longest nondecreasing subsequences are of length 4:

[0, 8, 4, 12, 2, 10, 6, 14, 1, 9]

**Solution:** A brute-force approach would be to enumerate all possible subsequences