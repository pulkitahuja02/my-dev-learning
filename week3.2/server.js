const express = require('express');
const cors = require('cors');           // ✅ Import cors
const app = express();                  // ✅ app create pehle karo

app.use(cors());                        // ✅ then use it
app.use(express.json());               // ✅ parse JSON

// POST API to add two numbers
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  const sum = num1 + num2;
  res.json({ sum });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
