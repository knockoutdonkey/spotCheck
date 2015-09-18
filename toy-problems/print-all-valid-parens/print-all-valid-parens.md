Our first thought might be to apply a recursive approach where we build the solution for f(n) by adding pairs of parentheses to f(n-1). That's certainly a good instinct.

Let's consider the solution for n = 3:
(()())  ((()))  ()(())  (())()  ()()()

How might we build this from n = 2?

(())  ()()

We can do this by inserting a pair of parentheses inside every existing pair of parentheses, as well as one at the beginning of the string. Any other places that we could insert parentheses, such as at the end of the string, would reduce to the earlier cases.

So, we have the following:

(()) -> (()()) // Inserted pair after 1st left paren
     -> ((())) // Inserted pair after the 2nd left paren
     -> ()(()) // Inserted pair at the beginning of string
()() -> (())() // Inserted pair after 1st left paren
     -> ()(()) // Inserted pair after 2nd left paren
     -> ()()() // Inserted pair at the beginning of string

But wait - we have some duplicate pairs listed. The string ()(()) is listed twice.

If we're going to apply this approach, we'll need to check for duplicate values before adding a string to our list.

