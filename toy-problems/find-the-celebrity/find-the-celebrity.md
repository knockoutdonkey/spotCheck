# Find the Celebrity

For any two distinct people *a* and *b*, *a* may or may not know *b*. In the context of this problem, the "knows" relation is not necessarily symmetric: *a* may know *b* but *b* may not know *a*. At a party, everyone knows someone else. Now a celebrity joins the party - everyone knows him, but he knows no one.

Let *F* be an *n*X*n* Boolean 2D array representing the "knows" relation for *n* people - *F*[*a*][*b*] is *true* if and only if *a* knows *b*. Design an algorithm to find the celebrity.

*Hint: Iteratively eliminate noncelebrities*

**Solution:** The challenge is to avoid having to look at all of *F*, which will result in an O(n^2) or worse time complexity.

The key to achieving time efficiency is to process people in order, and eliminate at least one person from the set with each lookup into *F*. We begin by checking *F*[0][1], i.e., the relation between Person 0 and Person 1.

Suppose we check *F*[*i*][*j*] where *i* < *j*. The problem statement guarantees that if *F*[*i*][*j*] is *false*, *j* is not the celebrity and *i* is still a possible celebrity candidate. Hence, we eliminate *j* from the set of celebrity candidates and move to *F*[*i*][*j*].

If *F*[*i*][*j*] is *true*, *i* cannot be the celebrity, and for all *j'* < *j*, *j'* is not a celebrity because *F*[*i*][*j'*] must be *false*. We then move to *F*[*j*][*j* + 1] since *i* < *j*.