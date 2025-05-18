// 1. PROMISE CREATION - Creating a new Promise object
const weatherCheck = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (like an API call) with setTimeout
    setTimeout(() => {
      // Generate random temperature between 0-49°C
      const temperature = Math.floor(Math.random() * 50);
      
      // 2. CONDITION-BASED RESOLUTION
      // Check temperature and resolve/reject accordingly
      if (temperature > 30) {
        // If hot (>30°C), fulfill the promise with success message
        resolve(`Hot! (${temperature}°C) ☀️`);
      } 
      else if (temperature < 10) {
        // If cold (<10°C), reject the promise with error message
        reject(`Cold! (${temperature}°C) ❄️`);
      }
      else {
        // Moderate temperature (10-30°C) - neither resolve nor reject called
        // This leaves the promise in pending state permanently
        console.log(`Moderate (${temperature}°C)`);
      }
    }, 1000); // Delay of 1 second to simulate async operation
  });
  
  // 3. PROMISE CONSUMPTION - Handling the promise results
  weatherCheck
    // .then() handles successful resolution (when resolve() was called)
    .then(result => {
      console.log("Success:", result); // Will show hot weather message
    })
    // .catch() handles rejections (when reject() was called)
    .catch(error => {
      console.log("Error:", error);    // Will show cold weather message
    })
    // .finally() runs regardless of resolution (always executes)
    .finally(() => {
      console.log("-- Weather check complete --"); 
    });
  
  // 4. DEMONSTRATING INITIAL STATE
  // This shows the promise starts in pending state immediately after creation
  console.log("Promise status when created:", weatherCheck);