/*
In the world of Dota2, there are two parties: the Radiant and the Dire.
The Dota2 senate consists of senators coming from two parties. Now the Senate wants to decide on a change in the Dota2 game. 
The voting for this change is a round-based procedure. In each round, each senator can exercise one of the two rights:

    Ban one senator's right: A senator can make another senator lose all his rights in this and all the following rounds.
    Announce the victory: If this senator found the senators who still have rights to vote are all from the same party,
     he can announce the victory and decide on the change in the game.

Given a string senate representing each senator's party belonging. The character 'R' and 'D' represent the Radiant party 
and the Dire party. Then if there are n senators, the size of the given string will be n.

The round-based procedure starts from the first senator to the last senator in the given order. This procedure will last 
until the end of voting. All the senators who have lost their rights will be skipped during the procedure.

Suppose every senator is smart enough and will play the best strategy for his own party. Predict which party will finally 
announce the victory and change the Dota2 game. The output should be "Radiant" or "Dire". 

Example 1:

Input: senate = "RD"
Output: "Radiant"
Explanation: 
The first senator comes from Radiant and he can just ban the next senator's right in round 1. 
And the second senator can't exercise any rights anymore since his right has been banned. 
And in round 2, the first senator can just announce the victory since he is the only guy in the senate who can vote.

Example 2:

Input: senate = "RDD"
Output: "Dire"
Explanation: 
The first senator comes from Radiant and he can just ban the next senator's right in round 1. 
And the second senator can't exercise any rights anymore since his right has been banned. 
And the third senator comes from Dire and he can ban the first senator's right in round 1. 
And in round 2, the third senator can just announce the victory since he is the only guy in the senate who can vote. 

Constraints:
    n == senate.length
    1 <= n <= 104
    senate[i] is either 'R' or 'D'.
*/

var predictPartyVictory = function (senate) {
    if (senate.length === 1) {
        if (senate[0] === "D") {
            return "Dire";
        }
        if (senate[0] === "R") {
            return "Radiant";
        }
    }
    //if there are 2 and more senators
    let queue = senate.split("");

    while (queue.length > 1) {
        // console.log("senate before loop:", queue);
        let senator = queue.shift();
        while (senator === null && queue.length > 0) {
            // console.log("searching senator");
            // console.log("queue:", queue);
            //keep searching for a normal senator, while removing null senators
            senator = queue.shift();
        }
        if (queue.length === 1) {
            //if after searching for a normal senator only one is left - his party is a winner
            if (senator === "R") {
                return "Radiant";
            }
            if (senator === "D") {
                return "Dire";
            }
        }

        //finally we found a normal senator and there are some another not nulls
        // console.log("we found normal senator");
        // console.log("senator:", senator);
        let i = 0;
        let next = queue[i];
        // console.log("next:", next);
        while ((next === senator || next === null) && i < queue.length - 1) {
            //let's check for a normal next senator whom our first senator can delete.
            //he must be from the opposite party and not null
            // console.log("we are searching for next:", next);
            i++;
            next = queue[i];
        }
        //after we passed the whole queue
        if (next === senator) {
            //it means all who left are from the senators party
            if (senator === "R") {
                return "Radiant";
            }
            if (senator === "D") {
                return "Dire";
            }
        }
        //if senator is from the another party - remove it from the next round
        // console.log("we found normal next = " + next);
        // console.log("remove " + next);
        queue[i] = null;
        //and put voted senator to the end of the queue
        // console.log("we put senator to the back of the queue");
        queue.push(senator);

        // console.log("senate after loop:", queue);
        // console.log("----------------------------------");
    }
    if (senate[0] === "D") {
        return "Dire";
    }
    if (senate[0] === "R") {
        return "Radiant";
    }
};

/*
function MyQueue(val) {
    this.stack1 = [];
    if (val) {
        this.stack1 = val;
    }
    this.length = this.stack1.length;
    this.stack2 = [];
}

MyQueue.prototype.enqueue = function (val) {
    this.stack1.push(val);
};

MyQueue.prototype.dequeue = function () {
    while (this.stack1.length > 0) {
        const current = this.stack1.pop();
        this.stack2.push(current);
    }
    return this.stack2.pop();
};

var predictPartyVictory = function (senate) {
    if (senate.length === 1) {
        if (senate[0] === "D") {
            return "Dire";
        }
        if (senate[0] === "R") {
            return "Radiant";
        }
    }
    //if there are 2 and more senators
    //let queue = senate.split("");
    let queue = new MyQueue(senate.split(""));

    //let asdfasd = 0;

    while (queue.length > 1) {
        // console.log("senate before loop:", queue);
        //let s = 0;
        //let senator = queue[s];
        let senator = queue.dequeue();
        while (senator === null && queue.length > 0) {
            // console.log("searching senator");
            // console.log("queue:", queue);
            //keep searching for a normal senator, while removing null senators
            senator = queue.dequeue();
        }

        if (queue.length === 1) {
            //if after searching for a normal senator only one is left - his party is a winner
            if (senator === "R") {
                return "Radiant";
            }
            if (senator === "D") {
                return "Dire";
            }
        }

        //finally we found a normal senator and there are some another not nulls
        // console.log("we found normal senator");
        // console.log("senator:", senator);
        // let i = 0;
        // let next = queue.stack1[i];
        let next = queue.dequeue();
        // console.log("next:", next);
        while (next === senator && queue.length > 0) {
            //let's check for a normal next senator whom our first senator can delete.
            //he must be from the opposite party
            // console.log("we are searching for next:", next);
            queue.enqueue
        }
        //after we passed the whole queue
        if (next === senator || next === undefined) {
            //it means all who left are from the senators party
            if (senator === "R") {
                return "Radiant";
            }
            if (senator === "D") {
                return "Dire";
            }
        }
        //if senator is from the another party - remove it from the next round
        // console.log("we found normal next = " + next);
        // console.log("remove " + next);
        queue[i] = null;
        //and put voted senator to the end of the queue
        // console.log("we put senator to the back of the queue");
        const tempSenator = senator;
        queue[s] = null;
        queue.push(tempSenator);

        // console.log("senate after loop:", queue);
        // console.log("----------------------------------");
        // asdfasd++;
        // if (asdfasd > 10) {
        //     return;
        // }
    }
    if (senate[0] === "D") {
        return "Dire";
    }
};
*/

/*
function MyQueue(val) {
    this.stack1 = [];
    if (val) {
        this.stack1 = val;
    }
    this.length = this.stack1.length;
    this.stack2 = [];
}

MyQueue.prototype.enqueue = function (val) {
    this.stack1.push(val);
};

MyQueue.prototype.dequeue = function () {
    while (this.stack1.length > 0) {
        const current = this.stack1.pop();
        this.stack2.push(current);
    }
    return this.stack2.pop();
};

const queue = new MyQueue();
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(10);
queue.enqueue(12);
queue.enqueue(16);
console.log(queue.dequeue());
console.log(queue.dequeue());

queue.enqueue(18);
queue.enqueue(24);
//console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
*/
