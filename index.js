// Load datejs
require('datejs');

// Function to combine users
function combineUsers(...args) {
  // Step 2: Initialize return object
  const combinedObject = {
    users: []
  };

  // Step 3 & 4: Loop and merge arrays using spread operator
  for (let arr of args) {
    combinedObject.users.push(...arr);
  }

  // Step 5: Add today's date
  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  // Step 7: Return object
  return combinedObject;
}

// Export the function (required for Jest tests)
module.exports = { combineUsers };



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};



