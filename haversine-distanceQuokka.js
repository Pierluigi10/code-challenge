import haversine from "haversine-distance";

const point1={ name: 'person 7', lat: 51.3513032, lon: 12.3802917 }
const point2 ={ name: 'person 8', lat: 51.3502116, lon: 12.3806796 }
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