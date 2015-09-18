var arr = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9];

// 0, 8, 12, 14
// 8, 12, 14
// 12, 14
// 4, 12, 14
// 4, 6, 9
// 0, 4, 6, 9

// Store first number as part of subsequence
// Iterate over Array
  // first number has a subsequence of 1
  // second number has a subsequence of 2
  // 3rd number has a subsequence of 2
  // 4th number has a subsequence of subsequence of ever number prior lower than it + 1
  // 5th number has a subsequence of every number prior lower than it + 1

var arry = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9];

var findSubsequence = function(arr, count) {
  if (arr.length === 0) {
    return arr;
  }

  var longest_length = [arr.length, 1];
  var previous_index = [arr.length, -1];

  var max_length_index = 0;

  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
      if (arr[i] >= arr[j] && longest_length[j] + 1 > longest_length[i]) {
        longest_length[i] = longest_length[j] + 1;
        previous_index[i] = j;
      }
    }
    // Records the index where longest subsequence ends.
    if (longest_length[i] > longest_length[max_length_index]) {
      max_length_index = i;
    }
  }

  var max_length = longest_length[max_length_index];

  var ret = [max_length];

  while (max_length-- > 0) {
    ret[max_length] = arr[max_length_index];
    max_length_index = previous_index[max_length_index];
  }

  return ret;
}

var array = [0, 8, 4, 5];

console.log(findSubsequence(array));