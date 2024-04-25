/*
Write code that enhances all date objects such that you can call the date.nextDay() 
method on any date object and it will return the next day in the format YYYY-MM-DD as a string.

Example 1:

Input: date = "2014-06-20"
Output: "2014-06-21"
Explanation: 
const date = new Date("2014-06-20");
date.nextDay(); // "2014-06-21"

Example 2:

Input: date = "2017-10-31"
Output: "2017-11-01"
Explanation: The day after 2017-10-31 is 2017-11-01.

Constraints:
    new Date(date) is a valid date object
*/

Date.prototype.nextDay = function () {
    //1 hour = 3 600 000 milliseconds
    const val = this.valueOf();
    const nextDayTimeStamp = val + 25 * 3600000;
    const nextDate = new Date(nextDayTimeStamp);
    let date = nextDate.getDate();
    let month = nextDate.getMonth() + 1;
    const year = nextDate.getFullYear();
    if (date < 10) {
        date = "0" + date;
    }
    if (month < 10) {
        month = "0" + month;
    }
    const str = year + "-" + month + "-" + date;
    return str;
};

const date = new Date("2014-12-31");
console.log(date.nextDay());
