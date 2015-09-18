# Toy Problems

### How do you find the middle element of a linked list in one pass?

### Write a function to get the number of digits in an integer.

    function getlength(number) {
        return number.toString().length;
    }

Make it work with floats.

    var length = (number + '').replace('.', '').length;

Here's a mathematical answer (also works for negative numbers):

    function numDigits(x) {
      return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
    }

And an optimized version of the above (more efficient bitwise operations):

    function numDigits(x) {
      return (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0) + 1;
    }

Essentially, we start by getting the absolute value of the input to allow negatives values to work correctly. Then we run the through the log10 operation to give us what power of 10 the input is (if you were working in another base, you would use the logarithm for that base), which is the number of digits. Then we floor the output to only grab the integer part of that. Finally, we use the max function to fix decimal values (any fractional value between 0 and 1 just returns 1, instead of a negative number), and add 1 to the final output to get the count.

The above assumes (based on your example input) that you wish to count the number of digits in integers (so 12345 = 5, and thus 12345.678 = 5 as well). If you would like to count the total number of digits in the value (so 12345.678 = 8), then add this before the 'return' in either function above:

    x = Number(String(x).replace(/[^0-9]/g, ''));

### Write a flatten function: 
    flatten([1, 2, [3, [4], 5, 6], 7]) -> [1, 2, 3, 4, 5, 6, 7]

    var flatten = function(arr) {
      var result = [];
      (function recurse(arr) {
        arr.forEach(function(cur, i, arr) {
          if (Array.isArray(cur)) {
            recurse(cur);
          } else {
            result.push(cur);
          }
        });
      }(arr));
      return result;
    };
    var arr = [1, 2, [3, [4], 5, 6], 7];
    console.log(flatten(arr));

### Implement a function to check if a linked list is a palindrome.

    function isPalindrome(linkedList) {

      fast = linkedList.head;
      slow = linkedList.head;
      stack = [];

      // Push elements from first half of linked list onto stack.
      // When fast runner reaches end of linked list,
      // we know we are at the middle

      while (fast != null && fast.next != null) {
        stack.push(slow.data);
        slow = slow.next;
        fast = fast.next.next;
      }

      // Has odd number of elements, skip middle element
      if (fast != null) {
        slow = slow.next;
      }

      while (slow != null) {
        top = stack.pop()
        if (top != slow.data) {
          return false;
        }
        slow = slow.next;
      }

      return true;

    };

    var LinkedList = function() {
      this.head = null;
      this.tail = null;

      this.addToTail = function(node) {
        if (this.tail) {
          this.tail.next = node;
        } else {
          this.head = node;
        }
        this.tail = node;
      };

      this.removeFromHead = function() {
        var result = this.head;
        this.head = this.head.next;
        return result;
      };

      this.iterateNodes = function(cb) {
        var node = this.head;
        while (node) {
          cb(node);
          node = node.next;
        }
      };
    };

    var Node = function(data) {
      this.data = data;
      this.next = null;
    };
    
    var list = new LinkedList();
    var node1 = new Node('first');
    var node2 = new Node('second');
    var node3 = new Node('third');
    var node4 = new Node('second');
    var node5 = new Node('first');
    list.addToTail(node1);
    list.addToTail(node2);
    list.addToTail(node3);
    list.addToTail(node4);
    list.addToTail(node5);
    console.log(isPalindrome(list));
    list.removeFromHead();
    console.log(isPalindrome(list));
