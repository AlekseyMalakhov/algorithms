/*
Given a start date start, an end date end, and a positive integer step, return a generator object that yields dates in the range from start to end inclusive.
The value of step indicates the number of days between consecutive yielded values.
All yielded dates must be in the string format YYYY-MM-DD. 

Example 1:

Input: start = "2023-04-01", end = "2023-04-04", step = 1
Output: ["2023-04-01","2023-04-02","2023-04-03","2023-04-04"]
Explanation: 
const g = dateRangeGenerator(start, end, step);
g.next().value // '2023-04-01'
g.next().value // '2023-04-02'
g.next().value // '2023-04-03'
g.next().value // '2023-04-04'

Example 2:

Input: start = "2023-04-10", end = "2023-04-20", step = 3
Output: ["2023-04-10","2023-04-13","2023-04-16","2023-04-19"]
Explanation: 
const g = dateRangeGenerator(start, end, step);
g.next().value // '2023-04-10'
g.next().value // '2023-04-13'
g.next().value // '2023-04-16'
g.next().value // '2023-04-19'

Example 3:

Input: start = "2023-04-10", end = "2023-04-10", step = 1
Output: ["2023-04-10"]
Explanation: 
const g = dateRangeGenerator(start, end, step);
g.next().value // '2023-04-10' 

Constraints:
    new Date(start) <= new Date(end)
    start and end dates are in the string format YYYY-MM-DD
    0 <= The difference in days between the start date and the end date <= 1500
    1 <= step <= 1000
*/

var dateRangeGenerator = function* (start, end, step) {
    //1 hour = 3 600 000 milliseconds
    const startDate = new Date(start);
    const endDate = new Date(end);
    const stepMs = step * 24 * 3600000; //ms

    let current = startDate.valueOf();

    while (current <= endDate.valueOf()) {
        const currentDate = new Date(current);
        let date = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        if (date < 10) {
            date = "0" + date;
        }
        if (month < 10) {
            month = "0" + month;
        }
        const str = year + "-" + month + "-" + date;
        yield str;
        current = current + stepMs;
    }
};

const g = dateRangeGenerator("2023-04-01", "2023-04-04", 1);
console.log(g.next().value); // '2023-04-01'
console.log(g.next().value); // '2023-04-02'
console.log(g.next().value); // '2023-04-03'
console.log(g.next().value); // '2023-04-04'
console.log(g.next().done); // true
