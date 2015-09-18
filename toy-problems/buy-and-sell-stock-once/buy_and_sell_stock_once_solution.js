// Design an algorithm that determines the maximum profit
// that could have been made by buying and selling a single
// share over a given day range, subject to the constraint
// that the buy and sell have to take place at the start
// of the day.

// The interviewee should first clarify the problem.

// This problem is concerned with the problem of optimally
// buying and selling a stock once.

// As an example, consider the following sequence of stock
// prices [310, 315, 275, 295, 260, 270, 290, 230, 255, 250]

// The maximum profit that can be made with one buy and one sell is 30.
// Buy at 260 and sell at 290. Note that 260 is not the lowest price
// nor is 290 the highest price.

// Write a program that takes an array denoting the daily stock
// price and returns the maximum profit that could be made by buying and then
// selling one share of that stock.

// Interviewer Notes
// Identifying the maximum and minimum is not enough since
// the minimum may appear after the maximum.
// The interviewee should focus on valid differences.

// Constraints
// Edge Cases
  // No profit any day?
  // Can we have 0 buys and sells?

var buyAndSellStockOnce = function(prices) {
  var lowest = prices[0];
  var maxProfit = prices[1] - prices[0];
  prices.forEach(function(price, i, arr) {
    if (price < lowest) {
      lowest = price;
    }
    if (price - lowest > maxProfit) {
      maxProfit = price - lowest;
    }
  });
  return maxProfit;
};

var prices = [310, 315, 275, 295, 260, 270, 290, 230, 255, 250];
var profit = buyAndSellStockOnce(prices);
console.log(profit);