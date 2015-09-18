// How would you merge two sorted array?

var arr1 = [1, 3, 5, 7, 9, 12];
var arr2 = [2, 4, 6, 8, 10, 11];

function mergeSortedArray(a, b) {
  aEl = a[0];
  bEl = b[0];
  bIdx = 1;
  aIdx = 1;

  merged = [];
  while (aEl || bEl) {
    if (aEl < bEl || aEl && !bEl) {
      merged.push(aEl);
      aEl = a[aIdx++];
    } else {
      merged.push(bEl);
      bEl = b[bIdx++];
    }
  }
  return merged;
};

console.log(mergeSortedArray(arr1, arr2));