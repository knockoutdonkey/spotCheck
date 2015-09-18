function Event(start, end) {
  this.start = start;
  this.end = end;
};

var events = [];


events.push(new Event(1, 3));
events.push(new Event(1, 5));
events.push(new Event(4, 6));
events.push(new Event(2, 7));


// function determineMaxConcurrentEvents(events) {
//   var curMax = 0;
//   events.forEach(function(e, i, arr) {
//     events.forEach(function(f, j, ar) {
//       if (e === f) {
//         return;
//       } else {
//         curMax = Math.max(curMax, countConcurrentEvents(e, events));
//       }
//     });
//   });
//   return curMax;
// };

// console.log(determineMaxConcurrentEvents(events));
function countConcurrentEvents(event, events) {
  var count = 0;
  events.forEach(function(e, i, arr) {
    if (e === event) {
      return;
    } else {
      if (e.start >= event.start & e.start <= event.end ||
          e.end >= event.start & e.end <= event.end) {
        count++;
      }
    }
  });
  return count;
};

console.log(countConcurrentEvents(events[0], events));

