var generateParens = function(remaining) {
  var set = []
  if (remaining == 0) {
    set.push("");
  } else {
    prev = generateParens(remaining - 1);
    console.log("prev, ", prev);
    for (str in prev) {
      for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === '(') {
          s = insertInside(str, i);
          // Add s to set if it's not already in there.
          if (!s in set) {
            set.push(s);
          }
        }
      }
      var comparisonString = "()" + str;
      if (!comparisonString in set) {
        console.log("comparisonString not in set", comparisonString, set);
        set.push(comparisonString);
      }
    }
  }
  console.log(set);
  return set;
};

var insertInside = function(str, leftIndex) {
  str.splice(leftIndex, 0, "()");
};

console.log(generateParens(2));