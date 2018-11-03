const plantNeedsWater = function(day) {
  if (day === 'Wednesday'){
    return true;
  } else {
    return false
  }
};
plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));

// I just learned about function expression and anonymous functions
