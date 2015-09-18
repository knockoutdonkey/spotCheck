var relations = [ 
  [true, false, true, false, false],
  [false, true, true, true, false],
  [false, false, true, false, false],
  [true, true, true, false, false],
  [true, true, true, true, false] 
]

var CelebrityFinding = function(graph) {
  var i = 0;
  var j = 1;
  while (j < graph.length) {
    if (graph[i][j]) {
      i = j++;
    } else {
      ++j;
    }
  }
  return i;
};

console.log(CelebrityFinding(relations));