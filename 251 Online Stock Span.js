/*
Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.

The span of the stock's price in one day is the maximum number of consecutive days (starting from that day and going backward) for which the 
stock price was less than or equal to the price of that day.

    For example, if the prices of the stock in the last four days is [7,2,1,2] and the price of the stock today is 2, then the span of today 
    is 4 because starting from today, the price of the stock was less than or equal 2 for 4 consecutive days.
    Also, if the prices of the stock in the last four days is [7,34,1,2] and the price of the stock today is 8, then the span of today is 3 
    because starting from today, the price of the stock was less than or equal 8 for 3 consecutive days.

Implement the StockSpanner class:
    StockSpanner() Initializes the object of the class.
    int next(int price) Returns the span of the stock's price given that today's price is price.

Example 1:

Input
["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]
Output
[null, 1, 1, 1, 2, 1, 4, 6]

Explanation
StockSpanner stockSpanner = new StockSpanner();
stockSpanner.next(100); // return 1
stockSpanner.next(80);  // return 1
stockSpanner.next(60);  // return 1
stockSpanner.next(70);  // return 2
stockSpanner.next(60);  // return 1
stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
stockSpanner.next(85);  // return 6 

Constraints:
    1 <= price <= 105
    At most 104 calls will be made to next.
*/

var StockSpanner = function () {
    this.stackOfMax = [];
    this.stackOfDays = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    if (price === undefined) {
        return null;
    }
    let days = 0;
    if (this.stackOfMax.length === 0) {
        this.stackOfMax.push(price);
        this.stackOfDays.push(1);
        days = 1;
    } else {
        let lastIndex = this.stackOfMax.length - 1;
        if (this.stackOfMax[lastIndex] > price) {
            this.stackOfMax.push(price);
            this.stackOfDays.push(1);
            days = 1;
        } else {
            while (this.stackOfMax[lastIndex] <= price && this.stackOfMax.length > 0) {
                this.stackOfMax.pop();
                const itemDays = this.stackOfDays.pop();
                days = days + itemDays;
                lastIndex = this.stackOfMax.length - 1;
            }
            days = days + 1;
            this.stackOfMax.push(price);
            this.stackOfDays.push(days);
        }
    }
    // console.log("stackOfMax:", this.stackOfMax);
    // console.log("stackOfDays:", this.stackOfDays);
    return days;
};

//Your StockSpanner object will be instantiated and called as such:
const input = [[], [28], [14], [28], [35], [46], [53], [66], [80], [87], [88]];
var obj = new StockSpanner();

for (let i = 0; i < input.length; i++) {
    console.log(obj.next(input[i][0]));
}
// console.log(obj.next(10));
// console.log(obj.next(8));
// console.log(obj.next(6));
// console.log(obj.next(20));
// console.log(obj.next(25));
// console.log(obj.next(15));
// console.log(obj.next(7));
// console.log(obj.next(5));
// console.log(obj.next(10));
// console.log(obj.next(24));
