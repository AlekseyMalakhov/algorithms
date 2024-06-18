/*
We are given an array asteroids of integers representing asteroids in a row.
For each asteroid, the absolute value represents its size, and the sign represents its direction 
(positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. 
If both are the same size, both will explode. Two asteroids moving in the same direction will never meet. 

Example 1:
Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

Example 2:
Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.

Example 3:
Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10. 

Constraints:
    2 <= asteroids.length <= 104
    -1000 <= asteroids[i] <= 1000
    asteroids[i] != 0
*/

var asteroidCollision = function (asteroids) {
    const stack = [];

    // for (let ast of asteroids) {
    for (let i = 0; i < asteroids.length; i++) {
        let ast = asteroids[i];
        let prev = stack[stack.length - 1];
        // console.log("prev:", prev);
        // console.log("ast:", ast);
        if (prev !== undefined) {
            //compare - if they can collide - collide them
            //if prev moves to the left (-) and current moves to the right(+) they will never collide
            //so they only collide if prev moves to the right (+) and current moves to the left (-)
            if (prev > 0 && ast < 0) {
                while (prev > 0 && ast < 0) {
                    if (stack.length > 0) {
                        //if prev and current ast have different signs it means they will collide
                        let absAst = Math.abs(ast);
                        let absPrev = Math.abs(prev);
                        if (absAst === absPrev) {
                            //if they are equal - they both will collide
                            // console.log("collide both");
                            //remove prev
                            //and stop while making ast as 0
                            stack.pop();
                            prev = 0;
                            ast = 0;
                        }
                        if (absAst > absPrev) {
                            //if ast > prev - remove prev, and keep the ast the same
                            // console.log("ast win");
                            stack.pop();
                            prev = stack[stack.length - 1];
                            // console.log("prev after win");
                            // console.log("prev:", prev);
                        } else {
                            //if prev > ast - stop the while loop and go to the next ast
                            // console.log("prev win");
                            ast = 0;
                        }
                    }
                }
                if (ast !== 0) {
                    // console.log("add ast to stack in the end");
                    // //console.log("it's the end");
                    stack.push(ast);
                }
            } else {
                //if they can not collide - add ast on stack
                // console.log("can not collide - add on stack");
                stack.push(ast);
            }
        } else {
            //if there is no previous - add current ast
            // console.log("no prev - just add");
            stack.push(ast);
        }
        // console.log("last ast = " + ast);
        // console.log("stack:", stack);
        // console.log("---------------------");
    }

    return stack;
};

// // console.log(asteroidCollision([5, 10, -5]));
// // console.log(asteroidCollision([8, -8]));
// // console.log(asteroidCollision([10, 2, -5]));
// // console.log(asteroidCollision([-2, -1, 1, 2]));
// //console.log(asteroidCollision([-2, -2, 1, -2]));

// //console.log(asteroidCollision([-2, 1, -2, -2]));
