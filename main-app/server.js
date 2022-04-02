const express = require('express');
const app = express();


app.get("/:num", (req, res) => {
    const fiboCheck = (num) => {
        let numTwo = 5 * (num * num) + 4
        let numThree = 5 * (num * num) - 4
        if(Math.sqrt(numTwo) % 1 === 0 || Math.sqrt(numThree) % 1 === 0){
            res.send("Very good. It is Fibonacci.")
        } else {
            res.send("I can tell this is not a fibonacci number.")
        }
    }
    fiboCheck(parseInt(req.params.num))
});

app.listen(3000, () => {
    console.log('eavesdropping on 3000')
});