var lake = [
  [0, 1, 1],
  [2, 3, 0],
  [0, 2, 1]
];

var lake = [
  [0, 1],
  [2, 1]
];
var lake = [
  [0, 1, 1],
  [2, 3, 0],
  [0, 2, 1]
];


function maximizeFishing1(lake) {
  var accum = 0;
  var maxSoFar = 0;
  var lake = lake;
  var complexityCounter = 0;

  var recurse = function(row, col) {
    complexityCounter++;
    if (row === lake.length - 1 && col === lake[0].length - 1) {
      accum += lake[row][col];
      maxSoFar = Math.max(maxSoFar, accum);
      accum -= lake[row][col];
      return;
    }
    if (row === lake.length) {
      return;
    }
    if (col === lake.length) {
      return;
    }
    accum += lake[row][col];
    recurse(row+1, col);
    recurse(row, col+1);
    accum -= lake[row][col];
  };
  recurse(0, 0);
  console.log("Complexity: ", complexityCounter);
  return maxSoFar;
};

console.log(maximizeFishing1(lake));

var lake = [
  [0, 1],
  [2, 1]
];

// Dynamic programming solution
var lake = [
  [5, 1, 1],
  [2, 3, 0],
  [0, 2, 1]
];

function maximizeFishing(lake) {
  for (var i = 0; i < lake.length; i++) {
    for (var j = 0; j < lake[0].length; j++) {
      lake[i][j] += Math.max(i < 1 ? 0 : lake[i-1][j], j < 1 ? 0 : lake[i][j-1]);
    }
  }
  return lake[lake.length-1][lake[0].length-1];
};

console.log(maximizeFishing(lake));