## Calendar

### Given a list of events with start and end times, write a function that returns the maximum number of concurrent events.

### Example:

Event 1 stats at 1:00 and ends at 8:00
Event 2 starts at 2:00 and ends at 5:00
Event 3 starts at 3:00 and ends at 7:00
Event 4 starts at 8:00 and ends at 10:00

The maximum number of concurrent events in the above list is 3 - events 1, 2, and 3 all overlap. By the time event 4 starts, events 1 and 2 have ended.


    |---------------------------|
        |-----------|
            |---------------|   |-------|

    1---2---3---4---5---6---7---8---9---10



### Use case:

This problem would be relevant if building a calendar application and having to set the size of an event DOM element so that all concurrent events can be visualized without overlap.

