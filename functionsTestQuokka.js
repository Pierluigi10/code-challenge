import haversine from "haversine-distance";

//First point in your haversine calculation
// const point1 = { name: "person 1", lat: 51.349932, lon: 12.345204 };
// const point1 = { name: "person 1", lat: 51.349932, lon: 12.345204 };
const point1 ={ name: 'person 3', lat: 51.3271525, lon: 12.3764917 }
const point2 = { name: 'person 5', lat: 51.3194, lon: 12.3834973 }
// const point1 = { lat: 6.1754, lng: 106.8272 };

//Second point in your haversine calculation
// const point2 = { name: "person 2", lat: 51.348051, lon: 12.346539 };

const haversine_m = haversine(point1, point2); //Results in meters (default)
const haversine_km = haversine_m / 1000; //Results in kilometers
const roundedString = haversine_km.toFixed(2);
const rounded = Number(roundedString);

console.log("distance (in meters): " + haversine_m + "m");
console.log("distance (in kilometers): " + haversine_km + "km");
console.log(typeof haversine_km);
console.log(roundedString);
console.log(typeof roundedString);
console.log(rounded);
console.log(typeof rounded);
/* 
const locations = [
  { name: "person 1", lat: 51.349932, lon: 12.345204 },
  { name: "person 2", lat: 51.348051, lon: 12.346539 },
//   { name: "person 3", lat: 51.34367, lon: 12.342404 },
//   { name: "person 4", lat: 51.346595, lon: 12.34629 },
//   { name: "person 5", lat: 51.349317, lon: 12.345876 },
//   { name: "person 6", lat: 51.344894, lon: 12.349283 },
//   { name: "person 7", lat: 51.346551, lon: 12.345775 },
//   { name: "person 8", lat: 51.348841, lon: 12.348714 },
//   { name: "person 9", lat: 51.349015, lon: 12.341089 },
//   { name: "person 10", lat: 51.342072, lon: 12.349309 },
]; */

// const getDistance = () => {
//   let result = "";
//   for (let i = 0; i < locations.length; i++) {
//    result = haversine(locations[i].map)
//   }

//   return result;
// };

function generateRandomNumber() {
  const minm = 100000;
  const maxm = 999999;
  return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
}
// let output = generateRandomNumber();

function generatePeople(num) {
  let people = [];
  for (let x = 0; x < num; x++) {
    people[x] = {
      name: `person ${x + 1}`,
      lat: `51.3${generateRandomNumber()}` * 1,
      lon: `12.3${generateRandomNumber()}` * 1,
    };
  }
  return people;
}
// console.log(generateCoordinates(10));

const locations = generatePeople(100);
console.log(locations);

// const getDistances = () => {
//   let result = [];

//   for (let i = 0; i < locations.length; i++) {
//     // combine with every other location
//     for (let j = i + 1; j < locations.length; j++) {
//       const haversine_m = haversine(locations[i], locations[j]);
//       const haversine_km = haversine_m / 1000; //Results in kilometers
//       const roundedString = haversine_km.toFixed(2);
//       const rounded = Number(roundedString);
//       result.push(rounded);
//     }
//   }
//   return result;
// };

// console.log(getDistances());

/* const filterLocations = () => {
  return getDistances().filter((distance) => distance <= 1);
};

console.log(filterLocations());

 */
const getFilteredLocations = () => {
    let result = [];

  for (let i = 0; i < locations.length; i++) {
    // combine with every other location
    for (let j = i + 1; j < locations.length; j++) {
      const haversine_m = haversine(locations[i], locations[j]);
      const haversine_km = haversine_m / 1000; //Results in kilometers
      const roundedString = haversine_km.toFixed(2);
      const rounded = Number(roundedString);
    //   if(rounded <= 1) result.push({first: locations[i], second: locations[j], distance: rounded});
      if(rounded <= 1) result.push(locations[i], locations[j]);  
        //   result.filter((distance) => distance <= 1)

    }
  }
  return [...new Set(result)];
} 

console.log(getFilteredLocations())


