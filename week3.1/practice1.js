const express = require('express');
const app = express();

// -------------------- Middleware --------------------
// This middleware runs when request comes to "/process"
// It reads a number from query param, multiplies it by 10
// and attaches the new value to the request object
app.use('/process', (req, res, next) => {
  const input = req.query.num;

  // Check if the input is a valid number
  const number = parseFloat(input);
  if (isNaN(number)) {
    // If not a number, forward the error to the global error handler
    return next(new Error("Invalid input: Please provide a number"));
  }

  // Multiply the number by 10 and store in req.processedNum
  req.processedNum = number * 10;

  // Move to the next handler (which is the route)
  next();
});

// -------------------- Route Handler --------------------
// This route runs after the middleware
// It again multiplies the already processed number by 10
// and sends the final result in response
app.get('/process', (req, res) => {
  const finalResult = req.processedNum * 10;
  res.send(`Final result after two multiplications: ${finalResult}`);
});

// -------------------- Global Error Handler --------------------
// This catches any error sent using next(error)
// Like if input is not a number, it shows proper error message
app.use((err, req, res, next) => {
  res.status(400).send(`Error: ${err.message}`);
});

// -------------------- Start the server --------------------
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
