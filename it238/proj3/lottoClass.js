// Lotto Class for Project 3
// Draw Lotto balls with replacement.
// Sort balls for output.
class Lotto {
    
    // Set number of all balls (<= 30) and number of
    // balls drawn (<= 6).
    constructor(numAllBalls, numBallsDrawn) {
        if (numAllBalls <= 30) {
            this.numAllBalls = numAllBalls;
        }
        else {
            this.numAllBalls = 30;
        }
        if (numBallsDrawn <= 6) {
            this.numBallsDrawn = numBallsDrawn;
        }
        else {
            this.numBallsDrawn = 6;
        }
        // console.log(this.numAllBalls + " " +
        //             this.numBallsDrawn);
    }

    selectBalls( ) {
        // Set of balls to select
        this.balls = [ ];
        // Balls actually selected without 
        // replacement
        this.drawnBalls = [ ];
    
        // Construct array containing balls 
        // from which to select.
        for(let i = 1; i <= this.numAllBalls; i++) {
            this.balls.push(i);
        }
    
        // Draw and sort balls to determine winning
        // Lotto numbers.
        for(let i = 0; i < this.numBallsDrawn; i++) {
            var randVal = Math.floor(Math.random( ) * 
                                    this.balls.length);
            var ballNum = this.balls[randVal];
            this.drawnBalls.push(parseInt(ballNum));
            this.balls.splice(randVal, 1);
        }

        // Less than function must be provided so that
        // balls are sorted in numeric order.  This 
        // function is like the Python __lt__ method.
        this.drawnBalls.sort((a, b) => a - b);
        // console.log(this.drawnBalls);
    }

    // Return ith selected ball.
    getBall(i) {
        if (1 <= i && i <= this.numBallsDrawn) {
            return this.drawnBalls[i - 1];
        }
        else {
            return null;
        }
    }

    // Return list of drawn balls as a string.
    toString( ) {
        var output = this.drawnBalls[0].valueOf( );
        for(let i = 1; i < this.numBallsDrawn; i++) {
            output += " " + this.drawnBalls[i];
        }
        return output;
    }
}
