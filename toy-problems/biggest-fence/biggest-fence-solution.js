/*
  Basic solution: Use every two non-marsh areas as possible opposite corners for the fence. Then
  check to make sure that the borders have no marshes.
*/

var X = false; // marsh
var o = true; // nonMarsh

var exampleArea = [ [o, o, o, o, o],
                    [o, X, o, X, X],
                    [o, o, o, o, o],
                    [X, X, o, X, o],
                    [X, o, o, X, o] ]

var biggestFence = function(area) {

  // collect all non marsh locations in an array
  var nonMarsh = [];
  for (var i = 0; i < area.length; i++) {
    for (var j = 0; j < area[i].length; j++) {
      if (area[i][j]) {
        nonMarsh.push({row : i, col : j});
      }
    }
  }

  // compare every two nonMarsh areas to see if the form opposite corners with no marsh on border
  var largest = 0;
  for (var i = 0; i < nonMarsh.length; i++) {
    for (var j = i + 1; j < nonMarsh.length; j++) {
      var topLeft = nonMarsh[i];
      var botttemRight = nonMarsh[j];

      if (checkBorder(topLeft.row, botttemRight.row, topLeft.col, botttemRight.col, area)) {
        var newArea = (botttemRight.row - topLeft.row + 1) * (botttemRight.col - topLeft.col + 1);

        if (newArea > largest) {
          largest = newArea;
        }
      }
    }
  }
  return largest;
}

// this function checks if the defined rectangle has a border in area
// it assumes that the coordinates fit within the area
var checkBorder = function(top, bottem, left, right, area) {
  for (var i = 0; i <= bottem - top; i++) {
    if (!area[top + i][left] || !area[top + i][right]) {
      return false;
    }
  }

  for (var i = 0; i <= right - left; i++) {
    if (!area[top][left + i] || !area[bottem][left + i]) {
      return false;
    }
  }

  return true;
}

console.log(biggestFence(exampleArea));

// This solution could be improved by ordering corner pairs by area and then stopping when your first solution