// Practice Activity 1:

const computeArea = (width, height) => {
  return `The area of a rectangle with a width of ${width} and a height of ${height} is ${
    width * height
  } square units.`;
};

//  Pactice Activity 2:

const planetHasWater = (planet) => {
  if (planet.toLowerCase() === "earth" || planet.toLowerCase() === "mars") {
    return true;
  } else {
    return false;
  }
};

console.log(computeArea(10, 20));
console.log(planetHasWater("earth"));
